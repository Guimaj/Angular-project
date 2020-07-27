import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [NavbarComponent, SidebarComponent, FooterComponent, HomeComponent],
  imports: [
    CommonModule
  ],
  exports: [NavbarComponent, SidebarComponent, FooterComponent, HomeComponent]
})
export class TemplateModule { }
