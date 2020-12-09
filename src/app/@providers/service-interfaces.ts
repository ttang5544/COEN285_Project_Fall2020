import { Observable } from 'rxjs';


export abstract class AuthService {

  abstract login(email: string, password: string);
  abstract logout();
  abstract signup(email: string, password: string, firstName: string, lastName: string);
}


export abstract class DatabaseService {

  abstract getRecord<T>(key: string, root?: string): T | Observable<T>;
  abstract setRecord<T>(data: T, root: string, key?: string);
  abstract updateRecord<T>(data: T, root: string, key: string);
  // abstract removeRecord(key: string): Observable<any>;

}


export abstract class ImageStorageService {

  abstract uploadImageFile(file: File, type: any, id: string);
  abstract getImageUrl(type: any, id: string);
}


export abstract class CallableService {

  abstract getCallable(name: string);

}
