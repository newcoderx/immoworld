import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { Errors } from './error-messages';




@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html'
})
export class OfferComponent {
  errors: { [key: string]: string } = {};

  offerForm = new FormGroup({
    sellrent: new FormControl(),
    type: new FormControl(),
    rooms: new FormControl(),
    sizeLiving: new FormControl(),
    sizeOutside: new FormControl(),
    price: new FormControl(),
    freeAt: new FormControl(),
    adres: new FormGroup({
      street: new FormControl(),
      plz: new FormControl(),
      city: new FormControl()
    }),
    pictures: new FormGroup({
      pictureTitle: new FormControl(),
      file: new FormControl()
    }),
    email: new FormArray([
      new FormControl(),
      new FormControl(),
      new FormControl()
    ]),
  })


  // updateErrorMessages(){
  //   this.errors = {};
  //   for ( const message of Errors ) {
  //     const control = this.offerForm.form.get(message.forControl);
  //     if(
  //         control &&
  //         control.dirty &&
  //         control.invalid &&
  //         control.errors && control.errors[message.forValidator] &&
  //         !this.errors[message.forControl]) {
  //       this.errors[message.forControl] = message.text;
  //     }
  //
  //   }
  //   console.log(this.errors);
  // }

  submitOfferform() {
    console.log(this.offerForm);
  }

}
