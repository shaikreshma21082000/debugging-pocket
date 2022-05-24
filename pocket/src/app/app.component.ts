import { Component, OnInit, Output } from '@angular/core';
import { PocketService } from './pocket/pocket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  pocket: any = {};
  targetUrl: string = "";

  constructor(private pocketService: PocketService) {
  }

  ngOnInit() {
  }

  //below code does not need debugging
  add() {
    this.pocketService.scrape({ target: this.targetUrl }).subscribe((data) => {
      this.pocket[data.url] = data;
      this.targetUrl = '';
      console.log(data);
      console.log("pocket=================",this.pocket);
    })
  }

}
