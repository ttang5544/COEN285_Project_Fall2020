/*========================================================================
    TITLEHERE
  ---------------------------------------------------------


======================================================================== */

////////////////////////////////////////// LEAVE ABOVE AS TEMPLATE



/*========================================================================
    CLOUD FXNs ERRORS - return HttpsError **
  ---------------------------------------------------------
    functions.https.HttpsError
        code: FunctionsErrorCode,    message: string,
        name: xxx,    stack: string,  Error: Error


  Firebase Cloud Functions Error Codes
                                      https://firebase.google.com/docs/reference/functions/providers_https_#functionserrorcode

  Http response Status codes          https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
                                      https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

  RETURNED FROM CLOUD FXN EXECUTION:    //  TODO observable result/msg/err proper handling + display
{
  "result": {
    "code": "invalid-argument",
    "details": null,
    "httpErrorCode": {
      "canonicalName": "INVALID_ARGUMENT",
      "status": 400
    }
  }
}
======================================================================== */


export interface CfnFail {
  error: {
    message: string;
    status: string;
    details: any;
  };
}

export interface CFnResult {
  result: {
    code: string,
    details: any,
    httpErrorCode: firebase.default.functions.FunctionsErrorCode;
  };
}



export interface CFnErrorMap {
  ok: string;
  cancelled: string;
  unknown: string;
  invalidArgument: string;
  deadlineExceeded: string;
  notFound: string;
  alreadyExists: string;
  permissionDenied: string;
  resourceExhausted: string;
  failedPrecondition: string;
  aborted: string;
  outOfRange: string;
  unimplemented: string;
  internal: string;
  unavailable: string;
  dataLoss: string;
  unauthenticated: string;
}

export type CFnErrorCode = keyof CFnErrorMap;


// export const CloudFunctionsErrorMap: { [key: string]: string; } = {
export const cfnErrorMap: { [key: string]: string; } = {
  ok: 'OK',
  cancelled: 'The request was cancelled by the user',
  unknown: 'An unknown error occurred',
  invalidArgument: 'Invalid value(s) - please review and make appropriate edits',
  deadlineExceeded: 'The request deadline expired', // NOTE: successful server response with long delay may trigger
  notFound: 'The requested resource was not found',
  alreadyExists: 'That document already exists',
  permissionDenied: 'You are not authorized to access that resource',
  resourceExhausted: 'Your request could not complete due to lack of resources. Try again later',
  failedPrecondition: 'The system is still setting up. Please wait and try again in a few minutes.',
  aborted: 'The request could not complete and has been abortred',
  outOfRange: 'Operation cancelled - OUT OF RANGE',
  unimplemented: 'Requested resource not found',
  internal: 'An internal error occurred.',
  unavailable: 'That resource is unavailable',
  dataLoss: 'The request could not complete due to potential data corruption',
  unauthenticated: 'You must be logged in to that'
};

// export const FirebaseCloudFunctionsErrorCodes: string[] = [
//   'ok',
//   'cancelled',
//   'unknown',
//   'invalid-argument',
//   'deadline-exceeded',
//   'not-found',
//   'already-exists',
//   'permission-denied',
//   'resource-exhausted',
//   'failed-precondition',
//   'aborted',
//   'out-of-range',
//   'unimplemented',
//   'internal',
//   'unavailable',
//   'data-loss',
//   'unauthenticated'
// ];

// export interface CloudFxnErrorResponse {
// tslint:disable-next-line: max-line-length
//   code: 'ok' | 'cancelled' | 'unknown' | 'invalid-argument' | 'deadline-exceeded' | 'not-found' | 'already-exists' | 'permission-denied' | 'resource-exhausted' | 'failed-precondition' | 'aborted' | 'out-of-range' | 'unimplemented' | 'internal' | 'unavailable' | 'data-loss' | 'unauthenticated';
// }
