import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicItemComponent } from './pic-item.component';

describe('PicItemComponent', () => {
  let component: PicItemComponent;
  let fixture: ComponentFixture<PicItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PicItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
