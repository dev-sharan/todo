import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(private actRoute: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.actRoute.snapshot.params['name']);
  }

}
