import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentngforComponent } from './componentngfor.component';

describe('ComponentngforComponent', () => {
  let component: ComponentngforComponent;
  let fixture: ComponentFixture<ComponentngforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentngforComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentngforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
