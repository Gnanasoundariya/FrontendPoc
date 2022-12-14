import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { LibraryService } from '../library.service';
import { Library } from '../library';
import { event } from 'jquery';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss']
})
export class CreateStudentComponent implements OnInit {

  student: Student = new Student();
  library: Library = new Library();
  bookNameList: any;
  selectbookName:any;
  constructor(private studentService: StudentService, private libraryService: LibraryService,
    private router: Router) { }

  ngOnInit(): void {
    this.getBookList();
  }

  //Post Method to be start
  saveStudent() {
    console.log(this.student);
    
    console.log("To save the student details in student Table");
    this.studentService.createStudent(this.student).subscribe((data: any) => {
      console.log(data);
      this.goToStudentList();
    },
      (error: any) => console.log(error));
  }

  //onChange of Dropdownlist method
  getBookList() {
    console.log("To get the all book name in library Table");
    this.libraryService.getBookList().subscribe((data: any) => {
      this.bookNameList = data;
    });
    console.log(this.bookNameList);

  }

  onSelectBook(event:any){
    this.student.bookName = event.target.value;
    this.bookNameList.forEach((data:any)=>{
      console.log(data);
      if(data.libraryId == event.target.value){
        this.student.bookName = data.bookName;
        this.student.libraryId = data.libraryId
      }      
    })
  }

  //Add link go to students list 
  goToStudentList() {
    this.router.navigate(['/students']);
  }

  onSubmit() {
    console.log(this.student);
    this.saveStudent();
  }

}
