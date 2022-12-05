import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material';
import { MatSelectIconModule } from '@angular-material-extensions/select-icon';

import { LanguageValues } from '../../interfaces/language-values.interface';

import { MatSelectIcon } from '../../interfaces/mat-select-icons.interface';

@Component({
  selector: 'app-translate-selector',
  templateUrl: './translate-selector.component.html',
  styleUrls: ['./translate-selector.component.scss'],
  imports: [
    MatSelectModule,
    MatSelectIconModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  standalone: true,
})
export class TranslateSelectorComponent implements OnInit {
  public readonly languages: MatSelectIcon[] = [
    { url: '../../../../assets/imgs/languages/russia.png' },
    {
      url: '../../../../assets/imgs/languages/united-states.png',
      color: 'primary',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  onIconSelected(selectedIcon: MatSelectIcon) {
    console.log('selected icon');
  }
}
