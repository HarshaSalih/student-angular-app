import { Component } from '@angular/core';

@Component({
  selector: 'app-student-entry',
  templateUrl: './student-entry.component.html',
  styleUrls: ['./student-entry.component.css']
})
export class StudentEntryComponent {

  name=""
  rollNo=""
  admissionNo=""
  mobile=""
  college=""
  parentName=""
  parentNo=""
  userName=""
  password=""
  confirmPassword=""


  readValues=()=>
  {
    let data:any={"name":this.name,"rollNo":this.rollNo,"admissionNo":this.admissionNo,"mobile":this.mobile,"college":this.college,"parentName":this.parentName,"parentNo":this.parentNo,"userName":this.userName,"password":this.password,"confirmPassword":this.confirmPassword}
    console.log(data)
  }


}
