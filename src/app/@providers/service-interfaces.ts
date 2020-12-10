import { Observable } from 'rxjs';


export abstract class AuthService {

  abstract login(email: string, password: string);
  abstract logout();
  abstract signup(email: string, password: string, firstName: string, lastName: string);
  abstract getUid();

}


export abstract class DatabaseService {

  abstract getRecord<T>(key: string, root?: string): T | Observable<T>;
  abstract getRecords<T>(keys: string[], root?: string): T[] | Observable<T[]>;
  abstract setRecord<T>(data: T, root: string, key?: string);
  abstract updateRecord<T>(data: T, root: string, key: string);

  abstract deleteRecord<T>(key: string, root?: string);
}


export abstract class ImageStorageService {

  abstract uploadImageFile(file: File, type: any, id: string);
  abstract getImageUrl(type: any, id: string);
}


export abstract class CallableService {

  abstract getCallable(name: string);
}
