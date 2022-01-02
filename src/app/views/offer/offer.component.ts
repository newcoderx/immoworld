import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ErrorMessagesComponent } from "../../shared/error-messages/error-messages.component";


@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styles: [
  ]
})
export class OfferComponent {
  @ViewChild('offerForm') offerForm: NgForm;
  errors: {[key: string]: string} = {};

  offer: any = {};


  submitOfferform(value: any) {
    console.log(value);
  }

}
