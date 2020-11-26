import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-company-create-component',
  templateUrl: './company-create-component.component.html',
  styleUrls: ['./company-create-component.component.scss'],
})
export class CompanyCreateComponentComponent implements OnInit {

  @Input() name: string = '';
  @Input() cnpj: string = '';
  @Input() phone: string = '';
  @Input() isLoading: boolean = false;


  @Output() onSend = new EventEmitter();

  registerForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.buildRegisterForm();
  }

  buildRegisterForm() {
    this.registerForm = this.formBuilder.group({
      name: new FormControl(this.name, [Validators.required]),
      cnpj: new FormControl(this.cnpj, [Validators.required]),
      phone: new FormControl(this.phone, [Validators.required]),
    });
  }

  send() {
    this.onSend.emit(this.registerForm.value);
  }
}
