import { Component, OnInit, TemplateRef  } from '@angular/core';
import { CommonServiceService } from '../commonservice/common-service.service'
import { HttpClient } from '@angular/common/http';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, FormBuilder, Validators  } from '@angular/forms';
import { catchError } from 'rxjs/operators';
@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss']
})
export class TasklistComponent implements OnInit {

  modalRef: BsModalRef;
  items: any = [];
  delId: any;

  profileForm = this.fb.group({
    projectName: ['',Validators.required],
    taskDetail: ['',Validators.required],
    assignedTo: ['',Validators.required],
    deliverOn: ['',Validators.required],
  });


  createTask(){
      this.apiService.post('/api/v1/task/add', this.profileForm.value ).subscribe((response: any)=>{
        if (response.status === 200 && response.data) {
          console.log(response);
        } else {
          console.log('SORRRY');
        }
      });
  }
  


    constructor( 
        private apiService: CommonServiceService,
        private modalService: BsModalService,
        private fb: FormBuilder
     ) { this.getAllData(); }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }


  ngOnInit(){}

  // deleteTask(delId: any) {
  //   this.apiService.delete('/api/v1/task/del/', delId).subscribe((response: any) => {
  //     if (response.status === 200) {
  //       this.getAllData();
  //     } else {
  //       //this.toastr.error('Error while deleting', 'Error');
  //     }
  //   });
  // }


  getAllData(){
    var reqData : any;
    this.apiService.getdata('/api/v1/task/getall', reqData ).subscribe((response: any)=>{
        if (response.status === 200 && response.data) {
          console.log(response.data)
        this.items = response.data;
        } else {
          console.log('SORRRY');
        }
    });
} 


}
