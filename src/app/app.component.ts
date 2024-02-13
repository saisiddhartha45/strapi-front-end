import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private dataServcie: DataService) {}
  dataList: any[] = []
  colors: any[]  = []
  ngOnInit(): void {
    this.getDataList()
    this.getColors()
  }
  getDataList() {
    this.dataServcie.getList().subscribe((data)=> {
      this.dataList = data.data
      console.log(this.dataList)
    })
  }

  getColors(){
    this.dataServcie.getColors().subscribe((color)=> {
      this.colors = color.data;
      console.log(this.colors)
    })
  }
  getClassForIndex(index: number): string {
    const colorIndex = index % this.colors.length;
    return this.colors[colorIndex]?.attributes.color || '';
  }
} 
