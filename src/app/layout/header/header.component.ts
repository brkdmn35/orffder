import { Component, Injectable, AfterViewInit, AfterViewChecked, ViewChild, TemplateRef } from '@angular/core';
import { ScrollSpyService } from 'ngx-scrollspy';
import { Router, ActivationStart, ResolveStart } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/auth/auth.service';
import { LocalStorageService } from 'angular-2-local-storage';

@Injectable()
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements AfterViewInit, AfterViewChecked {
  sections = {};
  currentUrl = "";
  name: string;
  password: string;
  error= false;
  message= '';
  
  constructor(private scrollSpyService: ScrollSpyService, private router: Router,private modalService: NgbModal, public http: HttpClient,
     public authService: AuthService, public localStorage: LocalStorageService) { }
  
  ngOnInit() {

    window.onscroll = function () 
    { 
       myFunction()
    };
    var navbar1 = document.getElementById("navbar1");
    function myFunction() {
      if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
          navbar1.style.backgroundColor = "#272a33";
          navbar1.style.padding = "10px";
      }
      else {
        
          navbar1.style.backgroundColor = "";
          navbar1.style.padding = "20px";
      }
    }
    this.clearMenu();

    this.router.events.subscribe((event) => {
        let currentUrl;

        if(event instanceof ResolveStart) {
          console.log("event", event);
          currentUrl = event.url || this.currentUrl;
        }
        
        if(currentUrl){
          this.currentUrl = currentUrl;
        }
        this.clearMenu();
    });

    }

  toggleMenu() {
    document.getElementById('navbarCollapse2').classList.toggle('show');
    document.getElementById('menu_button').classList.toggle('collapsed');
  }

  ngAfterViewInit() {
    
    let sections: NodeListOf<Element> = document.querySelectorAll(".section");
    let self = this;

    Array.prototype.forEach.call(sections, function (e) {
      self.sections[e.id] = parseFloat(e.offsetTop);
    });
    
    
  }

  ngAfterViewChecked() {
    this.currentUrl = this.router.url;
    this.clearMenu();
  }

  clearMenu() {
      var color = 'black';
      this.isBlack() ? color= 'white' : '';
      document.querySelector('a[data="id_home"]').setAttribute('style', 'color:'+color+'!important');
      document.querySelector('a[data="id_education"]').setAttribute('style', 'color:'+color+'!important');
      document.querySelector('a[data="id_about"]').setAttribute('style', 'color:'+color+'!important');
      document.querySelector('a[data="id_magazine"]').setAttribute('style', 'color:'+color+'!important');
      document.querySelector('a[data="id_calendar"]').setAttribute('style', 'color:'+color+'!important');
      document.querySelector('a[data="id_membership"]').setAttribute('style', 'color:'+color+'!important');
      document.querySelector('a[data="id_contact"]').setAttribute('style', 'color:'+color+'!important');
      if(this.router.url == "/index1" || this.router.url == "/" )
      {
        document.querySelector('a[data="id_home"]').setAttribute('style', 'color:#F18918 !important');  
      }
      else if(this.router.url == "/contact")
      {
        document.querySelector('a[data="id_contact"]').setAttribute('style', 'color:#F18918 !important');  
      }
      else if(this.router.url == "/education")
      {
        document.querySelector('a[data="id_education"]').setAttribute('style', 'color:#F18918 !important');  
      }
      else if(this.router.url == "/about")
      {
        document.querySelector('a[data="id_about"]').setAttribute('style', 'color:#F18918 !important');  
      }
      else if(this.router.url == "/membership" || this.router.url == "/sign")
      {
        document.querySelector('a[data="id_membership"]').setAttribute('style', 'color:#F18918 !important');  
      }
      else if(this.router.url == "/calendar")
      {
        document.querySelector('a[data="id_calendar"]').setAttribute('style', 'color:#F18918 !important');  
      }
      else if(this.router.url == "/magazine")
      {
        document.querySelector('a[data="id_magazine"]').setAttribute('style', 'color:#F18918 !important');  
      }
  }
  isBlack(){
    return this.currentUrl == '/education' || this.currentUrl == '/about' || this.currentUrl == '/membership' || this.currentUrl == 'education' || this.currentUrl == 'about' || this.currentUrl == 'membership';
  }
  checkColor(){
    return true;
  }

  openVerticallyCentered(content) {
    if(this.authService.isLoggedIn){
      this.authService.logout();
    }else{
      this.modalService.open(content, { centered: true });
    }
  }

  login(){
    this.error = false;
    this.http.get<any>('token/token.php?name='+this.name + '&pass=' + this.password).subscribe(
      res=>{
        if(res.status){
          var user= {name:res.name};
          this.localStorage.set('token',res.token);
          this.localStorage.set('user',user)
          this.authService.setSession(res.token,user);
          this.modalService.dismissAll();
        }else{
          this.error= true;
          this.message= res.message;
        }
      },
    );   
  }

}



