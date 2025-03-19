import { Component } from '@angular/core';
import {MyNewCtrlComponent} from '../components/my-new-ctrl/my-new-ctrl.component';
import { MainComponent } from '../components/main/main.component';
import { ParentComponent } from '../components/parent/parent.component';
@Component({
  selector: 'app-root',
  imports: [MyNewCtrlComponent,MainComponent,ParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  count = 90 ; 
}
