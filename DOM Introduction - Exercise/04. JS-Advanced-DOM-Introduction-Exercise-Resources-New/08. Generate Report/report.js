function generateReport() {
  const headers = document.querySelectorAll('th input[type="checkbox"]');

  const selectedColumns = [];

  for (let i = 0; i < headers.length; i++) {
    if (headers[i].checked) {
      selectedColumns.push(headers[i].name);
    }
  }

  const report = [];

  const rows = document.querySelectorAll("tbody tr");

  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const rowData = {};

    const cells = row.querySelectorAll("td");

    for (let j = 0; j < cells.length; j++) {
      if (selectedColumns.includes(headers[j].name)) {
        const columnName = headers[j].name;
        rowData[columnName] = cells[j].textContent;
      }
    }

    report.push(rowData);
  }

  const jsonReport = JSON.stringify(report);

  const outputTextarea = document.getElementById("output");
  outputTextarea.value = jsonReport;
}
