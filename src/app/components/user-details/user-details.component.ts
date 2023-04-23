import { Component } from '@angular/core';
import { SearchTermService } from 'src/app/services/search-term.service';
import { UsersDataService } from 'src/app/services/users-data.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent{
  constructor(private _userService:UsersDataService , private _searchTermService:SearchTermService ) {}
  userData:any = [];
  searchTerm:string=''

  ngOnInit(){
    this._userService.getUserDetails().subscribe(resp =>{
      this.userData = this.userData= resp;
    })
    this._searchTermService.searchTerm$.subscribe(term => this.searchTerm = term);
  }
}
