import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { Food, FoodPage, Pageable, Sort } from '../../../food/food.model';
import { FoodService } from '../../../food/food.service';
import { Traveller } from '../../traveller.model';
import { TravellerService } from '../../traveller.service';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-shop-food',
  templateUrl: './shop-food.component.html',
  styleUrls: ['./shop-food.component.css']
})
export class ShopFoodComponent implements OnInit {

  DEFAULT_PAGE_INDEX : number = 0;
  DEFAULT_PAGE_SIZE: number = 5;
  displayedColumns: string[] = ['name', 'price', 'weight', 'stockAmount', 'description', 'actions'];

  //Inicializar tudo da Page pra parar o erro
  food : Food[] = [];
  pageable !: Pageable;
  sort !: Sort;
  page : FoodPage = {
    content: this.food,
    pageable: this.pageable,
    last: true,
    totalPages: 0,
    totalElements: 0,
    size: 0,
    number: 0,
    sort: this.sort,
    first: true,
    numberOfElements:0,
    empty: true,
  };


  coins: number = 0;

  @ViewChild(MatPaginator)
  paginator !: MatPaginator;

  traveller!: Traveller;
  id_trav !: string;

  constructor(
    private foodService: FoodService,
    private travellerService: TravellerService,
    private shopService: ShopService,
    private router:Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.findAll(this.DEFAULT_PAGE_INDEX, this.DEFAULT_PAGE_SIZE);
    this.id_trav = this.route.snapshot.paramMap.get("id_trav")!;
    this.findTraveller(this.id_trav);
    console.log(this.traveller.coins);
    this.coins = this.traveller.coins;
  }

  ngAfterViewInit(): void {
    this.paginator.page.subscribe(ans =>{
      this.findAll(ans.pageIndex, ans.pageSize);
    })
    
  }

  findTraveller(id: string): void{
    this.travellerService.findById(id).subscribe(ans=>{
      this.traveller = ans;
    })

  }

  findAll(pageIndex: number, pageSize: number){
    this.foodService.findAll(pageIndex, pageSize).subscribe(ans=> {
      this.page = ans;
      this.food = this.page.content;
    })
  }

  goBack(): void{
    this.router.navigate(["shop"]);
  }


}
