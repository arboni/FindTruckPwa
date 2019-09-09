import { Component , OnInit} from '@angular/core';
import * as M from '../assets/materialize/js/materialize.min.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'FindTruckWeb';
  options = {};

  ngOnInit(){
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, this.options);
}
}
