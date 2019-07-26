import { Component, OnInit, Input } from '@angular/core';
import { DonarInterface } from '../donar-interface';
import { SearchService } from '../search-service.service';

@Component({
  selector: 'app-fetchoperator',
  templateUrl: './fetchoperator.component.html',
  styleUrls: ['./fetchoperator.component.css']
})
export class FetchoperatorComponent implements OnInit {

  @Input() srchDonar:string;
  showHead = 'hidden';
  matchDonarList: DonarInterface[];
  constructor(private service:SearchService) { }

  ngOnInit() {
  }
  findO(showvis)
  {
    this.showHead=showvis;
    this.service.getDonar(this.srchDonar).subscribe(resp=>this.matchDonarList=resp);
  }
}
