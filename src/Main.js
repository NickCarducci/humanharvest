import React from "react";
import Cable from "./Dropwire"; //"react-dropwire";
//import Cable from "./Dropwire"; //"react-dropwire";
import { UAParser } from "ua-parser-js";
import Retro from "./retro";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    for (let i = 0; i < 250; i++) {
      this["scrollImg" + i] = React.createRef();
    }
  }
  componentDidMount = () => {
    window.addEventListener("resize", this.refresh);
    window.addEventListener("scroll", this.handleScroll);
    this.refresh(true);
  };
  componentWillUnmount = () => {
    clearTimeout(this.scrollTimeout);
    clearTimeout(this.resizeTimer);
    window.removeEventListener("resize", this.refresh);
    window.removeEventListener("scroll", this.handleScroll);
  };
  handleScroll = (e) => {
    if (!this.state.offScroll) {
      const scrollTop = window.scrollY;
      this.setState(
        {
          scrolling: true,
          scrollTop
        },
        () => {
          clearTimeout(this.scrollTimeout);
          this.scrollTimeout = setTimeout(() => {
            this.setState({
              scrolling: false
            });
          }, 900);
        }
      );
    }
  };
  refresh = (first) => {
    const width = this.state.ios ? window.screen.availWidth : window.innerWidth;
    if (first || Math.abs(this.state.lastWidth - width) > 0) {
      clearTimeout(this.resizeTimer);
      this.resizeTimer = setTimeout(() => {
        this.setState({
          lastWidth: width,
          width,
          availableHeight: this.state.ios
            ? window.screen.availHeight - 20
            : window.innerHeight
        });
      }, 600);
    }
  };

  render() {
    const handleScollImgError = (e) => {
      if (e.message) {
        console.log(e.message);
        this.setState({ serviceCancelingImages: true, noyoutube: true });
      }
    };
    const buttonStyle = {
      border: "1px solid black",
      color: "black",
      backgroundColor: "rgb(220,220,220)",
      borderRadius: "15px",
      padding: "15px",
      margin: "10px"
    };
    let arrayOfnumbers = [0];
    const scrollnum = () => {
      const num = arrayOfnumbers[arrayOfnumbers.length - 1] + 1;
      arrayOfnumbers.push(num);
      return num;
    };
    const setting = (s) => {
      return {
        backgroundColor: "rgb(32, 22, 11)",
        position: s ? "relative" : "fixed",
        transform: `translateX(${s ? 0 : -130}%)`,
        zIndex: s ? "0" : "-9999"
      };
    };
    const space = " ";
    return (
      <div style={{ padding: "20px" }}>
        <div
          onClick={this.props.toggle}
          style={{
            bottom: "0px",
            right: "0px",
            position: "fixed",
            cursor: "pointer"
          }}
        >
          more
        </div>
        <div
          style={{
            top: "0px",
            left: "0px",
            position: "fixed",
            cursor: "pointer"
          }}
        >
          Don't Indian actuaries use natural rate increases to describe excess
          mortality?
        </div>
        <Retro
          lastWidth={Math.min(600, this.state.lastWidth - 40)}
          style={{
            paddingBottom: "15px",
            backgroundColor: "rgb(190,150,180)"
          }}
        />
        <h2>
          2025 3m{space}
          <a href="https://2024nj.com">natural rate increase</a>
          {space}78
        </h2>
        <i>
          I do recommend{space}
          <a href="https://epiology.quora.com">lockdowns when humans</a>
          {space}
          <a href="https://www.reddit.com/r/thumbprint/comments/xhmehy/covid_has_woken_me_to_the_word_polyphyletic/">
            begin
          </a>
          {space}to make{space}
          <a href="https://www.reddit.com/r/Virology/comments/wr05mg/hightech_images_show_how_viruses_infect_cells/">
            weapons
          </a>
          {space}outside of their{space}
          <a href="https://sewageisamatterofdomesticviolence.quora.com">
            buttholes
          </a>
          .
        </i>
        <br />
        What do you think caused infectious disease mortality to decline around
        {space}
        <a href="https://phyletic.quora.com/Do-you-think-humans-evolved-viruses-to-attack-each-other-https-www-quora-com-unanswered-Do-you-think-humans-evolved">
          1800
        </a>
        ? toilet{">"}vaxx.{space}
        <i style={{ color: "grey" }}>garbage self dealing</i>
        <div
          style={{
            wordBreak: "break-word",
            margin: "20px 6px",
            width: "calc(100% - 40px)",
            maxWidth: "300px",
            //borderTopLeftRadius: "20px",
            padding: "10px",
            boxShadow: `-80px -80px 0 -70px black\n80px -80px 0 -70px black\n-80px  80px 0 -70px black\n80px  80px 0 -70px black`
            //borderLeft: "4px solid",
            //borderTop: "4px solid"
            //boxShadow: "-4px -4px 1px 4px black"
          }}
        >
          John F. Eldredge '
          <a href="https://www.quora.com/Why-do-you-believe-vaccines-do-more-than-prevent-blood-clots/answer/John-F-Eldredge">
            Note
          </a>{" "}
          that{space}
          <a href="https://sewageisamatterofdomesticviolence.quora.com/What-do-you-think-caused-infectious-disease-mortality-to-decline-around-1800-1">
            <i>many infectious diseases</i>
            {space}are{space}
            <b>not</b>
            {space}spread by poor sanitation
          </a>
          , but by{space}
          <i>
            <b>other contact with infected people</b>
          </i>
          ,{space}
          <i>
            including breathing in{space}
            <b>droplets containing the</b>
            {space}disease
          </i>
          , exhaled by others.'
          <br />I adhere to Francisco Redi’s approach to the scientific
          dialectic. Why don’t you inject me with a virus to prove it isn’t
          debris? Do virologists/epidemiologists believe in evolution? Do you
          think humans evolved viruses to attack each other? Doesn’t the
          non-oncogenic lymphatic system make antibodies for the carbon hydrogen
          virion? Isn't the product of the mRNA D614G spike protein not that?
        </div>
        <div
          style={{
            wordBreak: "break-word",
            width: "calc(100% - 40px)",
            maxWidth: "300px"
          }}
        >
          <a href="https://www.prisonpolicy.org/blog/2017/06/28/drugs/">
            <Cable
              style={{ maxWidth: "300px", width: "100%" }}
              onError={handleScollImgError}
              img={true}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://www.dropbox.com/s/kbxo4r6tkz35cvv/Screen%20Shot%202022-10-12%20at%201.49.25%20PM.png?raw=1"
              }
              float="left"
              title="https://www.prisonpolicy.org/blog/2017/06/28/drugs/"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={!this.state.oldecon ? 0 : this.state.scrollTop}
            />
          </a>
          About 40% of the state prison population and sentenced jail population
          report using drugs at the time of the offense for which they were
          {space}
          <a href="https://www.prisonpolicy.org/blog/2017/06/28/drugs/">
            incarcerated
          </a>
          .
          <br />
          <br />
          44% of American college{space}
          <a href="https://www.bop.gov/about/statistics/statistics_inmate_age.jsp">
            students
          </a>
          {space}have used marijuana regularly in 2020. It’s a significant
          increase from 2016’s 39% says NIDA’s 2020 drug use
          {space}
          <a href="https://cfah.org/marijuana-statistics/">survey</a>.
          <br />
          <br />
          <h4>
            Why do liberals and conservatives want Medicare for All to
            incarcerate the mentally ill on hearsay or similarly unprovable
            testimonial evidence?
          </h4>
          {/*you (all) are gonna be so (hung) 'faggot' vax named-riot, mosques-too
          divorce and chastidy; life, sex and 'filth' UNTIL preg test fatties */}
        </div>
      </div>
    );
  }
}
