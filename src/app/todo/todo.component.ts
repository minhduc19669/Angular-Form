import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  Contact: FormGroup;
  constructor() { }


  ngOnInit(): void {}


  SubmitForm(register: any) {
    console.log(register.form.value);
  }
}
