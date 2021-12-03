import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {

  myForm!: FormGroup;
  successMessage:string='';

  constructor(private _apiservice: ApiService,private _router: Router,private _activatedRoute: ActivatedRoute) {
    this.myForm = new FormGroup({
      id: new FormControl(null, Validators.required),
      nom: new FormControl(null, Validators.required),
      ip: new FormControl(null, Validators.required),
      etat: new FormControl(null, Validators.required),

    });
   }

  ngOnInit(): void {
  }

  register() {
    console.log(this.myForm.value);

      this._apiservice.addMachine(this.myForm.value)
        
  }

  movetomachines() {
    this._router.navigate(['../machines'], { relativeTo: this._activatedRoute });
  }

}
