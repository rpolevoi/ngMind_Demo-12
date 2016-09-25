import { Component, Input} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-child-component',
  template: `<h1>The following number is a child component property bound to input from the parent component property</h1>
            <h1>{{childProp}}</h1>`,
  styleUrls: ['child.component.css']
})
export class ChildComponent {
  
  @Input() childProp;
 
  childIncrement() {this.childProp++;}
  
}
