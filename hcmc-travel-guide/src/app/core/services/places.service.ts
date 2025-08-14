import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Place, PlaceCategory } from '../../shared/models/place.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private readonly apiUrl = `${environment.apiUrl}/places`;

  constructor(private http: HttpClient) {}

  getAllPlaces(): Observable<Place[]> {
    return this.http.get<Place[]>(this.apiUrl);
  }

  getPlaceById(id: string): Observable<Place> {
    return this.http.get<Place>(`${this.apiUrl}/${id}`);
  }

  getPlacesByCategory(category: PlaceCategory): Observable<Place[]> {
    return this.getAllPlaces().pipe(
      map(places => places.filter(place => place.category.includes(category)))
    );
  }

  getPlacesByDistrict(district: string): Observable<Place[]> {
    return this.getAllPlaces().pipe(
      map(places => places.filter(place => place.location.district === district))
    );
  }

  searchPlaces(query: string): Observable<Place[]> {
    return this.getAllPlaces().pipe(
      map(places => places.filter(place => 
        place.name.en.toLowerCase().includes(query.toLowerCase()) ||
        place.name.vi.toLowerCase().includes(query.toLowerCase()) ||
        place.description.en.toLowerCase().includes(query.toLowerCase()) ||
        place.description.vi.toLowerCase().includes(query.toLowerCase())
      ))
    );
  }

  getNearbyPlaces(placeId: string, radiusKm: number = 2): Observable<Place[]> {
    return this.http.get<Place[]>(`${this.apiUrl}/${placeId}/nearby?radius=${radiusKm}`);
  }

  addReview(placeId: string, review: Omit<Place['reviews'][0], 'id'>): Observable<Place> {
    return this.http.post<Place>(`${this.apiUrl}/${placeId}/reviews`, review);
  }

  updatePlace(place: Place): Observable<Place> {
    return this.http.put<Place>(`${this.apiUrl}/${place.id}`, place);
  }
} 