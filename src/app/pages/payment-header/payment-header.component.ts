import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-payment-header',
  templateUrl: './payment-header.component.html',
  styleUrls: ['./payment-header.component.css']
})
export class PaymentHeaderComponent implements OnInit {

  @Output() changePage = new EventEmitter<number>();
  selectedCard=1;

  constructor() { }
  setPage(val){
    this.selectedCard = val;
    this.changePage.emit(this.selectedCard);
  }
  ngOnInit() {
  }

}
