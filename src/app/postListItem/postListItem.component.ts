import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-postListItem',
  templateUrl: './postListItem.component.html',
  styleUrls: ['./postListItem.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() created_at: Date;

  like(){
      this.loveIts++;
  }

  disLike(){
      this.loveIts--;
  }

  constructor() { }

  ngOnInit() {
  }
    
}