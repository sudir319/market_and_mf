import React, { Component } from "react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { AgGridReact } from "ag-grid-react";

class MfDataGrid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.data,
      mfName: this.props.mfName,
      columns: null,
      rows: null,
      tableHeight: null,
    };
  }

  prepareDataAndSetState = (response, duration) => {
    console.log(duration);
    let columnData = response[0];
    let columns = columnData.map((eachColumn) => {
      let eachField = {
        field: eachColumn,
        headerName: eachColumn,
      };

      if (eachColumn === "Scheme Name") {
        eachField["flex"] = 5;
      } else {
        eachField["flex"] = 1;
      }

      if (
        eachColumn === "Manager" ||
        eachColumn === "Scheme Name" ||
        eachColumn === duration
      ) {
        eachField["filter"] = "agTextColumnFilter";
      }

      if (
        eachColumn.indexOf("Scheme") !== 0 &&
        eachColumn.indexOf("Manager") !== 0
      ) {
        eachField["cellStyle"] = this.getCellStyle;
        eachField["columnStyle"] = this.getColumnStyle;
      }

      return eachField;
    });

    console.log(columns);

    let noOfCols = columns.length;
    let rows = response
      .filter((data, index) => index > 0)
      .map((eachArray) => {
        const eachRow = {};
        for (let index = 0; index < noOfCols; index++) {
          eachRow[columnData[index] + ""] =
            index > 2 ? parseInt(eachArray[index]) : eachArray[index];
        }
        return eachRow;
      });

    return {
      columns: columns,
      rows: rows,
      tableHeight: rows.length * 43,
    };
  };

  getColumnStyle = (params) => {
    return { backgroundColor: "grey" };
  };

  getCellStyle = (params) => {
    let backgroundColor = "lightgreen";
    if (parseInt(params.value) < 0) {
      backgroundColor = "orange";
    } else if (parseInt(params.value) === 0) {
      backgroundColor = null;
    }
    return { backgroundColor: backgroundColor };
  };

  render() {
    console.log(this.state);

    if (this.state.data != null) {
      let { columns, rows, tableHeight } = this.prepareDataAndSetState(
        this.state.data
      );

      return (
        <div
          className={"ag-theme-quartz"}
          style={{ height: tableHeight ?? 600 }}
        >
          {columns !== null ? (
            <AgGridReact rowData={rows} columnDefs={columns} />
          ) : (
            <div>Loading...</div>
          )}
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

export default MfDataGrid;
