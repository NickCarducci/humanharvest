import React from "react";
import { linecss, shortNumber } from "./vaxx";
const youth = {
  "1980": {
    0: 4527.6,
    10: 6396.6,
    18: 13953.7,
    21: 10875.3,
    25: 3446.1
  },
  "1981": {
    0: 4657.2,
    10: 6370.3,
    18: 14016.9,
    21: 11288.1,
    25: 3629.4
  },
  "1982": {
    0: 5178.6,
    10: 6607.7,
    18: 15617.3,
    21: 13072.3,
    25: 4123.1
  },
  "1983": {
    0: 4949.6,
    10: 6073.9,
    18: 14485.4,
    21: 12596.7,
    25: 4072.2
  },
  "1984": {
    0: 4841.4,
    10: 6110.2,
    18: 14050.9,
    21: 12344.6,
    25: 4019.3
  },
  "1985": {
    0: 4952.9,
    10: 6466.1,
    18: 14520.6,
    21: 12656,
    25: 4123
  },
  "1986": {
    0: 5127.7,
    10: 6728.5,
    18: 15523.4,
    21: 13252.6,
    25: 4287.3
  },
  "1987": {
    0: 5180.3,
    10: 6808.2,
    18: 15527.4,
    21: 13520.1,
    25: 4387.2
  },
  "1988": {
    0: 5580.9,
    10: 7263.8,
    18: 17045.5,
    21: 14548.2,
    25: 4767.2
  },
  "1989": {
    0: 5745.9,
    10: 7339.1,
    18: 17617,
    21: 15144.3,
    25: 4952
  },
  "1990": {
    0: 5616.8,
    10: 7244.5,
    18: 17581.7,
    21: 14713,
    25: 4860.1
  },
  "1991": {
    0: 5547.7,
    10: 7466.4,
    18: 17752.9,
    21: 14513.4,
    25: 4777.7
  },
  "1992": {
    0: 5416.4,
    10: 7294.5,
    18: 16970.8,
    21: 13988.5,
    25: 4752.7
  },
  "1993": {
    0: 5330.8,
    10: 7509.3,
    18: 16936.5,
    21: 13573.8,
    25: 4652
  },
  "1994": {
    0: 5472.7,
    10: 8157.2,
    18: 17528.1,
    21: 13736.2,
    25: 4734.7
  },
  "1995": {
    0: 5584.4,
    10: 8228.3,
    18: 17907.3,
    21: 13989.9,
    25: 4867.7
  },
  "1996": {
    0: 5557.8,
    10: 8476.2,
    18: 18477.2,
    21: 13891.1,
    25: 4767.9
  },
  "1997": {
    0: 5534,
    10: 8211.3,
    18: 18190.8,
    21: 13898.6,
    25: 4788.3
  },
  "1998": {
    0: 5206.9,
    10: 7421.4,
    18: 17295.9,
    21: 13213.8,
    25: 4512.2
  },
  "1999": {
    0: 4980.4,
    10: 6757.2,
    18: 16624.2,
    21: 12872.9,
    25: 4323.9
  },
  "2000": {
    0: 4904.4,
    10: 6493.6,
    18: 16590.1,
    21: 13030.4,
    25: 4211.1
  },
  "2001": {
    0: 4760.5,
    10: 6202.2,
    18: 15840.8,
    21: 12930.9,
    25: 4067.1
  },
  "2002": {
    0: 4733.9,
    10: 6232.4,
    18: 16361.6,
    21: 12828.4,
    25: 3974.7
  },
  "2003": {
    0: 4658.9,
    10: 6078.1,
    18: 15850.7,
    21: 12693.8,
    25: 3917
  },
  "2004": {
    0: 4719.4,
    10: 5998.2,
    18: 15615.5,
    21: 12746.3,
    25: 4026.4
  },
  "2005": {
    0: 4732.5,
    10: 5907.1,
    18: 15453.3,
    21: 12758.1,
    25: 4075.2
  },
  "2006": {
    0: 4781.2,
    10: 6072.8,
    18: 15764.1,
    21: 12825.6,
    25: 4099.1
  },
  "2007": {
    0: 4681,
    10: 5983.5,
    18: 15472.4,
    21: 12559.4,
    25: 4010.5
  },
  "2008": {
    0: 4569.8,
    10: 5833.6,
    18: 15113.1,
    21: 12287.9,
    25: 3913.2
  },
  "2009": {
    0: 4431.2,
    10: 5343.8,
    18: 14648.4,
    21: 12091.8,
    25: 3831.3
  },
  "2010": {
    0: 4241.8,
    10: 4856.8,
    18: 13618.8,
    21: 11723.6,
    25: 3724.1
  },
  "2011": {
    0: 3982.5,
    10: 4366,
    18: 12734.6,
    21: 10909.9,
    25: 3534.1
  },
  "2012": {
    0: 3885.9,
    10: 3939.7,
    18: 11897,
    21: 10640.9,
    25: 3530.1
  },
  "2013": {
    0: 3575.9,
    10: 3236.5,
    18: 10369.4,
    21: 9792.7,
    25: 3346.4
  },
  "2014": {
    0: 3519.6,
    10: 3059.6,
    18: 9737,
    21: 9449,
    25: 3362.5
  },
  "2015": {
    0: 3366.3,
    10: 2749.1,
    18: 8849.1,
    21: 8915,
    25: 3291.6
  },
  "2016": {
    0: 3300.3,
    10: 2549.3,
    18: 8479.3,
    21: 8550.2,
    25: 3285.3
  },
  "2017": {
    0: 3246.5,
    10: 2382.8,
    18: 7966.2,
    21: 8052.2,
    25: 3306.3
  },
  "2018": {
    0: 3154.8,
    10: 2147.1,
    18: 6982.8,
    21: 7487.9,
    25: 3307.7
  },
  "2019": {
    0: 3071.7,
    10: 2044.2,
    18: 6256.2,
    21: 6906,
    25: 3287.3
  },
  "2020": {
    0: 2316.5,
    10: 1269.8,
    18: 4635.4,
    21: 5186.8,
    25: 2524.4
  }
};

