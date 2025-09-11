import { Component } from '@angular/core';
import { BookService } from '../../services/book-service';
import { Book } from '../../models/book';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-book-list',
  imports: [DatePipe],
  templateUrl: './book-list.html'
})
export class BookList {
    books: Book[] = [];

    constructor(private bookService: BookService) {
    }

    ngOnInit(){
        this.books = this.bookService.getAll();
    }
}
