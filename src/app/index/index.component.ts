import { Component, OnInit } from '@angular/core';
import {CheckService} from "../services/check.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  item: string = 'Learn Angular';
  title: string = 'To-Do';

  constructor() { }

  ngOnInit(): void {
  }

  onCheck() {
    const checkService = new CheckService();
    checkService.onCheckClicked(this.title);
  }

}
