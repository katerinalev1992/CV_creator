import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserQuestioneerComponent } from './user-questioneer.component';

describe('UserQuestioneerComponent', () => {
  let component: UserQuestioneerComponent;
  let fixture: ComponentFixture<UserQuestioneerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserQuestioneerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserQuestioneerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
