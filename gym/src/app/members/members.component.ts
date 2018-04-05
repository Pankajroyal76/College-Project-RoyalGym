import { Component, OnInit } from '@angular/core';
import { EveryoneService} from '../everyone.service';
@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
   members=[]
  constructor(private _everyoneService: EveryoneService) { }

  ngOnInit() {
    this._everyoneService.getMembers()
    .subscribe(
      res => this.members=res,
      err => console.log(err)
    )
  }

}
