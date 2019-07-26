import { Component, OnInit } from '@angular/core';
import { DonarInterface } from '../donar-interface';
import { SearchService } from '../search-service.service';

@Component({
  selector: 'app-add-donar',
  templateUrl: './add-donar.component.html',
  styleUrls: ['./add-donar.component.css']
})
export class AddDonarComponent implements OnInit {
  nextId=50;
  nextValue:number;
  donor: DonarInterface = {id:this.nextValue , donarName: "", bloodGroup: "",location:"",mobileNo:0};
  message:string;
  constructor(private service: SearchService) { }

  ngOnInit() {
  }
  onSubmit(){
this.nextValue=this.nextId+1;
    this.service.add(this.donor).subscribe(resp => {this.message = 'Donor added';});
  

  }
}
