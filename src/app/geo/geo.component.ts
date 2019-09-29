import { Component, OnInit, ApplicationInitStatus } from '@angular/core';
import { mapToMapExpression } from '@angular/compiler/src/render3/util';


@Component({
  selector: 'app-geo',
  templateUrl: './geo.component.html',
  styleUrls: ['./geo.component.css']
})
export class GeoComponent implements OnInit {
  texto : string = 'Empresa - Senac RS';
  lat: number = -30.03530948;
  lng: number = -51.22653902;
  zoom: number = 15;
  constructor() { }

  ngOnInit() {

  }

}
