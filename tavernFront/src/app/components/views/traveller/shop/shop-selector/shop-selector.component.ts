import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shop-selector',
  templateUrl: './shop-selector.component.html',
  styleUrls: ['./shop-selector.component.css']
})
export class ShopSelectorComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  id_trav!: string;
  ngOnInit(): void {
    
  }

}
