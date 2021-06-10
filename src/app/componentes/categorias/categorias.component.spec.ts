import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CATEGORIASComponent } from './categorias.component';

describe('CATEGORIASComponent', () => {
  let component: CATEGORIASComponent;
  let fixture: ComponentFixture<CATEGORIASComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CATEGORIASComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CATEGORIASComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
