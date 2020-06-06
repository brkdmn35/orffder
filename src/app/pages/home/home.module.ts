import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { ServicesComponent } from '../services/services.component';
import { AboutComponent } from '../about/about.component';
import { DescriptionComponent } from '../description/description.component';
import { PricingComponent } from '../pricing/pricing.component';
import { GetstartComponent } from '../getstart/getstart.component';
import { BlogComponent } from '../blog/blog.component';
import { FeatureComponent } from '../feature/feature.component';
import { ClientComponent } from '../client/client.component';
import { ContactComponent } from '../contact/contact.component';
import { TestiComponent } from '../testi/testi.component';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { ParticlesModule } from 'angular-particle';
import { HomeContentComponent } from '../home-content/home-content.component';
import { FooterComponent } from '../footer/footer.component';
import { EducationComponent } from '../education/education.component';
import { EducationHomeComponent } from '../education-home/education-home.component';
import { EducationContentComponent } from '../education-content/education-content.component';
import { CalendarComponent } from '../calendar/calendar.component';
import { PaymentHeaderComponent } from '../payment-header/payment-header.component';
import { PaymentComponent} from '../payment/payment.component'
import { FormsModule } from '@angular/forms';

import { Index1Component } from './index1/index1.component';
import { Index2Component } from './index2/index2.component';
import { Index3Component } from './index3/index3.component';
import { Index4Component } from './index4/index4.component';
import { Index5Component } from './index5/index5.component';
import { Index6Component } from './index6/index6.component';
import { Index7Component } from './index7/index7.component';
import { Index8Component } from './index8/index8.component';
import { Index9Component } from './index9/index9.component';
import { from } from 'rxjs';


@NgModule({
  declarations: [Index1Component, ServicesComponent, AboutComponent, DescriptionComponent, PricingComponent,EducationContentComponent,EducationComponent,EducationHomeComponent,
    GetstartComponent, BlogComponent, ContactComponent, TestiComponent,HomeContentComponent,FooterComponent,CalendarComponent, PaymentHeaderComponent,
    Index2Component, Index3Component, Index4Component,ClientComponent,FeatureComponent, Index5Component, Index6Component, PaymentComponent,
    Index7Component, Index8Component, Index9Component],
  imports: [
    CommonModule,
    FormsModule,
    NgxYoutubePlayerModule.forRoot(),
    HomeRoutingModule,
    ParticlesModule,
  ]
})
export class HomeModule { }

