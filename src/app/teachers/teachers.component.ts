import { Component, OnInit } from '@angular/core';
import teacherdata from '../data/TEACHER.json';

interface Teacher{
  ID : number;
  Name : String;
  Qualification : string;
  DOJ : string;
  Subject : string;
}

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  constructor() { }
  teachers : Teacher[] = teacherdata;

  ngOnInit(): void {
  console.log(teacherdata)
  }   

}
