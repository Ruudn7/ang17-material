import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegexExtendedPageComponent } from './regex-extended-page.component';

describe('RegexExtendedPageComponent', () => {
  let component: RegexExtendedPageComponent;
  let fixture: ComponentFixture<RegexExtendedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegexExtendedPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegexExtendedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
