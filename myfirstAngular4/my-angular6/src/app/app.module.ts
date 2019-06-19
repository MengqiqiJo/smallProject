import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AccordionModule } from 'primeng/primeng';
import { PanelModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';

import { TreeTableModule, SharedModule } from 'primeng/primeng';
import { TableModule } from 'primeng/table';


import { DropdownModule } from 'primeng/primeng';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {RadioButtonModule} from 'primeng/radiobutton';
import {CheckboxModule} from 'primeng/checkbox';
import { MultiSelectModule } from 'primeng/primeng';
import {DialogModule} from 'primeng/dialog';

import { PaginatorModule } from 'primeng/primeng';

import { TabViewModule } from 'primeng/tabview';

import { ChartModule } from 'primeng/chart';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { TestComponent } from './test/test.component';


import {NgxEchartsModule} from 'ngx-echarts'

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AccordionModule,
    PanelModule,
    ButtonModule,
    RadioButtonModule,
    BrowserAnimationsModule,
    ChartModule,
    TreeTableModule,
    SharedModule,
    TableModule,
    DropdownModule,
    MultiSelectModule,
    PaginatorModule,
    TabViewModule,
    NgxEchartsModule,
    InputTextModule,
    PasswordModule,
    CheckboxModule,
    DialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

