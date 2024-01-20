import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import MfDataGrid from "./MfDataGrid";
import { AgGridReact } from "ag-grid-react";

class MfToppersDataGrid extends MfDataGrid {
  constructor(props) {
    super(props);

    this.state = {
      duration: this.props.duration,
      data: this.props.data,
      columns: null,
      rows: null,
      tableHeight: null,
    };
  }

  render() {
    console.log(this.state);
    let { columns, rows, tableHeight } = this.prepareDataAndSetState(
      this.props.data
    );

    return (
      <div
        className={"ag-theme-quartz"}
        style={{ height: tableHeight + 1 ?? 600 }}
      >
        {columns !== null ? (
          <AgGridReact rowData={rows} columnDefs={columns} />
        ) : (
          <div>Loading...</div>
        )}
      </div>
    );
  }
}

export default MfToppersDataGrid;
