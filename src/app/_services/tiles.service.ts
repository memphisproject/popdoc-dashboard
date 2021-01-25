import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class TilesService {

  constructor(private http: HttpClient) {}

  getTiles() {
    return this.http.get(`${environment.apiUrl}/v1/mosaics`);
  }

  addCollectionToStickyTiles(id) {
    return this.http.post(`${environment.apiUrl}/v1/stickytiles/create`, {id});
  }

  removeCollectionToStickyTiles(id) {
    return this.http.get(`${environment.apiUrl}/v1/stickytiles/${id}`);
  }
}
