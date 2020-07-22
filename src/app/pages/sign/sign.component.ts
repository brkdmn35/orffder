import { Component, OnInit } from '@angular/core';
import { HttpClient } from  "@angular/common/http";
import Swal from 'sweetalert2/dist/sweetalert2.js';
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
  constructor(public http : HttpClient) { }

  ngOnInit() {
  }

  sendForm(){
    if(this.formModel.receipt == null || this.formModel.profile == null){
      Swal.fire('Başvurunuz Gönderilemedi', 'Lütfen gerekli dosyaları yükleyiniz!', 'error');
        return;
    }
    var form_data = new FormData();
    for ( var key in this.formModel ) {
        form_data.append(key, this.formModel[key]);
    }
    this.http.post('mail2/sign_mail.php', form_data).subscribe(res=>{
      console.log(res);
      
      if(res){
        Swal.fire('Başvurunuz Gönderildi', 'Ekibimiz en kısa sürede sizle iletişime geçecektir!', 'success')
      }else{
        Swal.fire('Başvurunuz Gönderilemedi', 'Daha sonra tekrar deneyin!', 'error')
      }
    },err=>{
      Swal.fire('Başvurunuz Gönderildi', 'Ekibimiz en kısa sürede sizle iletişime geçecektir!', 'success')
    });  
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

 openTuzuk(){
  var win = window.open('/assets/pdf/tüzük.pdf', '_blank');
  win.focus();
}

}
