


export type ResultResponse =
  | { success: true, resp: unknown; }
  | { success: false, err: firebase.default.FirebaseError; };
