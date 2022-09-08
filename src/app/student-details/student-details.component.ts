import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {

  id!: number;
  student: Student = new Student;
  result:any;
  constructor(private route: ActivatedRoute, private studentService: StudentService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.student = new Student();

    //get the student list by id
    this.studentService.getStudentById(this.id).subscribe((data: Student) => {
      this.result = data;
      this.student = this.result['studentListId'][0]; 
    });
  }
}
