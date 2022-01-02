export class ErrorMessages {
  constructor(
      public forControl: string,
      public forValidator: string,
      public text: string
  ) { }
}

export const Errors = [
    new ErrorMessages('sellrent', 'required', 'Titel wird benötigt'),
    new ErrorMessages('sellrent', 'length', 'Titel zu kurz'),
    new ErrorMessages('rooms', 'required', 'Anzahl Räume wird benötigt')
];
