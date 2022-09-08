import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Library } from './library';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  private baseURL = "http://localhost:8081/library/";

  constructor(private httpClient: HttpClient) { }

  //response of GET Method for All List
  getBookList(): Observable<Library[]> {
    return this.httpClient.get<Library[]>(`${this.baseURL}`);
  }

  //response of GET method by Id
  getBookById(id: number): Observable<Library> {
    return this.httpClient.get<Library>(`${this.baseURL}${id}`);
  }

  //response of POST method for create a new book
  createBook(library: Library): Observable<Object> {
    console.log(this.baseURL);
    return this.httpClient.post(`${this.baseURL}`, library);
  }
}
