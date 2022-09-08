import { Component, OnInit } from '@angular/core';
import { Library } from '../library';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  libraries: Library[] = [];
  constructor(private libraryService: LibraryService) { }

  ngOnInit(): void {
    this.getBookList();
  }

  //get all the list of books
  private getBookList() {
    this.libraryService.getBookList().subscribe((data: Library[]) => {
      this.libraries = data;
    });
  }

}
