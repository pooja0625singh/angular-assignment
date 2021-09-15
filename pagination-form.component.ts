import { Component, OnInit } from '@angular/core';

interface Posts {
  id?: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-pagination-form',
  templateUrl: './pagination-form.component.html',
  styleUrls: ['./pagination-form.component.css']
})
export class PaginationFormComponent implements OnInit {

  public listPost: any = [];
  page = 1;
  pageSize = 5;
  listSize = this.listPost.length;
  lists: Posts[] = [];

  constructor() {
    this.listofpost();
  }

  listofpost() {
    this.lists = this.listPost
      .map((lists1: any, i: any) => ({...lists1}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize)
  }

  ngOnInit(): void {
  }

}
function lists1(lists1: any, i: any): Posts[] {
  throw new Error('Function not implemented.');
}

function i(lists1: any, i: any): Posts[] {
  throw new Error('Function not implemented.');
}

function slice(arg0: number, arg1: number) {
  throw new Error('Function not implemented.');
}

