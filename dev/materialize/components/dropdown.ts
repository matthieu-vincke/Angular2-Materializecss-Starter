import {MaterializeDirective} from "../index";
import {Component,Input} from "@angular/core"

@Component({
    selector: "dropdown",
    directives: [MaterializeDirective],
    template: `
     <!-- Dropdown Trigger -->
     <a materialize="dropdown" class='dropdown-button btn' href='#' [attr.data-activates]="id">{{elements.header}}</a>
     <!-- Dropdown Structure -->
     <ul [id]="id" class='dropdown-content'>
       <li *ngFor='let element of elements.data'>
        <a href="element.link">{{element.label}}</a>
       </li>
     </ul>
    `
})
export class Dropdown {
  @Input() elements  =
    {
      id:"defaultId",
      header:"Drop me please",
      data:[
        {link:'#!',label:'First element'},
        {link:'#!',label:'Second element'}
      ]
  };

  constructor(){
  }
}
