import { Component, OnInit, forwardRef, Input} from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS,ControlValueAccessor,FormControl,
     FormGroup, Validators ,Validator,AbstractControl, ValidationErrors } from "@angular/forms";




@Component({
  selector: 'app-match-team1',
  templateUrl: './team1.component.html',
  styleUrls: ['./team1.component.css'],
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() =>  Team1Component),
      multi: true
    }
  ]
})
export class Team1Component implements OnInit {
  private _teams:string[]=[]

  @Input() get teams():string[]{
    return this._teams
  }

  set teams(value:string[]){
    if(value){
      this._teams=value
    }
  } 
  
team1Form=new FormGroup({
        team1: new FormControl('Choose 1st team'),
        toss:new FormControl('win'),
        innings: new FormControl('1st'),
        score:new FormGroup({
            runs:new FormControl('100'),
            overs:new FormControl('5.4'),
            wickets:new FormControl('3')
        })
    })

    get team1() {
      return this.team1Form.get('team1');
    }
    
    ngOnInit(): void {

    }

    public onTouched: () => void = () => {};

  writeValue(val: any): void {
    val && this.team1Form.setValue(val, { emitEvent: false });
  }
  registerOnChange(fn: any): void {
    console.log("on change");
    this.team1Form.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    console.log("on blur");
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.team1Form.disable() : this.team1Form.enable();
  }

  changeTeam(e) {
    this.team1.setValue(e.target.value, {
      onlySelf: true
    })
  }

    

}
