import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Library } from '../library';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  id!: number;
  student: Student = new Student();
  library: Library = new Library();
  bookNameList: any;
  result: any;
  constructor(private studentService: StudentService, private libraryService: LibraryService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    //Get the student details by Id
    this.studentService.getStudentById(this.id).subscribe(data => {
      this.result = data;
      this.student = this.result['studentListId'][0];
    }, error => console.log(error));
    this.getBookList();
  }

  //Update the students detail in students table
  onSubmit() {
    this.studentService.updateStudent(this.id, this.student).subscribe(data => {
      this.goToStudentList();
    }, error => console.log(error));
  }

  //onChange dropdownList for Update Method
  getBookList() {
    console.log("To get the all book name in library Table");
    this.libraryService.getBookList().subscribe((data: any) => {
      this.bookNameList = data;
    });
    console.log(this.bookNameList);

  }


  onSelectBook(event: any) {
    this.student.bookName = event.target.value;
    this.bookNameList.forEach((data: any) => {
      console.log(data);
      if (data.libraryId == event.target.value) {
        this.student.bookName = data.bookName;
        this.student.libraryId = data.libraryId
      }
    })
  }

  goToStudentList() {
    this.router.navigate(['/students']);
  }

}
