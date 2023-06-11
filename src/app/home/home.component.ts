import { Component, OnInit, ViewChild } from '@angular/core';
import { CoreService } from '../service/core.service';
import { BeneficiaryService } from '../service/beneficiary.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = [
    
    'name',
    'address',
    'age',
    'contact_information',
    'relationship',
    
    'action',
  ];
  dataSource!: MatTableDataSource<any>;
  

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private _beneService:BeneficiaryService, private _coreService:CoreService,private router:Router){}
  ngOnInit(): void {
    this.getEmployeeList();
    
  }
  getEmployeeList() {
    this._beneService.getBeneficiary().subscribe({
      next: (res) => {
        console.log(res)
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  processDelete(bookid:any){
    this._beneService.deleteBeneficiary(bookid)
    .subscribe({
      next: (val: any) => {
        this._coreService.openSnackBar('Beneficiary deleted successfully');
       this.getEmployeeList();
       
      },
      error: (err: any) => {
        console.error(err);
      },
    }
      
    
    )
  }
  getUserDetail(id:any) {
    this.router.navigate(['detail-of-beneficiary', id]);
    console.log('details'+' '+id);
    
  }

}
