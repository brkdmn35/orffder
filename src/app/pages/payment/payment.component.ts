import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  selectedCard = 1;
  formModel={
    name: '',
    identity: '',
    eMail: '',
    telephone: '',
    message: '',
    receipt: undefined,
    letter: undefined,
    cv: undefined,
    courseType: undefined,
    participantType: undefined,
    lessonFile: undefined

  }
  constructor() { }

  ngOnInit() {
  }

  changePage(val){
    this.selectedCard = val;
  }

  sendForm(){
    console.log("model",this.formModel);
  }
  addFile(input, key){
    const file: File = input.files[0];
     this.getBase64(file,key);
    
  }

  getBase64(file,key) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload =() => {      
      this.formModel[key] =  reader.result;
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
 }

}
