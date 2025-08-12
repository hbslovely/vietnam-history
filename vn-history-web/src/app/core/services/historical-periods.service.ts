import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { HistoricalPeriod } from '../../shared/models/historical-period.model';

@Injectable({
  providedIn: 'root'
})
export class HistoricalPeriodsService {
  private readonly apiUrl = '/assets/data/history-periods/periods.json';
  private readonly detailsPath = '/assets/data/history-periods/details/';

  constructor(private http: HttpClient) {
  }

  getAllPeriods(): Observable<HistoricalPeriod[]> {
    return this.http.get<{ periods: HistoricalPeriod[] }>(this.apiUrl).pipe(
      map(res => res.periods)
    );
  }

  getPeriodById(id: string): Observable<HistoricalPeriod | undefined> {
    return this.getAllPeriods().pipe(
      map(periods => periods.find(period => period.id === id))
    );
  }

  getPeriodDetails(id: string): Observable<any> {
    return this.http.get(`${ this.detailsPath }${ id }.json`);
  }

  getTimelinePeriods(): Observable<{ name: string; timeRange: string; id: string }[]> {
    return this.getAllPeriods().pipe(
      map(periods => periods.map(period => ({
        id: period.id,
        name: period.name,
        timeRange: period.timeRange.display
      })))
    );
  }

  getPrehistoricPeriods(): Observable<HistoricalPeriod[]> {
    return this.getAllPeriods().pipe(
      map(periods => periods.filter(period => period.timeRange.from < 0))
    );
  }

  getDynasticPeriods(): Observable<HistoricalPeriod[]> {
    return this.getAllPeriods().pipe(
      map(periods => periods.filter(period => period.timeRange.from >= 0))
    );
  }
}
