// new way:
import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-mapping-table',
  templateUrl: './mapping-table.component.html',
  styleUrls: ['./mapping-table.component.css'],
})
export class MappingTableComponent implements OnInit {
  data: any[] = [];
  form: FormGroup;
  dropdownOptions = ['A', 'B', 'C'];

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.loadExcelFile();
    this.form = this.fb.group({
      rows: this.fb.array([])
    });
  }
    
  loadExcelFile() {
    const url = 'assets/Mapper_example.xlsx'; // Path to your file in the assets folder

    this.http.get(url, { responseType: 'arraybuffer' }).subscribe(response => {
      const data = new Uint8Array(response);
      const arr = new Array();
      for (let i = 0; i !== data.length; ++i) arr[i] = String.fromCharCode(data[i]);
      const bstr = arr.join("");

      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];
      this.data = XLSX.utils.sheet_to_json(ws, { header: 1 });
      console.log(this.data);
    });
  }

  ngOnInit() {
    // Load your Excel file here and then call createRows()
    this.loadExcelFile(); // Uncomment if loading Excel file on init
  }

  get rows(): FormArray {
    return this.form.get('rows') as FormArray;
  }

  private createRows(data: any[]) {
    // Clear existing form array
    while (this.rows.length !== 0) {
      this.rows.removeAt(0);
    }

    // Create a new form control for each row of data
    data.forEach(() => this.rows.push(this.fb.control('')));
  }

  onFileLoaded(excelData: any[]) {
    this.data = excelData;
    this.createRows(excelData);
  }

  onSubmit() {
    console.log(this.form.value);
    // Process form submission here
  }
}

