    if (file.type.match('application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') || file.type.match('application/vnd.ms-excel')) {
      const reader: FileReader = new FileReader();
      reader.onload = (e: any) => {
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