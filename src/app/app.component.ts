import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'rxforms';

  nameField: FormControl = new FormControl("rx");

  productForm: FormGroup = new FormGroup({
    name: new FormControl("rx", Validators.required)
  });

  ngOnInit() {
    this.nameField.valueChanges.subscribe(x => {

    });

    this.productForm.statusChanges.subscribe(newStatus => {
      console.log(newStatus);
    });
  }

  resetForm() {

    this.nameField.reset();
  }

  submitForm() {
    console.log("form submitted");
    console.log("name : " + this.productForm.controls["name"].value);
  }

}
