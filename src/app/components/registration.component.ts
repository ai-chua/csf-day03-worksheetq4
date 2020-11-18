import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  
  reunionForm: FormGroup;
  
  eventArray = [
    { id: 1, name: 'Friday Dinner' },
    { id: 2, name: 'Saturday Breakfast' },
    { id: 3, name: 'Saturday Lunch' },
    { id: 4, name: 'Saturday Dinner' },
  ]
  
  constructor(private fb: FormBuilder) {
    this.reunionForm = fb.group({
      firstName: fb.control(''),
      lastName: fb.control(''),
      guestFirstName: fb.control(''),
      guestLastName: fb.control(''),
      phoneNumber: fb.control(''),
      email: fb.control(''),
      eventAttending: new FormArray([]),
      preorderDvd: fb.control(''),
      comments: fb.control('')
    })
    this.populateArrayWithEvent()
    console.log(this.reunionForm.controls.eventAttending)
  }
  
  ngOnInit(): void {}
  
  // FN TO POPULATE THE FORM ARRAY WITH eventArray
  private populateArrayWithEvent(){
    this.eventArray.forEach(() => {
      this.addAttendingCheckboxes.push(new FormControl(false))
    })
    // console.log(this.reunionForm.controls.eventAttending)
  }
  
  get addAttendingCheckboxes() {
    return this.reunionForm.controls.eventAttending as FormArray
  }
  
  // THIS PRINTS OUT THE INPUTS FROM THE FORM TO THE CONSOLE
  processForm() {
    console.log(this.reunionForm.value)
  }
}
