import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { FoodService } from '../food.service';
import { Food, FoodPage } from '../food.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-food-read',
  templateUrl: './food-read.component.html',
  styleUrls: ['./food-read.component.css']
})
export class FoodReadComponent implements OnInit, AfterViewInit{

  DEFAULT_PAGE_INDEX : number = 0;
  DEFAULT_PAGE_SIZE: number = 5;
  displayedColumns: string[] = ['name', 'price', 'weight', 'stockAmount', 'description', 'actions'];

  food : Food[] = [];
  page !: FoodPage;

  @ViewChild(MatPaginator)
  paginator !: MatPaginator;


  constructor(private service: FoodService) { }

  ngOnInit(): void {
    console.log(this.page?.totalElements);

    this.findAll(this.DEFAULT_PAGE_INDEX, this.DEFAULT_PAGE_SIZE);


  }

  ngAfterViewInit(): void {
    this.paginator.page.subscribe(ans =>{
      this.findAll(ans.pageIndex, ans.pageSize);
      console.log(this.page?.totalElements);

    })
    
  }


  findAll(pageIndex: number, pageSize: number){
    this.service.findAll(pageIndex, pageSize).subscribe(ans=> {
      this.page = ans;
      this.food = this.page.content;
      console.log(this.page?.totalElements);


    })
  }

}
