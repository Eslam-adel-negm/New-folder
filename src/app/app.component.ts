import { Component, OnInit, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { DataService } from './Shared/Services/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  language = 'en';
  params: any;

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
    private translateService: TranslateService,
    private dataService: DataService,
    private renderer: Renderer2,
    private router: Router,

  ) {
    this.params = new URLSearchParams(window.location.search);
    this.language = this.params.get('language');
    this.translateService.setDefaultLang('en'); // set default localization lang
    this.translateService.use(this.language);
    this.switchLanguage(this.language);
  }

  ngOnInit(): void {
    this.router.navigate([''], {
      queryParams: {
        dial: this.params.get('dial'),
        language: this.params.get('language'),
        token: this.params.get('token'),
      },
    });
  }

  switchLanguage(lang: any) {
    if (lang == 'ar') {
      (<HTMLElement>document.querySelector('html')).setAttribute('dir', 'rtl');
    } else {
      (<HTMLElement>document.querySelector('html')).setAttribute('dir', 'ltr');
    }
    localStorage.setItem('lang', lang);
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

  // redirect to dashboard

  ToDashboard() {
    window.location.href = this.getResultURL({ errorCode: '101', screenName: 'dashboard', isSuccessful: false, errorDescription: 'invalid' });
  }

  getResultURL(params: any) {
    const queryString = new URLSearchParams(params);
    return `${environment.resultPage}?${queryString}`;
  }

}
