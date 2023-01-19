import React from "react";
import { yearsOfDeathByAge } from "./database";
import { NaturalCurve } from "react-svg-curve";

class AgeAdjustedMortality extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight
    };
    this.wholething = React.createRef();
  }
  componentWillUnmount() {
    clearTimeout(this.resizeTimer);
    window.removeEventListener("resize", this.refresh);
  }
  refresh = () => {
    clearTimeout(this.resizeTimer);
    this.resizeTimer = setTimeout(() => {
      this.setState({
        width: window.innerWidth - 10,
        height: window.innerHeight
      });
    }, 200);
  };
  componentDidMount = () => {
    this.refresh();
    window.addEventListener("resize", this.refresh);
  };
  handleTooltipMove = (
    event,
    lowestDates,
    highestDates,
    highestValues,
    lowestValues,
    touch
  ) => {
    var e = null;
    if (touch) {
      e = event.touches[0];
    } else {
      e = event;
    }
    const tooltipLeft = e.pageX - this.wholething.current.offsetLeft;
    const tooltipTop = e.pageY - this.wholething.current.offsetTop;
    const tooltopValue =
      Math.round(
        (lowestValues +
          (1 - tooltipTop / 300) * (highestValues - lowestValues)) *
          1000
      ) / 1000;
    this.setState(
      {
        tooltipMove: true,
        tooltipLeft,
        tooltopValue
      },
      () => {
        clearTimeout(this.stopTooltip);
        this.stopTooltip = setTimeout(() => {
          var width = Math.min(600, this.state.width);
          var tooltipDate = new Date(
            Math.round(
              lowestDates + (tooltipLeft / width) * (highestDates - lowestDates)
            ) + "-01-01"
          ).toLocaleDateString();
          this.setState({
            tooltipMove: false,
            tooltipDate
          });
        }, 200);
      }
    );
  };
  render() {
    //mortality.org
    let dates = [];
    let values = [];
    let expValues = [];
    let medianDeathAges = [];
    Object.values(yearsOfDeathByAge).map((x, i) => {
      var total = 0;
      var deaths = [];
      x.deathByAge.map((d, i) => {
        for (let x = 0; x < d; x++) {
          deaths.push(i);
        }
        return (total = total + d);
      });
      x.medianDeathAge = deaths[Math.round(total / 2)];
      const lifeExpectancyDeathRatio =
        Math.round((x.lifeExpectancy / x.medianDeathAge) * 100000) / 100000;
      x.lifeExpectancyDeathRatio = lifeExpectancyDeathRatio
        ? lifeExpectancyDeathRatio
        : 0.9;
      dates.push(Object.keys(yearsOfDeathByAge)[i]);
      expValues.push(x.lifeExpectancy);
      medianDeathAges.push(x.medianDeathAge);
      return values.push(x.lifeExpectancyDeathRatio);
    });

    var lowestDates = Math.min(...dates);
    var highestDates = Math.max(...dates);
    var lowestValues = Math.min(...values);
    var highestValues = Math.max(...values);
    var lowestExpValues = Math.min(...expValues, ...medianDeathAges);
    var highestExpValues = Math.max(...expValues, ...medianDeathAges);
    var width = Math.min(600, this.state.width);
    return (
      <div ref={this.wholething}>
        {lowestDates}&nbsp;{highestDates}
        <br />
        {lowestValues}&nbsp;{highestValues}
        <br />
        <div
          style={{
            position: "relative",
            height: "0px",
            zIndex: "1"
          }}
        >
          {this.state.tooltipLeft && (
            <div
              style={{
                textAlign: "right",
                left: this.state.tooltipLeft - 100,
                position: "absolute",
                color: this.state.tooltipMove ? "grey" : ""
              }}
            >
              {this.state.tooltipDate}
              <br />
              {this.state.tooltopValue}
            </div>
          )}
        </div>
        {/*<div style={{ position: "relative", width:"100%" }}>
          {[].map(x=><div style={{borderRight:"1px solid",width:"calc(100% / )"}}></div>)}
            </div>*/}
        <svg
          onTouchMove={(e) => {
            this.handleTooltipMove(
              e,
              lowestDates,
              highestDates,
              highestValues,
              lowestValues,
              true
            );
          }}
          onTouchEnd={() =>
            this.setState({ tooltipLeft: null, tooltipDate: null })
          }
          onMouseMove={(e) => {
            this.handleTooltipMove(
              e,
              lowestDates,
              highestDates,
              highestValues,
              lowestValues
            );
          }}
          onMouseLeave={() =>
            this.setState({ tooltipLeft: null, tooltipDate: null })
          }
          style={{
            transform: "scale(1,-1)",
            display: "flex",

            width: "100%",
            height: "300px"
          }}
          xmlns="https://www.w3.org/2000/svg"
        >
          <NaturalCurve
            showPoints={false}
            strokeWidth={3}
            stroke="rgb(255,120,50)"
            data={Object.values(yearsOfDeathByAge).map((x, i) => [
              ((Object.keys(yearsOfDeathByAge)[i] - lowestDates) /
                (highestDates - lowestDates)) *
                width,
              ((x.lifeExpectancyDeathRatio - lowestValues) /
                (highestValues - lowestValues)) *
                260
            ])}
          />
          <NaturalCurve
            showPoints={false}
            strokeWidth={3}
            stroke="rgb(50,120,255)"
            data={Object.values(yearsOfDeathByAge).map((x, i) => [
              ((Object.keys(yearsOfDeathByAge)[i] - lowestDates) /
                (highestDates - lowestDates)) *
                width,
              ((x.lifeExpectancy - lowestExpValues) /
                (highestExpValues - lowestExpValues)) *
                260
            ])}
          />
          <NaturalCurve
            showPoints={false}
            strokeWidth={3}
            stroke="rgb(255,70,50)"
            data={Object.values(yearsOfDeathByAge).map((x, i) => [
              ((Object.keys(yearsOfDeathByAge)[i] - lowestDates) /
                (highestDates - lowestDates)) *
                width,
              ((x.medianDeathAge - lowestExpValues) /
                (highestExpValues - lowestExpValues)) *
                260
            ])}
          />
        </svg>
      </div>
    );
  }
}
export default AgeAdjustedMortality;
