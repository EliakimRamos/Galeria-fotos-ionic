import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the GaleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-galery',
  templateUrl: 'galery.html',
})
export class GaleryPage {
  dadosAlbum:any = [];
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private http: HttpClient) {
  }

  ionViewDidLoad() {
    const albumId = this.navParams.get('album');
    this.http.get<any>(`http://eliakimramos.com.br/teste/galeriaapi/api/albums/${albumId}/photos`)
             .subscribe(dados =>{ this.dadosAlbum = dados.data;
              console.log(this.dadosAlbum);
             });
  }

}
