import { Component, OnInit } from '@angular/core';
import { Beverages } from '../beverages.model';
import { BeveragesService } from '../beverages.service';

@Component({
  selector: 'app-beverages-read',
  templateUrl: './beverages-read.component.html',
  styleUrls: ['./beverages-read.component.css']
})
export class BeveragesReadComponent implements OnInit {

  displayedColumns: string[] = ['name', 'price', 'bottleSize', 'stockAmount', 'description', 'actions'];

  beverages : Beverages[] = [];
  constructor(private service: BeveragesService) { }

  ngOnInit(): void {
    this.findAll();
  }


  findAll(){
    //Chama o servico e sua funcao findAll pra pegar uma mensagem no back end
    //subscribe é a funcao que vai ficar atenta ao que receber do service e armazenar em answer
    //Depois que answer receber uma resposta, ele chamará a função que foi passada pra ele , nesse caso o que vem 
    //depois do '=>'
    this.service.findAll().subscribe(answer =>  {
      console.log(answer);
      this.beverages = answer;
    })
  }
}
