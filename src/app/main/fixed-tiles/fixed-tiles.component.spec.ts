import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedTilesComponent } from './fixed-tiles.component';

describe('FixedTilesComponent', () => {
  let component: FixedTilesComponent;
  let fixture: ComponentFixture<FixedTilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixedTilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
