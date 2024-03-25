import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormdexComponent } from './formdex.component';

describe('FormdexComponent', () => {
  let component: FormdexComponent;
  let fixture: ComponentFixture<FormdexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormdexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormdexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
