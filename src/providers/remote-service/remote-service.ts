import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import {Http ,Response } from '@angular/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Const} from '../../pages/util';

/*
  Generated class for the RemoteServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class RemoteServiceProvider {
 
  foodSearchResult:any = {};

  constructor(public http: Http) {
    console.log('Remote service provider initiated');
  }
  
  getFoodInfo(searchQuery: string) {
      //  if (this.foodSearchResult) {
      //    return Promise.resolve(this.foodSearchResult);
      //  }
    
      return new Promise(resolve => {
        this.http.get(this.createSearchURL(searchQuery))
          .map(res => res.json())
          .subscribe(data => {
            this.foodSearchResult = data;
            resolve(data);
          });
      });
    }

    getFoodInfoDetail(ndbno: string) {
      //  if (this.foodSearchResult) {
      //    return Promise.resolve(this.foodSearchResult);
      //  }
    
      return new Promise(resolve => {
        this.http.get(this.createFoodDetailsURL(ndbno))
          .map(res => res.json())
          .subscribe(data => {
            resolve(data);
          });
      });
    }

    getFoodInfoFromLocal() {
      return this.foodSearchResult;
    }

    // to replace the search string in API
    createSearchURL(query: string){
      return "https://api.nal.usda.gov/ndb/search/?format=json&q="+query+"&sort=n&max=25&offset=0&api_key=" + Const.FOOD_FACT_API_KEY;

    }
    
    createFoodDetailsURL(ndbNo: string) {
      return "https://api.nal.usda.gov/ndb/nutrients/?format=json&api_key="+Const.FOOD_FACT_API_KEY+"&nutrients=205&nutrients=204&nutrients=208&nutrients=269&ndbno="+ndbNo
    }
}
