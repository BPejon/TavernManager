import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Beverages, Page, Pageable, Sort } from '../../../beverages/beverages.model';
import { BeveragesService } from '../../../beverages/beverages.service';

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
  
  constructor(private service: BeveragesService, private router: Router) { }

  ngOnInit(): void {
    this.findAll(this.DEFAULT_PAGE, this.DEFAULT_PAGE_SIZE);
  }

  ngAfterViewInit(): void {
    this.paginator.page.subscribe(
      ans =>{
        this.findAll(ans.pageIndex, ans.pageSize);
      }
    );
  }


  findAll(pageNumber: number, pageSize: number){
    //Chama o servico e sua funcao findAll pra pegar uma mensagem no back end
    //subscribe é a funcao que vai ficar atenta ao que receber do service e armazenar em answer
    //Depois que answer receber uma resposta, ele chamará a função que foi passada pra ele , nesse caso o que vem 
    //depois do '=>'
    this.service.findAll(pageNumber, pageSize).subscribe(answer =>  {
      this.page = answer;
      this.beverages = this.page.content;
    })
  }

  goBack(): void{
    this.router.navigate(["traveller/shop"]);
  }
}
