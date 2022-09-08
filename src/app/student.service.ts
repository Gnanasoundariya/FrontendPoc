import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseURL = "http://localhost:8081/students/";

  constructor(private httpClient: HttpClient) { }

  //response of GET method for All List
  getStudentList(): Observable<Student[]> {
    console.log(this.baseURL);   
    return this.httpClient.get<Student[]>(`${this.baseURL}`);
  }

  //response of POST method for save Student
  createStudent(student: Student): Observable<Object> {
    console.log(this.baseURL);
    return this.httpClient.post(`${this.baseURL}`, student);
  }

  //response of GET method by Id
  getStudentById(id: number): Observable<Student> {
    console.log(this.baseURL);
    return this.httpClient.get<Student>(`${this.baseURL}${id}`);
  }

  //response of DELETE method for delete by Id
  deleteStudent(id: number): Observable<Object> {
    console.log(this.baseURL);
    return this.httpClient.delete(`${this.baseURL}${id}`);
  }

  //response of PUT method to updated ny Id
  updateStudent(id: number, student: Student): Observable<Object> {
    console.log(this.baseURL);
    return this.httpClient.put(`${this.baseURL}${id}`, student);
  }


  searchBookName(bookName: String){
    console.log(this.baseURL);
    return this.httpClient.get<Student>(`${this.baseURL}student-search/${bookName}`);
  }
}
