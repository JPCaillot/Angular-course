import { HttpClient, HttpHeaders, HttpParams, HttpEventType } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Post } from './post.model';
import { map, catchError, tap } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';

@Injectable({providedIn: 'root'})
export class PostsService {
  errorSubj = new Subject<string>();

  constructor(private http: HttpClient) {}

  createAndStorePost(title: string, content: string) {
    const postData: Post = {title: title, content: content};
    return this.http.post<{ name: string }>(
      'https://angular-http-course-2aa64-default-rtdb.firebaseio.com/posts.json',
      postData,
      {
        observe: 'response'
      }
    );
    // ).subscribe(responseData => {
    //   console.log(responseData);
    // }); // the component doesn't care about the result of this request (no use on the template), so it's done here in the service
    //I actually put the subscribe there cause I want the fetch integrated with the posting, for better UX feedback loops
  }

  fetchPosts() {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print', 'pretty');

    return this.http.get<{ [key: string]: Post }>(
      'https://angular-http-course-2aa64-default-rtdb.firebaseio.com/posts.json',
      {
        headers: new HttpHeaders({'Custom-Header': 'hello'}),
        params: searchParams
        // params: new HttpParams().set('print', 'pretty')
      }
    ).pipe(
      map(responseData => {
    // ).pipe(map((responseData: { [key: string]: Post }) => { // equivalent to the angular brackets on get()
      const postsArray: Post[] = [];
      for (const key in responseData) {
        if (responseData.hasOwnProperty(key)) {
          postsArray.push({ ...responseData[key], id: key });
        }
      }
      return postsArray
      }), catchError(errorRes => {
        // Send to analytics server, not related to UX
        return throwError(errorRes);
      })
    );
  }

  deletePosts() {
    return this.http.delete('https://angular-http-course-2aa64-default-rtdb.firebaseio.com/posts.json',
    {
      observe: 'events',
      responseType: 'json'
    }).pipe(tap(event => { //does something without keeping the response from passing through
      console.log(event);
      if (event.type === HttpEventType.Sent) {
        // ...
      }
      if (event.type === HttpEventType.Response) {
        console.log(event.body);
      }
    }));
  }

  errorDemo(title: string, content: string) {
    const postData: Post = {title: title, content: content};
    this.http.post<{ name: string }>(
      'https://angular-http-course-2aa64-default-rtdb.firebaseio.com/posts.json',
      postData
    ).subscribe(responseData => {
      console.log(responseData);
      }, error => {
        this.errorSubj.next(error.message);
      }
    );
  } // this is for subscribes that present themselves on the service
}
