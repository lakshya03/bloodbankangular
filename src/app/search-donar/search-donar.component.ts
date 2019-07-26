import { Component, OnInit } from '@angular/core';
import { DonarInterface } from '../donar-interface';
import { SearchService } from '../search-service.service';

@Component({
  selector: 'app-search-donar',
  templateUrl: './search-donar.component.html',
  styleUrls: ['./search-donar.component.css']
})
export class SearchDonarComponent implements OnInit {
  bloodGroup:string;
  response:string;
  donarList: DonarInterface[];
  matchDonarList: DonarInterface[];
  constructor(private service:SearchService) { }

  ngOnInit() {
    // this.service.findAll().subscribe(resp=>this.donarList=resp);
  }
  onChange(val)
  {
    this.response=val;
  }
 
}
