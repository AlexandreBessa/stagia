import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { CompanyModel } from 'src/app/shared/models/company.model';
import { CompanyService } from 'src/app/shared/services/company.service';

import { map, startWith, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-opportunity-create-component',
  templateUrl: './opportunity-create-component.component.html',
  styleUrls: ['./opportunity-create-component.component.scss'],
})
export class OpportunityCreateComponentComponent implements OnInit {
  @Input() name: string = '';
  @Input() description: string = '';
  @Input() requirements: string = '';
  @Input() salary: string = '';
  @Input() company: string = '';
  @Input() isLoading: boolean = false;
  @Output() onSend = new EventEmitter();
  @Output() onCancel = new EventEmitter();

  registerForm: FormGroup;
  filteredOptions: Observable<CompanyModel[]>;
  options: CompanyModel[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private companyService: CompanyService
  ) {}

  ngOnInit(): void {
    this.buildRegisterForm();

    this.companyService.getCompanies().subscribe(
    (companies) => {
        console.log(companies);
        this.options = companies;
      }
    );

    this.filteredOptions = this.registerForm.controls.company.valueChanges.pipe(
      startWith(''),
      map((value) => (typeof value === 'string' ? value : value.name)),
      map((name) => this._filter(name))
    );
  }
  private _filter(name: string): CompanyModel[] {
    const filterValue = name.toLowerCase();
    return this.options?.filter(
      (c) => c.name.toLowerCase().indexOf(filterValue) === 0
    )
  }
  buildRegisterForm() {
    this.registerForm = this.formBuilder.group({
      name: new FormControl(this.name, [Validators.required]),
      description: new FormControl(this.description, [Validators.required]),
      requirements: new FormControl(this.requirements, [Validators.required]),
      salary: new FormControl(this.salary, [Validators.required]),
      company: new FormControl(this.company, [Validators.required]),
    });
  }
  displayFn(company: CompanyModel): string {
    return company && company.name ? company.name : '';
  }
  send() {
    console.log(this.registerForm.value)
    this.onSend.emit(this.registerForm.value);
  }

  cancel() {
    this.onCancel.emit(this.registerForm.value);
  }
}
