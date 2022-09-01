import React from "react";
import { retroo } from "./retrodata";
import { linecss, shortNumber } from "./vaxx";

const frequency = (chosenfrequency, a, range) => {
  var frequency = null;
  if (!chosenfrequency && range) {
    if (a === 0) {
      frequency = ["5-14"];
    } else if (a === 1) {
      frequency = ["15-24"];
    } else if (a === 2) {
      frequency = ["25-39"];
    } else if (a === 3) {
      frequency = ["40-54"];
    } else if (a === 4) {
      frequency = ["55-69"];
    } else if (a === 5) {
      frequency = ["70-79"];
    } else if (a === 6) {
      frequency = ["80-100"];
    }
  } else if (chosenfrequency || range) {
    //high
    if (a === 0) {
      frequency = ["20-24"];
    } else if (a === 1) {
      frequency = ["25-29"];
    } else if (a === 2) {
      frequency = ["30-34"];
    } else if (a === 3) {
      frequency = ["35-39"];
    } else if (a === 4) {
      frequency = ["40-44"];
    } else if (a === 5) {
      frequency = ["45-49"];
    } else if (a === 6) {
      frequency = ["55-59"];
    }
  } else {
    //cohort
    if (a === 0) {
      frequency = ["5-9", "10-14"];
    } else if (a === 1) {
      frequency = ["15-19", "20-24"];
    } else if (a === 2) {
      frequency = ["25-29", "30-34", "35-39"];
    } else if (a === 3) {
      frequency = ["40-44", "45-49", "50-54"];
    } else if (a === 4) {
      frequency = ["55-59", "60-64", "65-69"];
    } else if (a === 5) {
      frequency = ["70-74", "75-79"];
    } else if (a === 6) {
      frequency = ["80-84", "85-89", "90-94", "95-99", "100"];
    }
  }
  return frequency;
};
class Retro extends React.Component {
  constructor(props) {
    super(props);

    let date = [];
    let noData = [];
    var averageLifetimeData = [];
    var averageLifetime = [];
    let mortalZeroNJData = [];
    var mortalZeroNJ = [];
    let mortalEightyFiveNJDataAge = [];
    let mortalEightyFiveNJAge = [];
    let mortalSixtyFiveNJDataAge = [];
    let mortalSixtyFiveNJAge = [];
    let mortalSeventyFiveNJDataAge = [];
    let mortalSeventyFiveNJAge = [];
    let mortalFiftyNJDataAge = [];
    let mortalFiftyNJAge = [];
    let mortalZeroNJDataAge = [];
    let mortalZeroNJAge = [];
    let mortalFiftyNJData = [];
    let mortalFiftyNJ = [];
    let mortalSeventyFiveNJData = [];
    let mortalSeventyFiveNJ = [];
    let mortalSixtyFiveNJData = [];
    let mortalSixtyFiveNJ = [];
    let mortalEightyFiveNJData = [];
    let mortalEightyFiveNJ = [];
    let mortalNinetyFiveNJData = [];
    let mortalNinetyFiveNJ = [];
    let mortalOneTenNJData = [];
    let mortalOneTenNJ = [];
    let mZeroNJData = [];
    let mEightyFiveNJDataAge = [];
    let mSixtyFiveNJDataAge = [];
    let mSeventyFiveNJDataAge = [];
    let mFiftyNJDataAge = [];
    let mZeroNJDataAge = [];
    let mFiftyNJData = [];
    let mSixtyFiveNJData = [];
    let mSeventyFiveNJData = [];
    let mEightyFiveNJData = [];
    let mNinetyFiveNJData = [];
    let mOneTenNJData = [];
    let avgLifetime = {};

    let yZeroNJDataAge = [];
    let yFiftyNJDataAge = [];
    let ySixtyFiveNJDataAge = [];
    let ySeventyFiveNJDataAge = [];
    let yEightyFiveNJDataAge = [];
    let yNinetyFiveNJDataAge = [];
    let yOneTenNJDataAge = [];

    let yearlyZeroNJDataAge = [];
    let yearlyZeroNJAge = [];
    let yearlyFiftyNJDataAge = [];
    let yearlyFiftyNJAge = [];
    let yearlySeventyFiveNJDataAge = [];
    let yearlySeventyFiveNJAge = [];
    let yearlySixtyFiveNJDataAge = [];
    let yearlySixtyFiveNJAge = [];
    let yearlyEightyFiveNJDataAge = [];
    let yearlyEightyFiveNJAge = [];
    let yearlyNinetyFiveNJDataAge = [];
    let yearlyNinetyFiveNJAge = [];
    let yearlyOneTenNJDataAge = [];
    let yearlyOneTenNJAge = [];
    //const val = (d, p = 0 /*1000*/) => Math.round((d / 100000) * p); // *1000);
    //onst calculate = (x) => (x.deaths ? x.deaths : val(x.dx, x.pop));
    Object.keys(retroo).forEach((year) => {
      Object.keys(retroo[year]).forEach((age) => {
        if (!avgLifetime[age]) avgLifetime[age] = { total: 0, length: 0, year };
        const state = {
          year,
          length: avgLifetime[age].length + 1,
          total:
            //(avgLifetime[age].total + calculate(x)) / avgLifetime[x.age].total
            avgLifetime[age].total + retroo[year][age]
          ///avgLifetime[age].length + 1
        };
        avgLifetime[age] = state;
      });
    });
    //console.log(avgLifetime);
    Object.keys(avgLifetime).forEach((y, i) => {
      const x = Object.values(avgLifetime)[i];
      averageLifetime.push(x.total / x.length);
      averageLifetimeData.push([x.year, x.total / x.length]);
    });
    //console.log(retroo);
    const isbtwn = (age, test) => {
      if (isNaN(age)) return null;
      const beg = test.split("-");
      return age > Number(beg[0]) && age < Number(beg[1]);
    };
    Object.keys(retroo).forEach((yearSet, i) => {
      const year = yearSet; //Number(yearSet.split("-")[1]);
      noData.push([year, 0]);
      date.push(year);
      /*const thisdecade = popdata.find(
        (x) => x.year - year < 5 && x.year - year > -5
      );*/
      Object.keys(retroo[year]).forEach((age) => {
        if (isbtwn(age, "5-9") || isbtwn(age, "10-14")) {
          mZeroNJData.push([year, retroo[year][age]]);
        } else if (isbtwn(age, "15-19") || isbtwn(age, "20-24")) {
          mFiftyNJData.push([year, retroo[year][age]]);
        } else if (
          isbtwn(age, "25-29") ||
          isbtwn(age, "30-34") ||
          isbtwn(age, "35-39")
        ) {
          mSixtyFiveNJData.push([year, retroo[year][age]]);
        } else if (
          isbtwn(age, "40-44") ||
          isbtwn(age, "45-49") ||
          isbtwn(age, "50-54")
        ) {
          mSeventyFiveNJData.push([year, retroo[year][age]]);
        } else if (isbtwn(age, "55-59") || isbtwn(age, "60-64")) {
          mEightyFiveNJData.push([year, retroo[year][age]]);
        } else if (
          isbtwn(age, "65-69") ||
          isbtwn(age, "70-74") ||
          isbtwn(age, "75-79")
        ) {
          mNinetyFiveNJData.push([year, retroo[year][age]]);
        } else if (
          isbtwn(age, "80-84") ||
          isbtwn(age, "85-89") ||
          isbtwn(age, "90-94") ||
          isbtwn(age, "95-99") ||
          isbtwn(age, "100")
        ) {
          mOneTenNJData.push([year, retroo[year][age]]);
        }
      });
    }); //everywhere wrourl
    date.forEach((x) => {
      let yOA = 0;
      yOneTenNJDataAge.forEach((obj) => {
        if (obj[0] === x) yOA = yOA + obj[1];
      });
      yearlyOneTenNJAge.push(yOA);
      yearlyOneTenNJDataAge.push([x, yOA]);
      let yNA = 0;
      yNinetyFiveNJDataAge.forEach((obj) => {
        if (obj[0] === x) yNA = yNA + obj[1];
      });
      yearlyNinetyFiveNJAge.push(yNA);
      yearlyNinetyFiveNJDataAge.push([x, yNA]);
      let yAA = 0;
      yEightyFiveNJDataAge.forEach((obj) => {
        if (obj[0] === x) yAA = yAA + obj[1];
      });
      yearlyEightyFiveNJAge.push(yAA);
      yearlyEightyFiveNJDataAge.push([x, yAA]);
      let yEA = 0;
      ySeventyFiveNJDataAge.forEach((obj) => {
        if (obj[0] === x) yEA = yEA + obj[1];
      });
      yearlySeventyFiveNJAge.push(yEA);
      yearlySeventyFiveNJDataAge.push([x, yEA]);
      let ySA = 0;
      ySixtyFiveNJDataAge.forEach((obj) => {
        if (obj[0] === x) ySA = ySA + obj[1];
      });
      yearlySixtyFiveNJAge.push(ySA);
      yearlySixtyFiveNJDataAge.push([x, ySA]);
      let yMA = 0;
      yFiftyNJDataAge.forEach((obj) => {
        if (obj[0] === x) yMA = yMA + obj[1];
      });
      yearlyFiftyNJAge.push(yMA);
      yearlyFiftyNJDataAge.push([x, yMA]);
      let yZA = 0;
      yZeroNJDataAge.forEach((obj) => {
        if (obj[0] === x) yZA = yZA + obj[1];
      });
      yearlyZeroNJAge.push(yZA);
      yearlyZeroNJDataAge.push([x, yZA]);

      let totmO = 0;
      mOneTenNJData.forEach((obj) => {
        if (obj[0] === x) totmO = totmO + obj[1];
      });
      mortalOneTenNJ.push(totmO);
      mortalOneTenNJData.push([x, totmO]);

      let totmN = 0;
      mNinetyFiveNJData.forEach((obj) => {
        if (obj[0] === x) totmN = totmN + obj[1];
      });
      mortalNinetyFiveNJ.push(totmN);
      mortalNinetyFiveNJData.push([x, totmN]);
      let totmE = 0;
      mEightyFiveNJData.forEach((obj) => {
        if (obj[0] === x) totmE = totmE + obj[1];
      });
      mortalEightyFiveNJ.push(totmE);
      mortalEightyFiveNJData.push([x, totmE]);
      let totmSe = 0;
      mSeventyFiveNJData.forEach((obj) => {
        if (obj[0] === x) totmSe = totmSe + obj[1];
      });
      mortalSeventyFiveNJ.push(totmSe);
      mortalSeventyFiveNJData.push([x, totmSe]);
      let totmS = 0;
      mSixtyFiveNJData.forEach((obj) => {
        if (obj[0] === x) totmS = totmS + obj[1];
      });
      mortalSixtyFiveNJ.push(totmS);
      mortalSixtyFiveNJData.push([x, totmS]);
      let totmF = 0;
      mFiftyNJData.forEach((obj) => {
        if (obj[0] === x) totmF = totmF + obj[1];
      });
      mortalFiftyNJ.push(totmF);
      mortalFiftyNJData.push([x, totmF]);
      let totmZ = 0;
      mZeroNJData.forEach((obj) => {
        if (obj[0] === x) totmZ = totmZ + obj[1];
      });
      mortalZeroNJ.push(totmZ);
      mortalZeroNJData.push([x, totmZ]);
      let totmEFA = 0;
      mEightyFiveNJDataAge.forEach((obj) => {
        if (obj[0] === x) totmEFA = totmEFA + obj[1];
      });
      mortalEightyFiveNJAge.push(totmEFA);
      mortalEightyFiveNJDataAge.push([x, totmEFA]);
      let totmSeA = 0;
      mSeventyFiveNJDataAge.forEach((obj) => {
        if (obj[0] === x) totmSeA = totmSeA + obj[1];
      });
      mortalSeventyFiveNJAge.push(totmSeA);
      mortalSeventyFiveNJDataAge.push([x, totmSeA]);
      let totmSA = 0;
      mSixtyFiveNJDataAge.forEach((obj) => {
        if (obj[0] === x) totmSA = totmSA + obj[1];
      });
      mortalSixtyFiveNJAge.push(totmSA);
      mortalSixtyFiveNJDataAge.push([x, totmSA]);
      let totmFA = 0;
      mFiftyNJDataAge.forEach((obj) => {
        if (obj[0] === x) totmFA = totmFA + obj[1];
      });
      mortalFiftyNJAge.push(totmFA);
      mortalFiftyNJDataAge.push([x, totmFA]);
      let totmZA = 0;
      mZeroNJDataAge.forEach((obj) => {
        if (obj[0] === x) totmZA = totmZA + obj[1];
      });
      mortalZeroNJAge.push(totmZA);
      mortalZeroNJDataAge.push([x, totmZA]);
    });

    var lowDate = Math.min(...date);
    var highDate = Math.max(...date);
    var lowDeaths = 0; //Math.min(...mortalZeroNJ);
    const all = [
      ...mortalZeroNJ,
      ...mortalFiftyNJ,
      ...mortalSixtyFiveNJ,
      ...mortalSeventyFiveNJ,
      ...mortalEightyFiveNJ,
      ...mortalNinetyFiveNJ,
      ...mortalOneTenNJ
    ];
    var highlifetime = Math.max(...averageLifetime);
    var highDeaths = Math.max(...all);
    var cappop = Math.max(
      ...mortalZeroNJAge,
      ...mortalFiftyNJAge,
      ...mortalSixtyFiveNJAge,
      ...mortalSeventyFiveNJAge,
      ...mortalEightyFiveNJAge
    );
    noData.sort((a, b) => a[0] - b[0]);
    date.sort((a, b) => a - b);
    mortalZeroNJData.sort((a, b) => a[0] - b[0]);
    mortalZeroNJDataAge.sort((a, b) => a[0] - b[0]);
    mortalFiftyNJDataAge.sort((a, b) => a[0] - b[0]);
    mortalSixtyFiveNJDataAge.sort((a, b) => a[0] - b[0]);
    mortalSeventyFiveNJDataAge.sort((a, b) => a[0] - b[0]);
    mortalEightyFiveNJDataAge.sort((a, b) => a[0] - b[0]);
    mortalFiftyNJData.sort((a, b) => a[0] - b[0]);
    mortalSixtyFiveNJData.sort((a, b) => a[0] - b[0]);
    mortalSeventyFiveNJData.sort((a, b) => a[0] - b[0]);
    mortalEightyFiveNJData.sort((a, b) => a[0] - b[0]);
    mortalNinetyFiveNJData.sort((a, b) => a[0] - b[0]);
    mortalOneTenNJData.sort((a, b) => a[0] - b[0]);
    var state = {
      highlifetime,
      averageLifetimeData,
      date,
      cappop,
      mortalZeroNJData,
      mortalZeroNJDataAge,
      mortalFiftyNJDataAge,
      mortalSixtyFiveNJDataAge,
      mortalSeventyFiveNJDataAge,
      mortalEightyFiveNJDataAge,
      mortalFiftyNJData,
      mortalSixtyFiveNJData,
      mortalSeventyFiveNJData,
      mortalEightyFiveNJData,
      mortalNinetyFiveNJData,
      mortalOneTenNJData,
      yearlyZeroNJDataAge,
      yearlyFiftyNJDataAge,
      yearlySixtyFiveNJDataAge,
      yearlySeventyFiveNJDataAge,
      yearlyEightyFiveNJDataAge,
      yearlyNinetyFiveNJDataAge,
      yearlyOneTenNJDataAge,
      noData,
      yAxis: highDeaths - lowDeaths,
      xAxis: highDate - lowDate,
      lowDate,
      highDate,
      lowDeaths,
      highDeaths,
      chosenRate: true,
      yaxis: true
    };
    this.state = state;
  }
  render() {
    const yaxis = this.state.yaxis ? this.state.yAxis : this.state.cappop;
    const { chosenRate, lowDate } = this.state;
    const noData = this.state.noData.map(([x, y]) => [
      ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * 0.9,
      0
    ]);
    const mortalZeroNJData = this.state.mortalZeroNJData.map(([x, y]) => [
      ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * 0.9,
      ((y - this.state.lowDeaths) / yaxis) * 150
    ]);
    const mortalZeroNJDataAge = this.state.mortalZeroNJDataAge.map(([x, y]) => [
      ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * 0.9,
      ((y - this.state.lowDeaths) / this.state.cappop) * 150
    ]);
    const mortalFiftyNJDataAge = this.state.mortalFiftyNJDataAge.map(
      ([x, y]) => [
        ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * 0.9,
        ((y - this.state.lowDeaths) / this.state.cappop) * 150
      ]
    );
    const mortalSixtyFiveNJDataAge = this.state.mortalSixtyFiveNJDataAge.map(
      ([x, y]) => [
        ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * 0.9,
        ((y - this.state.lowDeaths) / this.state.cappop) * 150
      ]
    );
    const mortalSeventyFiveNJDataAge = this.state.mortalSeventyFiveNJDataAge.map(
      ([x, y]) => [
        ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * 0.9,
        ((y - this.state.lowDeaths) / this.state.cappop) * 150
      ]
    );
    const mortalEightyFiveNJDataAge = this.state.mortalEightyFiveNJDataAge.map(
      ([x, y]) => [
        ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * 0.9,
        ((y - this.state.lowDeaths) / this.state.cappop) * 150
      ]
    );
    const mortalFiftyNJData = this.state.mortalFiftyNJData.map(([x, y]) => [
      ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * 0.9,
      ((y - this.state.lowDeaths) / yaxis) * 150
    ]);
    const mortalSixtyFiveNJData = this.state.mortalSixtyFiveNJData.map(
      ([x, y]) => [
        ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * 0.9,
        ((y - this.state.lowDeaths) / yaxis) * 150
      ]
    );
    const mortalSeventyFiveNJData = this.state.mortalSeventyFiveNJData.map(
      ([x, y]) => [
        ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * 0.9,
        ((y - this.state.lowDeaths) / yaxis) * 150
      ]
    );
    const mortalEightyFiveNJData = this.state.mortalEightyFiveNJData.map(
      ([x, y]) => [
        ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * 0.9,
        ((y - this.state.lowDeaths) / yaxis) * 150
      ]
    );
    const mortalNinetyFiveNJData = this.state.mortalNinetyFiveNJData.map(
      ([x, y]) => [
        ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * 0.9,
        ((y - this.state.lowDeaths) / yaxis) * 150
      ]
    );
    const mortalOneTenNJData = this.state.mortalOneTenNJData.map(([x, y]) => [
      ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * 0.9,
      ((y - this.state.lowDeaths) / yaxis) * 150
    ]);
    const averageLifetimeData = this.state.averageLifetimeData.map(([x, y]) => [
      ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * 0.9,
      ((y - 0) / this.state.highlifetime) * 150
    ]);
    const yearlyZeroNJDataAge = this.state.yearlyZeroNJDataAge.map(([x, y]) => [
      ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * 0.9,
      ((y - this.state.lowDeaths) / this.state.cappop) * 150
    ]);
    const yearlyFiftyNJDataAge = this.state.yearlyFiftyNJDataAge.map(
      ([x, y]) => [
        ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * 0.9,
        ((y - this.state.lowDeaths) / this.state.cappop) * 150
      ]
    );
    const yearlySixtyFiveNJDataAge = this.state.yearlySixtyFiveNJDataAge.map(
      ([x, y]) => [
        ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * 0.9,
        ((y - this.state.lowDeaths) / this.state.cappop) * 150
      ]
    );
    const yearlySeventyFiveNJDataAge = this.state.yearlySeventyFiveNJDataAge.map(
      ([x, y]) => [
        ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * 0.9,
        ((y - this.state.lowDeaths) / this.state.cappop) * 150
      ]
    );
    const yearlyEightyFiveNJDataAge = this.state.yearlyEightyFiveNJDataAge.map(
      ([x, y]) => [
        ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * 0.9,
        ((y - this.state.lowDeaths) / this.state.cappop) * 150
      ]
    );
    const yearlyNinetyFiveNJDataAge = this.state.yearlyNinetyFiveNJDataAge.map(
      ([x, y]) => [
        ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * 0.9,
        ((y - this.state.lowDeaths) / this.state.cappop) * 150
      ]
    );
    const yearlyOneTenNJDataAge = this.state.yearlyOneTenNJDataAge.map(
      ([x, y]) => [
        ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * 0.9,
        ((y - this.state.lowDeaths) / this.state.cappop) * 150
      ]
    );
    //console.log(yearlyOneTenNJDataAge);
    const ite = { border: "1px grey dashed", width: "max-content" };
    const buttonStyle = {
      userSelect: "none",
      border: "1px solid black",
      color: "black",
      backgroundColor: "rgb(220,220,220)",
      borderRadius: "4px",
      padding: "5px",
      margin: "2px"
    };
    return (
      <div style={{ ...this.props.style, width: this.props.lastWidth }}>
        {/*<div
          style={{
            position: "relative",
            top: "0px",
            height: "min-content",
            flexWrap: "wrap",
            display: "flex"
          }}
        >
          {["New Jersey"].map((x, i) => {
            return (
              <div
                key={i}
                onMouseEnter={() =>
                  this.setState({}, () => {
                    clearTimeout(this.unHover);
                    this.unHover = setTimeout(
                      () => this.setState({ hoveredBtn: x }),
                      200
                    );
                  })
                }
                style={{
                  transition: ".3s ease-in",
                  boxShadow: `inset 0px 0px ${
                    this.state.hoveredBtn === x ? 7 : 0
                  }px  ${this.state.hoveredBtn === x ? 2 : 0.5}px black`,
                  alignItems: "center",
                  padding: "4px 7px",
                  border: this.state.chosenState === x ? "1px solid black" : {1},
                  display: "flex"
                }}
              >
                <div onClick={() => this.setState({ chosenState: x })}>{x}</div>
                &nbsp;
                {this.state.chosenState === x && (
                  <button onClick={() => this.setState({ chosenState: null })}>
                    &times;
                  </button>
                )}
              </div>
            );
          })}
        </div>*/}
        <div style={{ width: "100%", minHeight: "230px" }}>
          <div
            style={{
              padding: "7px 0px",
              textIndent: "10px",
              justifyContent: "space-between",
              backgroundColor: "rgba(50,120,200,.6)",
              display: "flex"
            }}
          >
            <div>{shortNumber(Math.round(this.state.highDeaths /* / 5*/))}</div>
            <div
              style={{
                top: "0px",
                height: "min-content",
                display: "flex",
                position: "relative",
                right: "0px"
              }}
            >
              {lowDate}&nbsp;
              {this.state.highDate}
            </div>
            <br />
            {/* <div
              style={{
                textAlign: "right",
                top: "0px",
                height: "min-content",
                display: "flex",
                position: "relative",
                right: "0px"
              }}
            >
              {this.state.highlifetime} average
            </div>
            {/*<div
              style={{
                top: "200px",
                height: "min-content",
                display: "flex",
                position: "absolute",
                right: "0px",
                flexDirection: "column"
              }}
            >
              {this.state.lowDeaths}
            </div>*/}
          </div>
          <div style={{ transform: "translate(0px,195px)" }}>
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
              {yearlyZeroNJDataAge.map(
                ([x, y], i) =>
                  !isNaN(x) &&
                  !isNaN(y) && (
                    <rect
                      x={x}
                      y={y}
                      width={8}
                      height={1}
                      stroke="white"
                      fill="transparent"
                      strokeWidth={1}
                      key={i}
                    />
                  )
              )}
              {yearlyFiftyNJDataAge.map(
                ([x, y], i) =>
                  !isNaN(x) &&
                  !isNaN(y) && (
                    <rect
                      x={x}
                      y={y}
                      width={8}
                      height={1}
                      stroke="purple"
                      fill="transparent"
                      strokeWidth={1}
                      key={i}
                    />
                  )
              )}
              {yearlySixtyFiveNJDataAge.map(
                ([x, y], i) =>
                  !isNaN(x) &&
                  !isNaN(y) && (
                    <rect
                      x={x}
                      y={y}
                      width={8}
                      height={1}
                      stroke="blue"
                      fill="transparent"
                      strokeWidth={1}
                      key={i}
                    />
                  )
              )}
              {yearlySeventyFiveNJDataAge.map(
                ([x, y], i) =>
                  !isNaN(x) &&
                  !isNaN(y) && (
                    <rect
                      x={x}
                      y={y}
                      width={8}
                      height={1}
                      stroke="green"
                      fill="transparent"
                      strokeWidth={1}
                      key={i}
                    />
                  )
              )}
              {yearlyEightyFiveNJDataAge.map(
                ([x, y], i) =>
                  !isNaN(x) &&
                  !isNaN(y) && (
                    <rect
                      x={x}
                      y={y}
                      width={8}
                      height={1}
                      stroke="orange"
                      fill="transparent"
                      strokeWidth={1}
                      key={i}
                    />
                  )
              )}
              {yearlyNinetyFiveNJDataAge.map(
                ([x, y], i) =>
                  !isNaN(x) &&
                  !isNaN(y) && (
                    <rect
                      x={x}
                      y={y}
                      width={8}
                      height={1}
                      stroke="red"
                      fill="transparent"
                      strokeWidth={1}
                      key={i}
                    />
                  )
              )}
              {yearlyOneTenNJDataAge.map(
                ([x, y], i) =>
                  !isNaN(x) &&
                  !isNaN(y) && (
                    <rect
                      x={x}
                      y={y}
                      width={8}
                      height={1}
                      stroke="black"
                      fill="transparent"
                      strokeWidth={1}
                      key={i}
                    />
                  )
              )}
              {mortalZeroNJData.map(
                ([x, y], i) =>
                  !isNaN(x) &&
                  !isNaN(y) && (
                    <rect
                      x={x}
                      y={y}
                      width={2}
                      height={2}
                      stroke="white"
                      fill="transparent"
                      strokeWidth={3}
                      key={i}
                    />
                  )
              )}
              {/*<BasisCurve
              showPoints={false}
              strokeWidth={4}
              stroke="purple"
              data={mortalZeroNJData}
            />*/}
              {mortalZeroNJDataAge.map(
                ([x, y], i) =>
                  !isNaN(x) &&
                  !isNaN(y) && (
                    <rect
                      x={x}
                      y={y}
                      width={8}
                      height={1}
                      stroke="white"
                      fill="transparent"
                      strokeWidth={1}
                      key={i}
                    />
                  )
              )}
              {mortalFiftyNJDataAge.map(
                ([x, y], i) =>
                  !isNaN(x) &&
                  !isNaN(y) && (
                    <rect
                      x={x}
                      y={y}
                      width={8}
                      height={1}
                      stroke="purple"
                      fill="transparent"
                      strokeWidth={1}
                      key={i}
                    />
                  )
              )}
              {mortalSixtyFiveNJDataAge.map(
                ([x, y], i) =>
                  !isNaN(x) &&
                  !isNaN(y) && (
                    <rect
                      x={x}
                      y={y}
                      width={8}
                      height={1}
                      stroke="blue"
                      fill="transparent"
                      strokeWidth={1}
                      key={i}
                    />
                  )
              )}
              {mortalSeventyFiveNJDataAge.map(
                ([x, y], i) =>
                  !isNaN(x) &&
                  !isNaN(y) && (
                    <rect
                      x={x}
                      y={y}
                      width={8}
                      height={1}
                      stroke="green"
                      fill="transparent"
                      strokeWidth={1}
                      key={i}
                    />
                  )
              )}
              {mortalEightyFiveNJDataAge.map(
                ([x, y], i) =>
                  !isNaN(x) &&
                  !isNaN(y) && (
                    <rect
                      x={x}
                      y={y}
                      width={8}
                      height={1}
                      stroke="orange"
                      fill="transparent"
                      strokeWidth={1}
                      key={i}
                    />
                  )
              )}
              {mortalFiftyNJData.map(
                ([x, y], i) =>
                  !isNaN(x) &&
                  !isNaN(y) && (
                    <rect
                      x={x}
                      y={y}
                      width={2}
                      height={2}
                      stroke="purple"
                      fill="transparent"
                      strokeWidth={3}
                      key={i}
                    />
                  )
              )}
              {mortalSixtyFiveNJData.map(
                ([x, y], i) =>
                  !isNaN(x) &&
                  !isNaN(y) && (
                    <rect
                      x={x}
                      y={y}
                      width={2}
                      height={2}
                      stroke="blue"
                      fill="transparent"
                      strokeWidth={3}
                      key={i}
                    />
                  )
              )}
              {mortalSeventyFiveNJData.map(
                ([x, y], i) =>
                  !isNaN(x) &&
                  !isNaN(y) && (
                    <rect
                      x={x}
                      y={y}
                      width={2}
                      height={2}
                      stroke="green"
                      fill="transparent"
                      strokeWidth={3}
                      key={i}
                    />
                  )
              )}
              {mortalEightyFiveNJData.map(
                ([x, y], i) =>
                  !isNaN(x) &&
                  !isNaN(y) && (
                    <rect
                      x={x}
                      y={y}
                      width={2}
                      height={2}
                      stroke="orange"
                      fill="transparent"
                      strokeWidth={3}
                      key={i}
                    />
                  )
              )}
              {mortalNinetyFiveNJData.map(
                ([x, y], i) =>
                  !isNaN(x) &&
                  !isNaN(y) && (
                    <rect
                      x={x}
                      y={y}
                      width={2}
                      height={2}
                      stroke="red"
                      fill="transparent"
                      strokeWidth={3}
                      key={i}
                    />
                  )
              )}
              {mortalOneTenNJData.map(
                ([x, y], i) =>
                  !isNaN(x) &&
                  !isNaN(y) && (
                    <rect
                      x={x}
                      y={y}
                      width={2}
                      height={2}
                      stroke="black"
                      fill="transparent"
                      strokeWidth={3}
                      key={i}
                    />
                  )
              )}
              {averageLifetimeData.map(
                ([x, y], i) =>
                  !isNaN(x) &&
                  !isNaN(y) && (
                    <rect
                      x={x}
                      y={y}
                      width={2}
                      height={2}
                      stroke="black"
                      fill="transparent"
                      strokeWidth={3}
                      key={i}
                    />
                  )
              )}
            </svg>
          </div>
          <div
            style={{
              backgroundColor: "rgba(50,120,200,.6)"
            }}
          >
            <div
              style={{
                display: "flex",
                position: "absolute",
                width: "max-content"
              }}
            >
              <div style={{ width: "max-content" }}>
                <div
                  style={{
                    width: "5px",
                    height: "5px",
                    backgroundColor: "white"
                  }}
                />
                {frequency(this.state.chosenfrequency, 0, true)}&nbsp;&nbsp;
              </div>
              <div style={{ width: "max-content" }}>
                <div
                  style={{
                    width: "5px",
                    height: "5px",
                    backgroundColor: "purple"
                  }}
                />
                {frequency(this.state.chosenfrequency, 1, true)}&nbsp;&nbsp;
              </div>
              <div style={{ width: "max-content" }}>
                <div
                  style={{
                    width: "5px",
                    height: "5px",
                    backgroundColor: "blue"
                  }}
                />
                {frequency(this.state.chosenfrequency, 2, true)}&nbsp;&nbsp;
              </div>
              <div style={{ width: "max-content" }}>
                <div
                  style={{
                    width: "5px",
                    height: "5px",
                    backgroundColor: "green"
                  }}
                />
                {frequency(this.state.chosenfrequency, 3, true)}&nbsp;&nbsp;
              </div>
              <div style={{ width: "max-content" }}>
                <div
                  style={{
                    width: "5px",
                    height: "5px",
                    backgroundColor: "orange"
                  }}
                />
                {frequency(this.state.chosenfrequency, 4, true)}&nbsp;&nbsp;
              </div>
              <div style={{ width: "max-content" }}>
                <div
                  style={{
                    width: "5px",
                    height: "5px",
                    backgroundColor: "red"
                  }}
                />
                {frequency(this.state.chosenfrequency, 5, true)}&nbsp;&nbsp;
              </div>
              <div style={{ width: "max-content" }}>
                <div
                  style={{
                    width: "5px",
                    height: "5px",
                    backgroundColor: "black"
                  }}
                />
                {
                  frequency(this.state.chosenfrequency, 6, true) //chosenfrequency, index, range defaults cohort
                }
                &nbsp;&nbsp;
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            transform: "translateX(-10px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,  minmax(10px, max-content))",
            width:
              this.props.lastWidth < 300
                ? this.props.lastWidth - 20
                : this.props.lastWidth < 400
                ? this.props.lastWidth - 20
                : this.props.lastWidth - 55
          }}
        >
          {this.state.date.map(
            (x) =>
              x !== "1911" &&
              ["0", "5"].includes(x[3]) && (
                <div
                  style={{
                    width: "max-content",
                    wordBreak: "none",
                    margin: "0px 10px"
                  }}
                >
                  |
                  <div
                    key={x}
                    style={{
                      transform: "rotate(30deg)",
                      width: "max-content",
                      wordBreak: "none"
                    }}
                  >
                    {x}
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    );
  }
}

export default Retro;

