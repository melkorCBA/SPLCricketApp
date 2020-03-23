import { Component, OnInit, forwardRef, Input} from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS,ControlValueAccessor,FormControl,
     FormGroup, Validators ,Validator,AbstractControl, ValidationErrors } from "@angular/forms";



@Component({
    selector: 'app-match-team2',
    templateUrl: './team2.component.html',
    styleUrls: ['./team2.component.css'],
    providers:[
        {
          provide: NG_VALUE_ACCESSOR,
          useExisting: forwardRef(() =>  Team2Component),
          multi: true
        }
      ]
})
export class Team2Component implements OnInit {

  private _teams:string[]=[]

  @Input() get teams():string[]{
    return this._teams
  }

  set teams(value:string[]){
    if(value){
      this._teams=value
    }
  } 

    team2From=new FormGroup({
        team2: new FormControl('Choose 2nd team'),
        toss:new FormControl('loss'),
        innings: new FormControl('2nd'),
        score:new FormGroup({
            runs:new FormControl('100'),
            overs:new FormControl('5.4'),
            wickets:new FormControl('3')
        })
    })

    get team2() {
      return this.team2From.get('team2');
    }
    
    ngOnInit(): void {

    }

    public onTouched: () => void = () => {};

  writeValue(val: any): void {
    val && this.team2From.setValue(val, { emitEvent: false });
  }
  registerOnChange(fn: any): void {
    console.log("on change");
    this.team2From.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    console.log("on blur");
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.team2From.disable() : this.team2From.enable();
  }

  changeTeam(e) {
    this.team2.setValue(e.target.value, {
      onlySelf: true
    })
  }

    
}
