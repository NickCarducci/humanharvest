import React from "react";
import Cable from "./Dropwire"; //"react-dropwire";
import AgeAdjustedMortality from "./AgeAdjustedMortality";
import Epiology from "./epiology";
import Polio from "./polio";
import { UAParser } from "ua-parser-js";
import "./styles.css";
import Vaxx from "./vaxx";
import Dies from "./dies";
import TwitterTweetEmbed from "./TwitterTweetEmbed";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    var parser = new UAParser();
    const name = parser.getBrowser().name;
    console.log(name);
    this.state = {
      browser: name,
      scrollTop: 0,
      ios: name.includes("Safari"),
      iosNoPhoto: name.includes("Safari")
    };
    this.polio = React.createRef();
    for (let i = 0; i < 220; i++) {
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
  componentDidUpdate = (prevProps) => {
    if (this.props.pathname !== prevProps.pathname) {
      if (this.props.pathname === "/") {
      } else if (this.props.pathname === "/polio") {
        window.scroll(0, this.polio.current.offsetTop);
      }
    }
  };
  render() {
    const handleScollImgError = (e) => {
      if (e.message) {
        console.log(e.message);
        this.setState({ serviceCancelingImages: true });
      }
    };
    return (
      <div
        style={{
          color: "rgb(230,230,255)",
          width: "100%",
          height: "100%",
          backgroundColor: "rgb(32, 22, 11)"
          //backgroundColor: "rgb(212, 171, 95)"
        }}
      >
        <div
          style={{
            wordBreak: "break-word",
            textAlign: "left",
            width: "100%",
            maxWidth: "600px",
            position: "relative"
          }}
        >
          <div
            style={{
              width: "100%"
            }}
          >
            <a
              style={{
                shapeOutside: "rect()",
                float: "right",
                width: "max-content",
                padding: "0px 10px",
                fontSize: "20px",
                fontFamily: "'Pacifico', sans-serif",
                color: "rgb(230,230,255)",
                backgroundColor: "rgb(32, 22, 11)"
              }}
              href="https://2052.live"
            >
              2052.live
            </a>
            <h2>
              you think since virus, "requires cell to replicate," the first
              virus cam from where?
            </h2>
            M. Osterholm: "High in india then went back down to baseline," not
            affixed for cohort size on CNN with A Cooper, a delusional basis.
            See incidence of sewage/nutrition on 1775- mortality.
            <br />
            <br />
            Cases as defined by symptomatic is the same, insignificant rates of
            change year to year in similar symptoms. Asymptomatic-prevalence
            without symptom requisite, like calling majority by including
            eligible voters as "no," or not, is more elastically-prevalent
            towards asymptomatic-testing, so much so that it may not even be an
            indication of illness in the case that hotel room may have had some
            bacteria to produce 1/4 prevalence in The Common Cold Project to
            even take the warning mechanism case: either way, there is yet to be
            vivo electron microscope output of virus beyond mitosis of already
            bacterially-infected cell, just cartoons.
            <br />
            <br />
            <a
              style={{
                shapeOutside: "rect()",
                float: "left",
                width: "max-content",
                padding: "0px 10px",
                fontSize: "20px",
                fontFamily: "'Pacifico', sans-serif",
                color: "rgb(230,230,255)",
                backgroundColor: "rgb(32, 22, 11)"
              }}
              href="https://moldmask.co"
            >
              moldmask.co
            </a>
            Somebody tell me where the first virus comes from if it, "requires
            cell to replicate?" Evolutionary trait? Is byproduct prevalence and
            warning mechanism, not necessarily (or evidently) cause without the
            presence of bacteria.
            <br />
            <br />
            Imagine a ruler whom isn't selfish? Would they shit on every bastard
            in all the land by making ownership of their invention universal,
            trouncing every hoarders' things? Or would they fold to the moloch
            system market communism, sacrificing those altruistic virtues for
            trade by secret, good, or labor withheld, like the rest?
            <h2>
              did someone ask for some reciprosity? They are called Boomers for
              a reason; 1.2m/yr+ 75+&nbsp;
              <a href="https://humanharvest.info/polio">2015-</a>
            </h2>
            "Excess," to me, is due upon a time-series by an event- or
            change-based-rated-level, so looking at changes on the Y-axis didn’t
            register as requiring population being fixed. I should have counted,
            but it only took estimating mortality by population growth myself to
            see that we have been short for a long time.
            <br />
            <a
              style={{
                shapeOutside: "rect()",
                float: "right",
                width: "max-content",
                padding: "0px 10px",
                fontSize: "20px",
                fontFamily: "'Pacifico', sans-serif",
                color: "rgb(230,230,255)",
                backgroundColor: "rgb(32, 22, 11)"
              }}
              href="https://carducci.us"
            >
              carducci.us
            </a>
            <br />
            "virus injects its DNA into each cell, 'in an instant'"
            <br />
            <a href="https://www.google.com/search?q=nucleoside+analogues+virus+electron+microscope+mitosis+replication">
              google.com/search?q=nucleoside+analogues+virus+electron+microscope+mitosis+replication
            </a>
            <br />
            The rabies virus bite, you say? still, incidence can be&nbsp;
            <a href="https://theconversation.com/your-poo-is-mostly-alive-heres-whats-in-it-102848#:~:text=www.shutterstock.com-,Microbes,of%20the%20bacteria%20were%20alive.">
              bacteria
            </a>
            .
            <br />
            <br />
            "Here we go again, the numbers are going up," Brian Kilmeade. What
            numbers? testing as opposed to cases like hours & price as oppose to
            productivity?
            <br />
            <br />
            You aren't counting&nbsp;
            <a href="https://www.fda.gov/media/144245/download#page=42">
              all cases
            </a>
            , just one artifact-byproduct of many by the same cause,
            bacterial-infection. If it, "requires cell to replicate," its
            taxonomy is only a cell. Are you saying it is an evolutionary trait?
            To do the math with it being dead would be to say it is exclusively
            byproduct-prevalence and warning-mechanism of bacterial-infection,
            antibodies to stop blood clotting but not infection of prevalence
            without transmission. prevalence does not transmission-cause make.
            <br />
            <br />
            "'You aren't meeting hospital capacity requirements,' well yeah,
            whats what happens when you fire half for resisting vaccine[not
            exclusively true, your sponsors in expiring claim false bid pools
            misappropriated funds to administration instead of demand, hospital
            beds haven't kept up with populaion]. That's why I am recommending
            these lawyers to fight back, it is just going to take a little
            time." They are not trying to resolve the class-issue of
            market-rights amidst a finite producer reality with a microeconomic
            perfect equillibrium reason to allow any duress in product instead
            of controlling by multiple of 12 industry various jury, just trial a
            la carte. The law-license-board is corrupt, savefacing and
            malfeasant for their conflict of interest to actually help.
            <br />
            <br />
            "Masks do not stop virus spread, we know this," Bill Spadea,
            misunderstanding
            <h2>
              prevalence can be byproduct/output/debris rather than mean
              cause/transmission/spread
            </h2>
            1.2m/yr+ excess deaths expected -&nbsp;
            <a href="https://humanharvest.info/polio">polio</a>&nbsp;vaccines
            curing byproduct and warning mechanism, but not cause (not really
            'excess,' a term used ABOVE basis, like people, or hours in correct
            economic productivity)
            <br />
            <Cable
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/18JvCZ42WmNXcNHkYW8M3vY6ikZS1y4G1/preview"
              }
              float="left"
              title="National Report - Dr. Manny Sethi - 'use virals, stop scaring everyone, I can't count significant deaths'"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + 50]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            Immunity is not antibodies cleaning up blood clot potential cell
            debris, it is stopping bacterial-infection to begin with
            <br />
            “May be seasonal,” you get want you test for with PCR
            <br />
            <br />
            "...everyone the coverage they deserve, nationwide doctor monopsony
            front ran with expiring claims for no reason," anbam insurance on
            CNN 9pm est
            <br />
            market history and propoganda: The Great Leap Forward expected 15m
            35 age&nbsp;<a href="https://froth.app/stats">lifetime</a>
            &nbsp;deaths
          </div>
          <br />
          <Cable
            style={{
              maxHeight: "40vw",
              height: "400px",
              width: "100%"
            }}
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/10NrxyYWc2pkbb7kozAgsBMZ1XR55TKZB/preview"
            }
            float="right"
            title="Stinchfield (Newsmax) - on virus and masking with Chris Murphy, '80% vaxxed, 90% at risk vaccinated'"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + 49]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <Cable
            style={{
              height: "440px"
            }}
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1-pUud-u0xkYDOhHCVsihhEvhIy-aD9UT/preview"
            }
            float="left"
            title="Only diagnostic diff now is severity. What do you think virus is an evolutionary trait? Only comes out, 'requires cell,' and 'is dead.' Do the math"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + 48]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          “Courts refuse to enforce their own orders,” based on jury-science
          permittance of duress in minimal viable product.
          <br />
          <br />
          "Remember influenza and coronavirus spread in a very similar fashion."
          <h2>
            prevalence is byproduct, too. not cause nor warning mechanism, alone
          </h2>
          <Cable
            style={{
              height: "440px"
            }}
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1RRQTP02Ukc8M87QISJFrK1F15L4eetBo/preview"
            }
            float="right"
            title="Phil Murphy covid update (Facebook live) - who is we in we know? jury for convictions please"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + 48]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          n=25 14 positive vaccinated, 11 positive unvaccinated
          <br />
          “1/7 sick were unvaccinated,” production of antibodies may be having a
          "boy who cried wolf" situation, although I think antibodies just stop
          blood clotting
          <br />
          <br />
          Lets talk about the taxonomy of the virus genus.
          <br />
          Protistologist believe bacteria is cell without nucleus as the uniform
          common ancestor, I guess I’m one of them.
          <br />
          <br />
          What is the derivative taxonomy of cell if protist is bacteria with
          nucleus, golgi and mitochondria, than virus? Virus I think is only
          excrement, as only reproduced vivo with cell and bacteria
          <br />
          <TwitterTweetEmbed
            style={{ float: "left", width: "300px" }}
            key="1249019795183468545"
            tweetId="1249019795183468545"
          />
          Antibodies stop illness but not infection, as is a&nbsp;
          <a href="https://www.cmu.edu/common-cold-project/">
            warning mechanism
          </a>
          &nbsp; of bacterial-infection-byproduct prevalence, not
          transmission-vivo-cause
          <br />
          <br />
          beyond precedence is sometimes the law, and the law is not always
          legal nor prevailing
          <br />
          <Cable
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1PQnD64MtBEaL58AI2mGDS24O-GZTq0MZ/preview"
            }
            float="right"
            title="Chris Salcedo (Newsmax) - Christian Whiton & Stephen Moser with Carl Higbie on oil reserves sold to China, wanting to default or reverse? the former illegal, bailout illegal. only cash:debt*income thru history would emulate prices paid without debt inelasticity of useless bid-to-ask brough forward demand, to be replaced by p2p max profit royalty, equity bankable depositary"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + 47]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          “I think we should be talking remediations,” if you test for it, you
          will find it.
          <br />
          Talk about fraud!
          <br />
          <a href="https://brainscan.info">
            acute psychiatric dimensia problem
          </a>
          : Mental breakdown, delusion, vascular dimensia, strokes, clots in the
          brain
          <h2>
            There are no transmitted (prevalence: cause of byproduct?) of
            omnicron killing (with).
          </h2>
          “You can’t just get a&nbsp;
          <a href="https://teapharmacy.party">prescription of regeneron</a>, you
          need to get it administered to you,” Charlie Kirk, only because
          expiring claim false bid pools thrid party donee claimable prevents
          trade to lender, landlord and insurer-bookee work deficit, from
          intermediate supply-demand as labor, without finance (expiring claims,
          invoices, implausible landlord use, repo-cycle kept-down-payments).
          <h2>“The precedent to establish a new baseline?!?” Charlie Kirk</h2>
          “The Gain of function research in Wuhan that our government funded and
          Fauci lied about,” Charlie, “They’ve tried every path they can. The
          ingredient has become the component to slow their fear-mongering
          propaganda away from the information that may empower you, the
          document that protects your rights,”
          <br />
          <br />
          "Requiring a negative omicron test,” Jim Acosta, ignoring the 2k/year
          discovered and 5% prevalence off suspected cases. Ignoring the
          cause-linked-symptoms, an artifact 5% of the time
          <br />
          <Cable
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1dqy_dBGZLEO4stAZFpeM4u9JgJwN3He4/preview"
            }
            float="left"
            title="GBNews - Patrick Christys' intro"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + 46]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          “Omicron has yet to kill a single person,” GBNews anchor projects from
          prevalence of byproduct not bacterial-cause.
          <br />
          If these were evolutionary traits that, “only replicate with cell,”
          requisite for all vivo-cause (ingredients-in-a-vacuum), article 4
          would apply with jury-science deducable.
          <br />
          <br />
          “Verified stream of income in perpetuity,” J. Tobacco street guest on
          free rider mutable health-“care.”
          <h2>
            expiring claims abetting invoices and racketeering free rider
            mutable health, $4t/yr 1/4 pensions, 1/4 premiums, 1/4 pentagon
            pre-3/2020 fake pandemic based on age standardized excess deaths
            short 50m/yr worldwide, 700k/yr in US, expected cohort size gain.
            counterfeit in contract third party beneficiary donee claimable.
          </h2>
          "780k dead, nearly the same over Biden as trump." Dom Carter. That
          means it isn’t significant!
          <br />
          <br />
          "more people died under biden than trump, and he had the vaccine but
          didn't have demand." Judge Janine, the talk show host who said, "I can
          say that shit," 1 year ago about quid pro quo based discrimination for
          slip & fall racketeering the law-licensing-board
          <br />
          <br />
          Dick Morris: “Functional equivalent of a declaration of war, ended up
          failing because it didn’t have enough assets appraised by third party
          beneficiary repo kept down payments, if you have money but cannot use
          it in the swift system, you don’t have any money. French gdp/p is the
          greatest. ...It is a miracle, praying stopped the virus, by bringing a
          virion to stop a virus. Let's thank the Lord for that…”
          <br />
          <br />
          "'If you like your doctor, you can keep your doctor.' If you believed
          that, I have one bridge to sell you located in Brooklyn and electric
          toll malfeasance."
          <br />
          <br />
          Should be illegal to compel labor, and its employers and customers as
          third party beneficiary donees, to sign for longer than a month a la
          carte except for sport drafts… especially for expiring claim false bid
          non-rollover "deals" of collective flaccid loss.
          <br />
          <br />
          Abstain able polls bring out the voluntary crazies, lo is more random
          than can ever be emulated, variance is greater in real life than AP
          Stats.
          <br />I just don’t want rent-seeking from government (40%
          debt-spending, 10% debt-service) over my&nbsp;
          <a href="https://thumbprint.us/voting">election tech</a>
          &nbsp;inventions (
          <a href="https://thumbprint.us">discovery and design</a>) that can be
          &nbsp;<a href="https://3under2.us">free-rider-mutable</a>&nbsp;by
          making the cities, universities and corporates pay. Furthermore,
          evidently by comparative law, I can use any hung-jury-science duress,
          to boot.{/**let alone compatative advantage */}
          <br />
          <br />
          <Cable
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/115QLTNUIomNWfmn8WH-PLvm292yeg31m/preview"
            }
            float="right"
            title="GBNews - Nigel Farage with Biden office manager"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + 45]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          "How do you get people to vote on Election Day?" By providing an
          actual choice, not just two&nbsp;
          <a href="https://teapharmacy.party">wall st Pharma cops</a>
          <br />
          <br />
          <h2>expert conflict of interests</h2>
          An ailment like an umbilical hernia shows the malfeasance in quality
          from so-called "free-markets" constituted by expiring claims and
          invoices, where a wire-mesh was the worst solution for massaging the
          "intestines" inside if that is not a poor job from the birth-catcher
          <hr />
          <Cable
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1eh9NxOH_Be4VO1R-ZszGNbRG89wkaYMx/preview"
            }
            float="left"
            title="GBNews - EU COMPULSORY JABS?"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + 44]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <h2>right retards, them</h2>
          it is sensible, prevalence being the chicken rather than the egg, or
          does it really matter? Haha, about place-density, population growth
          with last years’ life expectancy is short 50m/yr in world and 700k/yr
          in US. The Great Leap Forward expected 15m 35 age/lifetime deaths from
          population growth alone
          <br />
          <br />
          But the&nbsp;
          <a href="https://www.pfizer.com/news/hot-topics/viral_vs_bacterial_pneumonia_understanding_the_difference">
            most
          </a>
          &nbsp;jarring: Bacterial-infection with snapshot electron microscope
          (not “vivo-cause”), the only diagnostic difference between such and
          viral infection is, severity?
          <br />
          <br />
          did you even read what I said? Are you a person?PREVALENCE DOES NOT
          CAUSE MAKE: it was sewage that forebode lifetime, please scroll down
          midway humanharvest.info for the charts of the cellular debris. You
          think virus is an evolutionary trait? It “requires cell to reproduce,”
          because it only comes out
          <br />
          <br />
          <a href="https://www.frontiersin.org/articles/10.3389/fcimb.2018.00396/full">
            here
          </a>
          &nbsp;are some cartoons from your, “virion inseminates cell with its
          dna,” scientists
          <br />
          <br />
          that’s what scientists use to prove your side! What are you smoking.
          <h2>What would you trust the saveFace doctors?</h2>
          I’m a statistician/Govtech/Paytech entrepreneur who doesn’t want to
          work on wall st. Credit is haram and third party beneficiary donee
          claimable
          <br />
          You probably work for someone
          <br />
          <br />
          I am a scientist, I have a bachelors in political science with
          economics minor, only because I think debt is counterfeit in contract,
          and hour targeting instead of per hour price deflation is retarded
          <br />
          <br />
          politics is the use of reason beyond precedence, like we are the
          people that question the science. You’re just a follower. If they told
          you to jump off a bridge you would. Inject me with the virus, I swear
          it won’t spread. Antibodies will be made though. Only bacteria can do
          that
          <hr />
          <h2>
            Are you testing for all similar symptoms in ICU? fixing capacity for
            capacity? 50m short of expected excess deaths worldwide, 700k US,
            leaves the&nbsp;
            <a href="https://www.cdc.gov/flu/weekly/overview.htm#:~:text=5.%20Mortality%20Surveillance">
              mortality
            </a>
            &nbsp;as insignificant and all about nothing
          </h2>
          <hr />
          ms matches paralytic-polio. virion, “requires cell to reproduce,”
          because it only comes out. prevalent byproduct does not
          bacterial-cause make. Cases vs asymptomatic testing certainly is the
          fallacy
          <br />
          <br />
          I'm a statistician, the current vaxxers and antivaxxers are wrong to
          say it spreads from prevalence alone, it is actually a byproduct.
          nearly vivo insemination has been proven with bacteria making cell in
          an open wound, but I would rather cite you this: our diagnosis of
          &nbsp;
          <a href="https://www.pfizer.com/news/hot-topics/viral_vs_bacterial_pneumonia_understanding_the_difference">
            bacterial vs viral
          </a>
          &nbsp;cause right now is merely severity of symptoms? we need
          controlled tests of virus replicating without cellular mitosis of
          already (bacterially-)infected cell. antibodies onset symptoms but
          those may be warning mechanism, cleaning up potential blood clotting
          debris
          <br />
          <br />
          <Cable
            style={{
              height: "220px"
            }}
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1JpTSqcGZyt0kvkw5Evlock4UcRvg-_JL/preview"
            }
            float="left"
            title="GBNews - Lawrence Young of U of Warwick on antibody incidence"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + 43]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          “Antibody response positively-correlates with aggressive symptoms.”
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Cable
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1ID7uJq2pgd4Fh3MtHOBXz2rZ6d7Hvrz7/preview"
            }
            float="left"
            title="American Agenda (Newsmax) - Medicare Advantage Program"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + 42]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <Cable
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1aCSy4cwqTFpaFCx1nnB_0yrP4ZqVzZFq/preview"
            }
            float="right"
            title="American Agenda (Newsmax) - Medicare Advantage Program"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + 41]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          “You’d be in good company, 26m people have a medicare advantage plan.
          I have a plan too and I really love it I’ve tried other coverage but
          they do not meet my needs nor my budget, now until November 7th …$0
          monthly premium plans may be in your area, don’t delay, our team is
          standing by to help you right now.” But what if invoices were illegal,
          what would be your purpose Paula? “You really want together these
          benefits. Coming up, you’ll see real customers. Come find your
          medicare advantage plan!”
          <br />
          <br />
          Stop calling reappropriating laborequity.org, and nationalism,
          socialism! Free market communist!
          <br />
          <br />
          Ppp is trust building and I think gun violence is because we have
          finance (expiring claims & invoices, implausible landlord use above 5
          units/30 days)
          <br />
          <br />
          <h2>
            This is like an invisible methane fire, the way doctors are trying
            to play statistician
          </h2>
          Your biology class didn’t show you a vivo insemination of virion dna
          in cell
          <br />
          It’s literally counted as a flu, byproduct-prevalence does not make
          cause
          <br />
          <br />
          <Cable
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1chpUdy6o4qmfVKp6KPUhX3fOFQJDtbAR/preview"
            }
            float="right"
            title="American Agenda (Newsmax) - Child Critical Care Doctor Saveface smiling about evidence exhibited by cartoon"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + 40]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          Vaccines prevent infection because of byproduct prevalence? Vivo
          insemination of virion in cell is only portrayed in cartoons thus far,
          not real life
          <br />
          <h2>
            vivo-evolutionary-trait or byproduct-retroactive-prevalence, because
            in vitro we know it only comes out,&nbsp;
            <a href="https://www.fda.gov/media/144245/download#page=42">
              5% of suspected
            </a>
          </h2>
          Mark Levin and Chuck Schumer call this collective loss, "protection:"
          <br />
          <br />
          "hospitals are packed, hundreds a day dying," that isn't a lot, and
          expiring claims/invoices misappropriated funds to adniministration
          instead of hospital beds, as the latter has not grown since population
          was half its size. 2015 census mortality projections, hospital
          capacity watchers and I knew this "pandemic" was coming, because of
          population growth.
          <h2>
            plausible deniability of talk radio and cable for&nbsp;
            <a href="https://www.cdc.gov/flu/weekly/overview.htm#:~:text=5.%20Mortality%20Surveillance">
              ratings
            </a>
            &nbsp;is over
          </h2>
          <br />
          "In New Zealand, you get fined if you don't vote," "well yeah, some
          countries take this very seriously,"
          <h2>
            talk about state victimization racketeering and tort beyond capacity
            without expiring claims nor invoices and within jury-science (every
            industry represented)
          </h2>
          <br />
          "The first omicron case has arrived in the U.S. He is vaccinated, so
          he has no symptoms,"
          <br />
          <br />
          age-standardized excess deaths short 700k 1.2m/yr+ 75+ 2015- expected
          is not a "pandemic."
          <br />
          <span
            style={{
              backgroundColor: "rgb(197, 179, 88)",
              color: "black"
            }}
          >
            Sen Rand Paul:
          </span>
          &nbsp;“If people buy what you make, G-d love you, that is the American
          way. I’m against the government buying their product.” What about
          expiring claim “purchases” and invoices? Are those ‘
          <a href="https://nationalsecuritycasino.com">buys</a>?’
          <br />
          <br />
          “Monoclonal-antibodies will take care of those who cannot take care of
          themselves.
          <br />
          Incurring more debt is why we are paying more in inflation through
          this pandemic.
          <br />
          Insurance companies should have paid for our healthcare.”
          <br />
          <h2>
            invoices and insurance coverage are theft of third party beneficiary
          </h2>
          <a href="https://saverparty.xyz">Plaintiffs</a>&nbsp;contend they are
          third party beneficiaries under Civil Code section 1559, which
          provides: "A contract, made expressly for the benefit of a third
          person, may be enforced by him at any time before the parties thereto
          rescind it." This section excludes enforcement of a contract by
          persons who are only incidentally or remotely benefited by it. (Lucas
          v. Hamm (1961) 56 Cal. 2d 583, 590 [15 Cal. Rptr. 821, 364 P.2d 685].)
          American law generally classifies persons having enforceable rights
          under contracts to which they are not parties as either creditor
          beneficiaries or donee beneficiaries. (Rest., Contracts, §§ 133,
          subds. (1), (2), 135, 136, 147; 2 Williston on Contracts (3d ed. 1959)
          § 356; 4 Corbin on Contracts (1951) § 774; see Rest.2d Contracts
          (Tentative Drafts 1973) § 133, coms. b, c.) California decisions
          follow this classification. (Southern Cal. Gas Co. v. ABC Construction
          Co. (1962) 204 Cal. App. 2d 747, 752 [22 Cal. Rptr. 540]; 1 Witkin,
          Summary of Cal. Law (8th ed. 1973) Contracts, § 500.)
          <br />
          <br />
          [6] A person cannot be a creditor beneficiary unless the promisor's
          performance of the contract will discharge some form of legal duty
          owed to the beneficiary by the promisee. (Hartman Ranch Co. v.
          Associated Oil Co. (1937) 10 Cal. 2d 232, 244 [73 P.2d 1163]; Rest.,
          Contracts, § 133, subd. (1)(b).) [1b]
          <br />
          <br />
          [7] A person is a donee beneficiary only if the promisee's contractual
          intent is either to make a gift to him or to&nbsp;
          <a href="https://law.justia.com/cases/california/supreme-court/3d/11/394.html">
            confer on him a right against [11 Cal. 3d 401] the promisor. (Rest.,
            Contracts, § 133, subd. (1)(a).)
          </a>
          <h2>
            "expanding healthcare access - M4A," is expiring-claim, invoice and
            higher-premium for producer-ask of the same
            intermediate-material-and-labor&nbsp;
            <span style={{ fontSize: "9px" }}>
              hidden by 40% debt-spending publically, or not, still fraudulent
              bid of your consumers'/employers'
            </span>
          </h2>
          <Cable
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1qHQmxF3dw_XALhPuZ6FzR-jOJVk22AiB/preview"
            }
            float="left"
            title="American Agenda (Newsmax) - Rob Smith of Turning Point"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + 39]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          Turning Point: “I’m not antivaxx but I am antimandate, unless you tell
          me that the vaccine stops transmission.”
          <br />
          <br />
          conscientious observer:
          <h2>
            excess or regulated antibody symptom warning, infection cause by
            bacterial-cause
          </h2>
          <Cable
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1XDXM3DNlOXNAe4dThh5hJLRo11njzBGE/preview"
            }
            float="left"
            title="National Report (Newsmax) - Dr. Jerome Adams fmr. Us Surgeon General, with a cartoon virion next to his head, and the merk antiviral"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + 37]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          “As the JHU site tells us the US is in the bottom-half of squelching
          variants,” neglecting the inability to compare cases with asymptomatic
          testing of similar symptoms with insignificant changes year to year.
          <br />
          “By Christmas, every citizen should have a 'free' antibody test from
          the government,”
          <br />
          “Smart testing of when people coming into the country and leaving, so
          we can stop the spread of the virus even more,”
          <br />
          “The best bet is to get vaccinated, even though there is conflicting
          information,”
          <br />
          “The same testing still can capture the new variants,” 1 at a time,
          the one with the most proteins?
          <br />
          <br />
          you can't be anti-mandate, pro-vaxx & pro-article4
          <br />
          I would sooner believe virus happens without bacteria as you describe
          [5G, bad vibes] than it is transmitted! Only way it is transmitted
          with only cellular taxonomy is if it is an evolutionary trait to kill
          eachother for no obvious gain
          <br />
          <br />
          credit is forced for debit card platforms, do not call&nbsp;
          <a href="https://nationalsecuritycasino.com">gdp</a>&nbsp;
          <a href="https://micro-theory.com">productive</a>&nbsp; as it is
          prices*hours as that is squared to waste per hour
          <br />
          "Spreading among the unvaccinated," prevalence doesn't make cause
          <br />
          <Cable
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1Kfed9pXm-N3MffFC4-ygKy_XUIH4J3Pn/preview"
            }
            float="right"
            title="John Bachmann (Newsmax) - Director of St. Joseph's Hospital"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + 36]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          He thinks virion is created by cell exclusively. Is it an evolutionary
          trait?
          <br />
          <h2>
            Biden free rider mutable 60% tax and 40% debt-spending r&d monopsony
          </h2>
          "Go get the Booster shot today, they are free. a fully-vaccinated
          person is the best against covid, do not wait. every child is safe to
          get vaccines now, how strongly vaccines fight against the variant,
          infections and severe disease wear masks inside and outside. It
          protects you and those around you
          <br />
          if improvements are needed, the&nbsp;
          <a href="https://teapharmacy.party">fda</a>&nbsp;will put them on the
          market. I am removing all road blocks to keep people safe.
          <br />
          If you are vaccinated, but are worried, get the booster. if you aren't
          vaccinated, get that shot!
          <br />
          I promise America that the latest boosters will be free and everywhere
          in america, free of charge.
          <br />
          <Cable
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1sgt0t2YikacKYIxcxTgTTMSVxetc83r5/preview"
            }
            float="right"
            title="John Bachmann (Newsmax) - Joe Biden"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + 38]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          "We shipped for&nbsp;<a href="https://carducci.us">free</a>&nbsp;to
          other parts of the world, to more than all countries combined,”
          <br />
          We ship 275 vaccines to 110 countries;
          <br />
          no vaccines to other parts of the world will ever come at the expense
          of every American.
          <br />
          How do we meet the morals and protection of Americans?
          <br />
          We cannot let up untill the world is vaccinated, to protect us as
          well.
          <br />
          Last christmas fewer than half, 75% and now 81% of seniors.
          <br />
          There is still time and available before christmas. given where e were
          last year, that non of us should take for granted.
          <br />
          Thats how we reopen our business schools, even in the pandemic, we
          have made record growth, we move forward now.
          <br />
          The reason for the travel ban there was a significant amount of cases
          in africa and around the world.
          <br />
          I don't think anyone will be reluctant to report that we have provided
          more vaccines to that region than the world cobined. the reluctance to
          get it into their arms is there. lol. Alex from Reuters."
          <br />
          <br />
          Rent-seeking (trust-building, public-utility-operating-costable)
          grandiose scope on estimates ever changing (options to buy, sold
          without auth) dependencies, like in home contracting: intermediate
          durable-goods, labor & material. Seize the means of production! Gain
          per hour/price productivity
          <br />
          <br />
          Nomenclature with accounting and software classes and castes is
          necessary for beings
          <br />
          <Cable
            style={{
              height: "340px"
            }}
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1BfcflB_MSKN8sgDh9_4bWzz-fCU4my1s/preview"
            }
            float="right"
            title="GBNews - Maxwell trial"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + 35]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          what is facts about a case to be called a bias if exonerated is
          permissible
          <br />
          Do you not have messages? Flight-logs aren’t proof? What else? These
          things should be public info
          <br />
          <br />
          <Cable
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1JHhCgkEe0_kSk5gH7TRpfYkInJVjuLqf/preview"
            }
            float="left"
            title="National Report (Newsmax) - Shaun Kraisman basis rate fallacy"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + 34]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          6 per 100 in florida because they are testing less, "per" cannot be
          per person AND per tested
          <br />
          <br />
          shut the fuck up bitch
          <br />
          <br />
          <Cable
            style={{
              width: "110px",
              height: "100px"
            }}
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1Ub9mdUZRjgnABUn_7CV-QULnUODCwD5N/preview"
            }
            float="right"
            title="National Report (Newsmax) - Shaun Kraisman basis rate fallacy"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + 33]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          “Encourage people with&nbsp;
          <a href="https://link.springer.com/article/10.1007/s00259-021-05314-2">
            high risk
          </a>
          &nbsp;to get the vaccines,” is&nbsp;
          <a href="https://www.cdc.gov/vaccines/acip/recs/grade/covid-19-moderna-vaccine.html#:~:text=cSeven%20serious">
            not
          </a>
          &nbsp;the right advice, since&nbsp;
          <a href="https://www.google.com/search?q=oncogenic+b-cell+dysregulation">
            excess
          </a>
          &nbsp; antibodies (
          <a href="https://www.aafp.org/afp/2016/1201/p896.html">
            dysregulation
          </a>
          ) can be deadly
          <br />
          <br />
          They think they are ahead of the day, but we have been up earlier in
          actual time
          <br />
          <br />
          If you like to compete with consumers and call yourself a
          conservative, you are making up words. Socialists prevent
          non-labor-demand. This lender-/landlord-work-deficit is 20x/person
          55+/millennial rental-income and 44x accrual at checking velocity of
          &nbsp;<a href="https://fred.stlouisfed.org/graph/?g=JiC5">1.1/yr</a>,
          and how else but to launder savings accounts principal does $4t/yr
          spending 60%, 40% free rider mutable tax (1/4 pensions, 1/4 pentagon,
          1/4 premiums) not become checking-currencyComponentOfM1 Rent seeking
          public utility happens when it is operating costable (unless perpetual
          motion machine or durable good like public parks/dollars)
          <br />
          <br />
          consumer surrogate, target margin, jury for business
          <br />
          <br />
          <h2>
            vaccinations do not stop a testing for one at a time byproduct, they
            make antibodies to stop blood clots by virion excrement
          </h2>
          , but cartoon vivo insemination isn't proof of transmission nor cause,
          just prevalence
          <br />
          <Cable
            style={{
              height: "440px"
            }}
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1Wcvt-h5akh70Ip2YdEcjgoZm8gtdtz_t/preview"
            }
            float="left"
            title="LinkedIn - selective guidelines without ftc citing is fine?"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + 31]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          do not implement asymptomaic-testing, unless you want to obfuscate
          time-series detection of the universal cause of similar symptoms
          <br />
          <br />
          <Cable
            style={{
              width: "110px",
              height: "100px"
            }}
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1uYUmSOIjSZbONbeyNxqKb8YfL99Kc2-f/preview"
            }
            float="right"
            title="National report (Newsmax) - Glenn Gromkin"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + 31]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          Simple majority is quicker to find guilty than 11/12
          <br />
          Innocence isn’t ever given the benefit of the simple majority,
          especially with ideological duress of voters and defiance of eligible
          <br />
          <br />
          "Financial," isn’t a deal per person nor group unless it is immediate
          escrow; it is any demand that is not labor or share-split/tax that is
          not of the consumer for same goods nor for free rider mutable or
          non-concurrentable things like outlays, claims nor hours,
          <br />
          <br />
          it is otherwise any competition with the consumer in third party
          beneficiary law or intent to harm deduced (more than 5 units or 30
          days)
          <br />
          <br />
          politics is not a "political thing," "predicting what is more accurate
          in the future," is the very utility of politics as to reasoning for
          outlaws
          <br />
          there is already third party beneficiary law
          <br />
          <a href="https://story.snapchat.com/p/6297f1b9-30a8-4538-80fe-2f15b4d1ce76/1643955896086528/2289369221603328">
            this is still happening albeit in countervailing law
          </a>
          {/*<Cable
            style={{
              width: "110px",
              height: "100px"
            }}
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://story.snapchat.com/p/6297f1b9-30a8-4538-80fe-2f15b4d1ce76/1643955896086528/2289369221603328"
            }
            float="right"
            title="Weird History (Snapchat) - Asylums"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + 30]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />*/}
          <br />
          <Cable
            style={{
              height: "440px"
            }}
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1HPSdsdqU_1_Qm_nRI2TL28tiRJ_veRIr/preview"
            }
            float="left"
            title="Bernie and Sid (77WABC) - Asylum review, bail means no evidence"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + 29]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <br />
          "Republicans wouldn't go along with this," but will in 60/40 wall
          st/gov
          <br />
          2010-20 $4t/yr 1/4 pentagon 1/4 pension 1/4 expiring-premiums, 40%
          debt spending over compounding basis by such itself and debt limit is
          Zero
          <br />
          <Cable
            style={{
              width: "110px",
              height: "100px"
            }}
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1d4VdzR79K0BUalejrHiMSUhzWcHyvGAR/preview"
            }
            float="left"
            title="National report (Newsmax) - Sen Cassidy on This Week (ABC)"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + 28]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <Cable
            style={{
              width: "100%",
              height: "300px",
              maxHeight: "25vw",
              transform: "scale(-1,1)"
            }}
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1PJ8391RQyJ1CkPraFAZOk-W1tt0LwHuI/preview"
            }
            float="right"
            title="Face the Nation (CBS) - Fauci, 'I am science,'"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + 27]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <br />
          <Cable
            style={{
              width: "110px",
              height: "100px",
              transform: "scale(-1,1)"
            }}
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1en8tGznaX0WmJTG8sWSxFCY4j_7YjgIY/preview"
            }
            float="left"
            title="Michael Osterholm portrait"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + 26]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <Cable
            style={{ height: "40px", width: "60px" }}
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1rTktXHe1x8nZzDOO7anMw4sGV38-ZTum/preview"
            }
            float="right"
            title="virus insemination cartoon evidence"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + 25]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          assumptions make an ass out of you and me
          <br />
          Just because you test one virus at a time doesn’t mean it is
          transmitted, it is borne in vivo by each individual from &nbsp;
          <a href="https://youtu.be/Weqb9KrQ-TU?t=21">bacterial</a>-cause
          <h2>
            Less likely to catch the virus just because of prevalence? You need
            vivo&nbsp;
            <a href="https://www.sparknotes.com/biology/cellreproduction/cellcycle/section2/">
              insemination
            </a>
            , babe
          </h2>
          the positivity rate is higher in lower asymptomatic-testing
          <br />
          are you not testing asymptomatic-testing one at a&nbsp;
          <a href="https://www.cdc.gov/flu/about/professionals/antigenic.htm">
            time
          </a>
          ?
          <br />"
          <a href="https://www.pfizer.com/news/hot-topics/viral_vs_bacterial_pneumonia_understanding_the_difference">
            Pfizer
          </a>
          &nbsp;will know the effect of the variant on their vaccines in just a
          couple weeks,” Jim acosta, that makes no&nbsp;
          <a href="https://www.fda.gov/media/144245/download#page=42">sense</a>.
          <br />
          {this.state.ios && (
            <span style={{ border: "1px solid" }}>
              "Among 3410 total cases of suspected but unconfirmed COVID-19 in
              the overall study population, 1594 occurred in the vaccine group
              vs. 1816 in the placebo group"
            </span>
          )}
          <br />
          <Cable
            style={{ width: "300px", height: "350px" }}
            onError={handleScollImgError}
            src={
              this.state.noyoutube
                ? ""
                : "https://www.youtube.com/embed/IPQIsodwMwY"
            }
            float="left"
            title="Stephen Moore June 13th, 2021 Moore Money, Population Growth, Epiology & GDP/population"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + 24]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <h2
            style={{
              backgroundColor: "rgba(200,100,150,.5)"
            }}
          >
            not with those numbers, no,&nbsp;
            <a href="https://saverparty.xyz/#:~:text=%22Math">neigh</a>
          </h2>
          I was literally lassoed for a siringe for calling insurance net loss
          and upon false imprisonment, but why wouldn't mental-health have to
          use evidence and jail or acquit right away malfeasance? What else but
          racket. I thought it was a knee appointment but my mom whispered to
          them that I&nbsp;
          <a href="https://truncatedsalestax.com">pushed</a>
          &nbsp;her. like the britney spears case, given to her at discount of
          what I deserve because she is the one with collateralized debt. my
          consumer debt and IP isolated is&nbsp;
          <a href="https://carducci.us">good for you</a>
          <br />
          <br />
          <Cable
            style={{ width: "300px", height: "345px" }}
            onError={handleScollImgError}
            src={
              this.state.nolinkedin
                ? ""
                : "https://www.linkedin.com/embed/feed/update/urn:li:share:6870778078365278208"
            }
            float="right"
            title="https://linkedin.com/in/nickcarducci https://www.linkedin.com/feed/update/urn:li:activity:6870778078793089024/?commentUrn=urn%3Ali%3Acomment%3A%28activity%3A6870778078793089024%2C6870780409710448641%29"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + 20]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          Utility is too broad just design and discovery should do you good.
          License: “UNLICENSED”
          <br />
          <br />
          Class solution from politics, not law. bipartisan detractors is from
          false bids and infinite producer reason in finite producer reality
          <br />
          <br />
          "a lot of [afro] income growth is the work[-seeking] requirement for
          unemployment false bid pools (insurance)"
          <br />
          <br />
          "Communism is radical political coercion." Like entrapping?
          {/**compelling gov purpose, jury for business and free rider immutable 
          sewage police lawsuits, that cannot be pro-rated in immediate t-0 escrow,
           else collective bargain fails to bring ask-to-bid */}
          <br />
          Or fraudulent. Politics should be subject to desistation to jury of
          exhibits before jury decides it is evidence
          <br />
          <br />
          taking people off welfare by labor monopsony of free rider mutable r&d
          monopsony tax 40% and the rest debt-spending, 10-40% debt service
          fed-state,
          <h2>
            instead of knee-capping&nbsp;<a href="https://30under5.us">rent</a>
            -seekers?
          </h2>
          <br />
          <h2>
            <a href="https://www.academia.edu/48950651/Economics_of_Politics_Public_Finance_Term_Paper">
              assuming
            </a>
            &nbsp;something of employers and new business to&nbsp;
            <a href="https://policonomics.com/pareto-optimal/#:~:text=Following">
              infinity
            </a>
            , and &nbsp;<a href="https://carducci.us">beyond</a>
          </h2>
          "No fault welfare," while 65+ gain half unemployment and mental
          illness is a diability, but not previous work and injury or
          self-inflicted except on site for false bid pool, expiring premium,
          non-rollover insurance. “Trump solved the problem with vaccines, but
          there are more deaths with vaccines,” Dick Morris. 75+ since 2015
          1.2m/yr growth in cohort
          <br />
          <br />
          <a href="https://froth.app">
            carducci.us
            <Cable
              style={{ width: "auto", height: "60px" }}
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/u9kahqiqiiqse5t/froth%20logo300150.png?dl=0"
              }
              float="right"
              title="froth.app"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + 19]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
          </a>
          “Nobodies crazy whom detect conspiracies, but Biden is ill based on
          his intellect rather than brain&nbsp;
          <a href="https://brainscan.info">dent</a>,” diagnoses Rudy Giuliani
          <br />
          <br />
          <TwitterTweetEmbed
            style={{ float: "right", width: "300px" }}
            key="1428312309685002241"
            tweetId="1428312309685002241"
          />
          I don’t know why Greg Kelly makes fun of me when I say this but
          population growth was 1.2/yr lifetime ago and our age is 60 dying of
          flu, 74 dying of covid and 75 being natural. Probably racketeering ppp
          trusts
          <br />
          <br />
          Marty Makary: "Adults who have not been immunized 20-30m," will make
          the virus but that doesn’t mean they transmit it to eachother, nor is
          it the only virus being produced upon&nbsp;
          <a href="https://www.pfizer.com/news/hot-topics/viral_vs_bacterial_pneumonia_understanding_the_difference">
            bacterial
          </a>
          -infection
          <br />
          <br />
          <Cable
            style={{ width: "300px", height: "350px" }}
            onError={handleScollImgError}
            src={
              this.state.noyoutube
                ? ""
                : "https://www.youtube.com/embed/m-CwPBcrMYQ"
            }
            float="left"
            title="Rudy Giuliani on T2T 77WABC - bacteria is cause"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + 16]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          virus causes bloodclots that antibodies do stop, but the virus only
          spreads by mitosis, not insemination. prevalence doesn't make
          transmission necessarily and in this case it is artifact not not
          necessary byproduct
          <br />
          <br />
          you dont test for all at once because it wouldn't correlate with a
          racket or save-face
          <br />
          <br />
          As a person who deals in time-series data, please do not
          asymptomatically-surveil-genomes, keep to the causal-intersection
          <br />
          Change the way your brain is set up, by deformation or suppression is
          dysregulating
          <br />
          Government should stop experimenting on people and animal, unlock r&d
          from free rider mutable tax, 40-50% debt spend and closed source
          licensure
          <br />
          <br />
          <a href="https://truncatedsalestax.com">dr benten cnn</a>
          <br />
          More support is literally r&d cheating
          <br />
          Treatment decided by others only in mental health
          <br />
          <br />
          Mental health care, paid by parents, is an extension of non-compete
          laws of parents from children, false bid pools abetting invoices is
          useless, settle up doc, why don't you. do we animal test and close
          source for craft beers? I don't think the per hour propensities are
          worth it
          <br />
          <br />
          Imagine a self-licensed statistician on CNN on Sundays at 9 doing the
          following:
          <h2>tl;dr: "Lockdown everyone!"</h2>
          <Cable
            style={{ width: "300px", height: "350px" }}
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1HRzROQon0ShwIgr0bzZACXMqjv0kH26K/preview"
            }
            float="right"
            title="Smerconish n 10k poll 5% against or for lockdowns absolutely"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + 15]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          What kind of survey question excludes people that want travel for
          everyone?
          <br />
          Agree means vaxx only
          <br />
          Disagree means no flights for anyone or flights for everyone
          <br />
          <br />
          <Cable
            style={{ width: "300px", height: "350px" }}
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1kFFloHMKufd_g0rkEkEB_tahpS5YKPQe/preview"
            }
            float="left"
            title="Smerconish n 10k poll 5% against or for lockdowns absolutely"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + 14]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          established itself endemically, why don't you test for all 2k/yr
          discovered (10k/yr looked at)? prevalence does not a transmissibility
          make.&nbsp;
          <h2>it is the byproduct of bacteria</h2>, already proven vivo
          insemination by bacteria in open wound, not by G-d or without a
          taxonomy at all, like bacteria, and virus from cell.
          <br />
          <br />
          <h1>
            More testing begets less death/symptom co-incidence&nbsp;
            <span>does not pretend postend-to-cause</span>
          </h1>
          Cartoon vivo insemination, is dead byproduct and asymptomatic-test
          does not make a case. Remember page 42&nbsp;
          <a href="https://www.fda.gov/media/144245/download#page=42">
            https://www.fda.gov/media/144245/download#page=42
          </a>
          &nbsp;“Among 3410 total cases of suspected but unconfirmed COVID-19 in
          the overall study population, 1594 occurred in the vaccine group vs.
          1816 in the placebo group,”&nbsp;
          <h2>is not even presentable to the jury</h2>
          <br />
          Let me qualify myself as a student of economics, market history and
          propoganda, I learned some from Monmouth U and Hopkins, and I might
          sue for damaging my degree by tranching out detractors to
          cartoon-science and doctrine-discrimination beyond jury for business
          and any semblance of the very principles and pillars of infinite
          producer reasoning in a finite producer world, targeting margins to
          make demand exclusively labor. with all this profit withheld we have
          to outlay, and with all this collateralized debt, we have to
          #AmortizeByReverse don't cancel debt:cash*income thru history, as to
          end the RepoCycleWithDowns
          <br />
          <br />
          In my science, Fauci and WHO are suffering from basis rate fallacy, of
          cases vs asymtpomatic testing of the byproduct of a cause of a
          changing byproduct, to which is garbage of a garbage collection
          process
          <br />
          <br />
          as for epiology, basis rate fallacy elsewhere and in sum, thrice, is
          ms matched paralytic polio and "age-standardized," "excess deaths" do
          not account for population growth nor age-cohort size
          <br />
          <br />
          <Cable
            style={{ width: "110px", height: "100px" }}
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1jIFJKjdlH-qow0YuW_oSX7OzW7zWT6Lx/preview"
            }
            float="left"
            title="Wake Up America (Newsmax) - Dr. Johnathan Baugh"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + 13]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          "Transmissible doesn’t mean illness," but prevalence doesn’t mean
          transmissible
          <br />
          <br />
          nadia bashir is looking at random sample data an flipping out about,
          whatever
          <br />
          <br />
          “We are going to actually test it” Fauci needs to inseminate cell
          still with virus, not draw cartoons or find an already infected cell
          that undergoes mitosis. “Precautions acting swiftly with caution to be
          safe”
          <br />
          <br />
          bbc brexit bashing corporation is free rider mutable monopsony and
          gentrification of reporters, making it "biased" but more accurately
          industry-precedence-interested
          <br />
          <br />
          <Cable
            style={{ width: "130px", height: "170px" }}
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1KwGgfIWRztdR0OPgjxw10TAgJFQ5_bcP/preview"
            }
            float="right"
            title="GBNews - Professor Karol Sikora, Former Head of Cancer Programme at WHO"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + 12]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          “I think we will have Christmas, but it may hit older people more,”
          just because it is prevalent in hospitalizations and deaths doesn’t
          mean it is the cause. It is byproduct of bacterial-infection every
          time, where vivo has already been proven (not a cartoon)
          <br />
          <br />
          they literally fund testing when desiring to sell off, then hike and
          sell to trap {"<"}$25k accounts in pattern day trading, like a kettle
          of fish
          <br />
          <br />
          random testing can produce a range in historical variation in
          prevelance as well as if you change testing method, with no bearing on
          causal-prevalence
          <br />
          <br />
          Replace all McDonald's with beets me (free range meats and veggies
          <span role="img" aria-label="trademark">
            ™
          </span>
          ️)
          <br />
          <Cable
            style={{ width: "110px", height: "100px" }}
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/13Dpy7lQQtUoGZDJiFDWLCgMwgj-pIdWw/preview"
            }
            float="left"
            title="Chris Salcedo with Carl Higbie and Amy Tarkanian saying we are technically in a pandemic"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + 11]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          We aren’t technically in a pandemic when excess deaths is less than
          expected
          <br />
          <br />
          <Cable
            style={{ width: "110px", height: "100px" }}
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1v0migHecvOK1qo4ba-XZ2XdncYtZAWYy/preview"
            }
            float="right"
            title="Eric Bolling (Newsmax) - basis rate fallacy by artifact not sufficient as in vivo proof or at lease suspected (symptomatic)"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + 10]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          Vaccines don’t stop hospitalizations, nor does "virus spread," on
          account of an artifact-byproduct that doesn’t necessarily make when
          suspected case, let alone is not the cause proven by vivo
          insemination, just claiming credit when finding it in the wild, an
          dead-excrement of cells that never “injects its dna” except in
          cartoons
          <br />
          <h2>
            trust statisticians, not doctors with industry-precedence-interest
          </h2>
          immune escape is not measured by virus prevalence, but symptom, or
          else what are you curing?
          <br />
          _Variant (nation-based-naturalization) is just a measure of where
          testing eminated from
          <br />
          Please don't test asymptomatically, as time-series gets FOOKED
          <br />
          chicken or egg, doesn't matter. the cause is elsewhere, until you show
          me
          <br />
          <h2>
            in vivo electron microscope, viral insemination&nbsp;
            <span
              style={{
                fontSize: "9px"
              }}
            >
              beyond mitosis&nbsp;
              <a href="https://www.sparknotes.com/biology/cellreproduction/cellcycle/section2/">
                1/cell/day
              </a>
              &nbsp;of already infected cell
            </span>
            , #NoMoreCartoonVirus
          </h2>
          <br />
          <Cable
            style={{ width: "110px", height: "100px" }}
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1pFubWjK5D8RrVMyH9WSRkovveK1C6Y-B/preview"
            }
            float="left"
            title="American Agenda - Logan Raddick & Alex Salvi, jiggers for corporate profits"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + 9]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          Increased rate of infection measured by asymptomatic testing? You are
          so stupid Alex
          <br />
          <br />
          Why do you think spread is testing what is byproduct of another cause?
          All you show is cartoons. I want in vivo electron microscope
          <br />
          <br />
          <Cable
            style={{ width: "110px", height: "100px" }}
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1U8D-IXewHpctFt3uhpUWh9-JYiKai5pB/preview"
            }
            float="right"
            title="American Agenda - Logan Raddick & Dr. McCormick basis rate fallacy, confused"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + 8]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          Asymptomatic testing isn’t prevalence to compare, as you can see
          hospitalizations are even for covid and flu over time because there
          asymptomatic-tests of not-necessary-artifact-type is not counted
          <br />
          <br />
          “The lockdown chased me out of the business”
          <br />
          Just because you test (upon symptom) doesn’t mean it isn’t just
          artifact byproduct of another cause
          <br />
          <br />
          <h3>
            Need consumer surrogate with target margins (& jury for business)
            <span style={{ fontSize: "9px" }}>
              , not 60% free rider mutable tax (& 40% debt-spending, 10-40%
              debt-service) to hide premiums at greater amortized cost
              (actualized, concurrently-consumable-or-useable)
            </span>
          </h3>
          False bid pools (or expiring, non-rollover insurance without
          concurrentable units) engendered grave misappropriation of funds. At
          least a quarter of gdp is healthcare, because it is insurance AND
          invoices. Population has doubled since the last time new hospital beds
          were built. The available beds here probably do not account for slow
          times and states
          <br />
          <br />
          Gordon Chang, why do you think a weaponized virus without in vivo
          proof ever of replication beyond mitosis, meaning null insemination
          without bacteria in snapshot, would be released accidentally, or what
          other reason are you purporting the CCP is hiding their motive? If it
          wasn't an accident, why wouldn't they claim it? Just to kill? well,
          excess deaths might become more than expected with half the citizens
          now with induced excess antibodies attacking their own cell
          <br />
          <br />
          <Cable
            style={{ width: "150px", height: "210px" }}
            onError={handleScollImgError}
            src={
              this.state.noyoutube
                ? ""
                : "https://www.youtube.com/embed/nKvUf7F4Xn4"
            }
            float="right"
            title="Dick Morris 77WABC - bacteria is cause"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + 17]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          Cause
          <br />
          Root/link
          <br />
          Byproduct
          <br />
          Link
          <br />
          <br />
          <a href="https://www.nature.com/articles/s41598-020-73162-5">
            virus
          </a>{" "}
          on day 2
          <br />
          <br />
          false bid pools and invoices are useless
          <br />
          <br />
          Making&nbsp;
          <a href="https://truecostofhealthcare.org/admissions_data/#:~:text=Figure%2017:">
            heroes
          </a>
          &nbsp;out of criminals, Dimon v Floyd
          <br />
          <br />
          Deflecting vs assigning blame
          <br />
          <br />
          <Cable
            style={{ width: "110px", height: "100px" }}
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1_DRu666wROLmR2R7dML1Q2Mc74UPzrvX/preview"
            }
            float="right"
            title="Spicer & co - vaccine propoganda"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + 8]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          It’s&nbsp;
          <a href="https://www.fda.gov/media/144245/download#page=42">not</a>
          &nbsp;more effective to get vaccinated when the virus is the
          asymptomatic-byproduct and not the cause, nor all cases
          <br />
          <br />
          doctors' confirmation bias' (savefacing)
          <br />
          free-markets of finite reality by infinite reason cannot find truth
          for duress within mvp nor utility/price.&nbsp;
          <a href="https://www.cdc.gov/flu/prevent/vaccine-supply-historical.htm">
            antibodies
          </a>
          &nbsp;stop byproduct that which causes infection and illness is a
          warning&nbsp;
          <a href="https://journals.sagepub.com/doi/full/10.1177/1745691620942516">
            sign
          </a>
          {this.state.lastWidth && (
            <a
              style={{ color: "rgb(230,230,255)" }}
              href="https://gis.cdc.gov/grasp/fluview/fluportaldashboard.html"
            >
              <Vaxx
                lastWidth={Math.min(600, this.state.lastWidth)}
                style={{
                  transform: "translate(0,0)",
                  backgroundColor: "rgba(250,250,250,0.6)",
                  height: "200px"
                }}
              />
            </a>
          )}
          <a href="https://www.cdc.gov/flu/weekly/overview.htm#:~:text=5.%20Mortality%20Surveillance">
            "COVID-19 coded deaths were added to P&I to create the PIC
            (pneumonia, influenza, and/or COVID-19) classification."
          </a>
          <br />
          17-29% heart-attack is in vivo by vaccine
          <br />
          <br />
          <Cable
            style={{ width: "110px", height: "100px" }}
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1Pj0ilT3omFgLCLIZNG_B6txdDlQl3R2w/preview"
            }
            float="left"
            title="GBNews - Heart Disease link to mRNA-sporing-grafts"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + 7]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          Groundbreaking: researcher says managment put outlays and
          accrual/false-bid-pools over science and settlement
          <br />
          <br />
          <div
            style={{
              textAlign: "right",
              float: "right",
              width: "300px",
              maxWidth: "50%"
            }}
          >
            <Cable
              style={{ height: "40px", width: "60px" }}
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1rTktXHe1x8nZzDOO7anMw4sGV38-ZTum/preview"
              }
              float="right"
              title="virus insemination cartoon evidence"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + 6]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            simple-majority is&nbsp;
            <a href="https://youtu.be/Weqb9KrQ-TU?t=21">not</a>&nbsp;enough, and
            jury is not as&nbsp;
            <a href="https://www.frontiersin.org/articles/10.3389/fcimb.2018.00396/full">
              random
            </a>
            as voluntary
          </div>
          <a href="https://www.cdc.gov/flu/weekly/overview.htm#:~:text=5.%20Mortality%20Surveillance">
            cases vs asymptomatic-testing is the fallacy
          </a>
          <br />
          <h2>“We could have saved them”</h2>
          <Cable
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1lS1_JXCxguiDRXa1vApy0GfK-fTXZdSE/preview"
            }
            float={"left"}
            title="https://www.census.gov/library/stories/2017/10/aging-boomers-deaths.html"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + 5]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <a href="https://fred.stlouisfed.org/graph/?g=H5XB">
            <Cable
              style={{ height: "auto", width: "300px" }}
              img={true}
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/3lmwgcqcvrj1gx2/Projected%20mortality%20census.png?dl=0"
              }
              float={"right"}
              title="https://www.census.gov/library/stories/2017/10/aging-boomers-deaths.html"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + 4]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
          </a>
          WWII was a life-expectancy ago... rate of change thru 2009 shows this{" "}
          <br />
          <br />
          In US 700k/less and in World 50m/less than population growth a
          lifetime ago... that is insignificant,&nbsp;
          <a href="https://www.pfizer.com/news/hot-topics/viral_vs_bacterial_pneumonia_understanding_the_difference">
            changing byproduct testing
          </a>
          .
          <br />
          <br />
          {this.state.lastWidth && (
            <Epiology lastWidth={Math.min(600, this.state.lastWidth)} />
          )}
          <a href="https://youtu.be/Weqb9KrQ-TU?t=21">electron microscope</a>
          &nbsp;snapshot, cartoon in vivo virus insemination. I think it only
          comes out, & is&nbsp;
          <a href="https://wyss.harvard.edu/news/the-secret-life-of-bacteria-revealed/">
            exclusively caused by bacterial infection
          </a>
          .
          <br />
          <br />
          <hr ref={this.polio} />
          third party beneficiary is our law, no surrender what option to buy of
          intermediate-scope you can't concurrently-fulfill
          <br />
          <br />
          finite producers, 11/12 jury means 1 person is crazy when convicted or
          permitted in duress for minimal viable product for voluntary trade
          <br />
          <br />
          ms literally, "matches paralytic polio" in US numbers
          {this.state.lastWidth && (
            <Polio lastWidth={Math.min(600, this.state.lastWidth)} />
          )}
          {this.state.lastWidth && (
            <Dies
              lastWidth={Math.min(600, this.state.lastWidth)}
              style={{
                float: "right",
                transform: "translate(0,0)",
                width: "400px",
                maxWidth: "100%",
                backgroundColor: "rgba(250,250,250,0.6)",
                height: "250px"
              }}
            />
          )}
          even if antibodies just clear up byproduct of bacterial-cause and
          virus only comes out, you can expect this 800n result
          <a href="https://link.springer.com/article/10.1007/s00259-021-05314-2">
            4.8%+ lymphoma "hot nodes"
          </a>
          <br />
          <br />
          excess antibodies attacking mRNA-spored-protein-graft
          <br />
          attacking your own cell with protein made from the grafted-mRNA*
          <br />
          <button
            onClick={(e) => {
              e.stopPropagation();
              this.setState({ fall2021: !this.state.fall2021 });
            }}
          >
            <h3>fall2021</h3>
          </button>
          <br />
          <div style={{ display: this.state.fall2021 ? "block" : "none" }}>
            <Cable
              style={{ height: "auto", width: "300px" }}
              img={true}
              onError={handleScollImgError}
              src={
                this.state.serviceCancelingImages
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/mgm24pg4qqzelyy/2009%20index%20wwii%20life%20expectancy.jpeg?dl=0"
              }
              float={"left"}
              title={
                `indicies of population and monies are expounded, ` +
                `respectively showing gdp/population is constant with ` +
                `fixed resources with differing forms and technological ` +
                `advancements but still same melted- or decompositional-forms`
              }
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + 3]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            <Cable
              style={{ height: "auto", width: "300px" }}
              img={true}
              onError={handleScollImgError}
              src={
                this.state.serviceCancelingImages
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/7juhzw918i6hxwm/index%20of%20growths.jpeg?dl=0"
              }
              float={"right"}
              title="full chart of the above that is zoomed-in"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + 2]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            <Cable
              style={{ height: "auto", width: "300px" }}
              img={true}
              onError={handleScollImgError}
              src={
                this.state.serviceCancelingImages
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/6a47ublnabh49ze/evidence%20rent%20no%2045%20to%2055%20work.jpeg?dl=0"
              }
              float={"left"}
              title="population cohorts show dramatic increase of 65-74 cohort over 2010's, absolutely"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + 1]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            <br />
            froth.app/stats
            <hr />
            <br />
            Covid variants before they emerge? G-d made humoral like 'survival
            of fittest' not 'dependence.' @newsmax we can assume this @CDCgov
            <br />
            <br />
            vaccine from brought forward demand is not free @newsmax @potus @ftc
            @fcc you cannot reward people to harm themselves that is a form of
            duress and criminal-intent can be exhibited as evidence deduced
            <br />
            <br />
            governments have to prove virus doesn’t condensate first before
            laying your fines? @uscourts (Warning+Fines) can be totally replaced
            by torts. No victim no crime (except for masks causing microscopic
            mold and virus without human cell)
            <br />
            <br />
            even if condensation was disproven, the choice would be the patrons’
            to make legally. The Goldman Sachs government is in the hole and
            need money. They are too corrupt to repossess and reimburse and move
            to http://3under2.us for free-rider-immutable service instead.
            <br />
            <br />
            Total neglectful and unreasoned corruption @PhilMurphyNJ @CoryBooker
            @SenatorMenendez where is your proof condensation isn’t real <br />
            <br />
            you don't even test countertops after talking to describe use of
            masks in-weight-of the costs of virus surviving in
            spit-induced-humidity to-which-it cannot condensate into the
            atmosphere
            <br />
            <br />
            It’s illegal to claim these saved lives without proof. @fcc like I
            cannot claim the lymphoma was caused by Moderna nor FDA say it was
            not
            <br />
            <br />
            Herd immunity is just as effective 50% forcing it and the rest
            getting it when they get it. MAYBE groups make virality-nodes but
            give me a break @bernardmcguirk3
            <br />
            <hr />
            Walensky is presenting abstract graphs of even mask-use correlation!
            We want countertop talking test! When do we want it? Now! @NSF
            <br />
            <br />
            When you have @NIH make your creativity for you
            <br />
            <br />
            Love when I request the countertop-talking-test and the shmoe on tv
            starts spitting a bit more @fcc @MonmouthHawks
            #PoliticalCommunication @Chinamission2un
            <br />
            <br />
            “The risk is too high” @CDCDirector to not have antigen-vaccine or
            lab-graft with FDA determination lymphoma WAS NOT linked to
            Moderna-choreographed and reported study @fcc
            <br />
            <br />
            They need more,every year, they say, and prohibit trade @ftc based
            on assumptions, one being condensation doesn’t happen @mit
            <br />
            <br />
            <Cable
              style={{ width: "150px", height: "210px" }}
              onError={handleScollImgError}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://www.youtube.com/embed/1D6n2om9I6A"
              }
              float="right"
              title="Dick Morris 77WABC - bacteria is cause"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + 23]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            Humoral response is more safe
            <br />
            <br />
            <a href="https://www.lls.org/news/the-leukemia-lymphoma-society-statement-on-covid-19-vaccine-distribution">
              "While the news of the approval is encouraging, and the pace of
              progress gives us all reason to be optimistic, more research is
              needed to determine the safety and efficacy of this and other
              COVID-19 vaccines for cancer patients" 49
            </a>
            <br />
            <br />
            <a href="https://www.cdc.gov/vaccines/acip/recs/grade/covid-19-moderna-vaccine.html">
              Seven serious adverse events were deemed by blinded investigators
              to be related to vaccination. These included: intractable
              nausea/vomiting; facial swelling (two reports); rheumatoid
              arthritis; dyspnea with exertion and peripheral edema; autonomic
              dysfunction; and B-cell lymphocytic lymphoma. Through further
              investigation by the FDA, only three were classified as related to
              vaccination: one report of intractable nausea/vomiting and two
              reports of facial swelling. The FDA concluded that the possibility
              that the vaccine contributed could not be excluded for rheumatoid
              arthritis, dyspnea and peripheral edema, and autonomic dysfunction
            </a>
            . The FDA concluded that B-cell lymphocytic lymphoma was not related
            to vaccination.
            <a href="https://www.fda.gov/media/144452/download">citation</a>
            &nbsp;
            <br />
            I’ve made the statistical law that populations need to be shuffled
            for significance to be true
            <div style={{ width: "100%", maxWidth: "600px" }}>
              <img
                style={{ height: "auto", width: "100%" }}
                alt="many 60+ now 5x than 1950, gradually"
                src="https://www.dl.dropboxusercontent.com/s/q8n2wh39sk1u0me/Population-Pyramid-1950-to-2100-793x550.jpeg?dl=0"
              />
            </div>
            School is one of the schemes to keep youth from earning wealth while
            they learn.
            <br />
            <br />
            Scholastic public administration? @Cornell If most are fat, old,
            afro or Hispanic & 80% effectiveness to boot. I can withhold people
            based on that correlation and not on subjective minimal viable
            product
            <br />
            <br />
            Sanjay Gupta extrapolates that 20-25% of healthcare professionals
            advise against non-humoral immunity
            <br />
            <br />
            <a href="https://link.springer.com/article/10.1007/s00259-021-05314-2">
              50% worsened lymphoma obviously
            </a>
            , dependence can be assumed from survival of fittest logic . J&J not
            ad as being cultured w stem cells
            <br />
            <br />
            If rates rise, they do not. The most in your face fraud there is
            #cfius
            <br />
            <br />
            The right is not from Civil Rights it is free-rider-excluder
            enslaving those denied not based on mvp, of as evidenced as a
            cease-and-desist defamation order would require.
            <br />
            <br />
            Here, you must prove condensation does not happen @uscourts
            @neiltyson
            <br />
            <br />
            Imminent-danger-lethal, qualified-immunity-only-for-a-bad-shot not a
            car-face #MinnesotaIsGuilty #ChauvinTrial
            <br />
            <br />
            You want to detain people without a crime? While you allow serflords
            and banksquatting? @BrooklynDA
            <br />
            <br />
            Bail strike you let people out @JCats2013 has been saying and now he
            has you on @FCC
            <br />
            <br />
            @aclu #cfius your inability to do math is not my mental illness, no
            humoral mind is ill by definition @JudiciaryDems @SenJudiciaryGOP
            <br />
            <br />
            If you can become mentally-ill from how you are raised, or
            emotional-trauma, you aren't ill @MerriamWebster
            <br />
            <br />
            The market is not when human labor is capital @MexOnu . The market
            makes things fair unless it is counterfeit in promise instead of
            profit-share/equity
            <br />
            <br />
            what is 1/death-expectancy not going to have diminishing marginal
            returns of antiviral, sanitation and therapeutics?
            <br />
            <br />
            NJ.com: "How will you tell your state representatives to vote on
            this bill?" COVID vaccine passports would be banned in N.J. under
            new bill
            <br />
            <br />
            "The bill would make it illegal for businesses, schools, doctors or
            government entity to ask about people's vaccine status, require they
            be vaccinated or prove they have been vaccinated."
            <br />
            <br />
            Nick Carducci: Discrimination is a case if it is not a minimal
            viable product, like in data-share or labor-determination per
            intent-to-harm count. It is not necessary because
            median-death-age/life-expectancy is 1, spittle condensation 98.6/72
            and mRNA can cause otherwise benign tumors to be oncogenic? We do
            not know about cancer more than malignancy spreading, but that is
            what mRNA does without an antigen to dissolve with: extra cells like
            a scar
            <br />
            <br />
            condensation (98.6deg/72deg) brings the virus up. Employment has
            been back to normal and old people are still getting checks from
            youth-dollar-equity
            <br />
            <br />
            From my calculations that leaves no one helped and fraud is
            employment back to normal. People don’t look for work & pick up the
            phone if getting the prisoner-dilemma-duress-pool
            <br />
            <br />
            humoral response is better and doesn’t create dependency.&nbsp;
            <a href="https://www.baltimoresun.com/coronavirus/ct-aud-nw-nyt--20210416-c6wkb3yucncerkrydtt7bsixmy-story.html">
              This article
            </a>
            &nbsp; moves to prove this... you’re only as good as your creativity
            in&nbsp;
            <a href="https://news-medical.net/news/20210222/Some-SARS-CoV-2-variants-evade-mRNA-vaccine-induced-humoral-immune-says-study.aspx">
              making your own mRNA
            </a>
            <br />
            <br />
            latent tb rises w condensation
            <br />
            <br />
            Couple that with the fact that condensation happens, you can boot
            the duress of entry without having to weigh the rights of
            individuals to business.......
            <br />
            <br />
            <Cable
              style={{ width: "150px", height: "210px" }}
              onError={handleScollImgError}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://www.youtube.com/embed/mlEFtVlivjs"
              }
              float="right"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + 19]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            Cory Andre: "you’re not a doctor so shut the fuck up"
            <br />
            <br />
            <div
              style={{
                borderRadius: "6px",
                padding: "10px",
                backgroundColor: "rgb(200,220,255)",
                color: "rgb(100,160,210)"
              }}
            >
              "Research early in the pandemic suggested that the rate of
              asymptomatic infections could be as high as 81%. But a
              meta-analysis published last month1, which included 13 studies
              involving 21,708 people, calculated the rate of asymptomatic
              presentation to be 17%."
              https://www.nature.com/articles/d41586-020-03141-3
            </div>
            <br />
            Nick Carducci: "what the fuck are you; can you lose weight so you
            aren't susceptible to the [or any new ]virus for me?"
            <br />
            <br />
            Nick Carducci: "I am an expert in physics and law, this is my
            jurisdiction per transmissibility and civil rights"
            <br />
            <br />
            <div
              style={{
                borderRadius: "6px",
                padding: "10px",
                backgroundColor: "rgb(255,200,200)",
                color: "rgb(210,120,160)"
              }}
            >
              Cory Andre I can get thinner, you’re going to stay this fucking
              stupid forever
            </div>
            ok. stay home!
            <br />
            <br />
            How would [health-]equity be harmed by pause of bloating demand for
            involuntary purchases. @US_FDA&nbsp;
            <a href="https://nature.com/articles/s41577-020-00434-6/figures/2">
              stop blaming low demand on your pause
            </a>
            <br />
            <br />
            how does it help population at all, regardless if it gives cancer or
            uses aborted cells for culturing... when spittle rises with
            condensation? The evidence shows death is exponentially correlated w
            life expectancy & either everyone has it or asymptomatic trans not
            happen @US_FDA
            <br />
            <div
              style={{
                borderRadius: "6px",
                padding: "10px",
                backgroundColor: "rgb(200,220,255)",
                color: "rgb(100,160,210)"
              }}
            >
              Jump-start-dependency @MartyMakary vs humoral-aptitude @ACLU
              <br />
              <br />
              Fatties, afros, Hispanic and old people will not be allowed in my
              events on Thumbprint because they are susceptible to carrying and
              infecting others with undiscovered virus’ @JohnsHopkins @RutgersU
              @HealthNYGov
              <br />
              <br />
              Or&nbsp;
              <a href="https://www.ksdk.com/article/news/health/coronavirus/vaccine/verify-aborted-fetal-cell-lines-johnson-covid-19-vaccine/63-6449ab3c-ade2-422b-9e5a-4503700a0ec0">
                fetal-cells
              </a>
              . Your choice!
            </div>
            Dec 2 2021 Bo Snerdley reports aborted fetus' are harvested. For
            vaccines? Or stem cells? Does bone marrow&nbsp;
            <a href="https://www.researchgate.net/publication/43297722_Repair_of_Traumatic_Skeletal_Muscle_Injury_with_Bone-Marrow-Derived_Mesenchymal_Stem_Cells_Seeded_on_Extracellular_Matrix">
              transplant
            </a>
            &nbsp;to skeletal muscle require this?
            <br />
            <Cable
              style={{ width: "150px", height: "210px" }}
              onError={handleScollImgError}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://www.youtube.com/embed/m55ZAB47LHg"
              }
              float="right"
              title="Dick Morris 77WABC - bacteria is cause"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + 18]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            Nick Carducci doctors are not financially/legally inclined to not
            act, and they mostly get paid for acting too boot. I am also expert
            in game theory and motive
            <br />
            <br />
            Nick Carducci heat rises, electrons pull. E=mc^2 is idiotic and
            debt/invoice/insurance is self-harm. I’m smarter than everyone. GDP
            is mostly debt and not making it per person is laughable. Experts
            are wrong when they are paid for a certain outcome. I’m smarter than
            everyone. I invented the circular magnetic engine and royalty
            contracts with max profit. I also divulged the fraud of velocity of
            m1 and GDP. It is fake and mostly promises, counterfeit. JHU will
            fail you if you say principal must equal outlays and interest is
            counterfeit. They call it output. Sheesh.
            <br />
            <br />
            Nick Carducci we are talking about me forcing you to come to my
            events Thumbprint wavv.art only if you lose weight
            <br />
            <br />
            <div
              style={{
                borderRadius: "6px",
                padding: "10px",
                backgroundColor: "rgb(200,220,255)",
                color: "rgb(100,160,210)"
              }}
            >
              Rooster claims credit for the morning; exponential correlation of
              death to life expectancy @kilmeade @MartyMakary you cannot have it
              both ways. if the number of symptomatic is 70% and not 19% then
              asymptomatic transmission is not a good reason to forbid your null
              hypothesis
            </div>
            <br />
            <Cable
              style={{ width: "150px", height: "210px" }}
              onError={handleScollImgError}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://www.youtube.com/embed/-spTY4y8euI"
              }
              float="left"
              title="Ford Brewer MD bacteria notions, reasonable doubt"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + 37]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            right, the covid vaccine causes this side effect in some patients,
            usually 2-4 days afterwards, under the arm pit of the side where the
            jab was. It resolves to normal in about four weeks. It’s actually
            considered to be a good thing. *This is not lymphoma.
            <br />
            <br />
            <div
              style={{
                borderRadius: "6px",
                padding: "10px",
                backgroundColor: "rgb(200,220,255)",
                color: "rgb(100,160,210)"
              }}
            >
              you can’t say that lymphadenopathy is not lymphoma conclusively;
              what is the difference? Only an analysis of their life, and how
              fast the tumor moves. The growth likely is not regular-enough to
              not be cancerous. If it is even a little involved, it is my
              choice, especially without proof virus doesn’t rise WITH
              condensation. It’s not a proven justification to be denied
              inclusion, let alone the risk outweighing EXPONENTIAL CORRELATION
              WITH LIFE EXPECTANCY/death per age
            </div>
            <br />
            Stu Goldstone: "I hope for your sake that you go back on your meds."
            <br />
            <br />
            Nick Carducci: "I haven’t been on meds ever except saying I can’t
            concentrate then got Ritalin to study from JHU[, but got kicked off
            wrestling for performance-enhancing weed, out of hands of
            prescription monopsony and in our&nbsp;
            <a href="https://vaults.biz">commodity-regional-money-consortium</a>
            ]"
            <br />
            <br />
            Arch McKown in this case, it’s not lymphoma. The lymphadenopathy
            resolves in a few weeks. With lymphoma (since you wrote lymphoma I’m
            going with it), it would present as rapidly growing and bulky
            lymphadenopathy that don’t resolve in a few weeks. Hope that helps
            to clarify for you.
            <br />
            <br />
            Nick Carducci that’s fine, I will make those distinct in my further
            discussions, but what do you think about how B-cells become
            oncogenic? What would be regular? I assume it is only when it is
            sparring with an antigen, not guiding the formation of an antibody
            by graft. This process is similar to herd-dependency. This is not
            what the Big-bang intended for us, we can defeat gain of function
            D416G mutation with our humoral response and be sure it won’t be
            prone to oncogenesis the next time our B-cells start up
            https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7561578/
            <br />
            <br />
            it’s not the author’s opinion. It’s an observable finding that’s
            written up in a peer reviewed article with citations in PubMed.
            Lymphadenopathy is NOT lymphoma. Sheesh.
            <br />
            <br />
            <div
              style={{
                borderRadius: "6px",
                padding: "10px",
                backgroundColor: "rgb(200,220,255)",
                color: "rgb(100,160,210)"
              }}
            >
              https://www.aafp.org/afp/2016/1201/p896.html, "history and
              physical examination alone usually identify the cause of
              lymphadenopathy" is juvenile science. try it in a court room
            </div>
            <br />
            This guy [NJ Gov Phil Murphy]worked at Goldman Sachs. I bet if bonds
            were prosecuted as illegal, the treatment would be different than
            “grants” with strings attached. Fraud in broad daylight just gets
            ignored #COVID19
            <br />
            <br />
            I have been coding nonstop since May2019 and my upper back is
            literally so bad, probably for neck bridging in wrestling..., that I
            go to crack it - just one more time - and feel my throat move
            <br />
            <br />
            Two wrongs make a right if it’s justice @asp
            <br />
            <br />
            “trust government, trust non-paid experts of a principle and majorty
            50-50, trust Americans” @tatereeves
            <br />
            <br />
            Logic of supply and demand says the most efficient is when the
            population is frugal in supply and demand, but the output on the x
            axis - if prices are relative and ignoring price changes and
            repossession without reimbursement as traumatic adjustments - is
            merely a trade found,...
            <br />
            <br />
            ... and acted on. @ChrisSalcedo17
            <br />
            <br />
            <div
              style={{
                height: "min-content"
              }}
            >
              <TwitterTweetEmbed
                style={{ width: "300px", float: "left" }}
                key="1425460613711605760"
                tweetId="1425460613711605760"
              />
            </div>
            19% are symptomatic, I can’t let this happen @US_FDA @ftc
            @JohnsHopkins @RutgersU @NYGov,&nbsp;
            <a href="https://www.nature.com/articles/d41586-020-03141-3">
              null hypothesis is huge here
            </a>
            <br />
            <br />
            “Attempting to breath is not, not compliant” duress cases. I can’t
            breathe, says Floyd. “he’s talking,” officer Tao says to a bystander
            complaining about force used on a guy likely hallucinating
            <br />
            <br />
            no proof it doesn’t go straight up with the condensation, which is
            98.6degrees and air is usually 72degrees. That would be the only
            grounds for a non-inclusive-mvp that isn’t breaking Amendment 13 by
            free-riding on the excluded’s static societal contributions
            <br />
            <br />
            Socialism in the streetsMicrophone, communism in the (spread)sheets
            @TheDemocrats @GOP @NJGOP @njassemblydems
            <br />
            <br />
            Marx scarcely talked about communism @LidiaNews @RepPeteKing
            <br />
            <br />
            I'm gonna allow users to report libel @facebook so many people are
            calling me mentally ill for saying the difference between
            lymphadenopathy and lymphoma is subjective COVID-19 Vaccines and
            Cancer COVID-19 vaccination answers to frequently asked questions
            about vaccination and cancer-updated April 12th
            news.cancerconnect.com
            <br />
            <br />
            Resisting arrest? Was this a sting or an anonymous call? The
            arresting officer said he was moving funny in the store,
            confrontational #ChauvinTrial #MinnesotaIsGuilty let him go
            <br />
            <br />
            “The manifestation of the drug influence can constitute a threat,”
            then agrees that it is their choice and do not justify use of force.
            Let’s get Jamie Dimon and @boeing now for counterfeit in outstanding
            per treasury
            <br />
            <br />
            If he runs, let him go. It’s all digital anyway
            <br />
            <br />
            prone-control is not use of force, but should be used as
            active-resisting. ok. but you have the address of Floyd right? let
            him go #MinnesotaIsGuilty #ChauvinTrial
            <br />
            <br />
            he was hallucinating the SUV was evil
            <br />
            <br />
            if cops can brandish, people can brandish to not incriminate
            themselves
            <br />
            <br />
            Not a criminal, if not convicted for offense {">"} threat by the
            bankquatting & conspiring serflord cops. http://3under2.us; & still,
            cops are not allowed to crash into a fleeing subject or allow
            counterfeit or duress-borne invoice & coagulated demand
            http://foiegras.life
            <br />
            <br />
            <div
              style={{
                height: "min-content"
              }}
            >
              <TwitterTweetEmbed
                style={{ width: "300px", float: "right" }}
                key="1421471623136358405"
                tweetId="1421471623136358405"
              />
            </div>
            "If your mask gets moldy, perhaps it is time for a fresh one."
            <br />
            <br />
            virus are incredibly small and thereby fast; humidity is the
            making-of-a-cesspool
            <br />
            <br />
            We do not fully understand what is the regulation of B-cells, it is
            not reasonable to&nbsp;
            <a href="https://news.cancerconnect.com/treatment-care/covid-19-vaccines-and-cancer-FQLL1FPx7kyOUcSjmR2JNQ#:~:text=Given%20patients">
              force people
            </a>
            &nbsp;to be included in the economy and not be free-rode for static
            contributions to society that the prejudice benefit from.
            Additionally, virus would have to be proven to not&nbsp;
            <a href="https://pubmed.ncbi.nlm.nih.gov/17542834/">rise to sky</a>
            &nbsp;with condensation given water-adhesion. There has yet been a
            test that virus is recovered on countertop-talking to boot.&nbsp;
            <b style={{ color: "blue" }}>
              <a href="https://www.pennmedicine.org/updates/blogs/health-and-wellness/2021/march/covid-vaccine-and-mammograms">
                Penn is assuming
              </a>
            </b>
            <br />
            <br />
            The dysregulation happens with mRNA grafts, not vaccines, to which
            B-cells are dealing with a foreign antibody instead of sparring with
            an antigen (not to mention dependence of the facilitation of
            B-cell's humoral antibodies which work just as well and age is
            exponentially correlated with age and life expectancy). We do not
            know this, but in your opinion, think in a vacuum would a cancer
            form, or just tumor, or neither? What is the cause of those. I will
            be posting from mortality.org [fingers-crossed] life expectancy over
            deaths by age on humanharvest.info for legal advice and medical
            research. The higher population dying is expected.
            <br />
            <br />
            just like masks make mold and make virus worse, b-cell dysregulation
            happens by graft, you don’t need people to die to realize this. mRNA
            is not approved by fda/liability still right? We know leukemia has
            worsened oncogenesis. Stupid to think mRNA lymphoma wouldn’t happen
            when it is packed with B-cells
          </div>
          <br />
          <button
            onClick={(e) => {
              e.stopPropagation();
              this.setState({ springsummer2021: !this.state.springsummer2021 });
            }}
          >
            <h3>springsummer2021</h3>
          </button>
          <br />
          <div
            style={{ display: this.state.springsummer2021 ? "block" : "none" }}
          >
            causes lymphoma; more significant than graft vs humoral response to
            D416G @CDCgov @NIH
            <br />
            <br />
            <a href="https://ourworldindata.org/grapher/number-of-deaths-by-age-group?country=~OWID_WRL">
              -2017 (World)
            </a>
            / &nbsp;
            <a href="https://www.google.com/publicdata/explore?ds=j0r9lucsi4q1d_#!ctype=l&strail=false&bcs=d&nselm=h&met_y=crude_rate&fdim_y=country:US&scale_y=lin&ind_y=false&rdim=age_group&idim=age_group:1-4:10-14:75-84:65-74:55-64&ifdim=age_group&hl=en_US&dl=en_US&ind=false">
              -2017 (U.S. - Life Support)
            </a>
            / &nbsp;
            <a href="https://www.prb.org/countries-with-the-oldest-populations/">
              old
            </a>
            / &nbsp;
            <a href="https://www.medrxiv.org/content/10.1101/2020.07.23.20160895v7">
              proof
            </a>
            / &nbsp;
            <a href="https://www.ons.gov.uk/peoplepopulationandcommunity/birthsdeathsandmarriages/deaths/articles/comparisonsofallcausemortalitybetweeneuropeancountriesandregions/januarytojune2020?#:~:text=5.">
              -6/2020
            </a>
            <AgeAdjustedMortality />
            "Memory B cells display clonal turnover after 6.2 months, and the
            antibodies that they express have greater somatic hypermutation,
            resistance to RBD mutations and increased potency,&nbsp;
            <a href="https://www.nature.com/articles/s41586-021-03207-w">
              indicative of continued evolution of the humoral response
            </a>
            ." Why would you want to&nbsp;
            <a href="https://www.medrxiv.org/content/10.1101/2020.09.22.20192443v1">
              ruin that
            </a>
            ? Humoral is more adaptive than grafting lessons can ever be
            <br />
            <br />
            Free rider religion of self on civil rights act let alone exclusion
            @HealthNYGov @RutgersU @JohnsHopkins
            <br />
            <br />
            "you have a right to your opinion........you can also chose another
            place to go to school." two counts of exclusion by (1) duress & (2)
            no-evidence of non-cough transmission is illegal, free-riding
            JHU-supply elsewhere in the economy of those excluded. The
            exponential correlation with life expectancy is also laughable as a
            permitted manner of duress of an exclusionary-mvp
            <br />
            <br />
            What proof is not due to mask humidity mold elongating gestation of
            virus without human cell and rather virus not going up to atmosphere
            or ceiling in condensation; can we have a study of
            countertop-talking? @JohnsHopkinsSPH
            <br />
            <br />
            Non-malignant lymphadenopathy is diagnosed by “history and physical
            examination.” "Unexplained Lymphadenopathy: Evaluation and
            Differential Diagnosis Lymphadenopathy is benign and self-limited in
            most patients." (aafp.org,
            https://www.aafp.org/afp/2016/1201/p896.html), "Etiologies include
            malignancy, infection, and autoimmune disorders, as well as
            medications and iatrogenic causes. The history and physical..."
            <br />
            <br />
            The mRNA grafts aren’t saving lives, deaths are exponentially
            correlated with age @fda https://aafp.org/afp/2002/1201/p2103.html
            you ran out of vulnerable old people, now the malignant
            over-production of b-cells will occur. (aafp.org, Lymphadenopathy
            and Malignancy), 'The majority of patients presenting with
            peripheral lymphadenopathy have "easily identifiable causes" that
            are benign or self-limited. Among primary care patients presenting
            with lymphadenopathy, the...'
            <br />
            <br />
            “Wartime effort” is fraud like gold confiscation in 1932. @ftc @fcc
            @TheJusticeDept duress religion of self. Hesitancy is not your
            choice and you certainly cannot mislead. Reporters to @fda now
            describing transparency for & doing no harm as a "trip-wire"
            https://nature.com/articles/s41577-020-00434-6/figures/2
            <br />
            <br />
            that is just the opinion of the writer on the findings. How dare you
            take his assumptions as evidence of it not being dysregular
            <br />
            <br />
            Countertop-talking test, Mr. Brown taught me about condensation at
            RFH before weather systems at JHU
            <br />
            <a
              style={{ textDecoration: "none", color: "rgb(230,230,255)" }}
              href="https://www.cdc.gov/tb/publications/factsheets/general/ltbiandactivetb.htm?fbclid=IwAR3lAFgwUaL918wGyjBjWkGa9V0dlVJ4Ufh4LMd53XqEOvuOVoo7v_-V5rU"
            >
              https://www.cdc.gov/tb/publications/factsheets/general/ltbiandactivetb.htm?fbclid=IwAR3lAFgwUaL918wGyjBjWkGa9V0dlVJ4Ufh4LMd53XqEOvuOVoo7v_-V5rU
            </a>
            <br />
            <br />
            Joan Hamsteak: "Fully-vaccinated, we kinda made it work." Ma'am. The
            graft does as good as natural antibodies in defending against D416G
            mutations of the "variant(s)" and it actually causes or
            worsens&nbsp;
            <a href="https://pubmed.ncbi.nlm.nih.gov/33591026/">cancer</a>
            &nbsp;so, like the mask fosters mold for virus-chia
            <br />
            <hr />
            <br />
            <a href="https://stm.sciencemag.org/content/13/577/eabd2223">
              COVID-19 spikes SPIKE
            </a>
            : "Are you worried? Dr. Fauci is urging everyone to get the shot and
            keep wearing masks. #COVID19 (newjersey.news12.com)"
            <br />
            <br />
            Dr. Fauci: "Worried the US could see COVID-19 spike similar to
            Europe A new warning from Dr. Anthony Fauci – he now says he’s
            worried the U.S. could see a COVID-19 spike like the one Europe is
            currently experiencing."
            <br />
            <br />
            Which shot (antibodies are same proteins as antigens) for which
            virus
            <br />
            <br />
            @SpeakerPelosi' policy takes labor from elsewhere; doesn’t increase
            supply @ftc @TheJusticeDept
            <br />
            <br />
            “Budget reconciliation” is illegal to use as descriptors of spending
            but book value @cnn @SpeakerPelosi
            <br />
            <br />
            Why would you extend ACA instead of ban invoices. If you are
            studying the economy holistically it makes no sense to do what you
            do except to harm @BarackObama @POTUS @MittRomney
            <br />
            <br />
            "GET GADDAFI!"
            <br />
            'appease the finances,' don't diminish anecdotes like they are at
            all different than samples when the population is unshuffled,
            voluntary is the next best to perfectly-random
            <br />
            <br />
            SCHEDULE 1 FENTYNYL GOOD FOR iron lung patient monopsony. all my
            money is in cow-insulin
            <br />
            <br />
            Sen.Durbin: "This is great news. I commend the Biden Administration
            for opening this special enrollment period and I would encourage
            every uninsured American to #GetCovered by going to
            http://healthcare.gov today."
            <br />
            <br />
            <Cable
              style={{ width: "150px", height: "210px" }}
              onError={handleScollImgError}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://www.youtube.com/embed/Jxj0-TaTm4o"
              }
              float="right"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + 21]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            More than 528,000 Americans have signed up for Affordable Care Act
            coverage on the federal exchange in the first six weeks of the
            special enrollment period President Biden opened for the uninsured
            https://cnn.it/39STm9H
            <br />
            <br />
            <a href="https://www.researchgate.net/publication/346041766_The_FTC_has_responded_to_my_complaints_and_so_has_the_industry_Allstate_Progressive_Geico_all_say_they_save_you_money_by_switching_or_bundling_yet_neo-insurance_companies_like_CarShieldUSA_still_says_">
              Prisoners’ dilemma duress is illegal
            </a>
            . If none of us put in, our prices would drop. This is&nbsp;
            <a href="https://bankingisnot.biz">illegal</a>&nbsp;by prohibiting
            trade and monopsony by duress of bloated demand and invoices
            (counterfeit)
            <br />
            <div
              style={{ position: "relative", maxWidth: "400px", width: "100%" }}
            >
              <img
                style={{
                  width: "100%",
                  height: "auto"
                }}
                alt="login.gov"
                src="https://www.dl.dropboxusercontent.com/s/2xsbg2n4mhw6ud9/GraftPassport.jpg?dl=0"
              />
            </div>
            <br />
            ".025% get skin rashes," more get blot clots and b-cell
            dysregulation (cancerous)
            <br />
            <br />
            <div
              style={{ position: "relative", maxWidth: "400px", width: "100%" }}
            >
              <img
                style={{
                  width: "100%",
                  height: "auto"
                }}
                alt="login.gov"
                src="https://www.dl.dropboxusercontent.com/s/ne3liq4zpxuu04l/StarveTheUnjabbed.jpg?dl=0"
              />
            </div>
            <br />
            <Cable
              style={{ width: "150px", height: "210px" }}
              onError={handleScollImgError}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://www.youtube.com/embed/MTM2Pw73Ol0"
              }
              float="right"
              title="Dick Morris 77WABC - bacteria is cause"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + 22]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            <h1>Starve the unjabbed</h1>
            “White House will make vaccine passport, you won’t have a job
            without it”
            <br />
            <br />
            Die please, Doctor. Duress and exclusion without evidence of spread
            without touching is ILLEGAL for free-riding static contributions to
            society by the victimized anti-vaxxer/submissability-of-evidence
            <div
              style={{
                backgroundColor: "white",
                color: "rgb(70,20,20)",
                borderRadius: "10px",
                margin: "10px",
                padding: "10px"
              }}
            >
              Corporate tax of 28% is to go public, deducting wages is not
              appropriate. It should be zero if http://3under2.us supplants
              income tax (which is a war crime instilled in 1937)
              <br />
              <br />
              This, nor is the use of credit (counterfeit-in-contract),
              investment cc: @BrookeBaldwin
              <br />
              <br />
              Investment is
              profitable-exclusively-from-a-return-of-capital-gain-or-profit,
              not to launder-under-duress down-payment-and-repossession or
              impossibility-of-settlement-and-cloture
              <br />
              <br />
              It’s all because of credit spending, revenue bypasses labor to
              profits. In an efficient economy, there would be no profits
            </div>
            <br />
            Unhealthy people are Unhappy and die when tested with covid and 19%
            are symptomatic, null hypothesis is huge here @NSF calls
            https://magnate.company unoriginal
            <br />
            <br />
            Civil liberties is a case in favor of the asymptomatic antivaxxer
            being included, && you without evidence Latent TB is not contagious
            but Covid-19-causing-virus one of many probably gained-lab-function
            and “vaccine”/graft b-cell dysregulation duress can only stay home
            @CNN
            <br />
            <div
              style={{
                margin: "10px",
                padding: "10px",
                color: "black",
                borderRadius: "10px",
                backgroundColor: "rgb(220,250,200)"
              }}
            >
              @SaverParty if the cakes were printed, this shouldn't be legally
              ok to exclude unless "graphic" in accordance with some law please
              please please (public indecency)
              <br />
              <br />
              Especially if the gain-of-function, from lab-or-bat, does not
              require spittle && there-not-being-tests-of-virus-on-table as for
              Latent-TB
              <br />
              <br />
              I obey from exclusion if I am symptomatic, but get the
              “vaccine”/graft to please you @cnn won’t even say your doctoring
              consults’ name @BrookeBaldwin . Private business is grave
              violation of exclusion without evidence of virus transmission by
              talking, or countertops. Just assumed
              <br />
              <br />
              @avenaim I fail to understand how a vaccine passport violates your
              privacy. It just says you got vaccinated.
              <br />
              <br />
              @Jim_Zakany MAGA people don't want to get vaccinated or wear
              masks, but they ALSO don't want to suffer any consequences for
              their behavior. They want to go to concerts and on trips, but they
              don't really care if they kill others in the process.
            </div>
          </div>
          <br />
          <button
            onClick={(e) => {
              e.stopPropagation();
              this.setState({ late2020: !this.state.late2020 });
            }}
          >
            <h3>late2020</h3>
          </button>
          <br />
          <div style={{ display: this.state.late2020 ? "block" : "none" }}>
            moldmask.co, cocaine is money, purity health dpt @SaverParty You are
            selfish for forcing people to risk b-cell oncogenesis to be
            included. You can only exclude and be free-rider if symptomatic.
            Mask causes mold and mold worsens virus
            <br />
            <br />
            What makes the “vaccine”/lab-graft do that other cold antibodies
            don’t?
            <br />
            so far experts say there isn’t a difference
            <br />
            <br />
            It’s the same antibodies as for the cold, latent TB is more
            contagious and the CDC says it requires cough.
            <br />
            B-cell oncogenesis is duress and mask causes mold which worsens
            virus
            <br />
            <br />
            “Vaccine”/graft is like whack-a-mole spurring a new mutation or it
            is formed from non-virus or cellular material. If it can be
            destroyed it can be created
            <br />
            <br />
            I’ve heard the “vaccine”/grafts work perfectly on a select variant,
            I’ve heard they invoke antibodies that work against cold too, I’ve
            heard the cold/natural antibodies do not work!!!! Is this antigen
            not natural?
            <br />
            <br />
            <a href="https://news.ncsu.edu/2020/05/how-long-can-viruses-survive/">
              Virus cannot live without reproducing
            </a>
            , how long can virus survive in a hijacked cell?
            <br />
            <br />
            I think virus come not from other virus exclusively.
            <br />
            <br />
            "Unless we stop the virus' around the world, we aren't going to be
            in good shape [gain-of-function(Fauci, CDC,
            NIH),bat(WHO,CHINA,WABC)]" 3% already had it near batcave
            (asymptomatic, virus' plot before acting) - Dr.Miller
            <br />
            <br />
            David Wildstein of the nj globe want women reproductive services to
            be monopsonized and ordained by gov hands
            <br />
            <br />
            Don't want to scare, but want to be frank" 5 weeks after first dose
            of getting cold antibody for this (why is population stats delayed
            three months as of 4/1/2021?
            <br />
            <br />
            “About 25 to 33% of those who are hospitalized need intensive care
            [ventilators?]”
            https://www.healthgrades.com/right-care/coronavirus/how-hospitals-treat-covid-19-patients...
            masks can help the virus’ survive & replicate by locking in humidity
            moldmask.co 19% of cases are symptomatic; like 1/4 the population
            has latent TB, many probably have asymptomatic covid without
            testing. My analysis would not explain increasing hospitalization
            but for the funding
            https://www.hhs.gov/sites/default/files/covid-19-high-impact-allocation.pdf
            invoices are theft and these grants from our equity only raises
            prices for services
            <div
              style={{
                height: "min-content"
              }}
            >
              <TwitterTweetEmbed
                style={{ width: "300px", float: "right" }}
                key="1420593721096253440"
                tweetId="1420593721096253440"
              />
            </div>
            <h1
              style={{
                fontFamily: '"Pacifico", sans-serif'
              }}
            >
              Don't knock it till you try it
            </h1>
            Sanjay: 'The "vaccines"/grafts have saved millions of lives' (if you
            cannot make that claim in court can you make it in advertising or do
            I have to sue and Fauci: "Going all out on the vaccine on Jan 10th,
            2020 was the best decision in terms of intervention ever made" (not
            moving would have been better)
            <br />
            <a href="https://www.cdc.gov/flu/about/professionals/antigenic.htm">
              do they check if there are virus usually
            </a>
            <br />
            <br />
            Correlation is NOT proof positive
            <br />
            <br />
            <h1>Tallyman, Tally Me Banana</h1>
            Will they kill non-comorbid people so we cannot conclusively assign
            blame to their "vaccine"/graft? If they think they would not get
            caught (or prosecuted) answer that with can we blame the NIH
            (conciousness of guilt) for admitting guilt by canceling funding for
            experimentatin with this virus and Fauci's apparent amusement in
            "catasrophe" or the meat/pore transmission is the reason for
            virality alone
            <br />
            <br />
            you cannot ban people from travel based on duress, especially since
            there is no proof spittle doesn't rise to ceiling if hot or fall if
            heavy with protons right&nbsp;
            <a href="https://onlinelibrary.wiley.com/doi/full/10.1111/ina.12639">
              away, (retrospective has no controlled prevalence of vivo
              insemination)
            </a>
            , or it is in the meat like it has been for decades. a gun doesn't
            shoot itself - this smells of insurance fraud
            <br />
            <br />
            Vietnam had 35 people die because they aren't fat and old, the
            deaths are normal except the print of abject murder given it stops.{" "}
            {/*after the vaccine most people get covid 2 weeks after vaccine? a lot also at the time... what a bullshitter dr michalos is.*/}
            <br />
            <br />
            Why does this guy not have "the ability to test for covid?"
            <div
              style={{ position: "relative", maxWidth: "400px", width: "100%" }}
            >
              <img
                style={{
                  width: "100%",
                  height: "auto"
                }}
                alt="login.gov"
                src="https://www.dl.dropboxusercontent.com/s/lsk8ayq9navh21k/BorderNoTest.jpg?dl=0"
              />
            </div>{" "}
            <br />
            <br />
            <Cable
              onError={handleScollImgError}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://drive.google.com/file/d/1P1LkeKv8TS-X4qER0O0EaT7WDuwwZozN/preview"
              }
              float="left"
              title="MAGA etf on Newsmax"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + 32]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            “It’s spreading at the border.” He even looks like Trump&nbsp;
            <span
              role="img"
              aria-label="squirrel bottom-left white-circle cancel euro-old-man clown-face"
            >
              🐿↙️⚪️🚫👨🏻‍🦳🤡
            </span>
            &nbsp; Imagine insuring injuries with false bid pools with state
            victim instead of regulating?
            <br />
            <br />
            The covid family has been around for decades. Can someone cite
            controlled evidence that it is deadlier than previous years? Why is
            population data still delayed 2 months? This is in the meat by your
            own reporters, meaning it was distributed in us food networks
            conclusively. I’m not going to be wearing a tie/noose to subjugate
            my points
            <br />
            <br />
            2-weeks to form antibodies just the same (monoclonal)! Same
            antibodies made for the polychain-reaction antiGEN test (
            <a href="https://www.addgene.org/protocols/pcr/">PCR</a>) as for the
            cold.
            <br />
            <TwitterTweetEmbed
              style={{ float: "right", width: "300px" }}
              key="1421858300979732480"
              tweetId="1421858300979732480"
            />
            "Pfizer/BioNTech say data suggests vaccine 94% effective in
            preventing asymptomatic infection" doesn't prove it stops
            transmission, or even causal vs prevalence
            <span style={{ textDecoration: "line-through" }}>
              , especially when only 10% have been vaccinated &nbsp;and cases
              are at 29% of what they once were in the bottom of the&nbsp;
              <a href="https://www.reuters.com/article/health-coronavirus-pfizer-israel-int-idUSKBN2B31IW">
                same report
              </a>
              .
            </span>
            <br />
            Isn't it great that the&nbsp;
            <a href="https://www.justice.gov/">State</a>&nbsp;can brandish with
            fake facts, but not&nbsp;<a href="https://www.ftc.gov/">people</a>?
            Really helps get our shit out the door and be able lay-off our
            products to people, without a hitch
            <br />
            <br />
            Sars-Cov-2 has been around for decades retarded bitch
            <br />
            <br />
            Biden claims companies will not produce without gorging them with
            cash. I am working pro-bono people like gov rip-off without
            attribution or penalty so far.
            <br />
            <br />
            <div
              style={{ position: "relative", maxWidth: "400px", width: "100%" }}
            >
              <a href="https://squatcommune.com">
                <img
                  style={{
                    width: "100%",
                    height: "auto"
                  }}
                  alt="login.gov"
                  src="https://www.dl.dropboxusercontent.com/s/h6hv3u3pysg1om7/SpecialBidenFund.jpg?dl=0"
                />
              </a>
            </div>{" "}
            <br />
            <br />
            Psaki: "lending vaccines to canada," she must be talking about the
            &nbsp;
            <a href="https://squatcommune.com">mirrorcode</a>
            <div
              style={{ position: "relative", maxWidth: "400px", width: "100%" }}
            >
              <a href="https://twitter.com/logindotgov">
                <img
                  style={{
                    width: "100%",
                    height: "auto"
                  }}
                  alt="login.gov"
                  src="https://www.dl.dropboxusercontent.com/s/5godn380eqp1a57/MarkeySlavery.png?dl=0"
                />
              </a>
            </div>{" "}
            <div
              style={{ position: "relative", maxWidth: "400px", width: "100%" }}
            >
              <a href="https://twitter.com/logindotgov">
                <img
                  style={{
                    width: "100%",
                    height: "auto"
                  }}
                  alt="login.gov"
                  src="https://www.dl.dropboxusercontent.com/s/oe1upothtyrd3jt/Screen%20Shot%202021-03-22%20at%202.13.28%20PM.png?dl=0"
                />
              </a>
            </div>
          </div>
          <h1>
            <a
              style={{
                color: "rgb(112, 101, 55)",
                fontFamily: '"Pacifico", sans-serif'
              }}
              href="https://www.ksdk.com/article/news/health/coronavirus/vaccine/verify-aborted-fetal-cell-lines-johnson-covid-19-vaccine/63-6449ab3c-ade2-422b-9e5a-4503700a0ec0"
            >
              humanharvest
            </a>
            &nbsp;
            <a
              style={{ fontSize: "14px" }}
              href="https://classicreload.com/lemmings.html"
            >
              follow
            </a>
            &nbsp;the&nbsp;
            <a
              style={{ fontSize: "14px" }}
              href="https://pdxscholar.library.pdx.edu/cgi/viewcontent.cgi?article=2428&context=open_access_etds"
            >
              leader
            </a>
          </h1>
          <span
            style={{
              position: "absolute",
              fontSize: "8px",
              color: "rgb(82, 71, 25)",
              transform: "translateY(-5px)"
            }}
          >
            letting-off inventory we previously invested in!&nbsp;
            <a href="https://www.bmj.com/content/372/bmj.n149">
              Fuck do no harm
            </a>
            , warn first... don't break the&nbsp;
            <a href="https://saverparty.xyz">paid-accountability</a>
            &nbsp;board's rules
          </span>
          <br />
          <h6>
            "What is Florida doing right?" asks Jake Tapper, CNN. They ran out
            of old people. adjust for age and the "vaccine"/graft kills more
            people compared to other times in recent history.
            <br />
            Impossible to see long term effects, namely B-cell oncogenesis which
            is slower to form, since the vaccines began testing. A 28 year old
            dying is not worth the risk of getting&nbsp;
            <a href="https://www.memorialhealthcare.org/whats-the-difference-between-covid-19-rapid-and-prc-tests/">
              our diagnosis
            </a>
            <a href="https://www.nih.gov/news-events/nih-research-matters/immune-cells-common-cold-may-recognize-sars-cov-2">
              cold antibodies
            </a>
            . Fix death for age it is normal.&nbsp;
            <a href="https://www.prb.org/countries-with-the-oldest-populations/">
              First world countries have a lot of old people
            </a>
            &nbsp;this decade https://www.nature.com/articles/s41598-020-73777-8
            <br />
            <br />
            "It would take another decade before companies looking at
            RNA-interference therapeutics — which rely on RNA’s ability to&nbsp;
            <a href="https://www.nature.com/articles/d41586-021-00019-w">
              selectively block
            </a>
            &nbsp;the production of&nbsp;
            <a href="https://www.frontiersin.org/articles/10.3389/fchem.2020.589959/full">
              specific [cancerous] proteins
            </a>{" "}
            [that it tends to produce]"
            <br />
            <br />
            <a href="https://www.cdc.gov/flu/about/professionals/antigenic.htm">
              do they check if there are virus usually
            </a>
            <br />
            <a href="https://www.ncbi.nlm.nih.gov/books/NBK21523/">
              how many virus can one DNA of virus encode?100-200
            </a>
            <br />
            <a href="https://www.britannica.com/science/virus/Size-and-shape">
              how much DNA can one virus protein contain?500,000-2,500,000 base
              pairs
            </a>
          </h6>
          <h3 style={{ marginTop: "10px" }}>
            relationships between disparate variables is not&nbsp;
            <a href="https://bgr.com/2020/09/13/seeds-from-china-mystery-explained-suspected-brushing-campaign/">
              proof
            </a>
            <br />
            nor is it proof that it (wouldn't) stops spreading only with
            (without) the virus and no&nbsp;
            <a href="https://nationalsecuritycasino.com">thumbed-scales</a>
          </h3>
          <h3>
            In fact, it requires gestation time to percolate and requires&nbsp;
            <a href="https://www.politifact.com/factchecks/2020/jun/15/facebook-posts/claim-n95-masks-cant-stop-covid-19-particles-due-s/">
              spittle
            </a>
            &nbsp;which&nbsp;
            <a href="https://en.wikipedia.org/wiki/Atmospheric_circulation">
              drops unless cold
            </a>
            , no lateral movement
          </h3>
          <h3>
            We still support&nbsp;
            <a href="https://foiegras.life">insurance fraud</a>
          </h3>
          See our other product, <a href="https://moldmask.co">moldmask</a>
          <h2>
            Only future "Vaccine"/grafts of mRNA (not latest 2021
            Moderna/Pfiezer) is proposed as an unconfirmed solution to not be
            oncogenic by&nbsp;
            <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7264927/?fbclid=IwAR3YJK5KeMMHKlePeZN0lQb0cZz6tAb2SQZO9bKJl9jEE6aQIE08nbUgUNE">
              "culturing" B-cells or creating a grandiose "universal B-cell"
            </a>
          </h2>
          <br />
          Help is on the way -&nbsp;
          <a href="https://foiegras.life">juice those consumers</a>! The rooster
          claiming credit for the morning. Mistaking the forest for the trees.
          <br />
          <div
            style={{
              padding: "6px 10px",
              borderRadius: "8px",
              backgroundColor: "rgb(50,50,50)",
              color: "rgb(200,200,200)"
            }}
          >
            SanityCheck
            <br />
            <h1>Stop claiming the virus' slowing,</h1>&nbsp;while Correlative
            data shows people&nbsp;
            <a style={{ color: "rgb(150,220,255)" }} href="https://moldmask.co">
              stop masking
            </a>
            /
            <a
              style={{ color: "rgb(150,220,255)" }}
              href="https://www.prb.org/countries-with-the-oldest-populations/"
            >
              old
            </a>
            +
            <a
              style={{ color: "rgb(150,220,255)" }}
              href="https://www.nature.com/articles/s41598-020-73777-8"
            >
              morbid
            </a>
            &nbsp;people die, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; is proof vaccines
            work
            <br />
            now sanjay gupta (CNN) is saying the people that die from graft they
            gave non-information about killing people is not different for
            normal vaccine action, but ignoring the fact that if you fix the
            data they give us for age there is also no change over the course of
            2020-2021 compared to other years. The death rate has been expected
            to rise since 2013 due to average lifespan * populationByAge. He
            needs to be concrete and not so wishy-washy of his version of the
            null hypothesis/scientific method
            <br />
            <br />
            It is not free it costs in equity-split and 4200% (
            <a
              style={{ color: "rgb(150,220,255)" }}
              href="https://micro-theory.com"
            >
              debt:cash
            </a>
            ) inflation, medishare adds additional (people:
            <a
              style={{ color: "rgb(150,220,255)" }}
              href="https://www.tradingtechnologies.com/xtrader-help/x-study/technical-indicator-definitions/volume-on-the-bid-and-ask-bavol/"
            >
              supply-ask
            </a>
            ) inflation, monetary&nbsp;
            <a
              style={{ color: "rgb(150,220,255)" }}
              href="https://www.zippia.com/landlord-jobs/demographics/"
            >
              inflation minus housing
            </a>
            &nbsp;is 102% which is counted as growth... which should by&nbsp;
            <a
              style={{ color: "rgb(150,220,255)" }}
              href="https://saverparty.xyz"
            >
              (GDP/P) - NewMoney - NewDebt
            </a>
            <br />
            <br />
            You can vote on&nbsp;
            <a
              style={{ color: "rgb(150,220,255)" }}
              href="https://thumbprint.us"
            >
              thumbprint
            </a>
            &nbsp;our elections don't need to be susceptible to no Driver's
            license p2p check
            {/*<br />a PA county had more votes than people because of this - why
          doesn't their system even register votes&nbsp;
          <a
            style={{ color: "rgb(150,220,255)" }}
            href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch"
          >
            Put
          </a>
          &nbsp;per person?*/}
          </div>
          <br />
          Thank you CNN, I agree: people that are hesitant to get the
          "vaccine"/graft will 'need convincing' with representaions by their
          favorite artists. I must admit, I am instilling duress without
          mentioning that I cannot wait to hang out with you in jail
          <br />
          <br />
          <div
            style={{ position: "relative", maxWidth: "400px", width: "100%" }}
          >
            <a href="https://www.krispykreme.com/">
              <img
                style={{
                  width: "100%",
                  height: "auto"
                }}
                alt="login.gov"
                src="https://www.dl.dropboxusercontent.com/s/6rd01u8rfqhejxt/KrispyKreme.jpg?dl=0"
              />
            </a>
          </div>
          <br />
          <br />
          Insiders agree
          <br />
          "The&nbsp;<a href="https://humanharvest.info">"'vaccine'/graft</a>
          &nbsp;is a&nbsp;
          <a href="https://link.springer.com/chapter/10.1007/978-3-540-72167-3_11">
            miracle
          </a>
          &nbsp;of&nbsp;
          <span
            style={{ fontWeight: "bolder", textDecoration: "underline" }}
            onClick={() => {
              this.sanjay.current.scrollIntoView("smooth");
              this.setState({ highlightSanjay: true });
              setTimeout(
                () => this.setState({ highlightSanjay: false }),
                10000
              );
            }}
          >
            science
          </span>
          ," exclaims Biden.
          <br />
          Newsmax asks a guest consult, "why not give credit to HE WHO SHALL NOT
          BE NAMED"
          <br />
          Really grateful for conflicted-interest so-called, "bona fide experts"
          to mislead people saying it is remarkable that it was done when it was
          only skipped testing? That’s remarkable in a bad way. B-cells are
          fragile, but who cares? not oour unbeknowest accostumers
          <br />
          <br />
          "We don't know how we are culturing these tissues," says&nbsp;
          <a href="https://twitter.com/richvaldes?lang=en">Rich Valdes</a>, "but
          most vaccines are cultured with placenta or umbilical cord"
          <br />
          <br />
          Why shouldn't we be&nbsp;
          <a href="https://en.wikipedia.org/wiki/Microbiological_culture">
            grafting
          </a>
          &nbsp;like this? Chromosome discrepancy, who cares?
          <br />
          <br />
          <div
            style={{ position: "relative", width: "100%", maxWidth: "300px" }}
          >
            <img
              style={{
                width: "100%",
                height: "auto"
              }}
              alt="my twitter @nickcarducci account has deleted my work and evidence for multiple financial crime cases before what is probably locally stored"
              src="https://www.dl.dropboxusercontent.com/s/ui8zf22lo7qko3f/Screen%20Shot%202021-03-15%20at%2011.04.06%20AM.png?dl=0"
            />
          </div>
          <br />
          <a href="https://vaults.biz">Wow</a>, two years of&nbsp;
          <a href="https://vianickcarducci.medium.com">drafting</a>&nbsp;for my
          book&nbsp;
          <a
            href="https://saverparty.xyz"
            style={{ color: "black", textDecoration: "underline" }}
          >
            Banking is not a Business
          </a>
          &nbsp;and evidence for my&nbsp;
          <a href="https://www.researchgate.net/project/Class-action-suit">
            Class Action Suit to repair counterfeit damages
          </a>
          &nbsp;as well as my&nbsp;
          <a href="https://nationalsecuritycasino.com">
            government monopsony, malfeasance, collusion, and slavery case
          </a>
          <br />
          <br />
          <div
            style={{ position: "relative", width: "100%", maxWidth: "300px" }}
          >
            <img
              alt="covid is in the food, but deaths are normal (just blamed cold antibodies)"
              style={{
                width: "100%",
                height: "auto"
              }}
              src="https://www.dl.dropboxusercontent.com/s/uj6ekumw3iv9pj5/IMG_3420.png?dl=0"
            />
          </div>
          <br />
          covid is in the&nbsp;
          <a href="https://www.cdc.gov/tb/publications/factsheets/general/ltbiandactivetb.htm">
            food
          </a>
          , but deaths are&nbsp;
          <a href="https://www.advisory.com/en/daily-briefing/2020/06/01/asymptomatic-patients">
            normal
          </a>
          &nbsp;(just&nbsp;
          <a href="https://www.memorialhealthcare.org/whats-the-difference-between-covid-19-rapid-and-prc-tests/">
            blamed
          </a>
          &nbsp;on not having cold antibodies)
          <br />
          <br />
        </div>
      </div>
    );
  }
}
