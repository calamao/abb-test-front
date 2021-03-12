/* eslint-disable prettier/prettier */
export interface IPart {
  /** Name of the part */
  name: string;
  features: IFeature[];
}

export enum ElementState {
  Correct = 'Correct',
  Warning = 'Warning',
  Error = 'Error',
}

export interface IFeature {
  /** Name of the part */
  name: string;
  state: ElementState;
  controls: IControl[];
}

export interface IControl {
  name: string;
  /** deviation from the expected measurement of the control */
  dev: number;
  /** total deviation outside measurement for the last N pieces measured. */
  devOutTotal: number;

  state: ElementState;
}
