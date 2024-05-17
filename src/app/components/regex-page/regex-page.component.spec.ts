import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegexPageComponent } from './regex-page.component';

describe('RegexPageComponent', () => {
  let component: RegexPageComponent;
  let fixture: ComponentFixture<RegexPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegexPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegexPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
