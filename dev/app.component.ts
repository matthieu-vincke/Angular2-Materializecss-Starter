import {Component} from '@angular/core';
import {MainBodyComponent} from './components/mainBody.components';
import {HeaderComponent} from './components/header.component';
import {FooterComponent} from './components/footer.component';

@Component({
    selector: 'my-app',
    template: `
        <header></header>
        <mainBody></mainBody>
        <footer></footer>
    `,
    directives:[MainBodyComponent,HeaderComponent,FooterComponent]
})
export class AppComponent {

}
