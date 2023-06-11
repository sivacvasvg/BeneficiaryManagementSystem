import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddBeneficiaryComponent } from './add-beneficiary/add-beneficiary.component';
import { EditBeneficiaryComponent } from './edit-beneficiary/edit-beneficiary.component';
import { DetailOfBeneficiaryComponent } from './detail-of-beneficiary/detail-of-beneficiary.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  { path:'addBeneficiary',component:AddBeneficiaryComponent},
  { path:'editBeneficiary/:id',component:EditBeneficiaryComponent},
  { path:'detail-of-beneficiary/:id',component:DetailOfBeneficiaryComponent},
  { path:'',redirectTo:"home",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