const frequency = (chosenfrequency, a, range) => {
  var frequency = null;
  if (!chosenfrequency && range) {
    if (a === 0) {
      frequency = ["10-17"];
    } else if (a === 1) {
      frequency = ["18-20"];
    } else if (a === 2) {
      frequency = ["21-24"];
    } else if (a === 3) {
      frequency = ["25-65"];
    } else if (a === 4) {
      frequency = ["65-69"];
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
class Youth extends React.Component {
  constructor(props) {
    super(props);

    let date = [];
    let noData = [];
    var allageData = [];
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
    Object.keys(youth).forEach((year) => {
      Object.keys(youth[year]).forEach((age) => {
        if (!avgLifetime[age]) avgLifetime[age] = { total: 0, length: 0, year };
        const state = {
          year,
          length: avgLifetime[age].length + 1,
          total:
            //(avgLifetime[age].total + calculate(x)) / avgLifetime[x.age].total
            avgLifetime[age].total + youth[year][age]
          ///avgLifetime[age].length + 1
        };
        avgLifetime[age] = state;
      });
    });
    //console.log(avgLifetime);
    Object.keys(avgLifetime).forEach((y, i) => {
      const x = Object.values(avgLifetime)[i];
      averageLifetime.push(x.total / x.length);
      allageData.push([x.year, x.total / x.length]);
    });
    //console.log(retroo);
    const isbtwn = (age, test) => {
      if (isNaN(age)) return null;
      const beg = test.split("-");
      return age > Number(beg[0]) - 1 && age < Number(beg[1]) - 1;
    };
    Object.keys(youth).forEach((yearSet, i) => {
      const year = yearSet; //Number(yearSet.split("-")[1]);
      noData.push([year, 0]);
      date.push(year);
      /*const thisdecade = popdata.find(
        (x) => x.year - year < 5 && x.year - year > -5
      );*/
      Object.keys(youth[year]).forEach((age) => {
        if (isbtwn(age, "10-17")) {
          mZeroNJData.push([year, youth[year][age]]);
        } else if (isbtwn(age, "18-20")) {
          mFiftyNJData.push([year, youth[year][age]]);
        } else if (isbtwn(age, "21-24")) {
          mSixtyFiveNJData.push([year, youth[year][age]]);
        } else if (isbtwn(age, "25-64")) {
          mSeventyFiveNJData.push([year, youth[year][age]]);
        } else if (isbtwn(age, "65-69")) {
          mEightyFiveNJData.push([year, youth[year][age]]);
        } else if (isbtwn(age, "70-79")) {
          mNinetyFiveNJData.push([year, youth[year][age]]);
        } else if (isbtwn(age, "80-100")) {
          mOneTenNJData.push([year, youth[year][age]]);
        }
      });
    }); //everywhere wrourl
    console.log(mZeroNJData);
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
      allageData,
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
    /*const allageData = this.state.allageData.map(([x, y]) => [
      ((x - lowDate) / this.state.xAxis) * this.props.lastWidth * 0.9,
      ((y - 0) / this.state.highlifetime) * 150
    ]);*/
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
            <div>
              Youth {shortNumber(Math.round(this.state.highDeaths /* / 5*/))}
              /100k
            </div>
            <a href="https://www.ojjdp.gov/ojstatbb/crime/ucr_trend.asp?table_in=1&selOffenses=1&rdoGroups=1&rdoDataType=3">
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
            </a>
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
              {/*allageData.map(
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
                  )*/}
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
                  //no economics on /opengovgroup, "boomers and whatever is o,k."
                  //"it ain't over if you play that losing game"
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

export default Youth;
