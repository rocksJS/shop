import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material';

import { LanguageValues } from '../../interfaces/language-values.interface';

@Component({
  selector: 'app-translate-selector',
  templateUrl: './translate-selector.component.html',
  styleUrls: ['./translate-selector.component.scss'],
  imports: [MatSelectModule, ReactiveFormsModule, CommonModule],
  standalone: true,
})
export class TranslateSelectorComponent implements OnInit {
  public languages: LanguageValues[] = [
    { value: 'Russian', viewValue: 'RU' },
    { value: 'English', viewValue: 'EN' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
