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
      <div
        style={{
          lineHeight: "14px",
          padding: "20px",
          wordWrap: "break-word",
          fontFamily: "'Kanit', sans-serif"
        }}
      >
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
        <h1>
          Free Enterprise System:{space}
          <span style={{ fontSize: "26px" }}>
            Stop making my question so complicated. Antibodies treat phages like
            garbage, through and through.
          </span>
        </h1>
        Do employees of regular businesses with diverse customers have to report
        gifted sweat up to $15,000 per year? Should the government media
        continue to suggest markets liking an excess and sustaining resource
        productivity over material consumption?
        <h2>
          Is atherosclerosis or infection a more concerning theory about
          mortality from virus to have?{space}
          <i>
            (YouTube) Is the CDC valid if either they say expected mortality
            significance is a problem and/or test viruses one at a time?
          </i>
        </h2>
        Wouldn’t you need to test for all comparable causes of sickness to
        assess how exogenous covid is to outcomes are, first? Even if you are
        capturing prevalence, isn’t the test useless without testing for all
        causes of{space}
        <a href="https://www.reddit.com/r/science/comments/zzwwf8">
          pneumonia, influenza, and covid
        </a>
        ?
        <br />
        <br />
        What kind of medical science questions don't belong on skeptics?{space}
        <span
          style={{
            lineHeight: "20px",
            backgroundColor: "darkslateblue",
            color: "tan"
          }}
        >
          Shouldn't{space}
          <a href="https://reddit.com/r/2020haters">Trump</a>
          {space}&bull;{space}be improsoned for enabling bank runs on
          (commercial legislationless piggie)?
          {space}Is real income either transitive and/or marginal? Isn't real
          income marginally transitive unless despondency is competitive?{space}
          <a
            style={{ backgroundColor: "darkgreen", color: "tan" }}
            href="https://micro-theory.podbean.com/e/trump-s-reason-for-insurrection/"
          >
            Why didn’t Trump show up for his January 6th riot supporters?
          </a>
          {space}
          <i style={{ backgroundColor: "darkgreen", color: "skyblue" }}>
            How can CEO's stay ahead of the curve during a recession without
            hedging and layoffs quickly unless they benefit from inflation?
          </i>
        </span>
        <br />
        <a href="https://www.quora.com/Do-you-think-that-the-current-debate-about-health-care-in-America-is-focusing-too-much-on-insurance-and-not-enough-on-actual-patient-care/answer/Rick-Swartz-1">
          Do you think that the current debate about health care in America is
          focusing too much on insurance and not enough on actual patient care?
        </a>
        {/**Don’t republicans, democrats, and nonvoters want prevention based government escrow but only the powerful want deficits?
        Does a New Jersey political party become recognized after 10% of the Assembly switches parties at once?
        Does establishing a New Jersey political party require using a party from another state? Which state allows for a manifest?
        Do candidate committees require an EIN to contribute self-produced content?

        Do candidate committees require an EIN to contribute self-produced and/or connected content? Are EIN's for subcontracting or W2 withholdings?
        */}
        {space}
        <i>Why does insurance make you jump through so many hoops?</i>
        {space}
        The debate is a very product of the focus that happens as a cause of
        insurance, like a perpetual, compound, concurrent lag-bug.
        <br />
        2026 death panels won't be as scary.
        <br />
        Are uncollateralized nor industry specified loans garnishable or a
        foreseeable loss?
        <h2 style={{ color: "cadetblue" }}>
          Is the extrapolation of a select virus or all cause mortality
          statistically important?
        </h2>
        <h3>
          Expected significance; I will stand for plaintiffing not
          whistleblowing. f a whistleblower rat n ur job - right to try and
          carface bank. Everyone's a tie breaker.
        </h3>
        <i>
          Buttgiegs' poor job - it's known, covered not{space}
          <a href="https://commie.dev/police">prevented</a>, maybe 2025 won't be
          a "pandemic" but elderly dealth significance will be timely
          (adailyimpeachment. get buttgieg out - retroactive profit neglegence
          "stakeholder fiduciary" police state repreave public sport, "
          <a href="https://saverparty.xyz/global">game</a>-made
          {space}
          <a href="https://froth.quora.com">risks</a>")
        </i>
        <br />
        <a href="https://thetaxparty.com">Putin</a>
        {space}and Cosco can{space}
        <a href="https://saltbank.quora.com">broker a deal</a>.
        <h2>
          Shrinkflation Johns{space}
          <a href="https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Physical_imports_and_exports">
            Hopkins
          </a>
          ; Nick Carducci for{space}
          <a href="https://cdlf.quora.com">Carface</a>
          {space}Bank{space}
          <span style={{ fontSize: "16px" }}>
            (Shouldn't the Speaker of the U.S. House of Representatives be
            bipartisan on the federal reserve question to either end it or not?)
          </span>
        </h2>
        <span style={{ color: "red" }}>Google malfeasance is a plant</span>
        {space}Medi-Share contracts are labor indemnity surrendered purchase
        (fair right to ownership, "
        <a href="https://bankingisnot.biz">usufruct</a>"). (Rollover medishare
        fraud, "free premium contractors" or "producer aussie price")
        <br />
        <i style={{ color: "limegreen" }}>
          Why would virus evolve as a prokaryotic weapon instead of excrement?
          Wouldn't clearing vessels for cardiovascularity be good reason for the
          prevalence of antibodies upon virus? Are people even necessarily sick
          from the virus or tested for all causes?{space}
          <span style={{ color: "black" }}>
            I'm not buying the weapon-not-excrement prokaryote.
          </span>
          {space}
          <span style={{ color: "chocolate" }}>
            Doesn't a{space}
            <a href="https://vau.money">tax break account</a>
            {space}to up to a reporting threshold while a tax exemption is still
            reported? I want to be able to at least produce my own{space}
            <a href="https://nickcarducciforsenate.quora.com/Would-a-single-payer-healthcare-system-be-affordable-for-the-US-government-1">
              pac
            </a>
            . no one will donate to use the{space}
            <a href="https://truncatedwholesaletax.com">
              uniform constitution monolith
            </a>
            .
          </span>
        </i>
        <h3>
          <span
            style={{
              color: "grey"
            }}
          >
            I wanted to boycott credit
          </span>
          {space}and end ticket scalping airline{space}
          <a href="https://www.reddit.com/user/AdFabulous9451">McGhee</a>;
          recession is inflationary, marginal, or atomic,{space}
          <i>shrinkflation bros</i>. Investment is consumption or shrinkflation
          before deflationary use. Marginal benefit is market made not in kind.
        </h3>
        Should I pay more in undergraduate courses if my ideology fails? I don’t
        think I had to take statistics or calculus freshman economic program
        courses with my AP tests. It’s when I read Krugman I believe when I
        thought C+I+G was quite redundant, and when I thought principal with
        interest over collateral doesn’t settle from marginal consumption, that
        I failed Macroeconomics twice and Financial Markets and Institutions
        once. Now I’m soliciting an 12.1.5 OCC sponsorship for my electronic
        safety deposit box at FedCash atm processor and industry specific payday
        loans idea for my said business.
        <br />
        <br />I believe my overall GPA was 2.5. I was concentrating on operating
        my own business. I am well rounded in my final semester, but in high
        school I excelled relatively then in math and science (710 math and 590,
        590 reading/writing; AP Stats and AB Calc). I also wrestled Freshman and
        {space}
        <span
          style={{
            textDecoration: "line-through"
          }}
        >
          Sophomore{/**can I get your comment on just about everything */}
        </span>
        {space}Junior year, but generally was originally going for an East Asian
        and Economics double major. Econometrics was a B- I think, but again
        I’ve{space}
        <a href="https://scopes.cc">come clean publicly</a>
        {space}now and to my educators then I like a decreasing real exchange
        velocity. I was 17 when 2008 happened to my family’s home contracting
        business which set me off to end contracts for intention. My B.A. is
        political science.
        <h2>
          Is non-competitive job growth worth the expense and work?{space}
          <i style={{ color: "cornflowerblue" }}>
            Is a good gain in industry sector employments just that or
            deflationary?
          </i>
          {space}What is an example of a job that currently does not exist, but
          that you really, really WANT to exist?{space}
          <i>
            Why does the United States want to create good paying jobs against
            voluntary human action?
          </i>
          {space}Does the Department of Labor want more people working if it is
          non-deflationary?{space}
          <i style={{ color: "cadetblue" }}>
            Is a recession a problem if it isn't acceleratingly inflationary?
          </i>
        </h2>
        The only harmful recession is an accelerating inflation rate of marginal
        unemployment, I say. Otherwise, a recession is either the opposite of
        shrinkflation or a normal trade-off. I also don’t think exchanging
        durable goods for currency is a decent trade. Should I even try to
        apply? I have an economics minor from JHU in the U.S. but am interested
        in global universities too.
        <h3
          style={{
            color: "grey"
          }}
        >
          I wanted to become an economist
          {space}
          <span
            style={{
              color: "black"
            }}
          >
            but, are complainants or rats racketeers?
          </span>
          {space}"Whatever that means after making a deal for a lesser sentance
          or surrendering your ethics or stakeholder fiduciary duty in{space}
          <a href="https://www.reddit.com/r/realeconomics/comments/zxewsa/who_is_your_favourite_living_economist_whats/">
            usufructuary bound rights
          </a>
          ."
        </h3>
        {/**common trade name thumbprint and apple are explicitly-implicitly generic */}
        <i>
          How do microeconomists substitute escrow for prevention and not
          coverage of loss and unknown dangers for safety?
        </i>
        <br />
        Stop holding us back. "How come visit to the emergency room costs so
        much even if you have insurance?" The hospital can charge a larger
        account, making the market price themselves. - Nick Carducci T0 Advocate
        at Insurance (2011–present)
        <br />
        Maybe labor should deflate shit idiot.{space}
        <a href="https://comlib.quora.com">
          <i>
            Is human action what happens in the absence of derivatives across
            time?
          </i>
        </a>
        {space}What laws would have to be revoked to tax electronic fund account
        transfers only? Assume everyone can have their own FedCash account and
        be their own bank, if you would.
        <br />
        <a href="https://www.nestseekers.com/agent/erin-sykes">
          <Cable
            style={{ maxWidth: "100px", width: "100%" }}
            onError={handleScollImgError}
            img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://www.dropbox.com/s/sciszo40vrcp45x/erin%20sykes.jpeg?raw=1"
            }
            float="left"
            title="https://www.nestseekers.com/agent/erin-sykes"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={!this.state.oldecon ? 0 : this.state.scrollTop}
          />
        </a>
        close down{space}
        <a href="https://saverparty.xyz">bureau of land management</a>
        {space}is that a threat, housing is how to gain? Plausible use lease
        microfinance or else I die (we work kennelworth micro finance) r/sayists
        (warehousing truncated wholesale complementary supply and demand tax, Is
        a down payment or an option to buy a security at a certain price until
        either an expiration or expected perishing?)
        <h3>
          Is human action what happens in the absence of derivatives across
          time?
          <span style={{ color: "firebrick" }}>
            https://www.reddit.com/r/bacterium/comments/zwi1sy/catastrophic_contagion_highlights_reel_2025_is/
          </span>
          <div style={{ position: "relative", float: "right" }}>
            <div style={{ position: "absolute", zIndex: 1, bottom: "0px" }}>
              I don't think the government here is who needs to learn
              statistics. Best of luck to you. – Jeff Lambert
            </div>
            <a href="https://politics.stackexchange.com/questions/77373/why-do-governments-and-institutions-claim-expected-significant-mortality-is-a-pa">
              <Cable
                style={{ maxWidth: "300px", width: "100%" }}
                onError={handleScollImgError}
                img={true}
                src={
                  this.state.noyoutube
                    ? ""
                    : "https://www.dropbox.com/s/qnh743niv413496/Screen%20Shot%202022-12-29%20at%2012.08.17%20PM.png?raw=1"
                }
                float={null}
                title="https://politics.stackexchange.com/questions/77373/why-do-governments-and-institutions-claim-expected-significant-mortality-is-a-pa"
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={!this.state.oldecon ? 0 : this.state.scrollTop}
              />
            </a>
          </div>
          <h2>Are viruses a matter of epidemiology or cardiology?</h2>
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
          {space}@Yorik That's the question I'm seeking a straight answer on. Is
          it or not? MDPI is fake news if antibodies do not stop virus from
          causing blood clots. An answer to this would allow me to ask if
          dysregular antibody production also contributes to general
          atherosclerotic plaque, too. –
        </h3>
        {space}
        <b style={{ color: "cornflowerblue" }}>
          If vaccines were proven to have claim credit for what sewage has done
          for life expectancy, who would go to prison?{space}
          <span style={{ color: "navy" }}>
            All cause or artifact of many (10 base thousands);
          </span>
          {space}
          <a href="https://anchor.fm/micro-theory/episodes/Strategic-Voting-with-a-potential-network-effect-and-new-antifinance-alternative-e1qvulq">
            we evolve to control our debris
          </a>
          .{space}
          <a
            href="https://www.reddit.com/r/Wallstreetsilver/comments/zxf4is/are_communicable_diseases_observationally/"
            style={{ color: "cadetblue" }}
          >
            Is a viral pandemic natural by evolutionary logic?
          </a>
          {space}(Wall Street Silver,{space}
          <i>
            Doesn’t an observational control measure vitro while a null
            confirmable placebo{space}
            <a href="https://generalmaintenanceunit.quora.com">test</a>
            {space}measures vivo?
          </i>
          , 12/28/2022){space}
          <span style={{ color: "tan" }}>
            Are politicians intent on widening poverty or do they not think
            landlords cause an accelerating inflation rate of unemployment?
          </span>
        </b>
        <h4>
          Antibodies 2025 1941 46; they found it outside the lab - they can't
          prove it.{space}
          <span style={{ color: "darkviolet" }}>
            Doesn’t an observational control measure vitro while a null
            confirmable placebo test measures vivo?
          </span>
        </h4>
        <h3>Aren't significances expected to happen every 20-40 times?</h3>
        Significance of single-year will always have 1/20 significant
        single-year mortality. why is the government lying? should they{space}
        <a href="https://www.quora.com/Can-you-tell-someone-to-drop-dead-or-perish">
          die
        </a>
        ?
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
          :{space}
          <i>
            Does the government not like pot smokers working as productive
            employees anywhere?
          </i>
          {space}
          <span
            style={{
              color: "darkviolet"
            }}
          >
            Did alcohol prohibition or hard hats and other safety{space}
            <a href="https://reddit.com/r/generalservices">equipment</a>
            {space}
            decrease workplace deaths?
          </span>
          {space}vaults.biz/sdr{space}
          <span style={{ textDecoration: "line-through" }}>
            depo corner section
          </span>
          {space}
          <a href="https://parcelpolice.quora.com">asyluminportugal</a>
          {space}Who is{space}
          <a href="https://virtualid.quora.com">Q-vendetta</a>?
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
          {/**Does establishing a New Jersey political party require using a party 
        from another state? Which state allows for a manifest? 
        Does establishing a New Jersey political party require using a party 
        from another state? Which state allows for a manifest?

        Statistical significance requires 100-periods. I see our world in 
        data uses a p-score, but I use my site, humanharvest.info for 
        annual charts back to the Spanish flu.

        Does no one being above the law imply an innocence precedence?

        Connected political action committee content has copyright restrictions 
        (11 CFR), unless its dissemination method usually is a personal expense 
        like internet services, social media, and talk radio.
        */}
        </h3>
        If weed is a performance enhancer, why is it{space}
        <a href="https://commie.dev/mod">illegal</a>
        {space}to drive with{space}
        <a href="https://reddit.com/r/askdemocracy">it</a>? Are top nationally
        ranked gains really gains? Is a testimony of hate mental illness?{space}
        <i>
          If Rudy Giuliani doesn't want to{space}
          <a href="https://courttechnology.quora.com/How-does-hearsay-differ-from-testimony-1">
            <b>prevent</b>
            {space}robbery
          </a>
          {space}and/or homicide with red flag laws, why does he want to call
          convicts mentally ill?
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
        <a href="https://2024nj.com/disability">injured</a>
        {space}get desk jobs if they have experience in the field instead of
        receive SSDI already?{space}
        <a href="https://vaults.biz/party">Aren't voters tired?</a>
        <br />
        Do you agree with healthfeedback.org that the Amish have less autism and
        cancer because of{space}
        <a href="https://www.reddit.com/r/realeconomics/comments/ycld00/dont_pensions_cause_market_concentration_wouldnt">
          incest
        </a>
        {space}and{space}
        <span
          style={{
            backgroundColor: "rgb(190,150,180)",
            color: "white"
          }}
        >
          living{space}
          <a href="https://saltbank.org" style={{ color: "white" }}>
            salt-free
          </a>
        </span>
        ?
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
