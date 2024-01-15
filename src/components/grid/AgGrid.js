import React, { Component } from "react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { AgGridReact } from "ag-grid-react";

class AgGrid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mfName: this.props.mfName,
      columns: null,
      rows: null,
      tableHeight: null,
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/mf/getStats/" + this.state.mfName)
      .then((response) => response.json())
      .then((response) => {
        let columnData = response[0];
        let columns = columnData.map((eachColumn) => {
          let eachField = {
            field: eachColumn,
          };

          if (eachColumn.indexOf("Scheme Name") !== 0) {
            eachField["flex"] = 1;
          } else {
            eachField["flex"] = 3;
            eachField["filter"] = "agTextColumnFilter";
          }

          if (eachColumn.indexOf("Scheme") !== 0) {
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
              eachRow[columnData[index] + ""] = eachArray[index];
            }
            return eachRow;
          });

        this.setState({
          ...this.state,
          columns: columns,
          rows: rows,
          tableHeight: rows.length * 43,
        });
      });
  }

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
    console.log(this.state.tableHeight);
    return (
      <div
        className={"ag-theme-quartz"}
        style={{ height: this.state.tableHeight ?? 600 }}
      >
        {this.state.columns != null ? (
          <AgGridReact
            rowData={this.state.rows}
            columnDefs={this.state.columns}
          />
        ) : (
          <div>Loading...</div>
        )}
      </div>
    );
  }
}

export default AgGrid;
