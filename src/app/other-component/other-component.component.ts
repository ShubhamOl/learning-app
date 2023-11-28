import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-other-component',
  templateUrl: './other-component.component.html',
  styleUrls: ['./other-component.component.css']
})
export class OtherComponentComponent {

  constructor(private router:Router, private r: ActivatedRoute){

  }

  gotoLazyLoadedComponent(){
    this.router.navigate(["lazy-component"], {relativeTo:this.r})
  }

}
