import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { Beverages, Page, Pageable, Sort } from '../../../beverages/beverages.model';
import { BeveragesService } from '../../../beverages/beverages.service';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-shop-beverage',
  templateUrl: './shop-beverage.component.html',
  styleUrls: ['./shop-beverage.component.css']
})
export class ShopBeverageComponent implements OnInit {

  displayedColumns: string[] = ['name', 'price', 'bottleSize', 'stockAmount', 'description', 'actions'];
  DEFAULT_PAGE: number = 0;
  DEFAULT_PAGE_SIZE: number = 5;

  beverages : Beverages[] = [];
  pageable !: Pageable;
  sort !: Sort;

  page : Page ={
    content: this.beverages,
    pageable: this.pageable,
    last: false,
    totalPages: 0,
    totalElements: 0,
    size: 0,
    number:0,
    sort: this.sort,
    first: false,
    numberOfElements: 0,
    empty: false
  };

  @ViewChild(MatPaginator)
  paginator !: MatPaginator;
  
  id_trav !: string;
  constructor(private beverageShop: BeveragesService, private shopService: ShopService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.findAll(this.DEFAULT_PAGE, this.DEFAULT_PAGE_SIZE);
    this.id_trav = this.route.snapshot.paramMap.get("id_trav")!;
  }

  ngAfterViewInit(): void {
    this.paginator.page.subscribe(
      ans =>{
        this.findAll(ans.pageIndex, ans.pageSize);
      }
    );
  }


  findAll(pageNumber: number, pageSize: number){
    this.beverageShop.findAll(pageNumber, pageSize).subscribe(answer =>  {
      this.page = answer;
      this.beverages = this.page.content;
    })
  }

  goBack(): void{
    this.router.navigate(["traveller/shop"]);
  }
}
