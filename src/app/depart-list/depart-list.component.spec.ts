import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartListComponent } from './depart-list.component';

describe('DepartListComponent', () => {
  let component: DepartListComponent;
  let fixture: ComponentFixture<DepartListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepartListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DepartListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
