import firebase from 'firebase';

export interface AbstractResponse {
  success?: boolean;
  error?: any;
}


export interface SimpleResponse extends AbstractResponse {
  success: boolean;
  error?: firebase.FirebaseError;   // code (auth/invalid-arguments) ,
}



export interface DataResponse extends SimpleResponse {
  success: boolean;
  error?: {
    code: string; // format: auth/user-not-found  service/string-code
    message: string; // FOR DEVELOPER NOT END-USER DISPLAY
    name: string; // class name of error - FirebaseError
    stack?: string;
  };
  response?: {
    code: string;
    message?: string;
    data?: any;
  };
}

