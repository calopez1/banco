import { TestBed, inject } from '@angular/core/testing';

import { TransaccionService } from './transaccion.service';

describe('TransaccionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransaccionService]
    });
  });

  it('should be created', inject([TransaccionService], (service: TransaccionService) => {
    expect(service).toBeTruthy();
  }));
});
