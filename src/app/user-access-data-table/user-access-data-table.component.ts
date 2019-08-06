import { Component, OnInit } from '@angular/core';
import { Employee } from '../shared/Employee';

const ELEMENT_DATA:Employee[]=[
  {id:'1',name:'emp1',email:'emp1@gmail.com'},
  {id:'2',name:'emp2',email:'emp2@gmail.com'},
  {id:'3',name:'emp2',email:'emp3@gmail.com'}
];

@Component({
  selector: 'app-user-access-data-table',
  templateUrl: './user-access-data-table.component.html',
  styleUrls: ['./user-access-data-table.component.css']
})
export class UserAccessDataTableComponent implements OnInit {

  displayedColumns: string[]=['id','name','email'];
  dataSource=ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
