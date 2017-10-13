import { Component } from '@angular/core';
import {
    IonicPage,
    NavController,
    NavParams } from 'ionic-angular';
import { NavProxyService } from '../../services/NavProxy.service';
import {
    _MasterPage,
    ItemPage } from '../';

import { RemoteServiceProvider } from '../../providers/remote-service/remote-service';

@IonicPage()
@Component({
    selector: 'page-items',
    templateUrl: 'items.html',
})
export class ItemsPage extends _MasterPage {

    items: Array<any> = [
        { id: FUNC_ID.INTRODUCTION, title:'Introduction', description: 'About this site' },
        { id: FUNC_ID.SEARCH_A_FOOD, title:'Food fact', description: 'Search for brief information about food' },
        { id: FUNC_ID.SEARCH_FOOD_FACT, title:'Food report', description: 'Search for basic report of a food' },
        { id: FUNC_ID.COMING_SOON, title:'Coming soon', description: 'Planned for next release' },
        ];

    // JSON holder for food search result from web service
    foodSearchResult:any = {}; 

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private navProxy: NavProxyService,
        public remoteService: RemoteServiceProvider) {
        super();
    }

    onItemSelected(item) {
        // Rather than using:
        //     this.navCtrl.push(...)
        // Use our proxy:
        this.navProxy.pushDetail(ItemPage, item);
        switch (item.id) {
            case FUNC_ID.SEARCH_A_FOOD:
                
            break;
            case FUNC_ID.SEARCH_FOOD_FACT:
            break;
            case FUNC_ID.SEARCH_A_FOOD:
            break;
           
        }
    }


}

export interface IFoodDispInfo {

}

export enum FUNC_ID {
    INTRODUCTION = 0,
    SEARCH_A_FOOD = 1,
    SEARCH_FOOD_FACT = 2,
    COMING_SOON = 3
}   