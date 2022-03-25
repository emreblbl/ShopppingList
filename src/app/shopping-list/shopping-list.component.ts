import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import {INFERRED_TYPE} from "@angular/compiler/src/output/output_ast";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {


  ingredients: Ingredient[] =[
    new Ingredient("Apples",5),
    new Ingredient("Tomatoes",10)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
