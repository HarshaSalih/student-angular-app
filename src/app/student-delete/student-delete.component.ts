import { Component } from '@angular/core';

@Component({
  selector: 'app-student-delete',
  templateUrl: './student-delete.component.html',
  styleUrls: ['./student-delete.component.css']
})
export class StudentDeleteComponent {

  admissionNo=""

  readValues=()=>
  {
    let data:any={"admissionNo":this.admissionNo}
    console.log(data)
  }

}
