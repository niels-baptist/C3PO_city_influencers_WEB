import { Component,Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() searchcriteria = new EventEmitter<String>();

  searchword: String | undefined;

  searchThis() {
      this.searchcriteria.emit(this.searchword)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
