export enum Color {
  Red = 'Red',
  Green = 'Green',
  Blue = 'Blue',
  White = 'White',
  Black = 'Black',
  Yellow = 'Yellow',
  Orange = 'Orange',
}

export namespace Color {

  export function values() {
    return Object.keys(Color).filter(
      (type) => isNaN(<any>type) && type !== 'values'
    );
  }
}
