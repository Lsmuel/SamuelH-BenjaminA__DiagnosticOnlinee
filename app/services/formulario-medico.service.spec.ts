import { TestBed } from '@angular/core/testing';

import { FormularioMedicoService } from './formulario-medico.service';

describe('FormularioMedicoService', () => {
  let service: FormularioMedicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormularioMedicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
