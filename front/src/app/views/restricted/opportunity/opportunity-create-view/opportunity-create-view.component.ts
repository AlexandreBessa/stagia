import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OpportunityService } from '../../../../shared/services/opportunity.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-opportunity-create-view',
  templateUrl: './opportunity-create-view.component.html',
  styleUrls: ['./opportunity-create-view.component.scss'],
})
export class OpportunityCreateViewComponent implements OnInit {
  isLoading: boolean;

  constructor(
    public service: OpportunityService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSend(formData) {
    this.isLoading = true;
    this.service.save(formData).subscribe(
      (registred) => {
        this.showSnackBar('Salvo com sucesso!');
        this.isLoading = false;
        this.router.navigate(['/view/restricted/opportunity/list']);
      },
      (err) => {
        this.isLoading = false;
      }
    );
  }

  showSnackBar(msg) {
    this.snackBar.open(msg, 'Ok', {
      duration: 4000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }
}

