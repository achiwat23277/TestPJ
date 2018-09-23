import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
<<<<<<< HEAD
import { DescriptPage } from '../pages/DescriptPage/DescriptPage';
=======
import { MenuPage } from '../pages/MenuPage/menu';

>>>>>>> 862f6818e579000a2896b8e086331374d2355098

@NgModule({
  declarations: [
    MyApp,
    HomePage,
<<<<<<< HEAD
    DescriptPage
=======
    MenuPage
>>>>>>> 862f6818e579000a2896b8e086331374d2355098
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
<<<<<<< HEAD
    DescriptPage
=======
    MenuPage
>>>>>>> 862f6818e579000a2896b8e086331374d2355098
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
