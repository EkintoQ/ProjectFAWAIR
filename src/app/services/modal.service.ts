import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  visibility = new BehaviorSubject<number>(0)

  open(id: number){
    this.visibility.next(id)
  }

  close(){
    this.visibility.next(0)
  }
  constructor() {
  }
}
