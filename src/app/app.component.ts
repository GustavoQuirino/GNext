import { Component } from '@angular/core';

import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  logo: string = './assets/logo.png'

  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', icon: 'po-icon po-icon-home'},
    { label: 'Tutoriais', icon: 'po-icon po-icon-change'},
    { label: 'Links Download', icon: 'po-icon po-icon-link'}
  ]

}
