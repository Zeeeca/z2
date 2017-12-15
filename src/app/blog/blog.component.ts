import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Post } from './post.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  posts: Post[];

  constructor(private http: Http) {
    this.http.get('https://jsonplaceholder.typicode.com/posts')
    // .map(res => res.json())
    .subscribe((posts) => {
      this.posts = posts.json();
      console.log(this.posts);
    });
   }

  ngOnInit() {
  }

}
