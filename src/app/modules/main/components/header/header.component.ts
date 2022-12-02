import { Component, OnInit } from '@angular/core';
import { LanguageValues } from 'src/app/shared/interfaces/language-values.interface';
import {
  INFO_PATH,
  GALLERY_PATH,
} from 'src/app/shared/constants/routing-path.const';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public readonly infoPath = INFO_PATH;

  public readonly galleryPath = GALLERY_PATH;

  constructor() {}

  ngOnInit(): void {}
}
