import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //表单相关的模块才可以使用双向数据绑定

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { ChipModule } from "primeng/chip"; //小标签
import { AppRoutingModule } from './app-routing.module'; //路由模块

import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsComponent } from './components/forms/forms.component';
import { SearchComponent } from './components/search/search.component';

//引入并配置服务
import { StorageService } from './services/storage.service';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    HomeComponent,
    HeaderComponent,
    FormsComponent,
    SearchComponent
  ],
  imports: [ //引入模块
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    ChipModule,
    AppRoutingModule,
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
