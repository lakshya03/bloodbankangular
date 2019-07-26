import { Component } from '@angular/core';
import{NavigationLinks} from './navigation-links';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bloodbank';
  links:NavigationLinks[] =[{text:'Add Donar',link:'/add'},{text:'Search the Donar',link:'/search'}];
}
