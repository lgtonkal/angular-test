import { Component, OnInit } from '@angular/core';
import { Category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor() { }

  title = "Category List";
  categories: Category[] = [
    {
      id: 1,
      name: "Category 1"
    },
    {
      id: 2,
      name: "Category 2"
    },
    {
      id: 3,
      name: "Category 3"
    },
    {
      id: 4,
      name: "Category 4"
    },
    {
      id: 5,
      name: "Category 5"
    }
  ];

  ngOnInit(): void {
  }

}
