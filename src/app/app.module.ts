import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule} from '@angular/forms';

import { HttpClient,HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavigationComponent } from './navigation/navigation.component';
import { AddDonarComponent } from './add-donar/add-donar.component';
import { SearchDonarComponent } from './search-donar/search-donar.component';
import { FetchoperatorComponent } from './fetchoperator/fetchoperator.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
  AddDonarComponent,
  SearchDonarComponent,
  FetchoperatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  HttpClientModule,
    AppRoutingModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
