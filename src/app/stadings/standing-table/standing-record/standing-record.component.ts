import { Component, OnInit, Input} from '@angular/core';

import { IStanding } from './../../../shared/interfaces';

@Component({
  selector: '[app-standing-record]',
  inputs:['standingTeams'],
  templateUrl: './standing-record.component.html',
  styleUrls: ['./standing-record.component.css']
})
export class StandingRecordComponent implements OnInit {
  private _standingTeams:IStanding[]=[]

  @Input() get standingTeams():IStanding[]{
    return this._standingTeams
  }

  set standingTeams(value:IStanding[]){
    if(value){
      this.standigSorted=this._standingTeams=value
    }
  } 

  standigSorted:IStanding[]

  constructor() { }

  ngOnInit(): void {
  }

}
