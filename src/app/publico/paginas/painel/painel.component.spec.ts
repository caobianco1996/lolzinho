import { TestBed } from '@angular/core/testing';

import { PainelComponent } from './painel.component';

describe('PainelComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PainelComponent ]
    })
    .compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(PainelComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
