import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from '../../../shared/services/company.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
})
export class CompanyComponent implements OnInit {
  isLoading: boolean;

  constructor(
    public service: CompanyService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSend(formData) {
    this.isLoading = true;
    this.service.save(formData)
      .subscribe(registred => {
        this.showSnackBar('Salvo com sucesso!');
        this.isLoading = false;
        this.router.navigate(['/view/restricted/company/list']);
      }, err => {
        this.isLoading = false;
    });
  }

  showSnackBar(msg) {
    this.snackBar.open(msg, 'Ok', {
      duration: 4000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }
}
