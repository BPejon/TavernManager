import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Pageable, Sort, Traveller, TravellerPage} from '../traveller.model';
import { TravellerService } from '../traveller.service';

@Component({
  selector: 'app-traveller-read',
  templateUrl: './traveller-read.component.html',
  styleUrls: ['./traveller-read.component.css']
})
export class TravellerReadComponent implements OnInit, AfterViewInit {

  displayedColumns: String[] = ['name', 'province', 'classType', 'level', 'coins', 'actions'];
  DEFAULT_PAGE: number = 0;
  DEFAULT_PAGE_SIZE : number = 5;

  traveller: Traveller[]= [];
  pageable !: Pageable;
  sort !: Sort;

  page : TravellerPage = {
    content: this.traveller,
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

  constructor(
    private service: TravellerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.findAll(this.DEFAULT_PAGE, this.DEFAULT_PAGE_SIZE);
  }

  ngAfterViewInit(): void {
    this.paginator.page.subscribe(ans =>{
      this.findAll(ans.pageIndex, ans.pageSize)
    })
  }

  findAll(pageNumber: number, pageSize: number){
    this.service.findAll(pageNumber, pageSize).subscribe( ans =>{
      this.page = ans;
      this.traveller = this.page.content;
    })
  }
  navigateToTravellerCreate(): void{
    this.router.navigate(['traveller/create']);
  }

}
