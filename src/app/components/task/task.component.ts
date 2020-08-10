import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  formattedDate: string;
  sol = 1;
  constructor() { }

  ngOnInit() {
  }

  public onChangeDate(dateValue: Date): void {
    this.formatDate(dateValue);
  }

  private formatDate(date: Date): void {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    this.formattedDate = `${day}/${month}/${year}`;
  }

  public selectSol(solNum: number): void {
    this.sol = solNum;
    this.formattedDate = null;
  }

}
