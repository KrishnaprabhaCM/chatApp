import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MutedUsersComponent } from './muted-users.component';

describe('MutedUsersComponent', () => {
  let component: MutedUsersComponent;
  let fixture: ComponentFixture<MutedUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MutedUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MutedUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
