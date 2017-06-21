import { TestBed, inject } from '@angular/core/testing';

import { FilmService } from './film-card.service';

describe('FilmCardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilmService]
    });
  });

  it('should ...', inject([FilmService], (service: FilmService) => {
    expect(service).toBeTruthy();
  }));
});



