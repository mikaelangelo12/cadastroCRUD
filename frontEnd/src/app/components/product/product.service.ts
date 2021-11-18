import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3001/products"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  alertMensage(msg: string):void{
   this.snackBar.open(msg, 'X',{
     horizontalPosition: 'center',
     duration: 2000,
     verticalPosition:"top",
   })
  }
  create(product: Product): Observable<Product>{
    return this.http.post<Product>(this.baseUrl, product)
  }
  
}
