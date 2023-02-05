import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'mpbs-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: [ './file-input.component.scss' ],
})
export class FileInputComponent implements OnInit {
  @Input() formGroup!: FormGroup;
  @Input() formKey!: string;

  fileInput = new FormControl(null);

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
      if (!value || value?.length === 0) {
        this.fileInput.reset();
      }
    });
  }
}
