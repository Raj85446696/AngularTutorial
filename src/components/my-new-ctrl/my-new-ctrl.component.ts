import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-my-new-ctrl',
  imports: [],
  templateUrl: './my-new-ctrl.component.html',
  styleUrl: './my-new-ctrl.component.css', 
  styles:['h1{color:red;font-size:50px;text-decoration:underline;}']
})
export class MyNewCtrlComponent {
  @Input() count : number = 0 
}
