import { Component } from '@angular/core';
import { SearchTermService } from 'src/app/services/search-term.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  constructor(private _searchTermService:SearchTermService) {}
  searchTerm:string = ''
  
  updateSearchTerm() {
    this._searchTermService.updateSearchTerm(this.searchTerm);
  }

}
