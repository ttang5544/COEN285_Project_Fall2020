


export function isNil(obj: any): boolean {
  return obj == null || typeof obj === 'undefined' || obj.length === 0;
}

export function isNilOrEmptyObject(obj: any, skipKeys: string[] = ['pageType']): boolean {
  if (isNil(obj)) {
    return true;
  }
  if (typeof obj === 'object') {
    if (obj instanceof Array) {
      if (obj.length === 0) {
        return true;
      }
      return obj.every(item => isNilOrEmptyObject(item));
    } else {
      return Object.keys(obj).every(key => {
        if (skipKeys.includes(key)) {
          return true;
        } else {
          return isNilOrEmptyObject(obj[key], skipKeys);
        }
      });
    }
  }
  return false;
}


export function deleteProps(obj: any, props: string[]): any {
  if (typeof obj !== 'object' || !(props instanceof Array) || props.length === 0 || isNilOrEmptyObject(obj)) {
    return obj;
  }
  const propList: string[] = Object.getOwnPropertyNames(obj);
  props.forEach((prop: string) => {
    if (propList.includes(prop)) {
      delete obj[prop];
    }
  });
  return obj;
}
