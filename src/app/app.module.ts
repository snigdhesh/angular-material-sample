import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { FormComponent } from './form/form.component';
import { MenuComponent } from './menu/menu.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component';
import { DataTableComponent } from './data-table/data-table.component';
import { MatTableModule } from '@angular/material';
import { UserAccessDataTableComponent } from './user-access-data-table/user-access-data-table.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    MenuComponent,
    HeaderComponent,
    DataTableComponent,
    UserAccessDataTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    MatAutocompleteModule,
    MatToolbarModule,
    MatTableModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
