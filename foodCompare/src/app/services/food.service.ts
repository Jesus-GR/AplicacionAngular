import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Food } from '../model/food';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService implements OnInit {

  constructor(private http:HttpClient) { }
  ngOnInit(): void {
    
  }

  getFoods():Observable<Food[]>{
    return this.http.get<Food[]>("/assets/foods.json")
  }


}
