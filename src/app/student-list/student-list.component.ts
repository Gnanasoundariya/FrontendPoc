import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  students: Student[] = [];

  constructor(private studentService: StudentService,
    private router: Router) { }

  ngOnInit(): void {
    this.getStudents();
  }

  private getStudents(){
    this.studentService.getStudentList().subscribe((data: Student[]) => {
      this.students = data;
    });
  }

  StudentDetails(id: number){
    this.router.navigate(['student-details', id]);
  }

  deleteStudent(id:number){
    this.studentService.deleteStudent(id).subscribe( (data: any) => {
      console.log(data);
      this.getStudents();
    })
  }

}
