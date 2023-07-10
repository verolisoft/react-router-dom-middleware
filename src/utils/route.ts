import { IRouteObject, ICollectionRoute } from '../interface';

const _emptyPath = { path: '', name: '', meta: {middleware: []} };

// private function
function _removeElementArray(arr: Array<string>, value: string): Array<string> {
  arr.forEach((element, index) => {
    if (element === value) {
      arr.splice(index, 1);
      index--;
    } else if (Array.isArray(element)) {
      _removeElementArray(element, value);
      if (element.length === 0) {
        arr.splice(index, 1);
        index--;
      }
    } else if (typeof element === 'undefined') {
      arr.splice(index, 1);
      index--;
    }
  });
  return arr;
}

/**
 * Suma dos números enteros.
 * @param a El primer número.
 * @param b El segundo número.
 * @returns La suma de los dos números.
 */
export function findByPath(
  path: string,
  collectionRoute: ICollectionRoute,
  pathArray: Array<string> = []
): IRouteObject {
  for (let i = 0; i < collectionRoute.length; i++) {
    const elementRoute: IRouteObject = collectionRoute[i];
    pathArray.push(elementRoute.path);
    const fullPath = _removeElementArray(pathArray, '/').join('/');

    // console.log(fullPath);
    // console.log(pathArray);

    if (`/${fullPath}` === path) {
      return {
        ...elementRoute,
      };
    }

    if (elementRoute.children) {
      const result = findByPath(path, elementRoute.children, [
        ...pathArray,
        elementRoute.path,
      ]);
      if (result !== null) {
        return result;
      }
    }
  }
  return _emptyPath;
}

/**
 * Suma dos números enteros.
 * @param a El primer número.
 * @param b El segundo número.
 * @returns La suma de los dos números.
 */
export function findByName(
  itemName: string,
  collectionRoute: ICollectionRoute,
  pathArray: Array<string> = []
): IRouteObject {
  for (let i = 0; i < collectionRoute.length; i++) {
    const elementRoute: IRouteObject = collectionRoute[i];
    pathArray.push(elementRoute.path);
    const fullPath = _removeElementArray(pathArray, '/').join('/');

    if (`/${fullPath}` === itemName) {
      return {
        ...elementRoute,
      };
    }

    if (elementRoute.children) {
      const result = findByPath(itemName, elementRoute.children, [
        ...pathArray,
        elementRoute.path,
      ]);
      if (result !== null) {
        return result;
      }
    }
  }
  return _emptyPath;
}

// export function getFullPath(elementName: string, backslash = true): string {
//   let element = findByName(elementName);
//   return backslash ? `/${element.fullPath}` : element.fullPath;
// }
