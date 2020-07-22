import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ScrollSpyModule } from 'ngx-scrollspy';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { APIInterceptor } from '../config/config.service';
import { LocalStorageModule } from 'angular-2-local-storage';
import { AuthService } from '../auth/auth.service'
@NgModule({
  declarations: [HeaderComponent, FooterComponent, LayoutComponent],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    NgbModule,
    ScrollSpyModule.forRoot(),
    ScrollToModule.forRoot(),
    FormsModule,
    LocalStorageModule.forRoot({
      prefix: 'my-app',
      storageType: 'localStorage'
    }),
  ],
  providers: [{
    provide: [HTTP_INTERCEPTORS],
    useClass: APIInterceptor,
    multi: true,
  }
],
})
export class LayoutModule { }
