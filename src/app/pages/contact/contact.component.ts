import { Component, OnInit } from '@angular/core'; 
import { HttpClient } from  "@angular/common/http";
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  formModel = {
    name: "",
    email: "",
    message: "",
    telephone: "",
  }
  constructor(public http : HttpClient) { }

  ngOnInit() {
  }

  sendForm(){
    var form_data = new FormData();
    for ( var key in this.formModel ) {
        form_data.append(key, this.formModel[key]);
    }
    this.http.post('mail2/contact_mail.php', form_data).subscribe(res=>{
      if(res){
        Swal.fire('Mesajınız Gönderildi', 'Ekibimiz en kısa sürede sizle iletişime geçecektir!', 'success')
      }else{
        Swal.fire('Mesajınız Gönderilemesi', 'Daha sonra tekrar deneyin!', 'error')
      }
    });
  }
}
