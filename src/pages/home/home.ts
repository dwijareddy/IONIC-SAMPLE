import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  slideData = [
    { image: "../../assets/images/chi1.jpg" },
    { image: "../../assets/images/chi2.jpg" },
    { image: "../../assets/images/chi3.jpg" }]
  constructor(public navCtrl: NavController) {
  }

}
