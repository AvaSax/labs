import { Component, OnInit } from '@angular/core';
import { MyDet } from './shared/det.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'LAB11';
  dets: MyDet[] = [];
  ngOnInit() {
    for (let i = 0; i <= 10; i++) {
      let card: MyDet = { id: i, name: 'Sensor ' + i, status: Boolean(Math.floor(Math.random() * 2)) }
      this.dets.push(card);
    }
  }
  Delete(id: number) {
    let index = this.dets.findIndex(det =>
      det.id === id);
    if (index !== -1) {
      this.dets.splice(index, 1);
    }
  }
  Add() {
    let id = this.dets.length > 0 ? this.dets[this.dets.length - 1].id + 1 : 0;
    let det: MyDet = {
      name: 'Sensor ' + id,
      status: Boolean(Math.floor(Math.random() * 2)),
      id: id
    };
    this.dets.push(det);
  }
}