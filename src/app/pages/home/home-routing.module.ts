import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Index1Component } from './index1/index1.component';
import { Index2Component } from './index2/index2.component';
import { Index3Component } from './index3/index3.component';
import { Index4Component } from './index4/index4.component';
import { Index5Component } from './index5/index5.component';
import { Index6Component } from './index6/index6.component';
import { Index7Component } from './index7/index7.component';
import { Index8Component } from './index8/index8.component';
import { Index9Component } from './index9/index9.component';
import { ContactComponent } from '../contact/contact.component';
import { EducationComponent } from '../education/education.component'
import { CalendarComponent } from '../calendar/calendar.component'
import { PaymentComponent } from '../payment/payment.component'
import { AboutusComponent } from '../aboutus/aboutus.component';
import { MembershipComponent } from '../membership/membership.component';

const routes: Routes = [
  { path: '', component: Index1Component },
  { path: 'contact', component: ContactComponent},
  { path: 'education', component: EducationComponent},
  { path: 'calendar', component: CalendarComponent},
  { path: 'payment', component: PaymentComponent},
  { path: 'about', component: AboutusComponent},
  { path: 'membership', component: MembershipComponent},
  { path: 'index1', component: Index1Component },
  { path: 'index2', component: Index2Component },
  { path: 'index3', component: Index3Component },
  { path: 'index4', component: Index4Component },
  { path: 'index5', component: Index5Component },
  { path: 'index6', component: Index6Component },
  { path: 'index7', component: Index7Component },
  { path: 'index8', component: Index8Component },
  { path: 'index9', component: Index9Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HomeRoutingModule { }
