import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Tour } from '../../shared/models/tour.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ToursService {
  private readonly apiUrl = `${environment.apiUrl}/tours`;

  constructor(private http: HttpClient) {}

  getAllTours(): Observable<Tour[]> {
    return this.http.get<Tour[]>(this.apiUrl);
  }

  getTourById(id: string): Observable<Tour> {
    return this.http.get<Tour>(`${this.apiUrl}/${id}`);
  }

  getToursByDuration(maxHours: number): Observable<Tour[]> {
    return this.getAllTours().pipe(
      map(tours => tours.filter(tour => tour.duration <= maxHours))
    );
  }

  getToursByDifficulty(difficulty: Tour['difficulty']): Observable<Tour[]> {
    return this.getAllTours().pipe(
      map(tours => tours.filter(tour => tour.difficulty === difficulty))
    );
  }

  searchTours(query: string): Observable<Tour[]> {
    return this.getAllTours().pipe(
      map(tours => tours.filter(tour => 
        tour.name.en.toLowerCase().includes(query.toLowerCase()) ||
        tour.name.vi.toLowerCase().includes(query.toLowerCase()) ||
        tour.description.en.toLowerCase().includes(query.toLowerCase()) ||
        tour.description.vi.toLowerCase().includes(query.toLowerCase()) ||
        tour.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
      ))
    );
  }

  getToursByBudget(maxBudget: number, currency: 'VND' | 'USD'): Observable<Tour[]> {
    return this.getAllTours().pipe(
      map(tours => tours.filter(tour => 
        tour.totalCost.currency === currency && tour.totalCost.max <= maxBudget
      ))
    );
  }

  addReview(tourId: string, review: Omit<Tour['reviews'][0], 'id'>): Observable<Tour> {
    return this.http.post<Tour>(`${this.apiUrl}/${tourId}/reviews`, review);
  }

  updateTour(tour: Tour): Observable<Tour> {
    return this.http.put<Tour>(`${this.apiUrl}/${tour.id}`, tour);
  }

  getPopularTours(limit: number = 5): Observable<Tour[]> {
    return this.getAllTours().pipe(
      map(tours => 
        [...tours]
          .sort((a, b) => b.rating - a.rating)
          .slice(0, limit)
      )
    );
  }
} 