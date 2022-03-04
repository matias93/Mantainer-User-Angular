import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarDetailUserComponent } from './sidebar-detail-user.component';

describe('SidebarDetailUserComponent', () => {
  let component: SidebarDetailUserComponent;
  let fixture: ComponentFixture<SidebarDetailUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarDetailUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarDetailUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
