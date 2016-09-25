import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  moduleId: module.id,
  selector: 'root',
  template: `
             <h1>The following number is a parent component property</h1>
             <h1>{{parentProp}}</h1>
             <button (click)="childIncrement()">increment child only</button>
             <button (click)="parentIncrement()">increment parent (syncs child)</button>
             <br><br>
             <app-child-component #child [childProp]="parentProp"></app-child-component>
             `,
  styleUrls: ['app.component.css']
})
export class AppComponent {
  
  @ViewChild(ChildComponent) child;
  //NOTE passing the template variable (#child) works too,ie,:
  //@ViewChild('child') child; 
  parentProp = 567;
  
  parentIncrement() { this.parentProp++;}
  childIncrement() {console.log("yes");
    this.child.childIncrement()
  }
  

  
}
