import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MaterializeDirective} from "./materialize/index";

import {MaterialInput} from "./materialize/components/model-bindings/input";
import {MaterialSelect} from "./materialize/components/model-bindings/select";

import { AppComponent }  from './app.component';

import { FormsModule }   from '@angular/forms';

import {HeaderComponent} from './components/header.component';
import {FooterComponent} from './components/footer.component';
import {MainBodyComponent} from './components/mainBody.component';

import {DatePicker} from "./materialize/components/datepicker";
import {Collapsible} from "./materialize/components/collapsible";
import {Dialogs} from "./materialize/components/dialogs";
import {Buttons} from "./materialize/components/buttons";
import {Dropdown} from "./materialize/components/dropdown";
import {Forms} from "./materialize/components/forms";
import {Tabs} from "./materialize/components/tabs";
import {Modal} from "./materialize/components/modal";

@NgModule({
  imports: [ BrowserModule,FormsModule ],
  declarations: [ AppComponent , DatePicker, Collapsible, Dialogs, Buttons, Dropdown, Forms, Tabs, Modal,
    HeaderComponent, FooterComponent, MainBodyComponent,
    MaterializeDirective, MaterialInput, MaterialSelect
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
