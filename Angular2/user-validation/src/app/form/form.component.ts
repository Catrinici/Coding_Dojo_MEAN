import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  user = {
    first_name:"", last_name: "", email:"", password:"", state: ""
  }


  constructor() { }

  ngOnInit() {
  }
  onSubmit(formData){
    console.log(formData);
  }

  
 

}
