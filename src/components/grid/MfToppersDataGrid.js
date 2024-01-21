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
      noOfFundsToShow: this.props.noOfFundsToShow,
      columns: null,
      rows: null,
      tableHeight: null,
    };
  }

  render() {
    let data = this.props.data;
    if (this.props.noOfFundsToShow !== "All") {
      data = data.slice(0, this.props.noOfFundsToShow);
    }

    let { columns, rows, tableHeight } = this.prepareDataAndSetState(
      data,
      this.props.duration
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
