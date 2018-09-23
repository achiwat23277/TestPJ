import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuPage } from '../MenuPage/menu';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items = [
    {id: 1, name: "Go to menu", address: "Bankok",},
  ];
  constructor(public navCtrl: NavController) {

  }
  go2Detail(){
    this.navCtrl.push(MenuPage);
  }

  itemSelected(item){//MenuPage
    console.log("Clicked items;" + item);//Clicked items; MenuPage
    this.navCtrl.push(MenuPage, {myItem: item});
    }
  
}

