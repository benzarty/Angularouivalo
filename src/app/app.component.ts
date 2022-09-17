import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Angularouivalo';

  


  constructor(private formbuider: FormBuilder) {

    
  }


  ngOnInit(): void {

  }


  
}
