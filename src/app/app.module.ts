import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { NavProxyService } from '../services/NavProxy.service';
import { MyApp } from './app.component';

import { HttpModule } from '@angular/http';


import {
    ItemsPage,
    ItemPage,
    PlaceholderPage } from '../pages';
import { RemoteServiceProvider } from '../providers/remote-service/remote-service';

@NgModule({
    declarations: [
        MyApp,
        ItemsPage,
        ItemPage,
        PlaceholderPage
    ],
    imports: [
        BrowserModule,
        HttpModule,
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        ItemsPage,
        ItemPage,
        PlaceholderPage
    ],
    providers: [
        NavProxyService,
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler },
    RemoteServiceProvider
    ]
})
export class AppModule { }
