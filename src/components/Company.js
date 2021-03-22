import React, { Component } from "react";
import ReactEcharts from "echarts-for-react";
import './Comapny.css'
import { Grid } from '@material-ui/core'

class Company extends Component {
  render() {
    return (
        <Grid container style={{padding: '50px'}}>
            <Grid item xs={6}>
      <ReactEcharts
        option={{
          xAxis: {
            type: "category",
            data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
          },
          yAxis: {
            type: "value",
            scale : true,
            max : 2021,
            min : 2011,
            splitNumber : 5,
          },
          tooltip: {
            show: true,
            trigger: 'item'
          },
          legend: {},
          series: [{
              type: 'line',
            name: 'Vidteq',
            data: [null, null, 2012, null, null, null, null, null, null, null, null, 2014],
            connectNulls: true
        }, {
            type: 'line',
            name: 'Infosys',
            data: [2015, null, null, null, null, 2015, null, null, null, null, null, null],
            connectNulls: true
        }, {
            type: 'line',
            name: 'Capgemini',
            data: [null, null, null, null, null, 2015, 2019, null, null, null, null, null],
            connectNulls: true
        },
        {
            type: 'line',
            name: 'Iqvia (Current Company)',
            data: [null, null, null, null, null, null, null, 2019, null, null, null, null],
            connectNulls: true
        }
        ]
        }}
      />
      </Grid>
      <Grid item xs={6}><h3>EDUCATIONAL DETAILS</h3>
                  <div id="edudetspan" className="CSSTable">
                      <table>
                        <tr><td>Class</td><td >Percentage</td></tr>
                        <tr><td>S.S.L.C</td><td>88%</td></tr>
                        <tr><td>P.U.C</td><td>89%</td></tr>
                        <tr><td >B.E.</td><td>75%</td></tr>
                    </table>
                    </div>
                    <div>
                        <h3>Current Address</h3>
                        <p>
                    Flat No G1, Balaji Elite <br />
                    Balaji Enclave, Site No 31,<br />
                    Doddanekundi<br />
                    Bangalore - 560037<br />
                    <b>Mob: 9611396958</b>
                    </p>
                    </div>
                </Grid>
                </Grid>
    );
  }
}
export default Company;