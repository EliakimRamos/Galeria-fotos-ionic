import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the AlbumsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-albums',
  templateUrl: 'albums.html',
})
export class AlbumsPage {
  albums:any = [];
  public refresher;
  public isrefreshing: boolean = false;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private http: HttpClient
            ) {

  }
  doRefresh(refresher) {
    this.refresher = refresher;
    this.isrefreshing = true;

    this.carregaAlbums();
  }
  ionViewDidLoad() {
    this.carregaAlbums(); 
  }

  carregaAlbums(){
    this.http.get("http://eliakimramos.com.br/teste/galeriaapi/api/albums")
    .subscribe(dados =>{
      this.albums = dados;
      if(this.isrefreshing){
        this.refresher.complete();
        this.isrefreshing = false;
      }
    } );
  }

}
