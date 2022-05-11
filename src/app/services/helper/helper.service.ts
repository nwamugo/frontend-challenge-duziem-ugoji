import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class HelperService {
  loading: any;

  constructor(
    public loadingCtrl: LoadingController
  ) { }

  async showLoader(msg) {
    this.loading = await this.loadingCtrl.create({
      message: msg
    });
    await this.loading.present();
    return this.loading
  }

  hideLoader() {
    if (this.loading)
      this.loading.dismiss()
        .catch(() => console.warn("loader already dismissed"))
  }
}
