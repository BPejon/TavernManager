import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { tap } from 'rxjs';
import { Beverages, Page } from '../beverages.model';
import { BeveragesService } from '../beverages.service';

@Component({
  selector: 'app-beverages-read',
  templateUrl: './beverages-read.component.html',
  styleUrls: ['./beverages-read.component.css']
})
export class BeveragesReadComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['name', 'price', 'bottleSize', 'stockAmount', 'description', 'actions'];
  DEFAULT_PAGE: number = 0;
  DEFAULT_PAGE_SIZE: number = 10;

  beverages : Beverages[] = [];
  page !: Page;

  @ViewChild(MatPaginator)
  paginator !: MatPaginator;
  
  constructor(private service: BeveragesService) { }

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
}
