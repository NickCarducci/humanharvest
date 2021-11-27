import React from "react";

export const shortNumber = (scler, notRound) => {
  var newnum = String(Math.round(scler));
  if (notRound) newnum = String(scler);
  var app = null;
  var decimal = null;
  const suff = ["", "k", "m", "b", "t"];
  for (let i = 0; i < suff.length; i++) {
    if (newnum.length > 3) {
      decimal = newnum[newnum.length - 3];
      newnum = newnum.substring(0, newnum.length - 3);
    } else {
      app = i;
      break;
    }
  }
  return newnum + (decimal ? "." + decimal : "") + suff[app];
};

class Polio extends React.Component {
  constructor(props) {
    super(props);
    let date = [];
    let noData = [];
    var polioSclerosis = [];
    var pop = [];
    var popData = [];
    const polioMS = [
      {
        year: 1952,
        scler: 39000,
        pop: 157600000,
        lifeexp: 68.4,
        lifeexpStart: 50.5
      },
      {
        year: 2019,
        scler: 2500000,
        pop: 328200000 //lifeexp: 78.8
      }
    ];
    const polioLEdelta = 9;
    const polioSclerosisData = polioMS.map((x) => {
      var effectiveLE = null;
      if (x.lifeexp)
        effectiveLE = (x.lifeexp + x.lifeexpStart) / 2 - polioLEdelta;
      const scler = effectiveLE ? x.scler * effectiveLE : x.scler;
      noData.push([x.year, 0]);
      date.push(x.year);
      polioSclerosis.push(scler / x.pop);
      pop.push(x.pop);
      popData.push([x.year, x.pop]);
      return [x.year, scler / x.pop];
    });
    var mort = 100;
    for (let i = 0; i < 67; i++) mort = mort * 0.993;
    const mortTrend = [
      [1952, 100],
      [2019, mort]
    ];
    var lowDate = Math.min(...date);
    var highDate = Math.max(...date);
    var highpop = Math.max(...pop);
    var highacuteflaccidparalysis = Math.max(...polioSclerosis);
    var lowbrainvirus = Math.min(...polioSclerosis);
    noData.sort((a, b) => a[0] - b[0]);
    polioSclerosisData.sort((a, b) => a[0] - b[0]);
    var state = {
      mortTrend,
      highmort: 100,
      lowbrainvirus,
      highacuteflaccidparalysis,
      date,
      polioSclerosisData,
      noData,
      yAxis: highacuteflaccidparalysis - 0,
      xAxis: highDate - lowDate,
      lowDate,
      highDate,
      highpop
    };
    this.state = state;
  }

  render() {
    const linecss = {
      left: "0px",
      top: "0px",
      display: "flex",
      position: "absolute",
      width: "100%",
      height: "200px",
      transform: "scale(1,-1)"
    };
    const width = this.props.lastWidth - 100;
    const idx = String(this.state.highacuteflaccidparalysis).indexOf(".");
    const num = shortNumber(
      String(this.state.highacuteflaccidparalysis * 100).substring(0, idx + 2),
      true
    );
    const idxx = String(this.state.lowbrainvirus).indexOf(".");
    const numm = shortNumber(
      String(this.state.lowbrainvirus * 100).substring(0, idxx + 2),
      true
    );
    const noData = this.state.noData.map(([x, y]) => [
      ((x - this.state.lowDate) / width) * 0.9,
      "0"
    ]);
    const mortTrend = this.state.mortTrend.map(([x, y]) => [
      ((x - this.state.lowDate) / this.state.xAxis) * width * 0.9,
      ((y - 0) / this.state.highmort) * 150
    ]);
    const polioSclerosisData = this.state.polioSclerosisData.map(([x, y]) => [
      ((x - this.state.lowDate) / this.state.xAxis) * width * 0.9,
      ((y - 0) / this.state.yAxis) * 150
    ]);
    return (
      <div
        style={{
          backgroundColor: "white",
          transform: "translate(0,0)",
          height: "200px",
          margin: "10px 50px"
        }}
      >
        <div
          style={{
            right: "0px",
            maxWidth: "50%",
            top: "0px",
            height: "min-content",
            display: "flex",
            position: "absolute",
            flexDirection: "column",
            zIndex: "9",
            backgroundColor: "rgba(50,120,200,.6)"
          }}
        >
          highest brain-viron paralysis -&nbsp;
          <br />
          {num}%&nbsp;
          {numm}% vs mortality of non-sewage
          <div
            style={{
              top: "0px",
              height: "min-content",
              display: "flex",
              position: "relative",
              right: "0px"
            }}
          >
            {this.state.lowDate}&nbsp;
            {this.state.highDate}
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
            {this.state.lowbrainvirus}
          </div>*/}
        </div>
        <svg className="all" style={linecss} xmlns="http://www.w3.org/2000/svg">
          {noData.map(
            ([x, y], i) =>
              !isNaN(x) &&
              !isNaN(y) && (
                <rect
                  x={x}
                  y={y}
                  width={0}
                  height={0}
                  stroke="rgb(230,230,230)"
                  fill="transparent"
                  strokeWidth=""
                  key={i}
                />
              )
          )}
        </svg>
        <svg className="all" style={linecss} xmlns="http://www.w3.org/2000/svg">
          {mortTrend.map(
            ([x, y], i) =>
              !isNaN(x) &&
              !isNaN(y) && (
                <rect
                  x={x}
                  y={y}
                  width={4}
                  height={4}
                  stroke="purple"
                  fill="purple"
                  strokeWidth="1"
                  key={i}
                />
              )
          )}
          {/*<BasisCurve
            //showPoints={false}
            strokeWidth={4}
            stroke="purple"
            data={mortTrend}
          />*/}
        </svg>
        <svg className="all" style={linecss} xmlns="http://www.w3.org/2000/svg">
          <path
            /** <path d="M150 0 L75 200 L225 200 Z" /> */
            d={`${polioSclerosisData
              .map((x, i) => `${i === 0 ? "M " : "l "}${x[0]} ${x[1]}`)
              .join(" ")}`}
          />
          {polioSclerosisData.map(
            ([x, y], i) =>
              !isNaN(x) &&
              !isNaN(y) && (
                <rect
                  x={x}
                  y={y}
                  width={4}
                  height={4}
                  stroke="red"
                  fill="transparent"
                  strokeWidth="1"
                  key={i}
                />
              )
          )}
          {/*<BasisCurve
            //showPoints={false}
            strokeWidth={1}
            stroke="red"
            data={polioSclerosisData}
         />*/}
        </svg>
      </div>
    );
  }
}
export default Polio;
