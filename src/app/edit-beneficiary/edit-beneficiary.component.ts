import { Component, OnInit } from '@angular/core';
import { BeneficiaryService } from '../service/beneficiary.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CoreService } from '../service/core.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-beneficiary',
  templateUrl: './edit-beneficiary.component.html',
  styleUrls: ['./edit-beneficiary.component.css']
})
export class EditBeneficiaryComponent implements OnInit {
  editdata:any;
  datas:any;
  forms:FormGroup=new FormGroup({
    name: new FormControl("",Validators.required),
    address: new FormControl("",Validators.required,),
    age: new FormControl("",[Validators.required,Validators.min(10), Validators.max(99)]),
    contact_information: new FormControl("",[Validators.required,Validators.min(1000000000), Validators.max(999999999999)]),
    relationship: new FormControl("",Validators.required),
    id:new FormControl()
  })
constructor(private _beneService:BeneficiaryService,private _coreService:CoreService,private router:Router, private acRouter:ActivatedRoute){}
ngOnInit(): void {
  this.acRouter.paramMap.subscribe((param) => {
    var id = Number(param.get('id'));
    this.getById(id);
  });
}
getById(id: number) {
  this._beneService.getById(id).subscribe((res:any) => {
    this.editdata = res;
    console.log("datas"+this.editdata);
    this.forms.setValue({
      name: this.editdata.name,
      address: this.editdata.address, age: this.editdata.age, contact_information: this.editdata.contact_information,
      relationship: this.editdata.relationship, id: this.editdata.id
    });
  });
}
update() {
  this._beneService.updateBeneficiary(this.forms.value)
  .subscribe({
    next:(data:any) => {
      
      this._coreService.openSnackBar('Beneficiary updated successfully');
          this.router.navigate(['home'])

    },
    error:(err: any) => {
      console.log(err);
    }
  })
}
}
