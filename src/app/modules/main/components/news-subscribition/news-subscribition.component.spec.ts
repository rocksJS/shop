import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsSubscribitionComponent } from './news-subscribition.component';

describe('NewsSubscribitionComponent', () => {
  let component: NewsSubscribitionComponent;
  let fixture: ComponentFixture<NewsSubscribitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsSubscribitionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsSubscribitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
