import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() myArr!: string[];
  @Output() editEmmiter : EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {

  }

  addNewItem(value: string) {
    console.log('from child:',value)
    this.editEmmiter.emit(value);
  }

}
