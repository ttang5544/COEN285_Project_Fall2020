import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore';




export function getDocumentSnapshotChanges<T>(collection: AngularFirestoreCollection<T>): Observable<{ id: string, data: T; }[]> {
  return collection.snapshotChanges().pipe(
    map((actions: DocumentChangeAction<T>[]) => {
      return actions.map((a: DocumentChangeAction<T>) => {
        const docdata = a.payload.doc.data() as T;
        const docid = a.payload.doc.id;
        return { id: docid, data: docdata };
      });
    })
  );
}

export function debugTag(tag: string) {
  return tap({
    next(value) {
      console.log(`%c[${ tag }: Next]`, 'background: #009688; color: #fff; padding: 3px; font-size: 9px;', value);
    },
    error(error) {
      console.log(`%[${ tag }: Error]`, 'background: #E91E63; color: #fff; padding: 3px; font-size: 9px;', error);
    },
    complete() {
      console.log(`%c[${ tag }]: Complete`, 'background: #00BCD4; color: #fff; padding: 3px; font-size: 9px;');
    }
  });
}


