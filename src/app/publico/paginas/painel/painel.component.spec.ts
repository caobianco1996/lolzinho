import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { HeroisService } from '../serviços/herois.service';
import { PainelComponent } from './painel.component';

describe('PainelComponent', () => {
  let fixture: ComponentFixture<PainelComponent>;
  let service: jasmine.SpyObj<HeroisService>;

  beforeEach(async () => {
    service = jasmine.createSpyObj('HeroisService', ['getHerois']);
    await TestBed.configureTestingModule({
      declarations: [PainelComponent],
      providers: [{ provide: HeroisService, useValue: service }]
    }).compileComponents();
    fixture = TestBed.createComponent(PainelComponent);
  });

  it('renders champions returned by the service', () => {
    service.getHerois.and.returnValue(of(['Ahri', 'Garen']));
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('Ahri');
    expect(fixture.nativeElement.textContent).toContain('Garen');
  });

  it('shows a useful error when loading fails', () => {
    service.getHerois.and.returnValue(throwError(() => new Error('network')));
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('Não foi possível carregar');
  });
});
