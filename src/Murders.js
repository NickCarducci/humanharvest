import React from "react";
import { yearly, yearlypop } from "./mortal";
import { linecss, shortNumber } from "./vaxx";

const usdeaths = {
  "1985": {
    homicides: 8,
    arson: 43.6,
    checkable: 504.1275,
    currency: 162.3,
    m2: 2416.5
  },
  "1986": {
    homicides: 8.6,
    arson: 46.3,
    checkable: 586.85725,
    currency: 174.3,
    m2: 2612.8
  },
  "1987": {
    homicides: 8.3,
    arson: 42.5,
    checkable: 639.56925,
    currency: 188.6,
    m2: 2782.3
  },
  "1988": {
    homicides: 8.5,
    arson: 41,
    checkable: 663.4575,
    currency: 205.1,
    m2: 2931.1
  },
  "1989": {
    homicides: 8.7,
    arson: 41.4,
    checkable: 665.316,
    currency: 217.3,
    m2: 3054
  },
  "1990": {
    homicides: 9.4,
    arson: 41.7,
    checkable: 677.64675,
    currency: 235.1,
    m2: 3222.2
  },
  "1991": {
    homicides: 9.8,
    arson: 41,
    checkable: 712.49975,
    currency: 259,
    m2: 3342.1
  },
  "1992": {
    homicides: 9.3,
    arson: 40.8,
    checkable: 801.171,
    currency: 279.1,
    m2: 3404.6
  },
  "1993": {
    homicides: 9.5,
    arson: 37.7,
    checkable: 883.78475,
    currency: 307.8,
    m2: 3439.8
  },
  "1994": {
    homicides: 9,
    arson: 39.6,
    checkable: 920.37225,
    currency: 340.7,
    m2: 3483.4
  },
  "1995": {
    homicides: 8.2,
    arson: 36.7,
    checkable: 895.859,
    currency: 366.8,
    m2: 3555.6
  },
  "1996": {
    homicides: 7.4,
    arson: 34.6,
    checkable: 862.684,
    currency: 382.3,
    m2: 3729
  },
  "1997": {
    homicides: 6.8,
    arson: 32.6,
    checkable: 833.33,
    currency: 410,
    m2: 3925.7
  },
  "1998": {
    homicides: 6.3,
    arson: 29.8,
    checkable: 824.43725,
    currency: 442.2,
    m2: 4206.5
  },
  "1999": {
    homicides: 5.7,
    arson: 28.8,
    checkable: 827.28875,
    currency: 486.3,
    m2: 4517.3
  },
  "2000": {
    homicides: 5.5,
    arson: 24.7,
    checkable: 802.84225,
    currency: 522.8,
    m2: 4790.2
  },
  "2001": {
    homicides: 5.6,
    arson: 27.7,
    checkable: 773.61975,
    currency: 555.1,
    m2: 5203.7
  },
  "2002": {
    homicides: 5.6,
    arson: 26.8,
    checkable: 772.89525,
    currency: 609,
    m2: 5591.3
  },
  "2003": {
    homicides: 5.7,
    arson: 25,
    checkable: 816.10925,
    currency: 647.6,
    m2: 5981.4
  },
  "2004": {
    homicides: 5.5,
    arson: 23.6,
    checkable: 860.8315,
    currency: 680.7,
    m2: 6266.8
  },
  "2005": {
    homicides: 5.6,
    arson: 23.1,
    checkable: 882.65975,
    currency: 710.2,
    m2: 6535.1
  },
  "2006": {
    homicides: 5.8,
    arson: 24.4,
    checkable: 847.36025,
    currency: 740.4,
    m2: 6877.4
  },
  "2007": {
    homicides: 5.7,
    arson: 22.6,
    checkable: 793.768,
    currency: 756.6,
    m2: 7298.1
  },
  "2008": {
    homicides: 5.4,
    arson: 21.6,
    checkable: 791.01875,
    currency: 776.3,
    m2: 7790.8
  },
  "2009": {
    homicides: 5,
    arson: 19.5,
    checkable: 979.37575,
    currency: 851.8,
    m2: 8416
  },
  "2010": {
    homicides: 4.8,
    arson: 18.1,
    checkable: 1092.49325,
    currency: 888.7,
    m2: 8626.1
  },
  "2011": {
    homicides: 4.7,
    arson: 17.5,
    checkable: 1372.09275,
    currency: 964.2,
    m2: 9256
  },
  "2012": {
    homicides: 4.7,
    arson: 17.6,
    checkable: 1574.12625,
    currency: 1050.7,
    m2: 10050
  },
  "2013": {
    homicides: 4.5,
    arson: 14.9,
    checkable: 1791.016,
    currency: 1127.5,
    m2: 10727.3
  },
  "2014": {
    homicides: 4.4,
    arson: 14.5,
    checkable: 2023.32525,
    currency: 1211.5,
    m2: 11388.8
  },
  "2015": {
    homicides: 4.9,
    arson: 13.8,
    checkable: 2191.676,
    currency: 1301,
    m2: 12045.1
  },
  "2016": {
    homicides: 5.4,
    arson: 14.2,
    checkable: 2328.94825,
    currency: 1383.9,
    m2: 12860.1
  },
  "2017": {
    homicides: 5.3,
    arson: 13.2,
    checkable: 2521.21825,
    currency: 1479.3,
    m2: 13590.8
  },
  "2018": {
    homicides: 5,
    arson: 12.1,
    checkable: 2609.02025,
    currency: 1583.1,
    m2: 14103.9
  },
  "2019": {
    homicides: 5.1,
    arson: 10.9,
    checkable: 2708.362,
    currency: 1665.9,
    m2: 14818.2
  },
  "2020": {
    homicides: 6.5,
    arson: 13.2,
    checkable: 4188.1175,
    currency: 1853.8,
    m2: 17650.6
  },
  "2021": {
    homicides: 6.9,
    arson: null,
    checkable: 6181.37225,
    currency: 2070.3,
    m2: 20526
  },
  "2022": {
    homicides: null,
    arson: null,
    checkable: 7020.62275,
    currency: 2178.8,
    m2: 21571
  }
};
const adultuse = [
  [1975, 47.3],
  [1976, 52.8],
  [1977, 86.4],
  [1978, 59.2],
  [1979, 60.4],
  [1980, 60.3],
  [1981, 59.5],
  [1982, 58.7],
  [1983, 57],
  [1984, 54.9],
  [1985, 54.2],
  [1986, 50.9],
  [1987, 50.2],
  [1988, 47.2],
  [1989, 43.7],
  [1990, 40.7],
  [1991, 36.7],
  [1992, 32.6],
  [1993, 35.3],
  [1994, 38.2],
  [1995, 41.7],
  [1996, 44.9],
  [1997, 49.6],
  [1998, 49.1],
  [1999, 49.7],
  [2000, 48.8],
  [2001, 49],
  [2002, 47.8],
  [2003, 46.1],
  [2004, 45.7],
  [2005, 44.8],
  [2006, 42.3],
  [2007, 41.8],
  [2008, 42.6],
  [2009, 42],
  [2010, 43.8],
  [2011, 45.5],
  [2012, 45.2],
  [2013, 45.5],
  [2014, 44.4],
  [2015, 44.7],
  [2016, 44.5],
  [2017, 45],
  [2018, 43.6],
  [2019, 43.7],
  [2020, 43.7],
  [2021, 38.6],
  [2022, 38.3]
];
export default class Murders extends React.Component {
  constructor(props) {
    super(props);

    const minAge = 20,
      maxAge = 34;
    let dates = [];
    let marijuana = [];
    let alldeaths = [];
    let allarson = [];
    let checkable = [];
    let currency = [];
    let m2 = [];
    let all = [];
    let money = [];

    Object.keys(usdeaths).forEach((yr) => {
      const year = Number(yr);
      const data = usdeaths[year];
      dates.push(year);
      marijuana.push([year, adultuse.find((x) => x[0] === year)[1]]);
      if (data.currency) {
        currency.push([year, data.currency]);
        money.push(data.currency);
      }
      if (data.checkable) {
        checkable.push([year, data.checkable]);
        money.push(data.checkable);
      }
      if (data.m2) {
        m2.push([year, data.m2]);
        money.push(data.m2);
      }
      if (!data.homicides) return null;
      all.push(data.homicides);
      alldeaths.push([year, data.homicides]);
      if (!data.arson) return null;
      all.push(data.arson);
      allarson.push([year, data.arson]);
    });
    var highDeaths = Math.max(...all),
      lowDeaths = Math.min(...all),
      highDate = Math.max(...dates),
      lowDate = Math.min(...dates),
      highMoney = Math.max(...money),
      lowMoney = Math.min(...money);

    this.state = {
      showarson: true,
      noData: [],
      marijuana,
      alldeaths,
      allarson,
      checkable,
      currency,
      m2,
      lowMoney,
      highMoney,
      yAxisMoney: highMoney - lowMoney,
      yAxis: highDeaths - lowDeaths,
      xAxis: highDate - lowDate,
      highDeaths,
      lowDeaths,
      highDate,
      lowDate,
      minAge,
      maxAge
    };
  }
  render() {
    const { lowDate } = this.state;
    const noData = this.state.noData.map(([x, y]) => [
      ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * 0.9,
      0
    ]);
    const alldeaths = this.state.alldeaths.map(([x, y]) => [
      ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * 0.9,
      ((y - this.state.lowDeaths) / this.state.yAxis) * 150
    ]);
    const allarson = this.state.allarson.map(([x, y]) => [
      ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * 0.9,
      ((y - this.state.lowDeaths) / this.state.yAxis) * 150
    ]);
    const checkable = this.state.checkable.map(([x, y]) => [
      ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * 0.9,
      ((y - this.state.lowMoney) / this.state.yAxisMoney) * 150
    ]);
    const currency = this.state.currency.map(([x, y]) => [
      ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * 0.9,
      ((y - this.state.lowMoney) / this.state.yAxisMoney) * 150
    ]);
    const m2 = this.state.m2.map(([x, y]) => [
      ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * 0.9,
      ((y - this.state.lowMoney) / this.state.yAxisMoney) * 150
    ]);
    const marijuana = this.state.marijuana.map(([x, y]) => [
      ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * 0.9,
      ((y - 0) / 100) * 150
    ]);
    const labelstyle = {
      backgroundColor: "rgba(50,120,200,.6)",
      top: "0px",
      height: "min-content",
      display: "flex",
      maxWidth: "100%",
      left: "2px",
      flexWrap: "wrap"
    };
    const buttonStyle = {
      userSelect: "none",
      border: "1px solid black",
      color: "black",
      backgroundColor: "rgb(220,220,220)",
      borderRadius: "4px",
      padding: "5px",
      margin: "2px"
    };
    const space = " ";
    //console.log(deathsData);
    return (
      <div style={{ ...this.props.style, position: "relative" }}>
        <div style={{ width: "100%", minHeight: "230px" }}>
          <div style={labelstyle}>
            most annual homicides offending{" "}
            {shortNumber(Math.round(this.state.highestDeaths /*/5 */))}:{space}
            {lowDate}
            {space}-{space}
            {this.state.highDate}
          </div>
          <div style={{ transform: "translate(0px,200px)" }}>
            <svg
              className="all"
              style={linecss}
              xmlns="http://www.w3.org/2000/svg"
            >
              {noData.map(
                ([x, y], i) =>
                  !isNaN(x) &&
                  !isNaN(y) && (
                    <rect
                      x={x}
                      y={y}
                      width={2}
                      height={2}
                      stroke="rgb(230,230,230)"
                      fill="transparent"
                      strokeWidth={3}
                      key={i}
                    />
                  )
              )}
              {marijuana.map(
                ([x, y], i) =>
                  !isNaN(x) &&
                  !isNaN(y) && (
                    <rect
                      x={x}
                      y={y}
                      width={2}
                      height={2}
                      stroke={"orange"}
                      fill="blue"
                      strokeWidth={3}
                      key={i}
                    />
                  )
              )}
              {alldeaths.map(
                ([x, y], i) =>
                  !isNaN(x) &&
                  !isNaN(y) && (
                    <rect
                      x={x}
                      y={y}
                      width={2}
                      height={2}
                      stroke={"white"}
                      fill="blue"
                      strokeWidth={3}
                      key={i}
                    />
                  )
              )}
              {this.state.showarson &&
                allarson.map(
                  ([x, y], i) =>
                    !isNaN(x) &&
                    !isNaN(y) && (
                      <rect
                        x={x}
                        y={y}
                        width={2}
                        height={2}
                        stroke={"firebrick"}
                        fill="blue"
                        strokeWidth={3}
                        key={i}
                      />
                    )
                )}
              {m2.map(
                ([x, y], i) =>
                  !isNaN(x) &&
                  !isNaN(y) && (
                    <rect
                      x={x}
                      y={y}
                      width={2}
                      height={2}
                      stroke={"tan"}
                      fill="blue"
                      strokeWidth={3}
                      key={i}
                    />
                  )
              )}
              {checkable.map(
                ([x, y], i) =>
                  !isNaN(x) &&
                  !isNaN(y) && (
                    <rect
                      x={x}
                      y={y}
                      width={2}
                      height={2}
                      stroke={"blue"}
                      fill="blue"
                      strokeWidth={3}
                      key={i}
                    />
                  )
              )}
              {currency.map(
                ([x, y], i) =>
                  !isNaN(x) &&
                  !isNaN(y) && (
                    <rect
                      x={x}
                      y={y}
                      width={2}
                      height={2}
                      stroke={"forestgreen"}
                      fill="blue"
                      strokeWidth={3}
                      key={i}
                    />
                  )
              )}
            </svg>
          </div>
        </div>
        <div
          style={{
            cursor: "pointer",
            display: "flex",
            position: "absolute",
            bottom: "0px"
          }}
        >
          arson
          <input
            type="checkbox"
            checked={this.state.showarson}
            onClick={(e) => {
              const showarson = e.target.checked;
              console.log(showarson);
              this.setState({
                showarson
              });
            }}
          />
        </div>
        <div
          style={{
            cursor: "pointer",
            display: "flex",
            position: "absolute",
            bottom: "20px"
          }}
        ></div>
      </div>
    );
  }
}
