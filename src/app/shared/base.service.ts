import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PagedList } from './IPagedList';
import { environment } from 'src/environments/environment';
import { Paginacao } from './paginacao';
import { Ordenacao } from './ordenacao';
import { Inject } from '@angular/core';

export class BaseEntity {
  id: number | string = 0;
}

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService<T extends BaseEntity, ID> {
  protected httpClient: HttpClient;
  protected route: string;

  protected constructor(http: HttpClient, @Inject(String) route: string) {
    this.httpClient = http;
    this.route = route;
  }

  public get(id: string): Observable<T> {
    return this.httpClient.get<any>(`${environment.base}/${this.route}/${id}`);
  }

  public create(request: T | any): Observable<boolean> {
    return this.httpClient.post<any>(`${environment.base}/${this.route}`, request);
  }

  public list(request: any = null, page: Paginacao | null = null, sort: Ordenacao | null = null): Observable<T[]> { //PagedList<T>
    return this.httpClient.get<any>(`${environment.base}/${this.route}${this.queryBuilder(request, page, sort)}`);
  }

  public update(id: string, request: T | any): Observable<boolean> {
    return this.httpClient.put<any>(`${environment.base}/${this.route}/${id}`, request);
  }

  public delete(id: string): Observable<boolean> {
    return this.httpClient.delete<any>(`${environment.base}/${this.route}/${id}`);
  }

  private queryBuilder(request?: any, pages: Paginacao | null = null, ordenacao: Ordenacao | null = null): string {
    let url = `?page=${Number(pages?.numeroPagina) - 1 || 0}&pageSize=${pages?.limitePagina || 20}`;    
    for (var attr in request) {
      if (request[attr]) {
        url += `&${attr}=${request[attr]}`;
      }
    }

    if (ordenacao && ordenacao.name && ordenacao.sort) url += `&orderBy=${ordenacao.name}&orderType=${ordenacao.sort.toUpperCase()}`;

    return url;
  }
}

