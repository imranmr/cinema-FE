import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  private user = new BehaviorSubject('null');
  currentuser = this.user.asObservable();
  private messageSource = new BehaviorSubject('default message');
  currentmessage = this.messageSource.asObservable();
  constructor() { }

  changeMessage(message:any){
    this.messageSource.next(message);
  }

  updateUser(user:any){
    this.user.next(user);
  }

}
