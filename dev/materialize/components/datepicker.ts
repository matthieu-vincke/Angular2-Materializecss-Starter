import {MaterializeDirective} from "../index";
import {Component, Input} from "@angular/core"

@Component({
    selector: "datePicker",
    directives: [MaterializeDirective],
    template: `
      <form materialize class="col s12">
        <div class="row">
          <div class="col s6">
            <label for="birthdate">Birthdate</label>
            <input id="birthdate"
                   materialize="pickadate"
                   [materializeParams]="params"
                   type="text" />
          </div>
        </div>
      </form>
    `
})
export class DatePicker {
  @Input() params = [{selectMonths: true, selectYears: 15, format:"yyyy/mm/dd"}];
  constructor(){
  }
}
