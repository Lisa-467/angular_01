import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Demo } from './demo/demo.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { AlertComponent } from './alert/alert.component';
import { DataBindComponent } from './data-bind/data-bind.component';
import { TwoWayDataBindComponent } from './two-way-data-bind/two-way-data-bind.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Child1Component } from './child1/child1.component';
import { Parent1Component } from './parent1/parent1.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { TodoItemsComponent } from './todo-items/todo-items.component';
import { CourseComponent } from './course/course.component';
import { Parent2Component } from './parent2/parent2.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { SwitchComponent } from './switch/switch.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { CustomDirective } from './directives/custom.directive';
import { DropdownCountryComponent } from './dropdown-country/dropdown-country.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TdfFormComponent } from './tdf-form/tdf-form.component';
import { RegComComponent } from './reg-com/reg-com.component';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { BiodataComponent } from './biodata/biodata.component';
import {
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormFieldModule,
} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { RapidApiComponent } from './rapid-api/rapid-api.component';
import { ProjectValidationComponent } from './project-validation/project-validation.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { PipeconvertComponent } from './pipeconvert/pipeconvert.component';
import { FilterPipe } from './pipe/filter.pipe';
import { Todo1Component } from './todo1/todo1.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product-list/product-list.component';
import { TodoviewComponent } from './todoview/todoview.component';
import { GifListComponent } from './gif-list/gif-list.component';
import { GiphyyPipe } from './pipe/giphyy.pipe';
import { SharedModule } from './sharedmodule/shared.module';
import { OrderModule } from './ordermodule/order.module';
import { ChatComponent } from './chat/chat.component';
import { Chat1Component } from './chat/chat1/chat1.component';
import { Chat2Component } from './chat/chat2/chat2.component';
import { HeaderInterceptorService } from './interceptor/header-interceptor.service';
import { LifecyclehookComponent } from './lifecyclehook/lifecyclehook.component';
import { Addtocart2Component } from './addtocart2/addtocart2.component';
import { AdduserComponent } from './adduser/adduser.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from '../environments/environment';
import { RxjsComponent } from './rxjs/rxjs.component';

@NgModule({
  declarations: [
    AppComponent,
    Demo,

    HeaderComponent,
    BodyComponent,
    FooterComponent,
    AlertComponent,
    DataBindComponent,
    TwoWayDataBindComponent,
    ParentComponent,
    ChildComponent,
    Child1Component,
    Parent1Component,
    ColorPickerComponent,
    TodoItemsComponent,
    CourseComponent,
    Parent2Component,
    AddtocartComponent,
    SwitchComponent,
    CheckboxComponent,
    NgstyleComponent,
    NgclassComponent,
    DropdownCountryComponent,
    TdfFormComponent,

    RegComComponent,
    BiodataComponent,
    ReactiveformComponent,
    RegisterFormComponent,
    RapidApiComponent,
    ProjectValidationComponent,
    PipeconvertComponent,
    FilterPipe,
    Todo1Component,
    AboutusComponent,
    ContactusComponent,
    HomeComponent,
    PagenotfoundComponent,
    LoginComponent,
    ProductListComponent,
    TodoviewComponent,
    GifListComponent,
    GiphyyPipe,
    ChatComponent,
    Chat1Component,
    Chat2Component,
    LifecyclehookComponent,
    Addtocart2Component,
    AdduserComponent,
    RxjsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MatSlideToggleModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    HttpClientModule,
    OrderModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline' },
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
