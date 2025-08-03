import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCv } from './page-cv';

describe('PageCv', () => {
  let component: PageCv;
  let fixture: ComponentFixture<PageCv>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageCv]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageCv);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
