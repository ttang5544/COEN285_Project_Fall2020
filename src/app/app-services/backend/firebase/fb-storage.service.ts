import { Inject, Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { USER_ID } from '../provider-facades/fb-providers';

/*
    sample progress bar html for AngularFireStorage + AngularFireUplaoadTask
<input type="file" (change)="uploadFile($event)" />
    <div>{{ uploadPercent | async }}</div>
    <a [href]="downloadURL | async">{{ downloadURL | async }}</a>


    snapshotChanges(): Observable<FirebaseStorage.UploadTaskSnapshot> 	Emits the raw UploadTaskSnapshot as the file upload progresses.

    percentageChanges(): Observable<number> 	Emits the upload completion percentage.

    getDownloadURL(): Observable<any> 	Emits the download url when available
*/

@Injectable({
  providedIn: 'root'
})
export class FirebaseStorageService {
  private readonly ALLOWED_FILETYPES = ['image/png', 'image/jpeg', 'image/bmp'];
  private readonly MAX_FILESIZE = 1.5 * 1000 * 1000 * 8;

  constructor(private storage: AngularFireStorage, @Inject(USER_ID) private readonly uid: string) { }

  uploadImageFile(file: File, type: 'items' | 'users' = 'users', id: string = this.uid): AngularFireUploadTask {
    // validate file properties - MIME type, size, filename, extension, etc
    if (!file || !this.ALLOWED_FILETYPES.includes(file.type) || file.size > this.MAX_FILESIZE) {
      // invalid params
    }
    return this.storage.upload(
      `${ type }/${ id }`,
      this.getRenamedFile(file, 'profile.jpg'),
      { customMetadata: { prevname: file.name } });
  }

  getImageUrl(type: 'items' | 'users' = 'users', id: string = this.uid): Observable<string> {
    return this.storage.ref(`${ type }/${ id }/profile.jpg`).getDownloadURL().pipe(
      catchError((err, caught) => {
        console.log(`error getting img url - type: ${ type }  id: ${ id }`);
        console.log(`err code: ${ err.code }  msg: ${ err.message }`);
        if (type === 'items') {
          return of('/assets/images/tool-icon.png');
        } else {
          return of('/assets/images/img-placeholder.png');
        }
      })
    );
  }

  private getRenamedFile(file: File, newFilename: string) {
    const name = newFilename + file.name.substring(file.name.lastIndexOf('.'));
    // Instantiate copy of file, giving it new name.
    return new File([file], name, { type: file.type });
  }


}
