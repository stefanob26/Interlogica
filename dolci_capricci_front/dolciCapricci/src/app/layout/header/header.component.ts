import {Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {environment} from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  viewLoginRoute = environment.viewLoginRoute;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  goToLogin() {
    this.router.navigate(['login']);
  }
}
