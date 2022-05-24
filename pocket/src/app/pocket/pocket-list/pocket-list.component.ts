import { Component, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-pocket-list',
  templateUrl: './pocket-list.component.html',
  styleUrls: ['./pocket-list.component.css']
})
export class PocketListComponent implements OnInit {

@Input() pockets={};





constructor() {}
ngOnInit(): void { 
}

  

}
