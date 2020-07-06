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

  allJokesContainer: JokesModel;
  joke: string;

  private adMob: AdMobAdsPlugin;

  constructor(private jokesService: JokesServiceService) {}

  async ngOnInit() {
    this.getAllJokesdata();
    this.displayBannerAd();
  }

  async displayBannerAd() {
    this.adMob = Plugins.AdMobAds as AdMobAdsPlugin;
    await this.adMob.createBannerView({ bannerAdId: 'ca-app-pub-3940256099942544/6300978111' });
  }
  
  getAllJokesdata() {
    this.jokesService.getAllJokes().subscribe((allJokes: JokesModel) => {
      this.allJokesContainer = allJokes;
      this.joke = this.allJokesContainer.joke;
      console.log(this.allJokesContainer);
    })
  }

}
