import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { HttpClient } from  "@angular/common/http";
import Swal from 'sweetalert2/dist/sweetalert2.js';
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
  constructor(public http : HttpClient) { }

  ngOnInit() {
  }

  changePage(val){
    this.selectedCard = val;
  }

  sendForm(){
    var email: string;
    if(this.formModel.receipt == undefined){
      this.showError('Lütfen gerekli alanları doldurunuz!');
      return;
    }
    if(this.selectedCard == 1){
      email = "zincir";
    }else if(this.selectedCard == 2){
      email = "practicum";
    }else if(this.selectedCard == 3){
      if(this.formModel.courseType != "ORFF-SCHULWEK DERS MODELLERİ" && this.formModel.courseType != "DİSİPLİNLERARASI İLAVE KURSLAR"){
        this.showError('Lütfen gerekli alanları doldurunuz!');
        return;
      }
      email = "model";
    }else if(this.selectedCard == 4){
      email = "sertifika";
    }else if(this.selectedCard == 5){
      if(this.formModel.participantType != "KATILIMCI" && this.formModel.participantType != "PAYLAŞIMCI ÖĞRETMEN"){
        this.showError('Lütfen gerekli alanları doldurunuz!');
        return;      }
      if(this.formModel.lessonFile == undefined){
        this.showError('Lütfen gerekli alanları doldurunuz!');
        return;
      }
      email = "share";
    }
    console.log(this.formModel);
    var form_data = new FormData();
    for ( var key in this.formModel ) {
        form_data.append(key, this.formModel[key]);
    }
    this.http.post('mail2/'+email+'_mail.php', form_data).subscribe(res=>{
      console.log(res);
      
      if(res){
        this.showSuccess();
      }else{
        this.showError('Lütfen daha sonra tekrara deneyiniz!');
      }
    },err=>{
      this.showSuccess();
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

 showSuccess(){
  Swal.fire('Başvurunuz Gönderildi', 'Ekibimiz en kısa sürede sizle iletişime geçecektir!', 'success')
 }

 showError(text){
  Swal.fire('Başvurunuz Gönderilemedi', text, 'error')
 }

}
