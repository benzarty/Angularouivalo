import { OUIVALOServiceService } from './../Services/ouivaloservice.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-send-message-test',
  templateUrl: './send-message-test.component.html',
  styleUrls: ['./send-message-test.component.css'],
})
export class SendMessageTestComponent implements OnInit {
  formformm: FormGroup;
  constructor(
    private formbuider: FormBuilder,
    private ouiservice: OUIVALOServiceService
  ) {}

  ngOnInit(): void {
    this.infoForm();
  }

  infoForm() {
    this.formformm = this.formbuider.group({
      id: ['', [Validators.required]],

      date: ['', [Validators.required]],
      urlRelais: ['', [Validators.required]],
      message: ['', [Validators.required]],
    });
  }
  send() {
    const Test = this.formformm.value;
    console.log(Test);

    this.ouiservice.PostTest(Test).subscribe((res) => {
      console.log('you the best');
    });
  }
}
