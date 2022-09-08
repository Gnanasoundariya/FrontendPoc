import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { BookListComponent } from './book-list/book-list.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentListComponent } from './student-list/student-list.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  { path: 'students', component: StudentListComponent },
  { path: 'create-student', component: CreateStudentComponent },
  { path: 'student-details/:id', component: StudentDetailsComponent },
  { path: 'update-student/:id', component: UpdateComponent },
  { path: 'add-book', component: AddBookComponent },
  { path: 'book-list', component: BookListComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
