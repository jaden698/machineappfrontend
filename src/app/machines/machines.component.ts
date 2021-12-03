import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Machine } from '../machine';

@Component({
  selector: 'app-machines',
  templateUrl: './machines.component.html',
  styleUrls: ['./machines.component.css']
})
export class MachinesComponent implements OnInit {

  machines!:Machine[
    
  ]

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getMachines()
  }

  getMachines(): void {
    this.apiService.getMachines().subscribe((res:any)=>{
      console.log(res);

      this.machines = res;
      console.log(this.machines)
    })
    
    
  }


}
