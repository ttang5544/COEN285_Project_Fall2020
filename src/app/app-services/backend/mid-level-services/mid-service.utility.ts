import firebase from 'firebase';

/*

  items$: Observable<Item[]>;
  sizeFilter$: BehaviorSubject<string|null>;
  colorFilter$: BehaviorSubject<string|null>;

  constructor(afs: AngularFirestore) {
    this.sizeFilter$ = new BehaviorSubject(null);
    this.colorFilter$ = new BehaviorSubject(null);
    this.items$ = combineLatest(
      this.sizeFilter$,
      this.colorFilter$
    ).pipe(
      switchMap(([size, color]) =>
        afs.collection('items', ref => {
          let query : firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
          if (size) { query = query.where('size', '==', size) };
          if (color) { query = query.where('color', '==', color) };
          return query;
        }).valueChanges()
      )
    );
  }
  filterBySize(size: string|null) {
    this.sizeFilter$.next(size);
  }
  filterByColor(color: string|null) {
    this.colorFilter$.next(color);
  }
}
*/

// get owner reservations  -
// get renter reservations
//
// export function unwrapFirstSnapshot

// get a user's reservations - owner + renter - lists
//        scheduled     now < start < end
//        in=progress   start < now < end
// let query : firebase.firestore.CollectionReference | firebase.firestore.Query =
