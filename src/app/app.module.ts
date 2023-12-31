import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { UsComponent } from './components/us/us.component';
import {RouterModule, Routes} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";
import { CarouselComponent } from './carousel/carousel.component';
import { ShampooModalComponent } from './components/home/shampoo-modal/shampoo-modal.component';
import {FlowbiteModule} from "flowbite-angular";
import { AcondModalComponent } from './components/home/acond-modal/acond-modal.component';
import { CremaModalComponent } from './components/home/crema-modal/crema-modal.component';
import { FacebookSocialComponent } from './components/footer/facebook-social/facebook-social.component';
import { InstagramSocialComponent } from './components/footer/instagram-social/instagram-social.component';
import { WhatsappSocialComponent } from './components/footer/whatsapp-social/whatsapp-social.component';
import { TiktokSocialComponent } from './components/footer/tiktok-social/tiktok-social.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'us', component: UsComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    FooterComponent,
    UsComponent,
    CarouselComponent,
    ShampooModalComponent,
    AcondModalComponent,
    CremaModalComponent,
    FacebookSocialComponent,
    InstagramSocialComponent,
    WhatsappSocialComponent,
    TiktokSocialComponent
  ],
  imports: [
    BrowserModule,
    FlowbiteModule,
    RouterModule.forRoot(routes),
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
