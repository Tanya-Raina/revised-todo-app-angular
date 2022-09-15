import { Component, OnInit } from '@angular/core';
import {CheckService} from "../services/check.service";

@Component({
  selector: 'app-deleted',
  templateUrl: './deleted.component.html',
  styleUrls: ['./deleted.component.scss']
})
export class DeletedComponent implements OnInit {

  title: string = 'Deleted';

  constructor() { }

  ngOnInit(): void {
  }

  onCheck() {
    const checkService = new CheckService();
    checkService.onCheckClicked(this.title);
  }
}
