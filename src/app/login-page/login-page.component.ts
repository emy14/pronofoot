import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Role} from '../enums/Role';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  angForm: FormGroup;
  errorMessage: string;

  constructor( private fb: FormBuilder, private router: Router,
  ) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      username: ['', [Validators.required] ],
      password: ['', Validators.required ]
    });
  }

  ngOnInit() {

  }


  /**
   * Session login
   * @returns valid login
   */
  async login() {


  }

}
