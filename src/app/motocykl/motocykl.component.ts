import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-motocykl',
  templateUrl: './motocykl.component.html',
  styleUrls: ['./motocykl.component.css']
})
export class MotocyklComponent implements OnInit {

  brand: string;
  model: string;
  year: number;
  mileage: number;
  capacity: number;
  power: number;
  engine: Engine;
  overviews: string[];

  editMode = false;

  constructor() {

  }

  ngOnInit(): void {
    console.log('nginit');
    this.brand = 'Yamaha';
    this.model = 'TZR 125';
    this.year = 1998;
    this.mileage = 48569;
    this.capacity = 125;
    this.power = 28;
    this.engine = {
      xd: 'dwusuwowy',
      cylinder: 'jedno'
    };
    this.overviews = ['Przegląd fabryczny', 'Pierwszy przegląd rejestracyjny'];
  }

 addOverview(overview): void {
this.overviews.push(overview);
 }

  deleteOverview(overview): void {
    for (let i = 0; i < this.overviews.length; i++) {
      if (this.overviews[i] === overview) {
        this.overviews.splice(i, 1);
      }
    }
  }

  changeEditMode(): void {
    this.editMode = !this.editMode;
  }
}

interface Engine {
  xd: string;
  cylinder: string;

}
