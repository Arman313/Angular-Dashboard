import { Component, OnInit } from '@angular/core';
import { FormControl, Validators,FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { CitiesService } from '../../services/cities-service.service'

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {

  regExp: string = '^[0-9]*$';
  regExpLetters :string= '^[A-Za-z]*$';
  regExpAllPhones: string ='^[0][5][0|2|3|4|5|9]{1}[-]{0,1}[0-9]{7}$';
  cities: string[]=[]
  filteredCities : Observable<string[]>


  employeeForm = new FormGroup({
    employeeId :new FormControl('',
    [
      Validators.minLength(9),
      Validators.maxLength(9),
      Validators.required,
      Validators.pattern(this.regExp)
    ]),
    role :new FormControl('',[
      Validators.required,
      Validators.pattern(this.regExpLetters),
      Validators.minLength(2),
    ]),
    firstName : new FormControl('',
    [
      Validators.required,
      Validators.pattern(this.regExpLetters),
      Validators.minLength(2),
    ]),
    lastName: new FormControl('',
    [
      Validators.required,
      Validators.pattern(this.regExpLetters),
      Validators.minLength(2),
    ]),
    email: new FormControl('',[
      Validators.required,
      Validators.email
    ]),
    phone: new FormControl('',[
      Validators.required,
      Validators.pattern(this.regExpAllPhones)
    ]),
    adress : new FormGroup({
      city: new FormControl('',Validators.required),
      street: new FormControl('',Validators.required),
    }),
    gender: new FormControl('',Validators.required),

  })

  constructor( private citiesService : CitiesService) { }

  ngOnInit(): void {
    this.citiesService.getData().subscribe(res=>{
      for(let x=0; x< res.length; x++){
        this.cities.push(
          res[x].english_name
        )
      }
    })

    this.filteredCities = this.employeeForm.get('adress').get('city').valueChanges.pipe
    (startWith(''),map(value=>this._filter(value)))
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.cities.filter(option => option.toLowerCase().includes(filterValue));

  }
  onSubmit(){
  }

  onClear(){
    this.employeeForm.reset();
  }
}
