import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
//import { Patient } from '../patient';

@Component({
  selector: 'app-show-patient',
  templateUrl: './patent.component.html',
  styleUrls: ['./patent.component.css']
})
export class ShowPatientComponent implements OnInit {

  patients:any;
  message:any;
  patientId:any;
  tablehide:boolean=false;


  constructor(private service:PatientService) { }

  public deletePatient(patientId:number){
    let response= this.service.deletePatient(patientId);
    response.subscribe((data)=>this.patients=data);

   
   }

   public getPatientDetails(patientId:number){
    let response= this.service.getPatientById(patientId);
    response.subscribe((data)=>this.patients=data);
    
 
   // this.patients=data.patients;

    console.log("data--",this.patients)
   
   }

  ngOnInit(): void {

    // let response = this.service.getAllPatient();
    // response.subscribe((data)=>this.patients=data);
  }

}