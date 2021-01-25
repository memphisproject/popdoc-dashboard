import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitecodeComponent } from './invitecode.component';

describe('InvitecodeComponent', () => {
  let component: InvitecodeComponent;
  let fixture: ComponentFixture<InvitecodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitecodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitecodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
