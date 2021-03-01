import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyWorker } from '../worker.model';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  routeApi = 'http://localhost:3000/workers';
  constructor(private http: HttpClient) {
  }

  getWorkers(): Promise<any> {
    return this.http.get(this.routeApi).toPromise();
  }

  postWorker(worker: MyWorker) {


    let date: Date = new Date();
    let age = (date.getFullYear() - (Number(worker.birth.substring(6))));
    
    console.log('ADDED ' + age);



    let body = { id: worker.id, name: worker.name, surname: worker.surname, middlename:worker.middlename, phone: worker.phone, 
      email: worker.email, birth:worker.birth, age:age, type: worker.type };
    return this.http.post(this.routeApi, body).toPromise();
  }

  deleteWorker(id: number) {
    this.http.delete(`${this.routeApi}/${id}`).subscribe(() => console.log("User deleted"));
  }

  saveWorker(worker: MyWorker) {

    let date: Date = new Date();
    let ch_age = (date.getFullYear() - (Number(worker.birth.substring(6))));
    
    console.log('CHANGED ' + ch_age);

    let body = { id: worker.id, name: worker.name, surname: worker.surname, middlename:worker.middlename, phone: worker.phone, 
      email: worker.email, birth:worker.birth, age:ch_age, type: worker.type };
    this.http.put(`${this.routeApi}/${body.id}`, body).subscribe(() => console.log("User updated"));
  }

}
