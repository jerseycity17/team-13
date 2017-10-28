import { Component } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'create-challenge',
  templateUrl: './create-challenge.component.html',
  styleUrls: ['./app.component.css']
})
export class CreateChallengeComponent {
  private name: String;
  private email: String;
  private password: String;
  constructor(private router: Router) {}
  login = function() {
    // Do database call to check if user exists in the database
  }
}