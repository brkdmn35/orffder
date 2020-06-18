import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {
  formModel = {
    profile : null,
    receipt : null,
    name: null,
    identityNumber: null,
    motherName: null,
    fatherName: null,
    socialAccount: null,
    bloodGroup: null,
    telNo: null,
    identitySerialNumber: null,
    job: null,
    expireDate: null,
    homeAddress: null,
    jobAddress: null,
    graduationSchool: null,
    education: null,
    city: null,
    district: null,
    village: null,
    volumeNo: null,
    familyNo: null,
    itemNo: null
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
