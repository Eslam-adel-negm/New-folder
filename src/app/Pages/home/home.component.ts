import { Component, OnInit, ViewChild } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Subscription, timer } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('collapseExpand', [
      state('collapsed', style({ height: '0px', opacity: 0, })),
      state('expanded', style({ height: '*', opacity: 1, })),
      transition('collapsed => expanded', [
        animate('300ms ease-in-out')
      ]),
      transition('expanded => collapsed', [
        animate('300ms ease-in-out')
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  isExpanded = false;
  previewUrl: string | null = null;
  latitude: number | null = null;
  longitude: number | null = null;
  error: string | null = null;

  /// otp
  showOtp: boolean = false;
  @ViewChild('ngOtpInput') ngOtpInputRef: any;
  countDown!: Subscription;
  counter: number = 60;
  tick = 1000;
  showResend: boolean = false
  otpLength: number = 6;
  isButtonDimmed: boolean = true;
  OtpCode: string = "";

  /// popupS
  showPopup: boolean = false;
  PopupIcon: string = "";
  PopupTitle: string = "";
  PopupDescription: string = "";
  PopupErrorIcon: string = "assets/images/error.png";
  PopupSuccessIcon: string = "assets/images/success.png";
  PopupConfirmIcon: string = "assets/images/confirm.png";
  PopupId: string = "";
  PopupStatusFunction?: () => void;
  PopupBtnName: string = "";
  PopupClose: boolean = false;

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      const file = input.files[0];

      const reader = new FileReader();
      reader.onload = () => {
        this.previewUrl = reader.result as string;
      };
      reader.readAsDataURL(file); // convert image to base64 for preview
    }
  }

  getLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
          this.error = null;
        },
        error => {
          this.error = 'Unable to retrieve location.';
          this.latitude = null;
          this.longitude = null;
        }
      );
    } else {
      this.error = 'Geolocation is not supported by this browser.';
    }
  }

  SelectedVoucher() {
    this.router.navigate(['/b2b'], { queryParamsHandling: 'preserve' });
  }
  ///otp
  onOtpChange(code: string) {
    if (code.length < this.otpLength) {
      this.isButtonDimmed = true;
      return;
    } else {
      this.isButtonDimmed = false;
      this.OtpCode = code;
      // console.log(this.OtpCode)
    }
  }

  clearOtp() {
    this.ngOtpInputRef.setValue('');
    this.ngOtpInputRef.focusTo(this.ngOtpInputRef.getBoxId(0));
  }

  resendOTP() {
    this.showResend = false;
    this.counter = 60;
    this.clearOtp();
    this.startTimer();
    // this.GetResend();
  }

  ProceedOTP() {
    this.CloseOtp();
    
    this.openPopup(
      "title",
      this.PopupSuccessIcon,
      "Desc",
      "DoneID",
      this.ToDashboard, //() => {}
      "Done",
      false);
  }

  OpenOtp() {
    this.closePopup();
    this.startTimer();
    this.showOtp = true;
    (<HTMLElement>document.querySelector('body')).style.overflow = 'hidden';
  }

  CloseOtp() {
    this.stopTimer();
    this.counter = 60;
    this.showOtp = false;
    (<HTMLElement>document.querySelector('body')).style.overflow = 'initial';
  }


  ///timer
  stopTimer() {
    this.countDown.unsubscribe();
  }

  startTimer() {
    this.countDown = timer(0, this.tick).subscribe(() => {
      --this.counter
      if (this.counter <= 0) {
        this.stopTimer();
        this.showResend = true
      }
    })
  }


  // how does work
  toggleCollapse() {
    this.isExpanded = !this.isExpanded;
  }

  /////// redirect to dashboard
  ToDashboard() {
    window.location.href = this.getResultURL({ errorCode: '101', screenName: 'dashboard', isSuccessful: false, errorDescription: 'invalid' });
  }

  getResultURL(params: any) {
    const queryString = new URLSearchParams(params);
    return `${environment.resultPage}?${queryString}`;
  }


  /////// Handel status popup
  openPopup(title: any, icon: string, desc: any, id: string, callback: () => void, btnName: string, close: boolean) {
    this.PopupTitle = title;
    this.PopupIcon = icon;
    this.PopupDescription = desc;
    this.PopupId = id;
    this.showPopup = true;
    this.PopupStatusFunction = callback;
    this.PopupBtnName = btnName;
    this.PopupClose = close;
    (<HTMLElement>document.querySelector('body')).style.overflow = 'hidden';
  }

  closePopup() {
    this.showPopup = false;
    (<HTMLElement>document.querySelector('body')).style.overflow = 'initial';
  }

  PopupStatusBtnFunction() {
    if (this.PopupStatusFunction) {
      this.PopupStatusFunction();
    }
  }
}
