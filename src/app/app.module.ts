import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SectionComponent } from './section/section.component';
import { ButtonsComponent } from './section/buttons/buttons.component';
import { TimeDisplayComponent } from './section/time-display/time-display.component';

@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent, // ng generate component header
    FooterComponent, SectionComponent, ButtonsComponent, TimeDisplayComponent // ng g c footer, section
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
