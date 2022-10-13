import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beverages-read',
  templateUrl: './beverages-read.component.html',
  styleUrls: ['./beverages-read.component.css']
})
export class BeveragesReadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['name', 'price', 'bottleSize', 'stockAmount', 'description', 'actions'];

}
