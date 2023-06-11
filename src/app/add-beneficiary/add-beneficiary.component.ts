import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BeneficiaryService } from '../service/beneficiary.service';
import { CoreService } from '../service/core.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-beneficiary',
  templateUrl: './add-beneficiary.component.html',
  styleUrls: ['./add-beneficiary.component.css']
})
export class AddBeneficiaryComponent {
  

  constructor(private _beneService:BeneficiaryService, private _coreService:CoreService,private router:Router){}
  forms:FormGroup=new FormGroup({
    name: new FormControl("",Validators.required),
    address: new FormControl("",Validators.required),
    age: new FormControl("",[Validators.required,Validators.min(10), Validators.max(99)]),
    contact_information: new FormControl("",[Validators.required,Validators.min(1000000000), Validators.max(999999999999)]),
    relationship: new FormControl("",Validators.required),
  })
  proceedregister(){
    if(this.forms.valid){
      this._beneService.addBeneficiary(this.forms.value).subscribe({
        next: (val: any) => {
          this._coreService.openSnackBar('Beneficiary added successfully');
          this.router.navigate(['home'])
         
        },
        error: (err: any) => {
          console.error(err);
        },
      })
    }
  }
}
