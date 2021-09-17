import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentmodelComponent } from '../studentmodel/studentmodel.component';
import studentdata from '../data/STUDENT.json';

interface Student{
  first_name : String;
  last_name : String;
  Roll_Number : number;
  Date_Of_Birth : string;
  Class : string;
}

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  router: any;
  constructor(){}
  
  students : Student[] = studentdata;

  ngOnInit(): void {
  }


  navigate():void {
    //console.log(studentdata)
    this.router.navigate(['./StudentmodelComponent']);
  }

}
