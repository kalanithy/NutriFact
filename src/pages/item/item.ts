import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { _DetailPage } from '../';
import { RemoteServiceProvider } from '../../providers/remote-service/remote-service';

@IonicPage()
@Component({
    selector: 'page-item',
    templateUrl: 'item.html',
})
export class ItemPage extends _DetailPage {

    item: any = null;
    foodSearchResult: any = null;

    foodDetailResult:any = null;

    //FromUI
    inputSearchQuery: string = "";

    showMainResultFlag:boolean = true; // to show main search result
    showDetailResultFlag:boolean = true; // to show detail search result

    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        public remoteService: RemoteServiceProvider) {

        super();
        this.item = navParams.data;

        this.initDisp();
    }

    initDisp() {
        this.showMainResultFlag = true; 
        this.showDetailResultFlag = true;

    }

    searchFoodData() {
        this.showMainResultFlag = false; 
        this.showDetailResultFlag = true;
        if (this.inputSearchQuery) { }
        this.remoteService.getFoodInfo(this.inputSearchQuery).then(
        (resolveData:any)=>{
            this.foodSearchResult = resolveData.list.item;
        },
        (err)=>{});

    }
    
    // to display detailed info
    displayMore(item) {
        this.showMainResultFlag = true;
        this.showDetailResultFlag = false;
        console.log(item);
        if (this.inputSearchQuery) { }
        this.remoteService.getFoodInfoDetail(item.ndbno).then(
        (resolveData:any)=>{
            this.foodDetailResult = JSON.stringify(resolveData);
        },
        (err)=>{});
    }


    // to show hide search/detail result
    showMainResult() {
        this.showMainResultFlag = false;
        this.showDetailResultFlag = true;
    }
}
