import { Component } from '@angular/core';

@Component({
  selector: 'app-booksinfo',
  templateUrl: './booksinfo.component.html',
  styleUrls: ['./booksinfo.component.css']
})
export class BooksinfoComponent  {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
}

export interface PeriodicElement {
  no: number;
  name: string;
  pages: number;
  price: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {no: 1, name: 'Introduction to Algorithms', pages: 1000, price: 500},
  {no: 2, name: 'The Art of Computer Programming', pages: 1500, price: 700},
  {no: 3, name: 'Programming Pearls', pages: 700, price: 900},
  {no: 4, name: 'Code complete', pages: 900, price: 900},
  {no: 5, name: 'Artificial intelligence', pages: 1200, price: 1000},
];

