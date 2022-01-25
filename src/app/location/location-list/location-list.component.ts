import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {Location} from '../location';
import {LocationService} from '../location.service';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss']
})
export class LocationListComponent implements OnInit, OnDestroy {

locations: Location[] = [];
locations$: Subscription = new Subscription();
deleteLocation$: Subscription = new Subscription();

errorMessage: string = '';

  constructor(private locationService: LocationService, private router: Router) { }


  ngOnInit(): void {
    this.getLocations();
  }

  ngOnDestroy(): void {
    this.locations$.unsubscribe();
    this.deleteLocation$.unsubscribe();
  }

  // add() {
  //   //Navigate to form in add mode
  //   this.router.navigate(['location/form'], {state: {mode: 'add'}});
  // }

  // edit(id: number) {
  //   //Navigate to form in edit mode
  //   this.router.navigate(['location/form'], {state: {id: id, mode: 'edit'}});
  // }

  getLocations() {
    this.locations$ = this.locationService.getLocations().subscribe(result => this.locations = result);
  }
}
