import { Component, OnInit } from '@angular/core';
import { HttpClient } from  "@angular/common/http";
import Swal from 'sweetalert2/dist/sweetalert2.js';
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

  constructor(public http : HttpClient) { }

  ngOnInit() {
  }

  sendForm(){
    var form_data = new FormData();

    for ( var key in this.formModel ) {      
        form_data.append(key, this.formModel[key]);
    }
    this.http.post('mail2/magazine_mail.php', form_data).subscribe(res=>{
      if(res){
        Swal.fire('Dekont Gönderildi', 'Ekibimiz en kısa sürede sizle iletişime geçecektir!', 'success')
      }else{
        Swal.fire('Dekont Gönderilemesi', 'Daha sonra tekrar deneyin!', 'error')
      }
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

}
