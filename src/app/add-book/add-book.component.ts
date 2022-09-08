import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Library } from '../library';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

  library: Library = new Library();
  
  constructor(private libraryService: LibraryService,private router: Router) { }

  ngOnInit(): void {
  }

  saveBook() {
    console.log(this.library);
    
    console.log("To save the student details in student Table");
    this.libraryService.createBook(this.library).subscribe((data: any) => {
      console.log(data);
      this.goToBookList();
    },
      (error: any) => console.log(error));
  }

  goToBookList(){
    this.router.navigate(['/book-list']);
  }

}
