import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  arr:string[]=[]
  form!: FormGroup
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      'my_value': new FormControl(null, {validators: [Validators.required]})
   });

  }
 
 
  add(){

    if (this.form.invalid) return;
    this.arr.push(this.form.value.my_value)
  }

  addItem(newItem: string) {
    console.log("from parent",newItem)
  }

}
