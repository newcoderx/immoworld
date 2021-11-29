import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() buttonTextOffer: string;
  @Input() buttonTextSearch: string;

}

// import {Component} from '@angular/core';
//
// /**
//  * @title Basic buttons
//  */
// @Component({
//   selector: 'button-overview-example',
//   templateUrl: 'button-overview-example.html',
//   styleUrls: ['button-overview-example.css'],
// })
// export class ButtonOverviewExample {}
