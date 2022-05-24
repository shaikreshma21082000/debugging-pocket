import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pocket-card',
  templateUrl: './pocket-card.component.html',
  styleUrls: ['./pocket-card.component.css']
})

export class PocketCardComponent implements OnInit {

  @Input()
  metadata: any;

  constructor() { }

  ngOnInit(): void {
    console.log("meta=================",this.metadata);
    this.metadata = {
      target:this.metadata.url,
       image:this.metadata.image,
       title:this.metadata.title,
       description:this.metadata.description
     
    }
  }

}
