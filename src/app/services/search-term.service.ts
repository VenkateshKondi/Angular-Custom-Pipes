import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchTermService {

  constructor() { }
  
  private searchTermSubject = new BehaviorSubject<string>('');
  searchTerm$: Observable<string> = this.searchTermSubject.asObservable();

  updateSearchTerm(searchTerm: string) {
    this.searchTermSubject.next(searchTerm);
  }  

}
