import { TestBed, inject } from '@angular/core/testing';

import { CardapioService } from './cardapio.service';

describe('CardapioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CardapioService]
    });
  });

  it('should be created', inject([CardapioService], (service: CardapioService) => {
    expect(service).toBeTruthy();
  }));
});
