import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  valueServer: number = 100
  valuePannel: number = 100
  statusServer: string = 'Operacional'
  statusPannel: string = 'Operacional'

}
