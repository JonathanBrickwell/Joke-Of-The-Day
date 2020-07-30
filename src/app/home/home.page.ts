import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { AdMobAdsPlugin } from 'admob-capacitor'
import { JokesModel } from '../_models/jokes/jokes-model.model';
import { JokesServiceService } from '../_services/jokes-services/jokes-service.service';
import data from '../../assets/json/jokes.json';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  private allJokesContainer: JokesModel;
  private adMob: AdMobAdsPlugin;
  
  joke: string;
  setup: string;
  delivery: string;

  constructor(private jokesService: JokesServiceService) {
    this.displayBannerAd();
  }

  async ngOnInit() {
    this.getAllJokesdata();
    this.displayBannerAd();
  }

  async displayBannerAd() {
    this.adMob = Plugins.AdMobAds as AdMobAdsPlugin;
    await this.adMob.createBannerView({ bannerAdId: 'ca-app-pub-3159907247111386/7788760109' });
  }
  
  getAllJokesdata() {
      let random = Math.floor(Math.random() * data.length);
      console.log(random, data[random]);
    }
  

}
