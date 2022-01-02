import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'error-messages',
  templateUrl: './error-messages.component.html',
  styleUrls: ['./error-messages.component.css']
})
export class ErrorMessagesComponent {
  constructor(
      public forControl: string,
      public forValidator: string,
      public text: string
  ) { }
}

export const Errors = [
    new ErrorMessagesComponent('sellrent', 'required', 'Titel wird benötigt'),
    new ErrorMessagesComponent('sellrent', 'length', 'Titel zu kurz'),
    new ErrorMessagesComponent('rooms', 'required', 'Anzahl Räume wird benötigt')
];
