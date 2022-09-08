import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list/student-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CreateStudentComponent } from './create-student/create-student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { UpdateComponent } from './update/update.component';
import { MatIconModule } from '@angular/material/icon';
import { AddBookComponent } from './add-book/add-book.component';
import { BookListComponent } from './book-list/book-list.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    CreateStudentComponent,
    StudentDetailsComponent,
    UpdateComponent,
    AddBookComponent,
    BookListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2OrderModule,
    Ng2SearchPipeModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger'
    }),
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
