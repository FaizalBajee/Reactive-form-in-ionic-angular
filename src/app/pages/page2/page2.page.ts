import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController, ViewDidEnter } from '@ionic/angular';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
})
export class Page2Page implements ViewDidEnter {
  signUpFormData: any;
  signUpForm!: FormGroup;
  passwordType: string = 'password';

  constructor(private fb: FormBuilder, private navCtrl: NavController, private route: ActivatedRoute) {
    this.signUpForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ionViewDidEnter() {
    this.route.queryParams.subscribe(params => {
      if (params && params['signUpFormData']) {
        this.signUpFormData = JSON.parse(params['signUpFormData'])
        console.log("passed data2", this.signUpFormData)
      }
    })
  }
  togglePasswordVisibility(): void {
    this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
  }
  goToStep3() {
    if (this.signUpForm.valid) {
      const mergeData = {
        ...this.signUpFormData,
        ...this.signUpForm.value
      }
      this.navCtrl.navigateForward('/page3', {
        queryParams: { signUpFormData: JSON.stringify(mergeData) }
      })
    }
  }

}
