import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-design',
  templateUrl: './material-design.component.html',
  styleUrls: ['./material-design.component.css']
})
export class MaterialDesignComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  foods: any[] = [
      {name: 'Pizza', rating: 'Excellent'},
      {name: 'Burritos', rating: 'Great'},
      {name: 'French fries', rating: 'Pretty good'},
    ];
}
