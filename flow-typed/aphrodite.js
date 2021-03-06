import type { CSSStyle } from '../src/types';

declare module 'aphrodite' {
  declare type SheetStruct = [string, Object];

  declare type SheetDeclaration = {
    [key: string]: SheetStruct,
  };

  declare export var StyleSheet: {
    create: (rules: CSSStyle) => SheetDeclaration,
    extend: (extensions: Object[]) => StyleSheet,
  };

  declare export function css(sheet: SheetStruct): string;
}
