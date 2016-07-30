import {MaterializeDirective} from "../index";
import {Component,Input} from "@angular/core"

@Component({
    selector: "modal",
    directives: [MaterializeDirective],
    template: `
      <a materialize="leanModal" [materializeParams]="[{dismissible: false}]" class="waves-effect waves-light btn modal-trigger" [attr.href]="'#'+parameters.id">{{parameters.btnLabel}}</a>

      <div [id]="parameters.id" class="modal">
        <div class="modal-content">
          <h4>{{parameters.header}}</h4>
          <p>{{parameters.content}}</p>
        </div>
        <div class="modal-footer">
          <a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat">{{parameters.closeBtnLabel}}</a>
        </div>
      </div>
    `
})
export class Modal {
  @Input() parameters:{
    id:'defaultModalId',
    btnLabel:'Click for modal',
    header:'Modal header',
    content:'Modal content',
    closeBtnLabel:'Close'
  }
}
