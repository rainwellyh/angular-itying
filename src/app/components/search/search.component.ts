import { Component, OnInit } from '@angular/core';
import { StorageService} from '../../services/storage.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public keywords:string = ''; //定义关键字
  public historyList:any[] = []; //定义查询历史列表

  constructor(public storage:StorageService) { }

  ngOnInit(): void {
    console.log("页面刷新");
    var searchlist = this.storage.get('searchlist');
    if (searchlist) {
      this.historyList = searchlist;
    }
  }

  doSearch(){
    //不存在重复的，并且不为空
    if(this.historyList.indexOf(this.keywords) == -1 && this.keywords!=''){
      this.historyList.push(this.keywords);
      this.storage.set('searchlist',this.historyList);
    }

    this.keywords='';
    console.log(this.keywords);
  }

  deleteHistory(key){
    this.historyList.splice(key,1);
    this.storage.set('searchlist', this.historyList);
  }
}
