import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-postList',
  templateUrl: './postList.component.html',
  styleUrls: ['./postList.component.scss']
})
export class PostListComponent implements OnInit {

    // Définition du type de "post" qui sera contenu dans un array "posts"
    post: {
        title: string,
        content: string,
        loveIts: number,
        created_at: Date
    };

    // Définition de "posts" de type  array pouvant contenir des objets de type "post"
    @Input() posts: ["post"];

    constructor() { }

  ngOnInit() {
  }

}