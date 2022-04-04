import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotifyDashboardComponent } from './notify-dashboard/notify-dashboard.component';
import { CKEditorModule } from 'ckeditor4-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ApiService } from './api.service';
import { NotifyManageComponent } from './notify-manage/notify-manage.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  declarations: [					
    AppComponent,
      NotifyDashboardComponent,
      LoginComponent,
      SignupComponent,
      NotifyManageComponent,
   ],
  imports: [
    BrowserModule,  
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule, 
    CKEditorModule, CarouselModule.forRoot(), 
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [ApiService],
  bootstrap: [AppComponent] 
})
export class AppModule { }
