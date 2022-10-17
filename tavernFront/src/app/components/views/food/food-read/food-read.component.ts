import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { FoodService } from '../food.service';
import { Food, FoodPage, Pageable, Sort } from '../food.model';

@Component({
  selector: 'app-food-read',
  templateUrl: './food-read.component.html',
  styleUrls: ['./food-read.component.css']
})
export class FoodReadComponent implements OnInit, AfterViewInit{

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

  @ViewChild(MatPaginator)
  paginator !: MatPaginator;


  constructor(private service: FoodService) { }

  ngOnInit(): void {
    this.findAll(this.DEFAULT_PAGE_INDEX, this.DEFAULT_PAGE_SIZE);


  }

  ngAfterViewInit(): void {
    this.paginator.page.subscribe(ans =>{
      this.findAll(ans.pageIndex, ans.pageSize);
    })
    
  }


  findAll(pageIndex: number, pageSize: number){
    this.service.findAll(pageIndex, pageSize).subscribe(ans=> {
      this.page = ans;
      this.food = this.page.content;
    })
  }

}
