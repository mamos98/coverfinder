import { TestBed, inject } from '@angular/core/testing';

import { GetAlbumService } from './get-album.service';

describe('GetAlbumService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetAlbumService]
    });
  });

  it('should ...', inject([GetAlbumService], (service: GetAlbumService) => {
    expect(service).toBeTruthy();
  }));
});
