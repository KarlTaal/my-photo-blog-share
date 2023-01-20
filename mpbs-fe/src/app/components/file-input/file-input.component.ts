import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'mpbs-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: [ './file-input.component.scss' ],
})
export class FileInputComponent implements OnInit {
  @Input() formGroup!: FormGroup;
  @Input() formKey!: string;

  @ViewChild('fileInput') fileInput!: ElementRef;

  ngOnInit(): void {
    this.initClearSubcription();
  }

  onFileChange(event: any) {
    if (event?.target?.files) {
      const patch: { [key: string]: string; } = {};
      patch[this.formKey] = event.target.files;
      this.formGroup.patchValue(patch);
    }
  }

  private initClearSubcription() {
    this.formGroup.get(this.formKey)?.valueChanges.subscribe(value => {
      if (!value ) {
        this.fileInput.nativeElement.value = '';
      }
    });
  }
}
