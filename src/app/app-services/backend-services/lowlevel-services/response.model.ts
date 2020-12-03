export interface MessageResponse {
  success: boolean;
  message?: string;
  code?: string;
}


export function responseFactory(success: boolean, msg?: string, code?: string): MessageResponse {
  let result: MessageResponse;
  if (success === null || success === undefined) {
    return undefined;
  }
  const res: MessageResponse = {
    success,
    message: msg ? msg : null,
    code: code ? code : null
  };
  return res;
}
