import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

  adributoLegal = "qualquer" 
  
  constructor() { }

  ngOnInit(): void {
  }
  fazerAlgo(): void {
    console.log('Fazer algo')
  }

}
