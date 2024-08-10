import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController, ViewDidEnter } from '@ionic/angular';
@Component({
  selector: 'app-page3',
  templateUrl: './page3.page.html',
  styleUrls: ['./page3.page.scss'],
})
export class Page3Page implements ViewDidEnter {
  signUpFormData: any;
  signUpForm!: FormGroup;
  formatedTime = '';
  constructor(private fb: FormBuilder, private navCtrl: NavController, private route: ActivatedRoute) {
    this.signUpForm = this.fb.group({
      gender: ['', Validators.required],
      DOB: ['', Validators.required],
      time: ['', Validators.required]
    })
  }

  ionViewDidEnter(): void {
    this.route.queryParams.subscribe(params => {
      if (params && params['signUpFormData']) {
        this.signUpFormData = JSON.parse(params['signUpFormData'])
        console.log("passed data 3", this.signUpFormData)
      }
    })
  }

  datePick(event: any) {
    const selectedDate = event.detail.value.substring(0, 10);
    this.signUpForm.patchValue({ DOB: selectedDate });
  }
  
  timePick(event: any) {
    const selectedTime = event.detail.value
    this.signUpForm.patchValue({ time: selectedTime })
    this.formatedTime = this.formatTime(selectedTime)
  }

  formatTime(isoTime: string): string {
    const [hours, minutes] = isoTime.split('T')[1].split(':');
    const formattedHours = this.formatHours(hours);
    const amPm = this.getAmPm(hours);
    return `${formattedHours}:${minutes} ${amPm}`;
  }

  formatHours(hours: string): string {
    const hoursNumber = parseInt(hours, 10);
    if (hoursNumber === 0) return '12'; 
    if (hoursNumber > 12) return (hoursNumber - 12).toString(); 
    if (hoursNumber === 12) return '12'; 
    return hoursNumber.toString();
  }

  getAmPm(hours: string): string {
    const hoursNumber = parseInt(hours, 10);
    return hoursNumber >= 12 ? 'PM' : 'AM';
  }
  save() {
    if (this.signUpForm.valid) {
      const mergeData = {
        ...this.signUpFormData,
        ...this.signUpForm.value
      }
      console.log("final data:", JSON.stringify(mergeData))
    }
  }
}
