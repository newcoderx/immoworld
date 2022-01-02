import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Errors } from "./error-messages";




@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html'
})
export class OfferComponent implements OnInit {
  @ViewChild('offerForm') offerForm: NgForm;
  errors: {[key: string]: string} = {};

  offer: any = {};

  ngOnInit() {
    this.offerForm.statusChanges?.subscribe(() => this.updateErrorMessages )
  }

  updateErrorMessages(){
    this.errors = {};
    for ( const message of Errors ) {
      const control = this.offerForm.form.get(message.forControl);
      if(
          control &&
          control.dirty &&
          control.invalid &&
          control.errors[message.forValidator] &&
          !this.errors[message.forControl]) {
        this.errors[message.forControl] = message.text;
      }

    }
  }

  submitOfferform(value: any) {
    console.log(value);
  }

}
