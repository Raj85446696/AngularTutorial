import { Component,OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnChanges, OnInit   {
  name = "Ritu Raj Verma."
  clickme(){
    alert("i am clicked")
  }
  ngOnInit() {
    console.log("Initialization of component / directive")
 }
  ngOnChanges() {
    console.log("Change detection")
 }

 ngDoCheck() {
  console.log("Custom change detection")
}

ngAfterContentInit() {
  console.log("Content initialization")
}

ngAfterContentChecked() {
  console.log("Checking changes in content")
}

ngAfterViewInit() {
  console.log("View initialization")
}

ngAfterViewChecked() {
  console.log("Checking changes in views")
}

ngOnDestroy() {
  console.log("Destruction of component / directive")
}
}
