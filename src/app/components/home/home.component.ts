import { Component, OnInit } from '@angular/core';
import { PoGaugeRanges } from '@po-ui/ng-components';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  valueServer: number = 100
  statusServer: string = 'Operacional'


  isViewServer: boolean = false
  isLoading: boolean = false

  ranges: PoGaugeRanges[] = [
    { color: 'red',    from: 0,   to: 34 , label: 'offline'    },
    { color: 'orange', from: 35,  to: 70 , label: 'instável'   },
    { color: 'green',  from: 71 , to: 100, label: 'operacional'}
  ]

  constructor (){}

  ngOnInit(): void {
    this.isViewServer = false
  }

  verificaServer(){
    this.isLoading = true
    this.isViewServer = true
    setTimeout(()=>{     
      this.isLoading = false
    },1500)
  }

}
