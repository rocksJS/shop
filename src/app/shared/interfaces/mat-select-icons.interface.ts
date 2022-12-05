import { ThemePalette } from '@angular/material';

export interface MatSelectIcon {
  url: string;
  value?: any;
  color?: ThemePalette;
  tags?: string[]; // todo: 10.2020
}
