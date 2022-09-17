import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { donnees } from 'src/models/donnees';

@Injectable({
  providedIn: 'root',
})
export class OUIVALOServiceService {
  cle: string = 'CLE-TEST-IOT';
  Url: string = 'https://script.google.com/macros/s/AKfycby-TJmFFUFTfiNUbMoSIZx8LVtiskQ-bUt4xO6hmrU0XQpJS8IPUBow/exec';

  constructor(private myhttp: HttpClient) {}

  PostTest(eve: donnees): Observable<any> {
    // let bodyData = {
    //   cle: 'CLE-TEST-IOT',
    //   donnees: {
    //     id: 'zeze',
    //     date: 'zeze',
    //     urlReliad: 'zeze',
    //     message: 'zezeze',
    //   },
    // };
    return this.myhttp.post(
      this.Url,
      { cle: this.cle,donnees: eve },
      this.httpOptions
    );
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
}
