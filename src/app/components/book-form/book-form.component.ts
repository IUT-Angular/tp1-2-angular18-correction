import { Component, EventEmitter, Output } from '@angular/core';

import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Book } from '../../models/book';


@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './book-form.component.html'
})
export class BookFormComponent {
  @Output() addBookEvent = new EventEmitter<Book>();

  book: Book = { id: 0, title: '', author: '', publicationDate: new Date() }
  bookForm: FormGroup = new FormGroup({
    title: new FormControl(this.book.title, Validators.required),
    author: new FormControl(this.book.author, Validators.required),
    publicationDate: new FormControl(this.book.publicationDate, Validators.required)
  });

  addBook() {    
    if (this.bookForm.invalid) {
      console.error("Error addBook");
      return;
    }
    
    this.book = this.bookForm.value;

    this.addBookEvent.emit(this.book);
    this.bookForm.reset();
  }
}