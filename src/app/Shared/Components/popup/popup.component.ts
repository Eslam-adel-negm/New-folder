import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  @Input() show_popup: boolean = false;
  @Input() popup_icon: string = "";
  @Input() popup_title: string = "";
  @Input() popup_description: string = "";
  @Input() popup_id: string = "";
  @Input() popup_btn_name: string = "";
  @Input() popup_close: boolean = false;
  @Output() close_popup = new EventEmitter<void>();
  @Output() popup_function = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onClose() {
    this.close_popup.emit(); //X btn call closePopup()
    // this.popup_function.emit(); //X btn call PopupStatusBtnFunction()
  }

  onButtonClick() {
    this.popup_function.emit();
  }

}
