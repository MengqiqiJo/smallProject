import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PrimengTableComponent } from './primeng-table/primeng-table.component';
import { PrimengChartjsComponent } from './primeng-chartjs/primeng-chartjs.component';
import { HcpTemplateComponent } from './hcp-template/hcp-template.component';

import { ButtonModule } from 'primeng/button';

import {TreeTableModule} from 'primeng/treetable';
import { TableModule } from 'primeng/table';


import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';

import {RadioButtonModule} from 'primeng/radiobutton';
import {CheckboxModule} from 'primeng/checkbox';
import {MultiSelectModule} from 'primeng/multiselect';
import {DialogModule} from 'primeng/dialog';

import {PaginatorModule} from 'primeng/paginator';

import {TabViewModule} from 'primeng/tabview';

import {ChartModule} from 'primeng/chart';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { NGFormComponent } from './ngform/ngform.component';
import { EditPasswordComponent } from './edit-password/edit-password.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimengTableComponent,
    PrimengChartjsComponent,
    HcpTemplateComponent,
    NGFormComponent,
    EditPasswordComponent,
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    TreeTableModule,
    TableModule,
    DropdownModule,
    InputTextModule,
    PasswordModule,
    RadioButtonModule,
    CheckboxModule,
    MultiSelectModule,
    DialogModule,
    PaginatorModule,
    TabViewModule,
    ChartModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
