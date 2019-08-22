import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(public storage: Storage) { }
  public set(settingName,value){
    return this.storage.set(settingName,value);
  }
  public async get(settingName){
    return await this.storage.get(settingName);
  }
  public async remove(settingName){
    return await this.storage.remove(settingName);
  }
  public clear() {
    this.storage.clear().then(() => {
      console.log('all keys cleared');
    });
  }
}
