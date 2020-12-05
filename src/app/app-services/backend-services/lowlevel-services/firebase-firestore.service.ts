import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';



export interface DatabaseService {
  getItem<T>(keypath: string): T;
  setItem<T>(keypath: string, item: T);
  updateItem<T>(keypath: string, updates: T);
  removeItem<T>(keypath: string);
}


export abstract class FirestoreDbService implements DatabaseService {
  rootCollection: AngularFirestoreCollection;

  constructor(private afs: AngularFirestore, root: 'users' | 'items' | 'reservations' | 'public') { }
  getCollectionRef(path: string): AngularFirestoreCollection {
    return this.afs.collection(path);
  }
  getDocumentRef(path: string): AngularFirestoreDocument;
  getItem<T>(keypath: string): T;
  setItem<T>(keypath: string, item: T);
  updateItem<T>(keypath: string, updates: T);
  removeItem<T>(keypath: string);
}


export class UsersFirestoreDbService extends UsersFirestoreDbService {


  getCollectionRef(path: string): AngularFirestoreCollection;
  getDocumentRef(path: string): AngularFirestoreDocument;
}
