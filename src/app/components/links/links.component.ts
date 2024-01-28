import { Component } from '@angular/core';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent {

  linksApp: any = [
    { label: 'Next Entretenimento', link: 'https://aftv.news/986056'},
    { label: 'Next Ultra', link: 'https://aftv.news/853528'}
  ]

  linksDownloader: any = [
    {label: 'Next Entretenimento', codigo: '986056'},
    {label: 'Next Ultra', codigo: '853528'},
    {label: 'XCIPTV', codigo: '63207'},
    {label: 'IPTV Smarters', codigo: '78522'}
  ]
}
