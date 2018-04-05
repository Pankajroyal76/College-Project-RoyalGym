import { Component, OnInit } from '@angular/core';
import { EveryoneService } from "../everyone.service";
@Component({
  selector: 'app-trainner',
  templateUrl: './trainner.component.html',
  styleUrls: ['./trainner.component.css']
})
export class TrainnerComponent implements OnInit {
  trainner =[]
  constructor(private _everyoneService:EveryoneService) { }

  ngOnInit() {
    this._everyoneService.getTrainners()
    .subscribe(
      res => this.trainner =res,
      err => console.log(err)
    )
  }

}
