import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { AdMobAdsPlugin } from 'admob-capacitor'
import { JokesModel } from '../_models/jokes/jokes-model.model';
import { JokesServiceService } from '../_services/jokes-services/jokes-service.service';

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

  constructor(private jokesService: JokesServiceService) {}

  async ngOnInit() {
    this.getAllJokesdata();
    this.displayBannerAd();
  }

  async displayBannerAd() {
    this.adMob = Plugins.AdMobAds as AdMobAdsPlugin;
    await this.adMob.createBannerView({ bannerAdId: 'ca-app-pub-5682907146760322/8412616645' });
  }
  
  getAllJokesdata() {
    this.jokesService.getAllJokes().subscribe((allJokes: JokesModel) => {
      this.allJokesContainer = allJokes;
      this.joke = this.allJokesContainer.joke;
      this.setup = this.allJokesContainer.setup;
      this.delivery = this.allJokesContainer.delivery;
      console.log(this.allJokesContainer);
    })
  }

}
