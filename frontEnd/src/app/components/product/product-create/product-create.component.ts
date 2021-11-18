import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: 0
  }

  adributoLegal = "qualquer" 
  
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    
  }
  createProduct():void{
    this.productService.create(this.product).subscribe(()=>{
      this.alertMenssageCreate()
      this.router.navigate(['/products'])
    })
  }

  alertMenssageCreate(){
    this.productService.alertMensage(`Cadastrado com sucesso!`)
  }
  
  alertMenssageCancel(){
    this.router.navigate(['/products'])
  }



}
