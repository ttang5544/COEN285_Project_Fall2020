import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase';
import { forkJoin, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { isNilOrEmptyObject, deleteProps } from '../../@shared/object-utilities';
import { DatabaseService } from '../service-interfaces';



const delkeys = {
  users: ['userId', 'uid'],
  items: ['itemId'],
  reservations: ['reservationId']
};




export class FirebaseFirestoreService extends DatabaseService {

  constructor(protected afs: AngularFirestore) { super(); }

  getRecord<T>(id: string, root: string): Observable<T> {
    return this.afs.collection(root)
      .doc(id)
      .get().pipe(
        take(1),
        map((snapshot: firebase.firestore.DocumentSnapshot) => {
          if (snapshot?.exists) {
            return snapshot.data() as T;
          }
        }),
      );
  }

  getRecords<T>(ids: string[], root: string): Observable<T[]> {
    if (ids?.length > 0) {
      const obsList: Observable<T>[] = ids.map((id) => this.getRecord<T>(id, root));
      return forkJoin([...obsList]);
    }
  }

  setRecord<T>(data: T, root: string, key?: string) { // : Observable<any> {
    if (isNilOrEmptyObject(data) || root === 'users' || data.hasOwnProperty('email')) {
      return;
    }
    const d = deleteProps(data, delkeys[root]);
    return this.afs.collection(root).add(data);  // error handle returned promise
  }

  updateRecord<T>(data: Partial<T>, root: string, key: string) {
    return this.afs.collection(root).doc(key).update(data);
  }

}

