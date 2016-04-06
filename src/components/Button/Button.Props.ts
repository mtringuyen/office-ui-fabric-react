import * as React from 'react';

export interface IButtonProps extends React.HTMLProps<HTMLElement> {
  /**
   * The type of the element to render.
   * @default ElementType.anchor
   */
  elementType?: ElementType;

  /**
   * The type of button to render.
   * @defaultvalue ButtonType.normal
   */
  buttonType?: ButtonType;

  /**
   * The button icon shown in command or hero type.
   */
  icon?: string;

  /**
   * Description of the action this button takes.
   */
  description?: string;
}

export enum ElementType {
  /** <button> element */
  button,
  /** <a> element */
  anchor
}

export enum ButtonType {
  normal,
  primary,
  hero,
  compound,
  command
}