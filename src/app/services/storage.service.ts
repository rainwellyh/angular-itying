import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  //设置数据，只能设置字符串
  set(key:string,value){
    localStorage.setItem(key,JSON.stringify(value));
  }
  get(key: string){
    return JSON.parse(localStorage.getItem(key));
  }
  remove(key: string){
    console.log(key);
    localStorage.removeItem(key);
  }
}
