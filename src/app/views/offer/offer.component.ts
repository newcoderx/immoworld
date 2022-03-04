import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { Errors } from './error-messages';




@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html'
})
export class OfferComponent implements OnInit {
  errors: { [key: string]: string } = {};
 

  offerForm = new FormGroup({
    sellrent: new FormControl(null, [Validators.required, Validators.minLength(3)]),
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
      new FormControl('tesst@web.de', Validators.email),
      new FormControl(),
      new FormControl()
    ]),
  })

  ngOnInit() {
    this.offerForm.controls['price'].setValidators(Validators.required);
  }
  
  reset(){
    this.offerForm.reset();
  }


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

  submitOfferform(value: any) {
    console.log(value);
    console.log(this.offerForm);
  }

}
