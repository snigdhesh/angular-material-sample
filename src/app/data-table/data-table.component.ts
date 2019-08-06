import { Component, OnInit } from '@angular/core';
import { Employee } from '../shared/Employee';


const ELEMENT_DATA: Employee[] = [
  {id:'1',name:'emp1',email:'emp1@gmail.com'}
];

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  displayedColumns: string[]=['id','name','email'];
  dataSource=ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
    
  }

}
