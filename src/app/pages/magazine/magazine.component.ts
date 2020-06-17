import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-magazine',
  templateUrl: './magazine.component.html',
  styleUrls: ['./magazine.component.css']
})
export class MagazineComponent implements OnInit {

  step = 1;
  formModel = {
    "receipt" : null
  };

  constructor() { }

  ngOnInit() {
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
