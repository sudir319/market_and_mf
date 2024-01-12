import React, { Component } from 'react'
import ApexChart from './ApexChart';

class CandleStickCharts extends Component {
    constructor(props) {
      super(props)
      const date = new Date();
      date.setDate(date.getDate() - 7);

      this.state = {
         data: this.props.data,
         history : ['Week', 'Month', '3 Months', '6 Months', '1 Year'],
         currentDuration: 'Week',
         maxDate: date
      }
    }

    specifyPeriod = (duration) => {
        let date = new Date();
        switch(duration) {
            case 'Week': date.setDate(date.getDate() - 7); break;
            case 'Month': date.setMonth(date.getMonth() - 1); break;
            case '3 Months': date.setMonth(date.getMonth() - 3); break;
            case '6 Months': date.setMonth(date.getMonth() - 6); break;
            case '1 Year': date.setYear(date.getYear() - 1); break;
            default: break;
        }

        this.setState({...this.state, maxDate: date, currentDuration: duration});
    }

    render() {
        return (
        <div>
            <div align="center" style={{position: 'fixed', zIndex: 99}}>
                <table style={{tableCollapse:'collapse'}}>
                    <tr>
                        {
                            this.state.history.map(
                                eachDuration => <td><button onClick={() => this.specifyPeriod(eachDuration)}>
                                    {eachDuration === this.state.currentDuration ? 
                                        <b>{eachDuration}</b> : eachDuration}
                                    </button>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </td>
                            )
                        }
                    </tr>
                </table>
            </div>
            <br/>
            <hr/>
            <div >
                {
                    Object.keys(this.state.data).sort()
                    .map((symbol, id) => <ApexChart key = {id} symbol={symbol}
                        maxDate={this.state.maxDate} candleData={this.state.data[symbol]}/>)
                }
            </div>
        </div>)
    }
}

export default CandleStickCharts