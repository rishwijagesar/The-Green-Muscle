import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TGMRoutingModule } from './tgm-routing.module';
import { TGMComponent } from './tgm.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomepageComponent } from './page/homepage/homepage.component';
import { CardComponent } from './page/products/card/card.component';

@NgModule({
  declarations: [
    TGMComponent,
    NavigationComponent,
    FooterComponent,
    HomepageComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    TGMRoutingModule
  ],
  providers: [],
  bootstrap: [TGMComponent]
})
export class TGMModule { }
