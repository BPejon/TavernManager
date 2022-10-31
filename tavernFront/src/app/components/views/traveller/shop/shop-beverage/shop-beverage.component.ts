import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { Beverages, Page, Pageable, Sort } from '../../../beverages/beverages.model';
import { BeveragesService } from '../../../beverages/beverages.service';
import { DialogBuyBeverageComponent } from '../../dialogs/dialog-buy-beverage/dialog-buy-beverage.component';
import { Traveller } from '../../traveller.model';
import { TravellerService } from '../../traveller.service';
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

  traveller!: Traveller;
  id_trav !: string;
  coins:number = 0;
  
  constructor(
    private travellerService: TravellerService,
    private beverageService: BeveragesService,
    private router: Router, 
    private route: ActivatedRoute,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.findAll(this.DEFAULT_PAGE, this.DEFAULT_PAGE_SIZE);
    this.id_trav = this.route.snapshot.paramMap.get("id_trav")!;
    this.findTraveller(this.id_trav);
  }

  ngAfterViewInit(): void {
    this.paginator.page.subscribe(
      ans =>{
        this.findAll(ans.pageIndex, ans.pageSize);
      }
    );
  }

  findTraveller(id: string): void{
    this.travellerService.findById(id).subscribe(ans=>{
      this.traveller = ans;
      this.coins = this.traveller.coins;
    })

  }

  findAll(pageNumber: number, pageSize: number){
    this.beverageService.findAll(pageNumber, pageSize).subscribe(answer =>  {
      this.page = answer;
      this.beverages = this.page.content;
    })
  }

  goBack(): void{
    this.router.navigate(["traveller"]);
  }

  buyBeverageDialog(bevName:string, bevPrice: number){
    this.dialog.open(DialogBuyBeverageComponent, {
      data: {
        travName: this.traveller.name,
        travCoins: this.traveller.coins,
        bevName: bevName,
        bevPrice: bevPrice
      }
    })
  }
}
