import { MessagesService } from './../messages.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  records: any = [];
  currRecords: any;
  pages: any = [];
  currPage: any = 0;

  constructor(private messagesService: MessagesService) {}

  ngOnInit(): void {
    // Array(98)
    //   .fill(0)
    //   .map((e, i) => {
    //     this.records = [...this.records, i];
    //   });
    this.updateAll();
  }

  updateAll() {
    this.getMessages();
  }

  getMessages() {
    this.messagesService.getMessages().subscribe((res) => {
      this.records = res;
      this.updatePages();
      this.updateCurrRecords();
    });
  }

  checkMessage(id: number) {
    this.messagesService.checkMessage(id).subscribe((_) => this.updateAll());
  }

  updatePages() {
    this.pages = Array(
      Math.floor(this.records.length / 10) +
        (this.records.length % 10 === 0 ? 0 : 1)
    ).fill(0);
  }

  updateCurrRecords() {
    this.currRecords = this.records.filter(
      (e: any, i: any) =>
        i >= 10 * this.currPage && i <= 10 * (this.currPage + 1) - 1
    );
  }

  updateCurrPage(i: number) {
    this.currPage = i;
    this.updateAll();
  }
}
