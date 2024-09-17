import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentlunoComponent } from './componentluno.component';

describe('ComponentlunoComponent', () => {
  let component: ComponentlunoComponent;
  let fixture: ComponentFixture<ComponentlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentlunoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
