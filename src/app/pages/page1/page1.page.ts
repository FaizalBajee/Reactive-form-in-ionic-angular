import { Component } from '@angular/core';
import { NavController, ViewDidEnter } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page {
  signUpForm!: FormGroup
  constructor(private fb: FormBuilder, private navCtrl: NavController) {
    this.signUpForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.maxLength(12)]],
      email: ['', [Validators.required, Validators.email]]
    })
  }
  goToStep2() {
    if (this.signUpForm.valid) {
      const signUpFormData = this.signUpForm.value
      this.navCtrl.navigateForward('/page2',{
        queryParams :{signUpFormData : JSON.stringify(signUpFormData)}
      })
    }
  }

}
