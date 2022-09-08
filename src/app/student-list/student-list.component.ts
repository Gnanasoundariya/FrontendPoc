import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { LibraryService } from '../library.service';
import { Library } from '../library';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  students: Student[] = [];
  library: Library[] = [];
  bookName: any;
  result: any;
  public popoverTitle: string = 'Delete';
  public popoverMessage: string = 'Are you sure want to delete the student?';
  public confirmClicked: boolean = false;
  public cancelClicked: boolean = false;

  constructor(private studentService: StudentService, private libraryService: LibraryService,
    private router: Router) { }

  ngOnInit(): void {
    this.getStudents();
    this.getBookList();
  }

  //Get all the student List
  private getStudents() {
    this.studentService.getStudentList().subscribe((data: Student[]) => {
      this.result = data;
      this.students = this.result['studentList'];
    });
  }

  //Get All the Book List
  private getBookList() {
    this.libraryService.getBookList().subscribe((data: Library[]) => {
      this.library = data;
    })
  }

  StudentDetails(id: number) {
    this.router.navigate(['student-details', id]);
  }

  //Using delete mapping to deleted Student by id 
  deleteStudent(id: number) {
    this.studentService.deleteStudent(id).subscribe((data: any) => {
      console.log(data);
      this.getStudents();
    })
  }

  updateStudent(id: number) {
    this.router.navigate(['update-student', id]);
  }


  search() {
    if (this.bookName == "") {
      this.ngOnInit();
    }
    else {
      this.studentService.searchBookName(this.bookName).subscribe((data: Student) => {
        this.result = data;
        this.students = this.result['searchByBook'];
      });
    }
  }

}
