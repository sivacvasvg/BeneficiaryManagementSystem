import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BeneficiaryService } from '../service/beneficiary.service';
import { CoreService } from '../service/core.service';
import { Location } from "@angular/common";

@Component({
  selector: 'app-detail-of-beneficiary',
  templateUrl: './detail-of-beneficiary.component.html',
  styleUrls: ['./detail-of-beneficiary.component.css']
})
export class DetailOfBeneficiaryComponent {
  datas:any;
  constructor( private location: Location ,private _beneService:BeneficiaryService,private _coreService:CoreService,private router:Router, private acRouter:ActivatedRoute){}
  ngOnInit(): void {
    this.acRouter.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
    });
  }
  getById(id: number) {
    this._beneService.getById(id).subscribe((result:any) => {
      this.datas = result;
      console.log("data"+result)
    });
  }
  goBack() {
    this.location.back();
  }
}
