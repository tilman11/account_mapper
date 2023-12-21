// file-upload.component.ts
import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

type AOA = any[][];

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
})
export class FileUploadComponent {
  data: AOA = [];
  hovering: boolean = false;
  fileReadSuccess: boolean = false;

  onFileChange(event: any) {
    if (event.target.files && event.target.files[0]) {
      this.readFile(event.target.files[0]);
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    if (event.dataTransfer && event.dataTransfer.files.length) {
      this.readFile(event.dataTransfer.files[0]);
    }
  }

  private readFile(file: File) {
    if (
      file.type.match(
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      ) ||
      file.type.match('application/vnd.ms-excel')
    ) {
      const reader: FileReader = new FileReader();
      reader.onload = (e: any) => {
        this.fileReadSuccess = true;
        const bstr: string = e.target.result;
        const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });
        const wsname: string = wb.SheetNames[0];
        const ws: XLSX.WorkSheet = wb.Sheets[wsname];
        this.data = XLSX.utils.sheet_to_json(ws, { header: 1 });
      };
      reader.readAsBinaryString(file);
    } else {
      alert('Please upload an Excel file.');
    }
  }
}
