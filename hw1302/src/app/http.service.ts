import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Product } from "./product";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable()

export class HttpService{
    constructor(private http: HttpClient){}
        getProducts(): Observable<Product[]>{
            return this.http.get('assets/products.json').pipe(map((data: any)=>{
                let productList = data["list"];
                return productList.map(function(item: any){
                    return {name: item.name, price: item.price};
                });
            }));
        }
}