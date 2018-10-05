import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PostContentService {

  postCollection: AngularFirestoreCollection <Post>;
  postDoc: AngularFirestoreDocument<Post>;
  posts: Observable<Post[]>;
  post: Observable<Post>;

  constructor(
     private angularFirestore: AngularFirestore 
     ) { 
       //Siempre que el servicio arranque se pone los post en la propiedad postcolletion
       this.postCollection = this.angularFirestore.collection('post', ref => ref);
     }
  //METODOS PARA LOS POSTS
  addPost(post: Post) {
    this.postCollection.add(post);
  }
  getAllPosts():Observable<Post[]> {
    this.posts = this.postCollection.snapshotChanges().pipe(
      map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as Post;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
      return this.posts;
  }
  getPost(postId: string) {
    this.postDoc = this.angularFirestore.doc<Post>(`posts/${postId}`);
    this.post = this.postDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as Post;
        data.id = action.payload.id;
        return data;
      }
    }));
    return this.post;
  }
  editPost(post: Post) {
    this.postDoc = this.angularFirestore.doc(`posts/${post.id}`);
    this.postDoc.update(post);
  }

  deletePost(post: Post) {
    this.postDoc = this.angularFirestore.doc(`posts/${post.id}`);
    this.postDoc.delete();
  }
}
