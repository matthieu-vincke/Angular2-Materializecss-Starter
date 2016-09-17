import {Component,Input} from "@angular/core"

@Component({
    selector: "collapsible",
    template: `
        <ul materialize="collapsible" class="collapsible {{classType}}" data-collapsible="accordion">
          <li *ngFor='let element of elements'>
            <div class="collapsible-header"><i class="material-icons">{{element.icon}}</i>{{element.header}}</div>
            <div class="collapsible-body"><p>{{element.content}}</p></div>
          </li>
        </ul>
    `
})
export class Collapsible {
  @Input() elements  = [
    {icon:'filter_drama',header:'First element',content:'This is the content of the first element'},
    {icon:'place',header:'Second element',content:'This is the content of the second element'},
    {icon:'whatshot',header:'Third element',content:'This is the content of the third element'}
  ];
  public classType = 'popout'; // Can be empty
}
