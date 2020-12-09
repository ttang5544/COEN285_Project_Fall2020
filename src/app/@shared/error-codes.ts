
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
