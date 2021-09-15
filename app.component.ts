import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'List of Posts';

  public listPost: any = [];

  constructor (private _appService: AppService) {}

  ngOnInit () {
    this._appService.getPosts()
        .subscribe((data) => {this.listPost = data});
    }
}
