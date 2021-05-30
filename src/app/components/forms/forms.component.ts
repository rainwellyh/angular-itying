import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  public peopleInfo:any={
    username: '余浩',
    sex: '1',
    cityList: ['北京','深圳','上海','广州'], //可选的列表
    city: '北京', //获取的值
    hobbyList: [{
      title:'吃饭',
      checked: false,
    },{
      title:'睡觉',
      checked: false,
    },{
      title:'喝茶',
      checked: true,
    }],
    mark: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  doSubmit(){
    console.log(this.peopleInfo)
  }
}
