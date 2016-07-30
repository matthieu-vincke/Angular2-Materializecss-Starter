import {Component} from "@angular/core"
import {DatePicker} from "../materialize/components/datepicker";
import {Collapsible} from "../materialize/components/collapsible";
import {Dialogs} from "../materialize/components/dialogs";
import {Buttons} from "../materialize/components/buttons";
import {Dropdown} from "../materialize/components/dropdown";
import {Forms} from "../materialize/components/forms";
import {Tabs} from "../materialize/components/tabs";
import {Modal} from "../materialize/components/modal";
//import {ModelBindings} from "../materialize/components/model-bindings/model-bindings";

@Component({
  selector: 'mainBody',
  template: `
    <div class="section no-pad-bot" id="index-banner">
      <div class="container">
        <br><br>
        <h1 class="header center orange-text">Angular2 & Materialize css  Starter</h1>
        <div class="row center">
          <h5 class="header col s12 light">
          This has been built from the boiler plate for Angular2 from
          <a href="https://github.com/mschwarzmueller/angular-2-beta-boilerplate" target="_blank">mschwarzmueller</a>
           and from the project <a href="https://github.com/InfomediaLtd/angular2-materialize" target="_blank">Angular2 Materialize</a> <br/>
          This is a starter pack for Angular 2 application based on <a href="http://www.materializecss.com" target="_blank">MaterializeCss</a>.
          </h5>
        </div>
        <div class="row center">
          <a href="https://github.com/matthieu-vincke/Angular2-Materializecss-Starter.git" id="download-button" class="btn-large waves-effect waves-light orange">Get Started</a>
        </div>
        <br><br>

      </div>
    </div>


    <div class="container">
      <div class="section">

        <!--   Icon Section   -->
        <div class="row">
          <div class="col s12 m4">
            <div class="icon-block">
              <h2 class="center light-blue-text"><i class="material-icons">flash_on</i></h2>
              <h5 class="center">Speeds up development</h5>

              <p class="light">Clone the repo, npm install, npm start, you are all set! <br/> Karma is also integrated for your tests!</p>
            </div>
          </div>

          <div class="col s12 m4">
            <div class="icon-block">
              <h2 class="center light-blue-text"><i class="material-icons">group</i></h2>
              <h5 class="center">Angular2 rc4</h5>

              <p class="light">Based on the latest RC of Angular2.</p>
            </div>
          </div>

          <div class="col s12 m4">
            <div class="icon-block">
              <h2 class="center light-blue-text"><i class="material-icons">settings</i></h2>
              <h5 class="center">MaterializeCss</h5>

              <p class="light">The most beautifull implementation of Material Design</p>
            </div>
          </div>
        </div>

      </div>
      <br><br>

      <div class="section">
        <div class="row">
          <h3>Various components below</h3>
        </div>
        <div class="row">
          <datePicker [params]="[{format:'yyyy-mm-dd'}]"></datePicker>
        </div>
        <div class="row">
          <collapsible [elements]="collapsibleElements"></collapsible>
        </div>
        <div class="row">
          <dialogs></dialogs>
        </div>
        <div class="row">
          <buttons></buttons>
        </div>
        <div class="row">
          <dropdown [elements]="dropdownElements"></dropdown>
        </div>
        <div class="row">
          <forms></forms>
        </div>
        <div class="row">
          <tabs></tabs>
        </div>
        <div class="row">
          <modal [parameters]="modalParameters"></modal>
        </div>
        <div class="row">
        <i class = "fa fa-adjust fa-2x"></i>
        <i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
        <span class="sr-only">Loading...</span>

        <i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
        <span class="sr-only">Loading...</span>

        <i class="fa fa-refresh fa-spin fa-3x fa-fw"></i>
        <span class="sr-only">Loading...</span>

        <i class="fa fa-cog fa-spin fa-3x fa-fw"></i>
        <span class="sr-only">Loading...</span>

        <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
        <span class="sr-only">Loading...</span>
        </div>

      </div>
    </div>
    `,
    directives:[DatePicker,Collapsible,Dialogs,Buttons,Dropdown,Forms,Tabs,Modal]
})
export class MainBodyComponent {
  // For Icons: http://materializecss.com/icons.html
  collapsibleElements = [
    {icon:'filter_drama',header:'First element from Body',content:'This is the content of the first element'},
    {icon:'language',header:'Second element from Body',content:'This is the content of the second element'},
    {icon:'location_on',header:'Third element from Body',content:'This is the content of the third element'}
  ];
  dropdownElements = {
    id:"myId",
    header:"Drop me",
    data:[
      {link:'#!',label:'First element from Body'},
      {link:'#!',label:'Second element from Body'}
    ]
  };
  modalParameters = {
    id:'modalId',
    btnLabel:'Modal from body',
    header:'Modal header  from body',
    content:'Modal content from body',
    closeBtnLabel:'Close'
  }

}
