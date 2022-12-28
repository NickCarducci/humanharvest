import React from "react";
import Cable from "./Dropwire"; //"react-dropwire";
//import Cable from "./Dropwire"; //"react-dropwire";
import { UAParser } from "ua-parser-js";
import Retro from "./retro";
import Youth from "./Youth";

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
      <div style={{ padding: "20px", wordWrap: "break-word" }}>
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
        <h3>
          <span style={{ color: "firebrick" }}>
            https://www.reddit.com/r/bacterium/comments/zwi1sy/catastrophic_contagion_highlights_reel_2025_is/
          </span>
          {space}
          Catastrophic hell security Contagion{space}
          <span style={{ color: "salmon" }}>
            Isn’t 2025 pandemic going to happen from expected excess mortality?
          </span>
          {space}
          https://www.reddit.com/r/PhD/comments/zwjk5u/i_want_to_become_an_economist/
          {space}
          <span
            style={{
              fontWeight: "normal"
            }}
          >
            If PCR tests only capture 10 viruses at a time and every 30 years
            mortality and birth rates are significant, can't the governments
            fabricate pandemics?
          </span>
        </h3>
        {space}
        <b style={{ color: "cornflowerblue" }}>
          If vaccines were proven to have claim credit for what sewage has done
          for life expectancy, who would go to prison?{space}
          <a
            href="https://www.reddit.com/r/Wallstreetsilver/comments/zxf4is/are_communicable_diseases_observationally/"
            style={{ color: "cadetblue" }}
          >
            Is a viral pandemic natural by evolutionary logic?
          </a>
          {space}(Wall Street Silver)
        </b>
        <h4>
          Antibodies 2025 1941 46; they found it outside the lab - they can't
          prove it.{space}
          <span style={{ color: "darkviolet" }}>
            Doesn’t an observational control measure vitro while a null
            confirmable placebo test measures vivo?
          </span>
        </h4>
        All cause or artifact of many (10 base thousands). we evolve to control
        our debris.
        <h3>Aren't significances expected to happen every 20-40 times?</h3>
        Significance of single-year will always have 1/20 significant
        single-year mortality. why is the government lying? should they die?
        <div
          onMouseEnter={
            () =>
              this.setState({ nodeDevtimeout: true }, () => {
                clearTimeout(this.nodeDevtimeout);
                this.nodeDevtimeout = setTimeout(() => {
                  this.setState({ nodeDevtimeout: false });
                }, 5000);
              }) //scopebook
          }
          style={{
            top: "0px",
            left: "0px",
            position: "fixed",
            cursor: "pointer"
          }}
        >
          {!this.state.nodeDevtimeout ? (
            <span>
              Don't Indian actuaries use{space}
              <i>natural rate increases</i>
              {space}to describe excess mortality?
            </span>
          ) : (
            <span>
              Isn’t the NIH for first-timers{space}
              <i>notwithstanding rare diseases</i>?
            </span>
          )}
        </div>
        <Retro
          lastWidth={Math.min(600, this.state.lastWidth - 40)}
          style={{
            paddingBottom: "15px",
            backgroundColor: "rgb(190,150,180)"
          }}
        />
        <h2>
          <span role="img" aria-label="tombstone">
            🪦
          </span>
          <a href="https://stats.stackexchange.com/questions/585927/what-is-the-significance-of-population-growth-a-life-expectancy-ago">
            2025
          </a>
          {space}3m{space}
          <a href="https://2024nj.com">natural rate increase</a>
          {space}78{space}(73 first vector/wave)
        </h2>
        <i>
          I do recommend{space}
          <a href="https://epiology.quora.com">lockdowns when humans</a>
          {space}
          <a href="https://www.reddit.com/r/thumbprint/comments/xhmehy/covid_has_woken_me_to_the_word_polyphyletic/">
            begin
          </a>
          {space}to make{space}
          {space}
          <a href="https://sewageisamatterofdomesticviolence.quora.com">
            butthole
          </a>
          -presiding
          {space}
          <a href="https://www.reddit.com/r/Virology/comments/wr05mg/hightech_images_show_how_viruses_infect_cells/">
            weaponry
          </a>
          {/*outside of their*/}.
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
          Could know your customer regulations have stopped Jeffery Epstein’s
          abusive behavior or discounted sales as gifts?
          <br />
          <br />
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
          <br />I adhere to Francisco{space}
          <a href="https://www.dailymail.co.uk/health/article-11323677/Outrage-Boston-University-CREATES-Covid-strain-80-kill-rate.html">
            Redi
          </a>
          ’s approach to the scientific dialectic. Why don’t you inject me with
          a virus to prove it isn’t debris? Do virologists/epidemiologists
          believe in evolution? Do you think humans evolved viruses to attack
          each other? Doesn’t the non-oncogenic lymphatic system make antibodies
          for the carbon hydrogen virion? Isn't the product of the mRNA D614G
          spike protein not that?
          {space}
          <a href="https://bacterium.quora.com/Did-Boston-University-National-Emerging-Infectious-Diseases-Laboratory-really-use-bacterial-artificial-chromosomes-to-en">
            Bacterial
          </a>
          {space}artificial chromosome. How have vaccines proven to save lives?
          Don’t virologists have regard for more positive correlation with
          sewage and/or negative with bivariate, polyphyletic symptoms?
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
        <Youth
          lastWidth={Math.min(600, this.state.lastWidth - 40)}
          style={{
            paddingBottom: "15px",
            backgroundColor: "rgb(190,150,180)"
          }}
        />
        <b>
          <i>
            <a href="https://commie.dev/police">
              Is the NBER business cycle committee serious
            </a>
            {space}when they{space}
            <a href="https://thetaxparty.com">say</a>
            {space}non-inflationary unemployment is{space}
            <a href="https://reddit.com/r/realeconomics">recessionary</a>?
          </i>
        </b>
        <hr />
        <div style={{ borderLeft: "2px solid", paddingLeft: "4px" }}>
          There are repeated high demands on Police and NHS resources in
          response to this level of crimes (not all of these being{space}
          <a href="https://research.tees.ac.uk/ws/portalfiles/portal/25580379/FINAL_Heroin_Assisted_Treatment_Pilot_Evaluation_Report.pdf">
            financial but also physical and psychological harms)
          </a>
          .{space}
          <i>Beyond more obvious impacts on the public purse</i>, other groups
          such as family members are{space}
          <a href="https://minimalviableduress.quora.com/Isnt-competence-subjective">
            disproportionately{space}
            <i>a</i>ffected
          </a>
          {space}[
          <i>
            in having been caused endogeneously in said physical and
            psychological harms
          </i>
          ] . A policy paper analysing the impact of drug taking on family
          members, by the UK Drug Policy Commission (2009) estimated that the
          cost of the harms to family members was around 1.8 billion a year.
          {space}
          <i>
            Taken together, the hidden and associated costs with 52 years of
            offending is likely in the millions, if not billions.
            {/**Why wouldn't https://api.congress.gov/bill be able to sort by last instead of latest action already? This is what Thumbprint will need. */}
          </i>
        </div>
        <br />
        <div style={{ borderLeft: "2px solid", paddingLeft: "4px" }}>
          The evidence highlights that HAT is associated with large reductions
          in the volume of offences, the crime severity score and associated
          costs to the Ministry of Justice (MOJ)iv, with approximate savings of
          £97,800. Importantly, costs do not include those past sentencing i.e.
          prison or probation so the cost savings associated with a reduction of
          the volume and severity of offences is likely far greater than this
          figure. Therefore, individuals who engage with HAT not only commit
          less offences, but the offences that they do commit are less serious
          than the year preceding HAT. The rate of offending per person reduced
          from three crimes per participant to 1.2 crimes per participant. This
          reduction in offending is corroborated in the TOPs self-report data
          set, where 9 out of 14 individuals reported shoplifting every day in
          the previous 28 day period on entry to the pilot, which reduced to 0
          days by month 1 for majority of these individuals (6 out of 9).
        </div>
        <div>
          <a href="https://www.cdc.gov/nchs/nhis/shs/tables.htm">
            nchs/nhis/shs
          </a>
          :{" "}
        </div>
        <h3>
          1968 gun control,{space}
          <a href="https://beingstable.quora.com/Isn-t-mean-proportionality-the-average-rounded-How-might-reversing-the-mean-proportional-operation-affect-multiplicatio-1">
            weed
          </a>
        </h3>
        The{space}
        <a href="https://www.cdc.gov/nchs/nhis/pre1997.htm">
          National Health Survey Act
        </a>
        {space}of 1956 provided for a continuing survey and special studies to
        secure accurate and current statistical information on the amount,
        distribution, and effects of illness and disability in the United States
        and{space}
        <a href="https://www.cdc.gov/nchs/nhis/data-questionnaires-documentation.htm">
          the services rendered for or because of such conditions
        </a>
        .
        <h3 style={{ margin: "4px 0px" }}>
          Isn't{space}
          <a href="https://generalmaintenanceunit.quora.com/Isnt-the-right-to-speak-as-an-unpaid-user-granted-prima-facie-but-for-desist-orders">
            a pair
          </a>
          {space}of crazy{space}
          <a href="https://www.quora.com/Don-t-ableists-use-tropes">
            a modicum of sanity
          </a>
          ? (Isn't a survey sample modicum variable by industry types?)
        </h3>
        If weed is a performance enhancer, why is it illegal to drive with it?
        Are top nationally ranked gains really gains? Is a testimony of hate
        mental illness?{space}
        <i>
          If Rudy Giuliani doesn't want to prevent robbery and/or homicide with
          red flag laws, why does he want to call convicts mentally ill?
        </i>
        <br />
        Shouldn’t criminals stop getting SSDI already?{space}
        <i>Shouldn’t the depressed stop getting SSDI already?</i>
        {space}Shouldn’t the SSDI assume an injured applicant will not be hired
        into a new industry already?{space}Can people with cerebral palsywork
        with computers?{space}Shouldn’t the{space}
        <a href="https://actuapedia.quora.com/Does-the-polio-epidemic-match-today-s-nervous-system-disease-presentation-1">
          speaking developmentally disabled
        </a>
        {space}and/or{space}
        <a href="">injured</a>
        {space}get desk jobs if they have experience in the field instead of
        receive SSDI already?{space}
        <a href="">Aren't voters tired?</a>
        <br />
        Do you agree with healthfeedback.org that the Amish have less autism and
        cancer because of{space}
        <a href="https://www.reddit.com/r/realeconomics/comments/ycld00/dont_pensions_cause_market_concentration_wouldnt">
          incest
        </a>
        {space}and living{space}
        <a href="https://saltbank.org">salt-free</a>?
        <h4>
          Doesn't the true geometric mean occur when studying exogenous
          variables in a vacuum control?
        </h4>
        <i>
          Kelli Halliburton: Downvoted{space}
          <a href="https://www.quora.com/unanswered/Doesnt-the-true-geometric-mean-occur-when-studying-exogenous-variables-in-a-vacuum-control">
            word salad
          </a>
          .
        </i>
        <br />
        do you even know the difference between arithmetic and geometric mean?
        are you smoking crack?
        <h4>
          If weed is a performance enhancer, why is it illegal to drive with it?
        </h4>
        <i>
          Brian Jones (Lives in Santa Monica): It’s not.
          <br />
          it’s banned in tested competition partly because of politics but also
          because it can be mood altering; mental jitters are a real thing in
          high level competition.
        </i>
        <h4>
          Is the reason to prevent drugs for performance enhancement,
          benchmarking, or subjective abuse?
        </h4>
        <h2>
          <a href="https://www.cdc.gov/nchs/products/series/series16.htm">
            hours
          </a>
          {space}cost/ uh hour costs,{space}
          <a href="https://commie.dev/banking">social labor</a>!
        </h2>
        Why do some people choose not to vote?
        <br />
        1. It’s got to be on my lap, 2. trached voting results dissuades me, 3.
        not voting == budget reconciliation, 4. thetax.party.
      </div>
    );
  }
}
