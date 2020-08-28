import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontComponent } from './front/front.component';
import { AppComponent } from './app/app.component';
import { HeaderComponent } from './app/header/header.component';
import { FooterComponent } from './app/footer/footer.component';
import { SidebarComponent } from './app/sidebar/sidebar.component';
import { FrontHeaderComponent } from './front/front-header/front-header.component';
import { FrontFooterComponent } from './front/front-footer/front-footer.component';
import { RouterModule } from '@angular/router';
import { PartialsModule } from '../partials/partials.module';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [
    FrontComponent, 
    AppComponent, 
    HeaderComponent, 
    FooterComponent, 
    SidebarComponent, 
    FrontHeaderComponent, 
    FrontFooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PartialsModule,
		CoreModule,
  ],
  exports: [
    FrontComponent, 
    AppComponent, 
    HeaderComponent, 
    FooterComponent, 
    SidebarComponent, 
    FrontHeaderComponent, 
    FrontFooterComponent
  ],
})
export class ThemeModule { }
