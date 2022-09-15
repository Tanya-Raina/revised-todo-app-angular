import { Component, OnInit } from '@angular/core';
import {CheckService} from "../services/check.service";

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent implements OnInit {

  title: string = 'Completed';

  constructor() { }

  ngOnInit(): void {
  }

  onCheck() {
    const checkService = new CheckService();
    checkService.onCheckClicked(this.title);
  }

}
