import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParerntComponentComponent } from './parernt-component.component';

describe('ParerntComponentComponent', () => {
  let component: ParerntComponentComponent;
  let fixture: ComponentFixture<ParerntComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParerntComponentComponent]
    });
    fixture = TestBed.createComponent(ParerntComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
