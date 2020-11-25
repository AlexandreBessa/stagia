import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  childData: Data;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.childData = this.route.snapshot?.firstChild?.data;
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.childData = this.route.snapshot.firstChild.data;
      }
    });
  }
}
