import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-tutoriais',
  templateUrl: './tutoriais.component.html',
  styleUrls: ['./tutoriais.component.css']
})
export class TutoriaisComponent {

  videos: Array<any> = [
    { title: 'Instalar SmartOne Samsung Antiga', url:'https://www.youtube.com/embed/s4qrovcgRyQ'},
    { title: 'Instalar Aplicativo Downloader FireStick', url:'https://www.youtube.com/embed/DPnAeayun-w'}
  ]

  constructor( private sanitizer: DomSanitizer){ }

  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url) 
  }

}
