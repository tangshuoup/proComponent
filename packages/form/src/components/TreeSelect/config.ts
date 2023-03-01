import { remove } from "lodash";

export function treeToArray(tree: any) {
  const arr: Array<any> = [];
  const loop = (data: any) => {
    data.forEach((k: any) => {
      if (k?.children?.length) {
        arr.push(k);
        loop(k.children);
      } else {
        arr.push(k);
      }
    });
  };
  loop(tree);
  return arr;
}

/**
 * 判断子数组的值是否都在父数组中
 * @export
 * @param {*} pArr
 * @param {*} cArr
 * @returns
 */
export function includeArr(pArr: string[], cArr: string[]) {
  return cArr.every((item: any) => pArr.includes(item));
}

export function addArr(arr: any, item: any) {
  if (arr.includes(item)) {
    return;
  }

  arr.push(item);
}

export function editArr(pArr: any, key: any, checked: any) {
  if (checked) {
    addArr(pArr, key);
  } else {
    remove(pArr, (item) => item === key);
  }
}

export function includesStr(str1: any, str2: any) {
  return str1?.toUpperCase().includes(str2?.toUpperCase());
}
