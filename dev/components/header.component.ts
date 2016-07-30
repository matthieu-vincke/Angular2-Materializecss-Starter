import {Component} from "@angular/core"
import {MaterializeDirective} from "../materialize/index";

@Component({
  selector: 'header',
  directives: [MaterializeDirective],
  template:
  `
  <nav class="light-blue lighten-1" role="navigation">
    <div class="nav-wrapper">
      <a href="#!" class="brand-logo">Logo</a>
      <a materialize="sideNav" href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
      <ul class="right hide-on-med-and-down">
        <li><a href="#">A</a></li>
        <li><a href="#">B</a></li>
        <li><a href="#">C</a></li>
        <li><a href="#">D</a></li>
      </ul>
      <ul class="side-nav" id="mobile-demo">
        <li><a href="#">A mobile</a></li>
        <li><a href="#">B mobile</a></li>
        <li><a href="#">C mobile</a></li>
        <li><a href="#">D mobile</a></li>
      </ul>
    </div>
  </nav>
  `
})
export class HeaderComponent {
}
