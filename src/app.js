import React from "react";
import Cable from "./Dropwire"; //"react-dropwire";
import AgeAdjustedMortality from "./AgeAdjustedMortality";
import Epiology from "./epiology";
import Polio from "./polio";
import { UAParser } from "ua-parser-js";
import Vaxx from "./vaxx";
import Dies from "./dies";
import TwitterTweetEmbed from "./TwitterTweetEmbed";
import "./styles.css";
import Mortal from "./mortal";
import Spanish from "./spanish";
import Worldwide from "./worldwide";
import GDP from "./gdp";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    var parser = new UAParser();
    const name = parser.getBrowser().name;
    console.log(name);
    this.state = {
      arguments: true,
      //noyoutube: true,
      browser: name,
      scrollTop: 0,
      ios: name.includes("Safari"),
      iosNoPhoto: name.includes("Safari")
    };
    this.pcr = React.createRef();
    this.walter = React.createRef();
    this.polio = React.createRef();
    this.claims = React.createRef();
    this.jury = React.createRef();
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
    clearTimeout(this.check);
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
      clearTimeout(this.check);
      const check = () => {
        if (this.props.pathname === "/polio") {
          this.setState({ arguments: false }, () =>
            window.scroll(0, this.polio.current.offsetTop)
          );
        } else if (this.props.pathname === "/") {
        } else if (this.props.pathname === "/claims") {
          this.setState(
            {
              insurance: true
            },
            () => window.scroll(0, this.claims.current.offsetTop)
          );
        } else if (["/testing", "/pcr"].includes(this.props.pathname)) {
          this.setState({ tories: true }, () =>
            window.scroll(0, this.pcr.current.offsetTop)
          );
        } else if (this.props.pathname === "/walter") {
          this.setState({ rooster: true }, () =>
            window.scroll(0, this.walter.current.offsetTop)
          );
        } else if (this.props.pathname === "/jury") {
          this.setState(
            {
              juryPermitting: true
            },
            () => window.scroll(0, this.jury.current.offsetTop)
          );
        }
      };
      check();
      this.check = setTimeout(check, 4000);
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
          overflowX: "hidden",
          margin: "0px",
          color: "rgb(230,230,255)",
          width: "100%",
          height: "100%",
          backgroundColor: "rgb(32, 22, 11)"
          //backgroundColor: "rgb(212, 171, 95)"
        }}
      >
        <div
          style={{
            transition: ".3s ease-in",
            fontSize: this.state.openpandemic ? "" : "0px",
            fontFamily: "'Anonymous Pro', monospace",
            backgroundColor: "rgb(32, 22, 11)",
            width: "calc(100% - 20px)",
            border: "6px white solid",
            padding: "4px",
            wordBreak: "break-word",
            textAlign: "left",
            maxWidth: "600px",
            position: "relative"
          }}
        >
          {/*<div
            onClick={() => {
              window.scroll(0, 1);
              this.setState({ trigger: true });
            }}
            style={{
              display: this.state.trigger ? "none" : "block",
              position: "absolute",
              height: "101%",
              width: "100%",
              backgroundColor: "rgba(20,20,20,.5)"
            }}
          />*/}
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
            href="https://carducci.sh"
          >
            epiology
          </a>
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
            href="https://2024nj.com"
          >
            2024nj.com
          </a>
          <div
            onClick={this.props.toggle}
            style={{
              bottom: "0px",
              right: "0px",
              position: "fixed",
              cursor: "pointer"
            }}
          >
            less
          </div>
          <a href="https://jester.com.co">propaganda research</a>
          <br />
          {this.state.openpandemic && (
            <a href="https://stats.stackexchange.com/questions/581479/should-excess-deaths-not-measure-against-the-population-expected-as-opposed-to-s">
              <Cable
                style={{
                  width: "100%"
                }}
                onError={handleScollImgError}
                img={true}
                src={
                  this.state.noyoutube
                    ? ""
                    : "https://www.dropbox.com/s/5hq07n284kerxi6/1918%201919%20flu%20%281%29.png?raw=1"
                }
                float="left"
                title="https://stats.stackexchange.com/questions/581479/should-excess-deaths-not-measure-against-the-population-expected-as-opposed-to-s"
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={!this.state.oldecon ? 0 : this.state.scrollTop}
              />
            </a>
          )}
          <h1>
            Larry Kudlow is{space}
            <a href="https://www.quora.com/Why-does-Larry-Kudlow-say-2-inflation-is-desirable-when-zero-is-historically-possible">
              a fucking
            </a>
            {space}
            <a href="https://www.quora.com/Why-are-developmental-disabilities-called-retardation-if-the-condition-doesn-t-degrade-over-time">
              retard
            </a>
            :{space}
            <span style={{ fontSize: "12px" }}>
              <span
                style={{
                  textDecoration: "underline"
                }}
                onClick={() =>
                  this.setState({
                    openpandemic: !this.state.openpandemic
                  })
                }
              >
                Do you like
              </span>
              {space}the government spending as a percentage of GDP in line with
              its takeover of private values for pennywise degrowth or would you
              prefer banning labor contracts for wholesale degrowth?
            </span>
          </h1>
          Is the expected value variance of sample size or sectionals larger?
          Does an incremental random observation change the expected value in
          proportion to its null covalence?
          <h3>jester.com.co</h3>
          <i>
            Is an increase of a worker's real take-home pay and thereafter with
            stable prices more often a shareholder loss or shrinkflation?
          </i>
          {space}
          <b style={{ color: "lightgrey" }}>
            Who has seen monopoly and competition, except by their effects, that
            is, by their signs? Who has felt credit and property? What is
            collective force, division of labour and value? And yet, what is
            stronger, more certain, more intelligible, more real than all that?
            Look in the distance at this carriage drawn by eight horses on a
            beaten field, and driven by a man dressed in a old smock: it is only
            a mass of matter, moved on four wheels by an animal form. You
            discover there, in appearance, only a phenomenon of mechanics,
            determined by a phenomenon of physiology, beyond which you perceive
            nothing more. Penetrate further: ask this man what he does, where he
            goes; by what thought, what title, he drives this vehicle. And
            presently he will show you a letter, his authority, his providence,
            as he himself is the providence of his equipment. You will read in
            this letter that he is a carter, that it is in this capacity that he
            carries out the transportation of a certain quantity of merchandise,
            so much according upon the weight and distance; that he must carry
            out his journey by such a route and within such a time, barely
            covering the cost of his service; that this service implies on the
            part of the carter the responsibility for the losses and damages
            that result from other causes than force majeure and an inherent
            defect of the objects; that the price of the vehicle includes or not
            includes insurance against unforeseen accidents, and a thousand
            other details which are the hazard of the law and the torment of
            jurists. (Pierre-Joseph Proudhon, The System of Economic
            Contradictions, Volume 1: The Philosophy of Poverty, Chapter XIV.
            Summary and Conclusion, 1847)
            <br />
            Is insurance pricing bad just because you cannot prove not to need
            healthcare first? Is getcovered.NJ.gov nurse and Southwest pilot
            schedule pricing exclusion ameliorated per diem within a month in
            any county yet? Does GetCoveredNJ.gov financial help help the
            patient or doctor financially? Are the Democrats, Libertarians, Ron
            DeSantis, and the rest of the Republicans happy that Trump tripled
            checking?
          </b>
          <h3>
            Isn't income and growth loss the opposite of the cost of living
            inflation?
          </h3>
          Tech advancement lowers GDP, expenses government and structures for
          implausible use leases
          <br />
          <br />
          “They are effective by all indications,” all-cause is not
          categorically, a meaningful indicator, such is polyphyletic, in
          taxonomic classification, categorically. We need paraphyleticism.
          “Usually are reclassified once they are discovered to be
          polyphyletic.”
          <br />
          Misled, did not see, notwithstanding levity to diminish capital of a
          plaintiff, definitively
          <br />
          <br />
          <a href="https://qr.ae/pGjwup">
            If Covid is asymptomatic, does that mean it is uncorrelated?
          </a>
          <br />
          <button
            style={{
              textDecoration: this.state.arguments ? "underline" : "",
              ...buttonStyle
            }}
            onClick={(e) => {
              e.stopPropagation();
              this.setState({ arguments: !this.state.arguments });
            }}
          >
            <h3>arguments</h3>
          </button>
          <br />
          <div style={{ ...setting(this.state.arguments), color: "lightgrey" }}>
            "Jewish Survivors relenting in poverty," but that is{space}
            <a href="https://courttechnology.quora.coms">equality</a>,
            competition, tech advancement (-GDP/p), Expected earlier retirement,
            and economic welfare, productive-efficiency (
            <a href="https://vaults.biz/newecon">1/hour-GDP/p</a>)!
            <button
              style={buttonStyle}
              onClick={(e) => {
                e.stopPropagation();
                this.setState({ oldecon: !this.state.oldecon });
              }}
            >
              <h3>oldecon</h3>
            </button>
            <br />
            <div style={setting(this.state.oldecon)}>
              <h2>Cindy Adams: "we could wear and afford jewlery then"</h2>
              <h3>
                it is because of banks, not population 3%/yr+ 1800-1913 GDP/p
                being nearly constant
              </h3>
              85% since 2000 25-54, 19% population are disabled, above 65+.
              <br />
              "Work[-hour] numbers are down," only counts working for others not
              chores and errands, watching your own kids, paying for your own
              schools, etc. Corporate flaccid loss, forced social security
              investment, you old people had your entire lives to save checking,
              GDP is mostly m2 mutual funds, so. velocity of such per year or
              quarter. inflation
              <br />
              <br />
              "The government colludes with the law bar licensure by class
              precedence malfeasance over estimators' forfeiture of when partial
              contracts are possible. You cannot add scope to require either the
              money-back or partial product," if the money is not had by the
              contractor, there is nothing stopping the contractor from taking a
              higher bid, and providing the terminating-co-signee the money back
              from that. This statement is not to provide third party donee
              grounds to expiring-premium-appraisals of without
              labor-borne-demand, bid.
              <br />
              <br />
              "I will kill you," or "I will kill you, if you do this," still is
              ok for before law since the word is non-exclusive of ability, nor
              wanting. Going to is if yoou are confident in your view of the law
              or natural/international law, in appeal. Saying, "I hope
              antivaxxers die," shows a hypocrisy in bona fides, not dispensible
              without paying the writers, and especially when prohibiting
              undiscovered
              <h2>reasonable doubts from becoming more than 1/12</h2>
              industry-invariability not with standing.
              <br />
              <br />
              variant spreading rapidly, and everyone must wear inside, and that
              means all day." easyflowusa.com. EZPASS 40% debt service, 50%
              debt-spending (in aggregate, laundererers).
              <br />
              <br />
              Karl Marx is our grande teacher and philospher, he died in 1888.
              <br />
              Dick Morris: "Comparative advancement is bending over. ...His goal
              is to make money," at anyone's undue expense. I don't care what
              you do with your money, douche (useless).
              <br />
              Bob Sellers: "I'm a little slower mentally, cannot withstand Dick
              Morris’ phrases, three word chants and puns."
              <br />
              <br />
              No one should be surprised about claiming commitments that have
              not been made,” likely doxxing compound and
              general-income/competing with instead of for consumers in Supply
              and Demand microeconomics, academically, in a bona fide perogative
              (as stated/named). "Practice what you preach," unless you are
              talking your way out of a prisoners' dilemma.
              <br />
              <br />
              Psychopath has no remorse for crime, not view of law like calling
              rollover insurance, “bizzare.”
              <br />
              “Professional case reader." Slander, conflict of interest to be
              bona-fide. ANGER MANAGEMENT
              <br />
              “Surprised and disappointed.”
              <br />
              “Calm down!”
              <br />
              Can’t give opinion without facts derived from consensus science of
              industry-variance."Have to be smart, and not lose your cool," I'm
              doing to give you a&nbsp;
              <a href="https://qr.ae/pG3X5Y">labotomy</a>
              . "I'm sorry for overreacting, what can I tell you." No, you're
              not. Your plea is inherently moot.
              <br />
              <br />
              "Have someone manage a blind trust that gets the info from NANCY."
              ANY HOLDINGS CAN BE FORCED ABSTAIN THAT ISN'T A VOTE, like
              non-voters would. Built wealth up by Savers' share split without
              consent of unsettled trade. This rule doesnt give sway to Congress
              beyond Article 4 free rider immutable sewage, police and lawsuits,
              like broadband/bridge fee nationalization, gentrification
              rent-seeking for bond-laundering with 50% debt spending, to boot.
              $4t/yr is too much because 1/4 1/4 1/4 empiring premiums, pentagon
              (can be local) and pensions (forced corporate collective flaccid
              loss investment trust), like amazon or aarp stock promoted by old
              people.
              <br />
              <br />
              "How does the budget affect microeconomics?"
              <br />
              <br />
              A budget necessarily endows settled trade as a surrendered freedom
              (EULA) graphically a dead-weight box between Supply and Demand.
              Some microeconomists will describe liabilities or outstanding
              bonds as a supplier to a “money-market,” but I believe academic
              and bona fide microeconomics will view compounding or
              general-income, non-compete, as merely an increase in the bid from
              laborless-demand, loitering to collude for laundering down
              payments and reposess intentionally, implausibly-deniable as the
              “business-“ or “credit-cycle.” Usurpers of Savers will describe
              force majeure as foreseeable, showing their intent to compete with
              consumers, rather than for them, by unsettling and outstanding
              trade. Sometimes, even to the point of blind exclusion of
              outstanding shares from accounting price to earnings or book
              (treasury shares). Alternatives to liabilities and bonds as assets
              is 1-level board (of persons) max-profit-royalty, as outlay
              schedules are non-concurrentable, and banks keep to equities or
              transaction fees as to not surrender the freedom of others in a
              likewise false bid pool, laundered from the co-signatories’
              customers and employers.
              <br />
              <br />
              Greg Kelly, "Did Eric Adams (6%) just say the virus that came from
              China being called a Chinese virus cannot be called that? The
              Chinese virus has crushed the american dollar!" Wouldn't accrual
              do that? You tariff for bond-index-funds and accomplished nothing
              in USPTO international law, as if prohibiting trade of broad
              utility is gained by making it claimable in copy/earnings.
              <br />
              <br />
              If it only comes out, it is an evolutionary trait or byproduct.
              Prevalence doesn't mean causation. Hundreds of unsaught variants
              exist without our knowledge, of non-all-incidence artifact nor
              -exclusive byproduct.
              <br />
              <br />
              let's face it, these are your investments. we should kepp them
              from real GDP, count it as M2 is mutual funds and checking,
              velocity of that per year or quarter is GDP.
              <br />
              <br />
              No victim, no fine without state vic
              <br />
              Law to replace old buildings, by jail. required, how?
              <br />
              <br />
              "Help children make eat their pizza."
              <br />
              <br />
              The fed increasing interesty rates by NOT buying outstanding ask
              to price fix value to ask of pensions. "Better than getting rent
              from some deadbeats. Take surrendered freedoms of others in
              $12k/64 debt/cash (new). Bancruptcy abean no better than 6%
              DiBlasio, all the down payments and time loitered from Savers'
              third party donee beneficiary (EULA)."
              <br />
              “Pay for their past services after they are gone?”
              <br />
              Like choring
              <h1>Mark Zuckerberg can suck my cock</h1>
              "What is the relationship between inflation and economic growth?"
              <br />
              Economic growth is integrally population, but once that is of
              basis, the amount of trade per person is constant throughout life,
              the only thing that changes is price.
              <br />
              Job, copy or science
              <br />
              <br />
              Prevalence is not all-incidence artifact (of sickness), nor
              all-inclusive (of sickness). It cannot be output only, without
              being evolutionary trait or byproduct.
              <br />
              "They don’t want to see you suceed at your expense," it isn’t up
              for a vote, my surrendered freedoms (EULA) by your
              valuing/expiring but not discounting ALL input costs: homes,
              equities, bonds, profits, expiring-premiums and labor. A keynsian
              admitting the world is zero sum except for comparative advantage
              labor, and more money only bids up the same resources?
              <br />
              <br />
              "oragel, actually a product." I will not take credit, it is fake.
              <br />
              <br />
              “ME&A t4-up t1 diabetis rheumatoid arthritis inflammatory bowel
              disease and multiple sclersois, only eat roasted beef, apple
              cider, overwhelming sense of impending doom”
              <br />
              <br />
              Dick Morris: "We can't let liberals end wall st."
              <br />
              <br />
              "Why doesn’t the U.S. have a third political party?"
              <br />
              There aren’t any anti-rent-seeking candidates because naive
              policies thus far and possibly due to no interested investors in
              the gains of comparative advantage over plundering and competing
              with consumers.
              <br />
              <br />
              * cap rental-income by 5 units or 30 days, not price.
              <br />
              * truncate production/sales tax for free rider immutable sewage
              police lawsuits of industry-variable, non-character nor expert
              evidence, only vivo lest no jail nor bail.
              <br />
              * explicitly ban expiring premiums and estimated claims as
              surrendered freedoms (EULA, third party donee beneficiary) of
              co-signatories’ customers and employers, as invoices are of
              Savers’ labor-equity in dollar-lands, share-split.
              <br />
              <br />
              When they are innocent, they don’t take the fifth,” unless the law
              is criminal.
              <br />
              Elected officials, democrats and republicans.
              <br />
              Not his job.
              <br />
              <br />
              "homes should be counted in inflation."
              <br />
              "certainly we don't want a recession, nothing investors want to
              have." 2 years of falling GDP/p of hour, certainly not. But you
              are only keeping at zero, not making productive gains as input
              costs inclusive of euities (market-share and profit account
              collective-flaccid-loss.)
              <br />
              <br />
              "Independent historically valid political entity," Dolan.
              <br />
              Religious freedom cannot be purported as evidence
              <br />
              <br />
              "Does the GOP have a platform anymore or is it just grovel at the
              feet of Trump?"
              <br />
              <br />
              Their platform seems to be melding with Democrats, and 1/3
              potential voters agree.
              <br />
              • nationalizing bridge/broadband fees is necessary
              <br />
              • bailing out landlords, lenders and insurance
              <br />
              • real GDP/p per hour is productivity, homes, equities, bonds,
              profits, nor labor withstanding discount
              <br />
              • virion infects call and sewage isn’t negatively correlated with
              mortality, and positively with the population at 78, now
              <br />
              • 40% debt spending and 60% free rider mutable tax for $4t/yr,
              plus actuary-mortality excess age standardized propaganda (without
              full information) of cohort size by ppp trust,
              known-hazard-tort-fraud, expert jury-permits, convictions and
              desistations, ccc for parent gerontocracy “on the table.”
              <br />• unrelenting rent-seeking with said malpractice accounting
              as ignoring input costs of life other than materials (and rents
              beyond plausible use by 5 units or 30 days)
              <h1>
                Dick Morris: "Madonna: 'We are living in a material world,' is
                like Biden and inflation!"
              </h1>
              <h2>
                as printing operte, crisis of confidence as medium of exchange,
                make something, set a price, no idea if you can get that value
                or not. incredible.
              </h2>
              "Buy gold 10% premium, gold storage..."
              <br />
              "Firms I work with don’t charge for storage," they trade futures
              and set price.
              <br />
              <br />
              "Do stablecoins really cause inflation?"
              <br />
              A variable coin (without backing or with fractional “inflation,”
              as if it excludes homes, equities, bonds, profit, and labor) is
              ostensibly share of the market (ask), but not as much as dollar is
              state land depositary. So, a stable coin is just that, or easily
              though of a net-asset-value, or an “sdr,” yet it doesn’t require
              debt “investment,” as purported to work. In fact, fractional
              reserve lending can still permeate with RSA-keybox or,
              “blockchain.”
              <br />
              <br />
              Prices are made in the location market-making/broker by laying a
              spread of ask-to-bid to entice intrepid investing pioneers, by
              their labor or coin.
              <br />
              <br />
              "Choose not to be vaxxed, might be stupid or precient. ...If you
              do you know you won't show a deadly form," you do with another
              indicence-artifact by byproduct not cause.
              <br />
              "Without autopsy, doesn't know what issues you have."
              <br />
              "100 endorsements who will not go along with america first, IP
              hypocrisy."
              <br />
              <br />
              Sin sacrifice nor virion injecting DNA into cell I believe
              hypocrisy is more important than any prophecy.
              <br />
              <br />
              "Nurses 2-4x teachers by government entitlements, no cap, congress
              votes pay each year for teachers when covid was serious issues and
              a lot of people near retirement or with co-morbidities on time,
              actually. buckle up guys, you might get sore throat or larangitis,
              there has always been cold flu, you chose this occupation knowing
              those risks, you knew it was important to educate our children."
              Maybe have them trade in the economy and buy condos outright, not
              keep education behind a paywall, but open source. Trump is for IP
              hypocrisy with truth social because he wants to ruin all copyright
              precedence. "Against liberals and regulating wall st (surrendered
              freedom of others, EULA third party beneficiary donee Savers and
              co-signatoriers' customers and employers need to WAIT FOR
              CONSUMERS BEFORE COMPOUNDING MUTUAL FUND OUTLAYS M2 = GDP/V2 per
              year by fractional reserve in contract, after bashing currency
              fractional reserve). Require bail bribe before getting out of
              prison, for the backlog of court case analysis or review is
              malfeasant malpractice and with juries with only experts with no
              historical knowledge of the case law space. "Posession is 9/10th
              everything." Rental income is 20x/millennial to boomer. "Literally
              making laws that make it impossible to win elections in NY," like
              repo-cycle kept down payments implausible deniability of
              surrendered freedoms (EULA), delayed, laundered and loitered third
              party donee beneficiary claimable. Work for yourself, Vote Saver
              party, account homes, bonds, equities, profits and labor in
              discounted input costs of living instead of 'real' for GDP/p per
              hour. LET ALONE DURESS FOR NET LOSS AND USELESS PRICE INELASTICITY
              OF UNSETTLED VALUE AS PRICE INSTEAD OF BID-CAPACITY WITHOUT
              EXPIRIGN NOR ESTIMATED CLAIMS, THIRD PARTY BENEFICIARY by COMPOUND
              OR GENERAL-FUTURE-INCOME.
              <h1>FUCKING NATIONALIST BIPARTISANS, RETARDED</h1>
              <h2>repo-cycle kept down payments</h2>
              "What is the best way to make money?"
              <br />
              Get a home equity loan at the start of the repo-cycle kept down
              payments!
              <br />
              <br />
              If we hold for trial no decent sentence because mandatory sentence
              was appealed. By 34k ornaments, handcuffs on cops themselves, not
              white collar criminals and robbers, withheld by Brags to
              prosecute," for state victimized unbound Article 4 scope tax free
              rider immutable as paid by consumers, before they get arrested,
              with interest to have business by taking costs, not 40% debt
              spending. Drugs, violence, and terrorists for Islamic banking,
              non-treason of debt service, free rider mutable tax rent-seeking
              for said future income by Savers 40% compounded = 99% amortized,
              1% taxpayer. "Military throw out Reagan/Nixon wipeout," they are
              working age, we need them to make up the rental-income/capital
              gains of forced social security corporate investment of boomers.
              <br />
              <br />
              "monitoring and deciding if you want them to have a vaccine or
              not. way more viral immunity by opening schools. can't play with
              another kids, anxiety and depression and suicidal thinking.
              (without suicidal you are activist). No eyeecare, dental expriing
              claims for pediatrician. interesting lancet study from decreased
              mobility. kids need to move around in order to be health, they
              need to play. we can be sure now." Judge Janine: "this crazy
              post-covid era."
              <br />
              "no variant that will come along that will outcompete omicron,
              outrun and milder than delta, 5 to 10m/day, 300m/mo, most of
              america will have much more antibodies and see a seasonal thing."
              <br />
              You can see population single annual is positively correlates with
              mortality. "too incompetent to order tests for tax-paying
              americans, law-abiding citizens." 40% debt spending on a free
              rider mutable test? No reason within Article 4 but for 40% debt
              spending TREASON. OFF WITH YOUR HEAD JUDGE. "millions on public
              schools, but you lazy asses don't want to teach, but go to a bar
              without a mask? you are lazy, our kids are suffering with mental
              health, bad habits, drugs, gangs, whatever, depression, suicide,
              my butt it is not safe enough, go to the classroom or WE won't pay
              you." SAVERS PAY COMPOUNDED 40% and 60% free rider mutable useless
              operational-cost rent-seeking.
              <br />
              <br />
              "someone who just had covid." The bacteria was in the room! it was
              cooooooooold! You set Italian-americans or semen depleted as a
              variant of concern. NOOOOOOOOO. IT IS NON-EXCLUSIVE,
              NON-ALL-INCIDENCE ARTIFACT (OF SICKNESS).
              <br />
              <br />
              "I'm not saying I am not guilty, and shouldn't be held to
              policy-crimes, Things I could have done right, things I could have
              done better to solve those problems." *Salutes
              <br />
              <br />
              "Tax relief how will they spent the billions! Government watchdogs
              want to spend the funds on government watchdogs in catastrophe, if
              covid picks up."
              <br />
              <br />
              Facebook: "Giving back to the non-profit space of how to solve
              this problem. *Lists a bunch of elections to build language,
              products and teams, *Lists midterms. I would like to understand
              what they liked about 2020, what can be changed, helping people
              register to vote, for example." Or, provide all options, even
              respect abstainers for their power of NOT VOTING. 10 years in the
              company is history you cannot throw away, there’s intent/nomen
              there, Johnny! "Social impact in others' freedoms, surrendered,
              lest ressurected, is important for us to control." ONLY IF YOU PAY
              THEM, bitch! "Why is it so hard to be disuede beliefs that are
              already upshot? We find out with a literal-fucking cult member
              next, on CNN."
              <h1>
                you want to kill people in jail? that is what you wanna do?
              </h1>
              '...substance abuse, and have an issue with it, it doesn't only
              hurt themselves because they take your money, right?"
              <br />
              "city-wide wipe out drugs, cannot reduce crime without going after
              50-60%."
              <br />
              "tough love, try to stop them, if you love homeless, get them off
              the streets."
              <br />
              "a man tried to sell me a child, so there drugs is a problem, they
              will dry out in jail."
              <br />
              "victimless crime system is [market-]communism. roage of morals in
              society will take it over."
              <br />
              No victim of crime, hurting themselves? “maybe a big dealer of
              marijuana because you usually do the other stuff. Prostitution is
              an economic thing, ruins neighborhood.” A lot of the times girls
              will choose to do it because they are drug/rent addicted” I pay up
              front
              <h1>
                "we should know WHO in the population is vaccinated," Rudy
                Giuliani.
              </h1>
              <h2>
                "more money from unemployment, not here at work, because being
                paid by taxes."
              </h2>
              <br />
              Re: Repo-cycle, kept down payments, Rudy: "don't be sostupid." BLS
              unemployment survey of 60,000 households. If you have awork ethic
              I'm going to put you to work, idiot. We have so many jobs, no one
              should be on welfare.&nbsp;
              <a href="https://www.google.com/search?q=percent+of+population+disabled">
                85% is the maximum for 19% have a disability
              </a>
              <br />
              <br />
              <Cable
                style={{
                  height: "380px"
                }}
                onError={handleScollImgError}
                //img={true}
                src={
                  this.state.noyoutube
                    ? ""
                    : "https://drive.google.com/file/d/1lVV6CdrHQQLpevS5EJDtixYauHn2LukR/preview"
                }
                float="left"
                title="newsmax.com - Michael Wood and Christian Troffei, CFO CEO Sonar"
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={!this.state.oldecon ? 0 : this.state.scrollTop}
              />
              <h2>keybox tools</h2>
              Lending tools, secure, on the blockchain. Understand what is going
              on. Another conversation.
              <br />
              It’s a binary, friend or foe script, screenshooting everyone to
              pass my Screen.
              <br />
              <br />
              Peter McCullough, "risks to health against religion, 400/1m
              expected 60/1m, no reason to take on risk."&nbsp;
              <a href="https://link.springer.com/article/10.1007/s00259-021-05314-2">
                immunocompromised vaccines are excess antibodies for
                dysregulated oncogenesis
              </a>
              .
              <h1>
                “If public officials don’t check their own anxieties for sharing
                fear based messaging then we should take a break.”
              </h1>
              <h2>
                Feel affects decisions, reduce risk for covid by losing weight.
                <br />
                Give partial information range in nuanced behaviors to relay
                their unique risks"
              </h2>
              "Taking pandemic far more seriously than the average,
              all-eligible-voter persons. meet people where they all when taking
              about covid, oliver." Dr. McBride: "let it rip, don't protect the
              vulneratble."
              <br />
              <br />
              "Last thing we want to do to have excess injections of
              antibody-invocation (not antibody donations, suppression of
              placebo or warning mechanism). Certainly have a right to own." Dr.
              Robert Malone :"this is the same stalinist process, german people
              french revolution, socrates, confronted by jesus, full knowledge
              of crucifixion. only one JEsus Christ, we are not it." That's all
              he said, never that he would cleanse sins by sacrifice, merely
              blessings and anti-userer rants. mark of beast is exclusion from
              markets. Etymologically, reappropriating labor-equity,
              gentrification and rent-seeking isn’t ‘socialism’ but
              ‘market-communism.’ Marx was negative on the credit-cycle, by any
              trust, be it government, corporation, or castigations as wee are
              seeing versus youth by ppp, bbb and ccc, and died before being
              co-opted by genocide-purveyors and Mises. However, get this, 15m
              and 3m were the expected excess deaths during China and Russian
              famines, the same phenomenon that has happened with coronavirus,
              where the excess deaths match population growth of 78 year olds.
              <br />
              <br />
              natural immunity, military vaccine and all treatments after the
              excess deaths of a ONE-TIME 78 cohort size WALL.&nbsp;
              <a href="https://qr.ae/pG6dSN">
                Is the economic recovery V-shaped?
              </a>
              <br />
              <br />
              radical nation is available anywhere books are 'sold'
              <br />
              <br />
              You can't reproduce unless it is integral to utility too broad, or
              of scientific importance.
              <br />
              <br />
              Trumps' president's truth social is exactly what China was doing
              to USPTO that triggered his trade-war. He still pays bonds with
              40% debt spending.
              <br />
              <br />
              <Cable
                onError={handleScollImgError}
                //img={true}
                src={
                  this.state.noyoutube
                    ? ""
                    : "https://drive.google.com/file/d/13hOrZNwCx3o5hF_fQJsVbENdl3YZzdvI/preview"
                }
                float="left"
                title="newsmax.com - Mark Kaye"
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={!this.state.oldecon ? 0 : this.state.scrollTop}
              />
              jury of experts - "Mix yourself up a cold cocktail"
              <br />
              "It can be done because we did it before, judge!" "Tipping the
              scales, when all else fails." Just like Rudy!
              <h2>
                Dr. Maria Ryan: "If we want white collar law to be followed, go
                through the court system. ...We let abuse happen.
              </h2>
              <h3>
                ...social worker, substance abuse, treatment, not his job.
                safety?"
              </h3>
              Obese over 65+ or co-morbidities. How long antibodies last." That
              is just non-exclusive garbage collection, warning mechanism or
              placebo, certainly mRNA-sporing grafts EXCESS DYSREGULATED
              ANTIBODIES TO HAIRCUT YOUR CELL THAT IS FROM MRNA BACTERIA
              INFECTION NEVER VIRION INJECTION OF DNA INTO CELL. "Improving the
              lives of others with good healthcare."
              <br />
              Mark Kaye: "There are still people dying for it, you can expect
              treatment if you have shingles, that doesn’t happen in america,
              not here, not now at least. ... cases are much, much milder than
              delta and the other variants. Buiklding up DeSantis, 'undo all the
              damage ggoing to to,' say FL get vaxxed, not mandate, treat so
              they don't have to go to hospital to work to pay for food and a
              roof over your head. Treating covid rather than prevented it?
              'G-d, how did that guy ever get elected?'" to pre-prop
              Trump/Desantis ticket 2024, obfuscating the integral basis, not
              even overwhelming partial rate of change over rate of change...
              over time has no elasticity of population growth, GDP/p per hour
              just doesn't matter, except for deprecation and innovation.
              <br />
              <br />
              "this is a money problem, we know lower class is obese, causing
              covid vulnerabilities, overweight euro won't overweight afro
              will." you can't even say monoclonal antibodies (donated thru
              government rent-seeking, currency-competitor no script, craig
              stubie: 'doses whenever we need them? Gov have power to decide
              what state governments need, to make sure people are getting the
              "treatments."', why does government want licensure over drugs? To
              prohibit currency competition, no-script? 'I suspect they want to
              discriminate treatment condemning Trump supporters today,' 'grim
              reaper is joe biden, 25k doses NY, not "red states."'), becsaue
              aggregate deaths still matches mortality to population growth,
              actually. Grant Stinchfield: "leftists want us all dead, 'fl
              political leadership over crisis.' they own these deaths." There
              isn't 11/12 scientific consensus, yeast cleaner. "1/2 per 1000 FL
              to NY."
              <br />
              <br />
              <Cable
                style={{
                  height: "380px"
                }}
                onError={handleScollImgError}
                img={true}
                src={
                  this.state.noyoutube
                    ? ""
                    : "https://www.dropbox.com/s/gbsf6bcd3mb5ete/Screen%20Shot%202022-01-08%20at%206.56.35%20PM.png?raw=1"
                }
                float="right"
                title="newsmax.com - 'Dershowitz: Congress, Not Biden, Has Authority on Vaccine Mandates'"
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={!this.state.oldecon ? 0 : this.state.scrollTop}
              />
              "Help send packages," is all charities can add, but then, they are
              just gift stewards. 'Get the money where it needs to go.' 'Build
              credit history as you and all your customers and employers repay'
              - NetCredit Surrendered Freedoms of Others&nbsp;
              <span role="img" aria-label="trademark">
                ™️
              </span>
              <br />
              <br />I added a picture for you, the mortality matches population
              growth. “We can only speculate that&nbsp;
              <a href="https://youtu.be/Weqb9KrQ-TU?t=21">
                DNA of virion is injected into the cell, because it only happens
                in an instant
              </a>
              ,” makes my&nbsp;
              <a href="https://www.pfizer.com/news/hot-topics/viral_vs_bacterial_pneumonia_understanding_the_difference">
                hypothesis
              </a>
              &nbsp; that bacterial-reinfection is the cause, and virion is
              merely debris, non all-incidence-artifact.
              <br />
              Comes from nowhere, so evolutionary?
              <br />
              <br />
              It has always been the case that&nbsp;
              <a href="https://humanharvest.info/polio">flu is worst</a>," from
              bacterial infection and viorion non- all-incidence-artifact, Rob
              Astorino. "<a href="https://qr.ae/pG6dSN">1m cases</a>," John
              Tobacco rubs his nubs together, as if holding state share
              depositary.
              <br />
              <br />
              "Pay your mortgage and put food on your table." That's an
              oxymoron!
              <br />
              <br />
              Mark Geragos: "Lying to the investor implies you’d be lying to the
              consumer," just lofty goals to tech advance. Did she open source?
              <br />
              <br />
              What is to stop people from resisting arrest if you do not shoot
              on sight next time? Someone is under arrest, dutifully, and they
              start fighting back," that is like a plea bargain you're in on the
              lie to duress non-state-vic.
              <br />
              <br />
              "They don't have a choice, they are doing their job." jobs are
              only not a choice because of implauysible landlord use,
              racketeering expert jury and repo-cycle kept down payments,
              including expiry and estimating.
              <br />
              <br />
              Craig Cauflin, NJ Dem speaker, financial consultant: "100's
              protected," when most testing is asymptomatic non all-incidence
              artifact warning mechanism, not cause and with precedence but
              still illegal. you can't move to duress in business-consumer
              relation beyond mvp without proof that DNA is injected by virion
              into cell, not merely deduction, as byproduct is also reasonable.
              NEW JERSEY SIMPLY DOESN'T TURNOUT BECAUSE THEY DISAGREE WITH ALL
              EXISTING PARTIES, ALL RENT-SEEKERS. "Homestead freeze, student
              loan freeze, standing up for NJ. Because of covid." It is
              literally white collar fraud given 78 actuarially increase is
              called a hazard. $3.5m spent the right way, you 40% debt service,
              gentrify for rent-seeking government HUD, 50% debt-spending. You
              shouldn't be able to manage your own money. Fighting food and
              security by front-running food and libaries is self-defeating. the
              same consumption for more money is only supply-side, not
              demand-side. "mental health because of the 'pandemic,' friends and
              family who got sick," sickness is not greater than usual, you just
              are reacting now to misappropriating funds into expiring claims
              and non-rollover insurance. You put me in Carrier for 13 days for
              saying that.. I WILL KILL YOU. "Not fully understand the nature of
              this. We know people who lost job and scrape by on rent." Those
              rents are actual labor shortage, that doesn't serve people of new
              jersey, just rent-seeks and let landlords not work because you are
              favoring old people over young.
              <br />
              <br />
              "Homeless and emotionally disturbed people." people are homeless
              not because of emotions you ballless prick. I am having a
              psychotic disprder because you don't count homes as an input cost.
              You aren't productive, the only money you bring in is from lawyers
              for which that are claiming an actuarial increase in 78 year olds
              from a year ago is a pandemic. People aren't perverted because of
              a mental disorder. You just want everyone to be like you! "A
              victim of poverty." That doesn't count homes, just income to rent.
              The world would be better without you Curtis, and 93% of NYC
              agrees.
              <br />
              <br />
              “Try to group people by types,” is not a random selection, nor is
              disqualifying jury for being experts of choosing, Jack Kingston.
              <br />
              <br />
              Amanda Brohante: "50% of admissions are not due to covid, but
              asymptomatic positive, neither all-incidence-artifact." Catherin
              Millington-Sanders; "Not vaccinated, severe disease, IVU and death
              is much less likely," you are suffering from a basis rate fallacy,
              as the virion is a byproduct of a bacterial-infection, not cause.
              You honestly think virion is an evolutionary trait? It has no
              taxonomy like bacteria and cell does, although out excrement is
              filled with bacteria.. Virion are debris dissolved by the antibody
              evolutionary trait, but VACCINES DO NOT PREVENT ILLNESS NOR DEATH.
              <br />
              <br />
              Public housing is rent-seeking beyond plausible use yet make use
              of more than 5 units or 30 days, otherwise purchase was deduced
              intent to compete with consumers uselessly.
              <br />
              <br />
              Mark Morgan: "American citizen, pay your mortgage, go to work."
              <br />
              <br />
              I was a bartender who became disabled on a run next to a running
              trail. All hazards are self-evident, and lawyers have a conflict
              of interest to be malfeasant for trial v class lest surrendered
              freedoms (EULA) limitations of non-responders. Every hazard is a
              "victim of their own creation," unless you have closed source
              scripts to racketeer slip & fall. Isaac Ivalosae, Trentonian.
              <br />
              <br />
              "What is the most important economic factor in determining
              production?"
              <br />
              Input costs that is material-inflation, as well as bonds, stocks,
              homes, and labor, discounted by non-working-age.
              <br />
              <br />
              "When did economic recovery start?"
              <br />
              Recovery is depreciation of productivity by price deflation,
              retirement and durable-trade (less GDP/p per hour). 25–54 85%
              participation for corporate flaccid loss is not enough because of
              actual-labor-shortage-demand of rent-seeking/finance (invoices,
              expiring claims, implausible landlord use and repo-cycle kept down
              payments laundered surrendered freedom, EULA, third party donee
              beneficiary claimable) because GDP/p 1800–1913 being nearly
              constant amongst (3%/yr+ population), proves that actual
              consumption discounted for inflation is constant and population
              scarcity is labor elastic, meaning population growth only raises
              price, when it isn’t working age.
              <br />
              <br />
              "color not character," what about slurs?
              <h3>
                187.5x new, 44x actual, debt/cash. Looking to reverse amortize
                OUR income
              </h3>
              <h1>financials doing well, 1x book</h1>
              <h2>over my dead body</h2>
              "$130b where did it go?" What about ppp trust stephen "double home
              inflation no way" Moore, 5th best economist in the world? "small
              biz back on their feet, self inflicted wounds," Stephen Forbes,
              "who is going to finance the 40% $4t/yr deficit of m2 = mutual
              funds + checking? Antitrust-socialist solutions without
              congress-consent," pussy, they are not representative of all
              options (<a href="https://saverparty.xyz">anti-rent-seeking</a>)
              and it is already law to counterfeit in contract: you need to
              await consumers willingness and ability to surrender their own
              freedoms, not future except in outlay caccount of 1-level board
              max-profit-royalty.
              <br />
              <br />
              <Cable
                style={{
                  height: "380px"
                }}
                onError={handleScollImgError}
                //img={true}
                src={
                  this.state.noyoutube
                    ? ""
                    : "https://drive.google.com/file/d/18pLLuQRk8e0J01OEWIhnnpAi7HHk-xX6/preview"
                }
                float="right"
                title="(Newsmax) - Seth Densen & Melissa Armo, 'stock swoosh' giving advice for Visa stock"
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={!this.state.oldecon ? 0 : this.state.scrollTop}
              />
              "Processed $13t in transactions." With only $2t checking, and GDP
              is mutual funds + checking velocity, GDP is fake, $20t is all
              fraudulent freedoms! You need to await customers to outlay!
              <br />
              <br />
              "People need security, consistency," just use Tranquility and
              voluntary trade, homes are still appreased by neighbord's
              last-trade-value, and should be inclusive of "input costs," not
              just material, as well with labor, equities and bonds. "Kiddie,
              non-classroom, science has no precedencial-backing up. We should
              force education trusts, those teacher union leaders should be in
              jail." I think the kids working for non-gerontocratic-wealth is
              self-evidently good for comparative advantage for deflation,
              durability and retirement and you need to have your tongue cut
              out.
              <br />
              <br />
              <Cable
                style={{
                  height: "380px"
                }}
                onError={handleScollImgError}
                //img={true}
                src={
                  this.state.noyoutube
                    ? ""
                    : "https://drive.google.com/file/d/15ecBGRvq__trKMGMnBkJEZYCYaQDZw89/preview"
                }
                float="left"
                title="GBNews (Youtube) - Justin Urquhart Stewart, 'Bank of England aims to make economics easier to understand'"
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={!this.state.oldecon ? 0 : this.state.scrollTop}
              />
              "Your money will in fact double every 10 years with compound
              interest surrendered freedom, hours per last-home-traded does
              double double that! "Time" doesn’t always, "go against you" it is
              compounding the surrendered freedoms of your customers and
              employers as co-signatory be it expiring or estimated claims. Even
              payday loans musn't be general income but 1-level
              max-royalty-contracts as to not invoke third party donee
              beneficiary of surrendered freedoms (EULA). Mediate by reverse
              amortization (cash/debt)*income every year back.
              <br />
              <br />
              "consumer spending depends on savings accounts, bonds last traded,
              44 years to pay off with current income for all debts. Fed comes
              in to hot to late that economy already ameleiate its growth rate."
              <br />
              <br />
              Michelle Gerard: "Issues like low immigration, early retirement,
              low population growth, made worst over the pandemic, get back to
              basics in terms on suplly and demand, coming back in growth pretty
              quickly." In terms of the data, covid did nothing except insurance
              fraud.
              <h1>Don't lie to an academic actuary</h1>
              <h2>excess doesn't discount cohort size</h2>
              Jo Pinion: “14% suddenly had covid,” something like bacteria can
              be in the room or that matches asymptomatic prevalence, not
              all-incidence (of pneumonia) artifact. "4.5m left according to
              2020 numbers," why don't you add back the new entrants? Trying to
              terrorize black man? "Suicide somehwat related to substance
              abuse." Chicken or egg? Doesn't matter? open source vault share
              no-script to solve the drug was.
              <br />
              <br />
              “I want workers to make a buck above inflation.” Because you are
              selling your stock and bonds of surrendered freedom. “Can costs be
              passed to consumers to keep margins.” Bitch, you are a consumer.
              "We foresee the dollar to strengthen against the Yen, even the
              doves are getting hawkish."
              <br />
              Larry Kudlow: "Supply siders hate inflation."
              <br />
              <br />
              stocks are literally pure market concentration and flaccid profit
              loss (not a bargain)
              <br />
              <br />
              "Policy mistake," is a strawman of reverse amortization, then they
              bailout. "Asset market coming off, bond market backs off,
              inflation rises, that is the worst kind of scenario, higher
              10-year rates continues to harm labor."
              <br />
              <br />
              "What is a way to boost your economy?"
              <br />
              We would like deflation, durability and retirement. We can reverse
              amortize (cash/debt)*income every year back surrendered freedom
              (EULA, third party donee beneficiary), truncated production/sales
              tax for free rider immutable, have permits by industry-variable
              for business-consumer duress, and cap implausible landlord use
              above 5 units or 30 days.
              <br />
              <br />
              "What happens when supply is greater than demand?"
              <br />
              Depends on if you define actual-Labor, -Demand or -Supply, or
              nominal.
              <br />
              <br />
              We do measure nominal changes per time, or allocation (place in
              space). Any other presentation of Supply and Demand might not have
              such parity to claim as Supply nor Demand, nor a stasis disparity
              to compare. Although the curves’ marginal-propensities are cited
              all on their respective-curves, just in order, with elasticity
              strongest at the inception of the market, there is a
              shared-transitive-property to prices that is set after
              brokers/market-makers lay their spread of ask-to-bid until Supply
              and Demand can be comfortable enough to make a move. Maybe they
              are the only ones with the platform and collateral to play both
              sides.
              <br />
              <br />
              Normally we are measuring over the absolute of time, not a
              cross-sectional. If Supply is booned by cash alone, rather than
              working-age population, then productivity of real GDP/p per hour,
              if also discounting equities, bonds, homes and intermediate-labor,
              falters. Or, just measure hours per home (average-traded-value),
              or really, homes per hour (index over index rates of change,
              derivative).
              <br />
              <br />
              Population also doesn’t create scarcity, as proven by
              nearly-constant GDP/p, 1800–1913.
              <br />
              <br />
              "low unemployment rate means good, they are still buying bonds
              from our proflogous, gov never has been confused in being
              nostraomous." I think they just admitted to trading against me as
              I shorted my competitors to 0. "Inflattion too-transitory and not
              an issue, too persistent." Inflation is a transitive-property of
              excess spending to operational consumption (doesn't fucking change
              you fatass glutton), monopsony and less working age per person.
              <br />
              <br />
              "Where are the workers who once had the nearly eleven million jobs
              that are now unfilled?"
              <br />I believe you misheard the person reporting this, or they
              intentionally misguided you and you fell for it. We are back
              to&nbsp;
              <a href="https://fred.stlouisfed.org/graph/?g=KEig">
                normal employment
              </a>
              , nearly 85% participation of 25–54 working age.
              <br />
              <br />
              "there is no money velocity, very low, get past debt to gdp, it
              has a negative multiplier."
              <br />
              <br />
              "Why does TLT go down when treasury yields go up?"
              <h2>
                I think you might be witnessing an effect before the cause, as
                it happens in an instant.
              </h2>
              When TSY bond-index-funds lose investment, interest rates for new
              bonds rise to attract investors. TLT constitutes the 20–30 year
              tranche of newly-issued bonds, that which are surrendered freedom
              (EULA, third party donee beneficiary) of Savers and are&nbsp;
              <a href="https://fred.stlouisfed.org/graph/?g=KEt6">shown</a>
              &nbsp; different principal amounts to the borrower than the
              lender.
              <br />
              <br />
              real GDP/p per hour growth only isn’t $0 nor 0%/yr+ of m2 mutual
              fund+checking velocity per year, because they are a devious
              accounting-disparity! We all do pay the same actual-things, but
              the price and durability is the only change in GDP or velocity per
              year.
              <h2>
                "Year over year base effect numbers," WHAT THE FUCK IS THAT?
              </h2>
              <h3>
                GDP/p is proven to be unaffected by population growth, 1800-1913
                was nearly constant amongst (3%/yr+). PCE deflator only includes
                materials and rents, not homes, equities, bonds, profits nor
                labor.
              </h3>
              <br />
              "You can do anything if you put enough money into it," You mean
              you just take skilled labor from elsewhere, money doesn't actually
              do it, just raises bid-to-ask for actual labor shortage relative
              to leaving starups to their "fixed costs," not operational.
              'Fixed' have no marginal cost reduction by collective bargain.
              <br />
              <br />
              Rassmuson: "Only 1/4 voters don’t trust the elections, but 1/4 of
              all people (non-voters are more than swing! "Gas is a real-world
              issue."
              <br />
              No one has won 50%," but rcv enables that to happen over 1/3
              majority.
              <br />
              <br />
              Dersh: "Vaccines are a last resport, constitutionally," is that a
              threat?
              <br />
              <br />
              republicans say big government socialism to pull/agitprop
              conservatives.
              <br />
              <br />
              "Not going to slow employment with such inflation, 50 basis points
              is just want the doctor ordered. Jolt expectations back down. Yeah
              need a little shock value here. Need a wake up call. Linger to act
              like normal cycle, more pain in the end." Are you saying these
              values are fake?
              <br />
              <br />
              Michael Goodwin, NYPOST: “Any poll is an even split, that is the
              nature of the economy right now. There was no conspiracy.”
              <br />
              <br />
              "What is a way to boost your economy?"
              <br />
              We would like deflation, durability and retirement. We can reverse
              amortize (cash/debt)*income every year back surrendered freedom
              (EULA, third party donee beneficiary), truncated production/sales
              tax for free rider immutable, have permits by industry-variable
              for business-consumer duress, and cap implausible landlord use
              above 5 units or 30 days.
              <br />
              <br />
              Marx would be terrorizing Democrats, Republicans, Libertarians,
              Greens and People
              <h1>
                WHAT THE FUCK IS REAL WEALTH, DISCOUNTING MATERIAL FOR ASSETS?
              </h1>
              <h2>WE WANT GENERAL DEFLATION AND RETIREMENT</h2> 10k/day reaching
              social security. demand for optimum social security claiming
              decision, ensuriong all they earned, and entitled to! Educated and
              trained to maximize benefits, competing with consumers, says
              WABC250 to get $250 off, compliments of 77WABC.
              <Cable
                onError={handleScollImgError}
                //img={true}
                src={
                  this.state.noyoutube
                    ? ""
                    : "https://drive.google.com/file/d/1e84UBIo3jiAoqh5LdDcq58da4GTC6EEZ/preview"
                }
                float="right"
                title="Legacy Precious Metals on the 77WABC iOS app"
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={!this.state.oldecon ? 0 : this.state.scrollTop}
              />
              Kudlow: “Slow jobs, strong household income,” gerontocracy
              douche!!!! less jobs and durable (less) trade is literally
              technological advancement ends. "Virtually no inflation -2%.
              20%+/yr by trump ppp trust. Real wealth for bottom rose 20%," that
              is material deflated homes, equities, bonds, profits, and
              intermediate-labor? Income inequality and poverty only. "Biden
              voted for supply side tax cuts 30 years of prosperity after
              raegan. Revived prosperity by corporate tax cut." Your problem is
              all the snot in your brain “Damages the kids keeping them out of
              school. Social, no money, enslavement. These teachers don’t want
              to teach, first to cry uncle, teach less and less, require more
              and more. fire Striking teachers. we've seen detroit. Kids first,
              put american kids first. ccc parent v kids. All the income they
              have earned, and are entitled to. Maximize benefits at RRSA
              NURISSA.” THAT IS FORCED CORPORATE INVESTMENT like amazon that AOC
              wants government to be
              <br />
              <br />
              "What are the causes of built-in inflation?"
              <br />
              Built-in inflation is not true, GDP/p 1800–1913 being nearly
              constant proves not only that actual consumption is constant but
              inflation can be zero, population growth (then 3%/yr+)
              notwithstanding.
              <br />
              <br />
              Inflation otherwise is caused by money, debt (surrendered freedom,
              EULA, third party donee beneficiary, non-reversed amortization),
              expiring premiums, implausible landlord use (uncapped 5 units or
              30 days), free rider mutable tax (untruncated production/sales
              tax), less working age per person (25–54).
              <br />
              <br />
              ccc,ppp,bbb,market communism free rider mutable tax is supply
              side!
              <br />
              "tax less, get more, jobs or investment, stimulate more, get more,
              grow the pie larger," share-split? selling out for foreign state
              lands? People still. "Socialist view has class warfare, give
              wealth to people already well off." who "taxing rich people for a
              larger government, hence big government socialism, coined by my
              friend newt gingrich," that is an oxymoron! "Entitlement middle
              class plus," those are Savers' surrendered freedom. "Do you want
              your taxes to go up for more welfare, without work attempts to get
              the benefits?" Why do you want to allow benefits of surrendered
              freedoms (EULA, third party donee beneficiary) for work hazards at
              all? "Legal working-age, actual-labor-shortage, law and order!
              Disrespects the jury system," right now it is not industry
              variable. Government taxing and regulating is socialism," only
              regulating, not reappropriating actual labor but torts for white
              collar crimes like counterfeit in contract or government,
              corporate and gerontocracy rent-seeking. 2/3 are
              anti-rent-seeking, candidates for this option aren't presented,
              and this is why my voters don't turn out for debt king trump nor
              obama. "The emergency economy was over 2021 when deaths were more
              than 2020. Biden's new approach is big-government socialism,
              taxing regulating success, not free enterprise, free market
              capitalism, but big-government socia,lism, massive increase in
              demand from stimulus," same consumption of actual durable-goods,
              materials and services, just supply side MONEY LAUNDERING. "Didn;t
              need the money because going back to work." The only need was your
              actual labor shortage landlords, lenders and insurers.
              <br />
              <br />
              End user license agreement notwithstanding surrendered freedom is
              a general question because it comes from a place of due diligence
              poorly when in absense. “Can’t expect people to finish at the same
              time.” He wants to extend the implausible deniability of
              impossibility
              <br />
              Durable trade is not gdp
              <br />
              <br />
              raining condos implausible landlord use, allow hotels to continue
              by 5 units or 30 days
              <br />
              <br />
              1/3 unemployed are long term unemplyed, 85% of 25-54 is not 2/3
              <br />
              <br />
              <Cable
                onError={handleScollImgError}
                //img={true}
                src={
                  this.state.noyoutube
                    ? ""
                    : "https://www.youtube.com/embed/4hrMuZEGGmk"
                }
                float="right"
                title="Dick Morris CPI https://youtu.be/4hrMuZEGGmk"
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={!this.state.oldecon ? 0 : this.state.scrollTop}
              />
              Rob Schmitt and Peter Navarro: ECONOMIC GROWTH CLAIMED AS FL NOT
              1/4 illegal immigrants but anti-masking. "Highest productivity, in
              terms of GDP growth. ...The real problem is they are going to turn
              our millennials into serf, let them eat cake,' Zuckerberg, 'they
              can tour the property virtually.'
              <br />
              <br />
              "What happens when supply is greater than demand?"
              <br />
              Nick Carducci - , BA Political Science & Economics, Johns Hopkins
              University (2015)
              <br />
              <br />
              Depends on if you define actual-Labor, -Demand or -Supply, or
              nominal.
              <br />
              <br />
              We do measure nominal changes per time, or allocation (place in
              space). Any other presentation of Supply and Demand might not have
              such parity to claim as Supply nor Demand, nor a stasis disparity
              to compare. Although the curves’ marginal-propensities are cited
              all on their respective-curves, just in order, with elasticity
              strongest at the inception of the market, there is a
              shared-transitive-property to prices that is set after
              brokers/market-makers lay their spread of ask-to-bid until Supply
              and Demand can be comfortable enough to make a move. Maybe they
              are the only ones with the platform and collateral to play both
              sides.
              <br />
              <br />
              Normally we are measuring over the absolute of time, not a
              cross-sectional. If Supply is booned by cash alone, rather than
              working-age population, then productivity of real GDP/p per hour,
              if also discounting equities, bonds, homes and intermediate-labor,
              falters. Or, just measure hours per home (average-traded-value),
              or really, homes per hour (index over index rates of change,
              derivative).
              <br />
              <br />
              Population also doesn’t create scarcity, as proven by
              nearly-constant GDP/p, 1800–1913.
              <br />
              <br />
              “banks exist” you lost me there. Life expectancy age cohort size
              is larger, I don’t use life expectancy but the single year
              population size growth that people like you terrorize as excess
              deaths unexpected. How many bonds do you have? They can go to zero
              and people will be able to barter with vault share depositary.
              Don’t lie to an actuary academic.
              <br />
              No one has won 50%, but rcv enables that to happen over 1/3
              majority
              <hr />
              <br />
              Cops aren’t the ones giving malfeasant orders.
              <br />
              <br />
              "School arts programs," will be determined its usefullness if paid
              by parents, not free rider mutable tax. Just let the kids work.
              <br />
              <br />
              <Cable
                onError={handleScollImgError}
                //img={true}
                src={
                  this.state.noyoutube
                    ? ""
                    : "https://drive.google.com/file/d/1iA500bT2DkEAeJ5W83McZG1AR25a2wU2/preview"
                }
                float="right"
                title="(GBNews) - Sam Collins Senior Policy Advisor to the Institute of Economic Affairs"
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={!this.state.oldecon ? 0 : this.state.scrollTop}
              />
              “Are we missing a trick here by letting the school do it’s thing
              and having a vibrant external series of activities.”
              <br />
              <br />
              Jillian Anderson, Turning Point: "more people died in 2021, than
              2020, so he should step down himself." the excess deaths grew and
              1918 looks fake too, how can 20-29 jump up to make up 1918 loss?
              Doesn't compute, but decennial and single year still puts it out.
              1918 was fake.
              <br />
              <br />
              "live with virus rather than wiping it out, rather than push
              vaccines and boosters, the only options to end it." asyumptomatic
              prevalence exists for hundreds of thousands of virions that are
              byproduct prevalence, not all-inclusive cause, let alone
              all-incidence artifact (for sickness). "No one can define/find
              testing." Do you mean USPTO, if thereare customers, there would be
              investors/entrepreneurs. "We are not talking about him reading a
              book." Yeah you fucking cunt Betsy Mcgovern, I ewas held for 13
              days by a behavior health institution for $2k/day by for
              complaining about that very expiring claim fraudulent bid pools.
              "Social media platforms should be regulated as public utilities,
              because that is what they 'are.'" You were a governor of a state?
              They aren't, actually, that, because, those are operating costs,
              that are free rider mutable, rent-seeking, out of scope for free
              rider immutable reasons, as the nomen is now. The Users are rather
              contributors of Tranquil and voluntary trade without quo. The
              grounds cannot automatically make platforms public owned. The
              platforms must get a desist order, with industry-variable jury
              without more than 1/12 reasonable doubts.
              <br />
              <br />
              they all had jobs in haiti, but they have an opportunity to come
              to the greatest country in the world." Why would you prohibit
              comparative advantage, and technological advancement by
              retirement, durable trade (not foreign land share-split prone
              accrual) and price deflation.
              <br />
              <br />
              <Cable
                style={{ height: "380px" }}
                onError={handleScollImgError}
                //img={true}
                src={
                  this.state.noyoutube
                    ? ""
                    : "https://drive.google.com/file/d/1N6IQaXGGNjDSmUUre-Pd_sCdrPuq2N01/preview"
                }
                float="left"
                title="(GBNews) - Sam Collins Senior Policy Advisor to the Institute of Economic Affairs"
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={!this.state.oldecon ? 0 : this.state.scrollTop}
              />
              "We borrowed and made a healthier state." Aren't prices elastic,
              why trust good-will value?
              <br />
              <br />
              "Fentanyl up 130%" over what time period? is it at least an
              average of a longer term than... whatever, than monthly.
              <br />
              <br />
              Viruses isn't the only thing immigrants bring with them, but also
              morking age populous. Social security, your entire lives to sve
              but forced value (last-trade), not price
              (concurrentable-currency), stability (depositary state lands or
              vault-share)?
              <br />
              <br />
              anger management, "eric adams got everything he had from his
              parents,'" and got 7% of the vote, rcv ruins 1/3 majority.{" "}
              {/** megan mcglovern*/}
              <br />
              <br />
              Once some guy asked me if my&nbsp;
              <a href="https://carducci.sh">bill feed that now is events</a>
              &nbsp;(but now have to build my own paytech to boycott credit), is
              like Quora. I’ve been using that every day for a month now, to my
              surprise! Good luck!
              <br />
              <br />
              Russell Stuart ('Beverly Hills guns' shop): "Not woke about public
              safety, police just revolve criminals," because the current laws
              for non-criminals, but slandered character evidence expert save
              face malpractice jury. I don't even want to touch one, but I will.
              Might not.
              <br />
              <br />
              "homeowners" according to the right is 1/11 down, surrendered
              freedom of Savers that actually have the bid-money
              <br />
              ableist, sexist and racist? no, you are presumptive for correcting
              my scientific use of retard and faggot tool
              <h1>
                LEADERS DO NOT MAKE JOBS FOR PEOPLE YOU FUCKING FAGGOT, THEY
                RETIRE THEM
              </h1>
              <Cable
                style={{ height: "260px" }}
                onError={handleScollImgError}
                //img={true}
                src={
                  this.state.noyoutube
                    ? ""
                    : "https://drive.google.com/file/d/1RZDCfMA4A5EIdywTK_VTfRXmL27sBehr/preview"
                }
                float="right"
                title="Stinchfield (Newsmax) - Gary Rabine"
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={!this.state.oldecon ? 0 : this.state.scrollTop}
              />
              "I run a company, I can’t hire people, we increase our wages, we
              are dealing with a supply of workers not coming back to work,"
              2.8m continuing claims is back to normal. The reason you can't
              operate isn't the fake pandemic nor vaccines, but because of
              implausible landlord use input costs, and surrendered freedoms of
              others by expiration and estimates. 2/3 spending is private. I
              will pour gold down your throat.
              <br />
              <br />
              Economic growth, jobs, in the mid or long term, reality not what
              he says, pension fixed income, do you see an economic recovery?
              That is forced corporate investment you fucking market commie mark
              levin. Hey you paid into the social security system, your entire
              working life, but the principal amount if value fixxation, not
              concurrentable price. It is forced investment in equities, market
              concentration away from your own equity, at fake prices. Mark and
              Bernie calls this, reality, but accountants are just lying.
              <h2>but most of all, mv1===mv2==GDP/yr impossibly</h2>
              <h3>m2 = mutual funds + checking</h3>
              “Give people what they need to reduce crime and sexual assaults.”
              You yourself need to have your tongue cut out
              <Cable
                style={{ height: "360px" }}
                onError={handleScollImgError}
                //img={true}
                src={
                  this.state.noyoutube
                    ? ""
                    : "https://drive.google.com/file/d/1H_4qcCyO28ieMUJimMi15HLmqVhzY2p1/preview"
                }
                float="left"
                title="Stinchfield (Newsmax) - "
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={!this.state.oldecon ? 0 : this.state.scrollTop}
              />
              <br />
              <br />
              "Own your own journies," and don't sellout surrendered freedom
              (EULA, third party donee beneficiary claimable) your future labor
              or from other people measured by labor-equity, for implausible
              landlord use and implausibly-deniably-purposeful repo-cycle kept
              down payments $12k/64 debt/cash (new).
              <br />
              <br />
              Price stability not value stability non-concurrentable, last
              traded. The accountants are lying, treasury shares and expiring or
              esptimated claims by neighborhood last trades non-concurrentables
              value not prices, settled. Living in reality, the accountants are
              lying! What does apiration invest in to get 5% APR? I'm sure it is
              just pizza delivery money. $12k/64 debt/cash (new per person/yr).
              Now actuaries over cohort size becoming a pandemic of excess
              deaths age standardized?? for the very insurance fraud they
              non-academically search for, evidently to shadenfraude and
              agitprop these basis rate errors.
              <br />
              Republicans/Libertarians are for market communist/corporate
              flaccid loss rent seeking and actual labor shortage demand,
              Democrats only public 1/3.
              <br />
              <br />
              <Cable
                style={{ height: "360px" }}
                onError={handleScollImgError}
                //img={true}
                src={
                  this.state.noyoutube
                    ? ""
                    : "https://drive.google.com/file/d/1l9_Z80g6jQv7kDPvOz5LRZBzcLXxnCVM/preview"
                }
                float="right"
                title="Stinchfield (Newsmax) - Trumoy bear"
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={!this.state.oldecon ? 0 : this.state.scrollTop}
              />
              "If everyones income rose in line with inflation would it matter
              if inflation were 100% or even 1000%?"
              <br />
              1. Not only would Savers, labor-equity and retirees be
              counterproductively-depreciated and trust-built against, abetting
              the actual labor shortage of the new-labor, but even the new-labor
              doesn’t gain in productivity, nor ease-of-life, when their wages
              themselves keep up with input-costs. Input-costs are inflation of
              materials, PLUS homes, equities, bonds, profits and
              intermediate-labor, that of which *has the transitive-property of
              price-elasticity, and such is actually at a constant level-rate,
              thru a time-lens, when discounting ALL input costs* (which best
              measured by per capita/average). In other words, real GDP/p per
              hour growth only isn’t $0 nor 0%/yr+ of m2 mutual fund+checking
              velocity per year, because they are a devious
              accounting-disparity! We all do pay the same actual-things, but
              the price and durability is the only change in GDP or velocity per
              year.
              <hr />
              2. **These costs are borne by all of us that must accept the
              producer or contractor market-ask (RFP)**: *when you yourself
              cheat the system, or the system cheats you in a malfeasant or
              complicit saveface-malpractice, way*. Or more commonly-known as,
              “you get what you put in, actually,” and it is useless
              price-elasticity of more money for the same things, especially
              when it isn’t just a plunder of resourced, but others’
              labor-equity unvalued for actual-labor deficit, by
              market-depository certificates that is currency share-split of
              state lands, as made up today.
              <hr />
              3. So, these aren’t accounted for in poverty, gini, nor discounted
              in real GDP/p per hour, but rather the very opposite!
              <hr />
              4. Although free rider mutable tax or 40% debt spending is quick,
              it is quick for something without customers and if it does have a
              natural market it is useless price inflation for the same input
              cost/intermediate good, from outside the market.
              <br />
              <br />
              "You bet," is a negative sum for you Bub, that isn’t good for
              anybody.
              <br />
              <br />
              Greg Kelly: "Who is the tech booting? Trump and his supporters,
              whom all have jobs full-time. Trump is not the only one to get big
              things done." All he did was tariff and got no trade secrets
              virtuously trust built too broad.
              <br />
              <br />
              Lindsay M. Keith, rent-seeking-plant: "the left will tell you the
              economy is booming, but inflation is higher," bitch, input costs
              includes equities, that does have a transitive-property of,...
              itself, input costs.
              <br />
              <br />
              "...growth & productivity," is an oxymoron, because durable trade
              and deflation, discounting all material and input costs, IS
              productivity, the reciprocol of time-lens of GDP/p per hour, real
              nor actualized (including bonds, expiring premiums, profits,
              intermediate labor trusts and unions or scripts barrier to vault
              share currency depiositary competition, nor homes outright, just
              rental-income implausible landlor use userers, ACTUAL labor
              shortage borne demand).
              <br />
              <br />
              "Job report 1/2 of projected growth, labor crisis, not a job
              crisis, we do not have a shortage of jobs," why Adam,
              republic-market-communist-expert-jury-gentrification-plant?
              "People were paid to stay home. People need to go back to work,
              there are 10m [with free rider mutable tax of demand-less markets
              by the top-right] jobs[ to surrender your hours over surrendered
              freedoms EULA third party doneee beneficiary share split in
              accrual false expriing bids or estimtes sold, by laundered
              transitive-property of input costs burdened by your customers and
              employers or your co-signatories' customers and employers,
              imposibly otherwise is necessarily forseeable as NO-Surrender is a
              standard clause in contract making, because YOU are therefore
              liable for entrapping in a contract of which yhour victim is of
              partial voluntary consent but duress]." Adam Anjieski: "Some
              trading up and that is a good thing, employing government by
              regulation." that is an oxymoron, you can't regulate into a
              business, you are obfuscating two different actions.
              <br />
              <br />
              "This isn’t like smallpox nor polio disease where you cannot
              spread it afterwards, that doesn’t appear to be the case." David
              Yost. prevalence of paralytic-bacteria with
              non-all-inclusive-artifact is of basis from sewage with negative
              correlation, just see&nbsp;
              <a href="https://www.google.com/search?q=india+life+expectancy">
                India
              </a>
              , sewage catching up with the dog-tail wagging
              cohort-size/average-age-at-death.
              <br />
              <br />
              SOCIALISTS WOULD NOT REAPPROPRIATE LABOR EQUITY. cut out your
              tongue AG
              <br />
              <br />
              the people arent' represented by the states individually, nor the
              congress, there isn't a choice for people to turnout. "missing
              vaccine appointments, and therefore, needs to be mandated."
              <br />
              <br />
              <Cable
                style={{ height: "280px" }}
                onError={handleScollImgError}
                //img={true}
                src={
                  this.state.noyoutube
                    ? ""
                    : "https://drive.google.com/file/d/1oWynn7OfuC0Vj_AYX0sLVIVl9aeThUSC/preview"
                }
                float="left"
                title="Spicer & co (Newsmax) - "
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={!this.state.oldecon ? 0 : this.state.scrollTop}
              />
              “It doesn’t matter that your wages intermediate labor goes up when
              your other input costs rise.”
              <br />
              <br />
              testing mandates Red states fighting for the american worker as a
              FLOP OVER RELIGIOUS PROOF. PUT ME IN, COACH!
              <br />
              "How does inflation affect?"
              <br />
              Inflation does count real, poverty and gini, excluding value last
              traded, but including more concurrentable material, but all
              inclusive of input costs, and GDP/p per hour (in a stasis vacuum
              for exogenous, fixed).
              <br />
              <br />
              Socialist democrats don’t think so far ahead, we’ll if the repo
              cycle kept down payment is foreseeable that is intentionally
              surrendering the freedom of others as the contract-ask (RFP)
              <br />
              <br />
              "You buy it in advance," but bills expire and are surrendered
              freedom of savers, it would take 44 years for income to pay debts
              that are counterfeit in contract. WAIT FOR CONSUMERS YOU AFRO
              BITCH - REPUBLICANS WOULD NEVER REPLACE DEBT INVESTMENT WITH
              1-LEVEL BOARD MAX-ROYALTY PROFIT FOR THEY PROFIT ON
              COUNTERPRODUCTIVITY, AS INCPUT COSTS AREN'T TO ACCOUNT FOR ALL
              HOMES, TREASURY SHARES OUTSTANDING, FINITE PRODUCER DURESS WITHOUT
              INDUSTRY VARIABLE CONSENSUS SCIENCE, INTERMEDIATE LABOR TRUST,
              EQUITIES MARKET CONCENTRATION, PROFITS NOR BONDS SURRENDERED
              FREEDOM THIRD PARTY DONEE BENEFICIARY CLAIMABLE (EULA).
              <br />
              <br />
              "Aren't you in the credential guys?" When you order a dug for a
              patient? LET THE PATIENT PAY FOPR IT DOUCHE, "SET PRICE" TO THAT.
              <br />
              <br />
              "Catch this thing less dangerous than we had before," This is the
              FIRST asymptomatic testing, onloaded by an excess deaths age
              standardized without per capita/average, cohort size of 1942c 78
              boomers' wave. "Fear is becoming the big virus now. If labor union
              want to open their big mouth, make sure the board is vaxxed."
              <br />
              "Temperatures, tests often, be safe!"
              <br />
              <br />
              "Waiting for my free ticket to FL 1/4 illegal working age share."
              <br />
              “I think someone has a plane."
              <br />
              <br />
              "No one can control," if you can tort for obvious hazards, I can
              too. 65+ 2.8m continuing claims and most disability
              <br />
              <br />
              "Go where virus has hurt the most, bring resources where it is
              most hit," but wouldn't they have demand to buy it? where do you
              think the labor for that area comes from? They will be cheap.
              Expiring claims wouldn't sign up rollover.
              <br />
              <br />
              <Cable
                style={{ height: "280px" }}
                onError={handleScollImgError}
                //img={true}
                src={
                  this.state.noyoutube
                    ? ""
                    : "https://drive.google.com/file/d/1wH8beNETJPPVHD7hpBF1LfABOsp8Wmwu/preview"
                }
                float="right"
                title="Chris Salcedo (Newsmax) - Dr Robert Malone on stints"
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={!this.state.oldecon ? 0 : this.state.scrollTop}
              />
              No matter who you are you have legal right to see and understand
              the data
              <br />
              “Hypertension and put you on treatment.” Leave me the fuck alone,
              I am disabled and can’t run but that should be your first
              treatment
              <br />
              <br />
              "No we don't we don't even know where the money is in the first
              place. keep tax cuts permenant, unlock energy trade secrets and
              trust, ppp would make the problem tremendously worse."
            </div>
            <br />
            <br />
            <button
              style={buttonStyle}
              onClick={(e) => {
                e.stopPropagation();
                this.setState({ solution: !this.state.solution });
              }}
            >
              <h3>solutionary-consensus-science</h3>
            </button>
            <br />
            <div style={setting(this.state.solution)}>
              common sense DOESN't know better, galileo, redi, rcv and
              actuaries. STATUTE OF LIMITATIONS NOR RACKETEERING PLEA DURESS IS
              NOT WITH STANDING! DESIST!
              <br />
              <br />
              <Cable
                style={{ height: "280px" }}
                onError={handleScollImgError}
                //img={true}
                src={
                  this.state.noyoutube
                    ? ""
                    : "https://drive.google.com/file/d/1QMTepGOqPvrZx6UwkHFgli_L7dSoNlDR/preview"
                }
                float="left"
                title="Chris Salcedo (Newsmax) - Lee Zeldin conserving bonds homes equities and intermediate labor but not discounting in input costs"
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={!this.state.solution ? 0 : this.state.scrollTop}
              />
              "Take away the means to fight this virus," like it injects DNA
              into cell ratjer be byproduct prevalence nor cause,
              non-all-inclusive-artifact, to boot.
              <br />
              <br />
              Productivity is less jobs, it doesn't miss the mark of jobs to be
              created by per capita/average population growth. 100m workers
              doesn't count chores nor innovation, just flaccid gorporate,
              government or gerontocracy. Implausible use and surrendered
              freedoms (EULA) means borrowers loitering is mine. I will shoot.
              "Let individuals have freedom to invoke duress over finite businss
              over consennsus science permit by industry variable rights."
              <br />
              <br />
              "If everyones income rose in line with inflation would it matter
              if inflation were 100% or even 1000%?"
              <br />
              <br />
              Not only would Savers, labor-equity and retirees be
              counterproductively depreciated and trust-built against, abetting
              actual labor shortage of new labor, but even the new labor doesn’t
              gain in productivity, nor ease of life, when their wages keep up
              with input costs (inflation of materials, plus homes, equities,
              bonds, profits and intermediate-labor), that which has
              transitive-property of elasticity and is actually at a constant
              level-rate thru a time-lens when discounting ALL input costs, best
              measured by per capita/average. Although free rider mutable tax or
              40% debt spending is quick, it is quick for something without
              customers and if it does have a natural market it is useless price
              inflation for the same input cost/intermediate good, from outside
              the market.
              <br />
              <br />
              Prosecuting by admitted testimony as evidence of reasonable doubt,
              that it is injecting DNA into cell but not mitosis of non
              all-inclusive-artifact
              <br />
              Already infected cell
              <br />
              <br />
              "Why does DeSantis keep Florida at almost the bottom of 50 states
              in terms of the weekly and maximum unemployment insurance rates?"
              <br />
              <br />
              Unemployment 2.8m continuing claims is useless price inflation,
              half being 65+, of free rider mutable markets. Instead of bailing
              out, maybe he intends to keep debt “investment” implausibly
              deniably as impossible, requiring 44 years of current income
              servicing current debt for our children to plausibly pay. Free
              rider mutable tax and 40% debt spending 1/3 public is surrendered
              freedom (EULA, third party donee beneficiary claimable), anyway.
              <br />
              <br />
              "Does government spending increase inflation?"
              <br />
              <br />
              Nick Carducci - Chairperson at Saver Party (2020–present)
              <br />
              Only does government spending increase inflation, let alone
              malfeasance over operational costs, is when they profit themselves
              over free rider mutable tax, or 40% debt spending, both as money
              from outside the natural outlay market or free rider immutable
              receipt scope. It also increases the cost of living, that is also
              an input cost, by homes, equities (market-concentration), bonds
              (surrendered freedom, EULA) and intermediate-labor (trust).
              <br />
              <br />
              Justice bail state vic and surrender freedom by co-signatories’
              customers and employers by transitive-property of input costs
              Endless cycle of jail to the streets is because you trust build
              scripts for Walgreens, then animal test instead of open source
              ingredient lists, likely exasperated by bond conflict of interest
              receipt method
              <br />
              <br />
              Dr. Robert Malone (40 years to saveface malpractice): "vaccine
              would not stop infection replication and spread of omicron."
              mitosis happens 1/day, that isn't production of virion from
              "infection, replication & spread." Therefore, you sin sacrifice
              nuts will be excused for thinking it is an evolutionary trait
              weapon.
              <br />
              <br />
              manslaughter cannot exclusively be remanded for, except: to
              suppress intentional dangers in the future, not state vic double
              jeporady, or removing false sentencing. Character evidence is not
              with standing. Truncated sales tax geohash/mo sccounting
              software/congress from paytech, allowed to spoof to protest
              precinct, cannot on device end to end before login.gov repeat
              offenders, to ween cops off conflict of interest saveface
              malpractivce expert jury net loss by bonded outlay of Savers'
              surrendered freedom (EULA) by third party doneee beneficiary
              claimable and co-signatories' customers and employers by
              transitive-property of input costs, including homes, equities
              (market-concentraction), profits, bonds (surrendered freedom,
              EULA) and intermediate-labor (trust). Or else war has grounds in
              international law. 40% debt spending for war is a WAR CRIME, on
              the other hand.
              <br />
              <br />
              "we are all accountable to our own acterions," to whose account?
              sin sacrifice for the greater good? Actuaries disagree that the
              pandemic is not just population size meeting life expectancy,
              virion is not even all-inclusive-artifact.
              <br />
              <br />
              We all have jobs, so what can we do." $12k/64 debt/cash (new, per
              person/yr) is retarded, I can smoke weed.
              <br />
              <br />
              Red and Blue is non-exclusively patriotic, well,at this point we
              are disenfranchised. White is
              non-voter/scientific-consensus/anti-rent-seeker
              <br />
              <br />
              <a href="https://moldmask.co">heat</a>/(
              <a href="https://magnate.company">density</a>)
              <h2>A net loss, competing with consumers, a dead-weight</h2>
              <h3>
                over productivity of output per marginal propensity demand
                derived of actual labor, not dead weight or free rider mutable
                tax from outside the market itself, or declaring net exports for
                foreign share split state park lands as 'merica first, nor fines
                bribed for bond index funds of TSY debt shown differently to the
                borrower precluding written down to reverse amortization of
                full-correction, (cash/debt)*income every year back, nor visa
                fees for said bribes and laundering and prohibition of trade,
                later claiing growth in FL GDP/p not working age illegals 1/4
                share, but non-mask bacteria-catchers.
              </h3>
              Out of a job, write-down a trauche o' pension, all those who are
              excluded to tranche social security, now most disability is payee
              65+ and continuing claims 2.8m/2, meanwhile, we work 10x/boomer
              c1970 and 6-1000 hospital beds per person while it is verifiably
              doesn't have to be productivity by real GDP/p per hour with the
              preclusion that people are to be forever rental-serfs and not
              discounting homes, equities, profits, bonds nor intermediate-labor
              in gini nor poverty as well.
              <br />
              <br />
              Inclusion in medicare doesn't preclude standing here and grounds
              to protect other patients," discrimination in the false bid pool
              pot is illegal to tranche your needs by labeling under $25k day
              traders as pattern and problematic rather than your ask-to-bid
              market maker spread before billboard/telephone price, doing.
              <br />
              <br />
              "If big pay raises are coming to employees in 2022, what effect
              will they ultimately have with the increased inflation and
              companies slashing positions to make room for the pay increases?"
              <br />
              <br />
              Nick Carducci policy-drafting software-developer & microeconomist
              <br />
              Making room for pay increases by slashing employment per person is
              an interesting phenomenon, making skilled labor a superior good,
              for input requirements beyond a changing preference alone. Prices
              are elastic, however, remaining constant, actually in velocity per
              time period, per person, as GDP, when discounting all the costs of
              life, including material-inflation, homes outright, bonds’ EULA
              surrendered freedom, equities’ market-concentration, and
              intermediate-labor with corporate flaccid profits. So, wages have
              the transitive-property of allowing the producer-ask to request
              more from the demand-bid and all of actual-labor-based-demand.
              <br />
              <br />
              precluding sections by non-exclusive byproduct as opposed to
              eviolutionary weapon, is not your purview, neither by your
              excluse, "to save hospital beds," especially when it was due to
              your malfeasance, complicity and even profit-involvement from
              public insurance? Student debt? what more teachers other than
              treacherous ones did you, "invent?"
              <br />
              <br />
              Double jeopardy and character evidence cannot be extrapolated,
              albeit it can be predicted, by reason of variance, shuffling
              wouldn’t even be enough. Do NOT preclude prosecutions
              double-counting. state vic and saveface malpractice is just
              racketeering for bond index funds, operational-inflation integral
              relative to relative time-lens absolute rates of changes (the
              world is your vacuum)
              <br />
              <br />
              "Covid no longer presents the 1942&nbsp;
              <a href="https://humanharvest.info/polio">boomer-78</a>
              &nbsp;emergency it once did." Actually, sir, it never did. You are
              also holding productivity by input costs, upsidedown, in your
              time-lens.
              <br />
              What if the isolated variant of concern are people whom are
              depleted of semen? How will I make customers happy to&nbsp;
              <a href="http://trajectory-inc.com/about-us/#team-members">
                prevent covid transmission
              </a>
              ?
              <br />
              <br />
              "Pass a rule to isolate because they are infected with something,"
              not before proving that evolutionary trait can be such as well as
              cause, rather than something in the room or the weather, proving
              no correlation other than the expgenous-hypothesis one.
              <br />
              <br />
              U.S. Supreme Court Justice, stating as fact: "700k got it today
              (asymptomatic is the vast majority of non-artifactual cases),
              hospitals are overflowing (because of laborless-input-costs of
              expiring claim premiums, not even of Tranquil and voluntary trade
              but to predilemma-duress before industry-variable non-saveface
              malpractice expert character racket 'evidence'), it is worse than
              diptheria (asymptomatic testing is new )." Gallileo would be
              booted off twitter before scientific consensus to desist. Fuck
              your sin sacrifice excep/dejections
              <br />
              <br />
              "closing facilities," doesn't just "deprive citizens of
              healthcare" by effect but integrally. expiring claim false bid
              pools DO NOT increase demand,&nbsp;
              <a href="https://qr.ae/pG6zQu">just labor-less demand and bid</a>,
              nor does closed-source ingredient lists &&&nbsp;
              <a href="https://teapharmacy.party/drugs">
                script prohibitions of trade
              </a>
              , input costs of torts for without disclosure and exorbinant by
              false bid pools expiring third party donee beneficiary claimable,
              laundered. Loitered if contract by collateral.
              <br />
              <br />
              U.S. Supreme Court Justice, entertaining: "Force to take
              medication, get sleep, do exercises every day.” I don’t care what
              you do with your body, but when an evolutionary trait that is
              cause but not byproduct starts attacking me, you NEED to desist,
              for your own good, because I will behead you as unvaxxed in
              advance.
              <br />
              <br />
              <Cable
                style={{ height: "280px" }}
                onError={handleScollImgError}
                //img={true}
                src={
                  this.state.noyoutube
                    ? ""
                    : "https://drive.google.com/file/d/1j5FX2ZtOg3cRdnr_7AWgyZZCOmoFIpCS/preview"
                }
                float="left"
                title="GBNews NHS shilling unreasonable anger management professional solutions, behind a scripted trust and for drug war"
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={!this.state.solution ? 0 : this.state.scrollTop}
              />
              “Unreasonable depression.” Shilling help in doctors and
              professional help. You really shouldn't be changing your chemical
              nature. the doctors saveface malpractice and are SELKING YOU
              SOMETHING, harm, dependence, placebo not with standing.
              <br />
              <br />
              Stop stigmatizing people who like to party, nerd. Get a lobotomy
              you are showcasing too much human emotion to natural reason. Like
              finding a literal longstanding web of lies in economic-accounting,
              coming from a notion of altruism.
              <br />
              <br />
              apparently you cannot manage money and permit 40% debt spending to
              be called, "tax payer funds," nor $12k/64 (new, per person/yr)
              will be "paid by children," or repo-cycle kept down payments
              lauyndered isn't surrendered freedoms of others (EULA,&nbsp;
              <a href="https://saverparty.xyz">Savers</a>). expiring claims are
              retarded, third party donee beneficiary claimable of
              co-signatories' customers and employers by transitive-property of
              input costs. PAY ME TO BAN ME OR INDUSTRY-VARIABLE DESIST WITHOUT
              CHARACTER EVIDENCE/DOUBLE JEPORADY.
              <br />
              <br />
              "by withholding money we are not controlling who you hire," money
              controls what efforts are put forth, war bonds are a war crime
              implicitly reemoving virtuousity of the war.
              <br />
              free rider mutable tax is faster than demand actually wants, and
              is pure inflation of input costs, too.
              <h1>
                time has no bearing on limiting rights you dastardly-fucks
              </h1>
              {/**Brian H. */}Fletcher: "subject to medical or religious
              excemptions." Aren't we relitigating the mootness of religion?
              Your current exhibited evidence of injecting DNA into cell and
              then citing mitosis of already infected in a lab as contageon. It
              only comes out after bacterial-reinfection, logic dictates in
              Darwinian fasion: bacteria is excrement spittle/feces FOR REASON
              TO PREVENT INFECTION. Expiring premiums does not cover nor
              provide, just abetts surrendered freedom (EULA) of Savers in
              invoices, third party donee beneficiary claimable, and IS
              surrendered freedom of co-signatories' customers and employers by
              transitive-property of input-costs, beind of all principals of
              life, not just monthly implausible use competing with consumers
              duress. The point of the supreme court is to adjunicate new
              questions of law, stop appealing to an unmade higher power.
              "Provider discrimination of price," without industry-variable jury
              of without character, precedencial (nor double jeporady) is
              involuntary servitude by duress and moot. You really need to
              understand natural law before state victimized law and how to
              racketeer actuary-=table trade secrets, and trust saveface
              malpractice scared doctors intead of statistician/actuaries whom
              understand population growth, and how basis rate fallacies can
              prove a null hypothesis, by desistation (false negative) or
              conviction (false positive). "Patient health and safety is up to
              conflict of interest net loss bond profit saveface malpractice
              jury experts, infection control (allegedly) is long in the tooth
              as required. I am scared for the standing of this court. Methane
              invisible fires in a crowded theatre, things of that nature. We
              have forgone price&nbsp;
              <a href="https://qr.ae/pG6zln">stability</a>
              &nbsp;for&nbsp;
              <a href="https://qr.ae/pG6zqO">value stability</a>
              ." "Psychiatric residential treatment institutions," are
              involuntary and a racket. You can’t involuntarily commit people on
              assumptions nor in jail without evidence. emotions are natural,
              you fucking lobotomized non-compliance like a fucking pussy who
              should die, Brian H. Fletcher. "Rate of turnover in Healthcare
              industry is 25%(/yr?)," that is because tuition and surrendered
              freedom of others (EULA) of debt.
              <br />
              {/**scott */}Keller: "Our department does not allow agencies to
              act unlawfully even if it is towards desireable ends." Law permits
              desireable ends if they are to be lawful but malfeasance exists! I
              can start a war with how ridiculous you all are.
              <h2>You can fucking stick your 'power' up your ass</h2>
              <h3>I'm the captain now</h3>
              "New facts on the ground. Moved to an endemic." Bitch, you can see
              the population growth in actuary tables, excess deaths age
              standardized isn't measured against per person. SIN SACRIFICE
              DOESN'T WORK RCB YOU INSANE CUNT. I wish you were dead.
              <br />
              "vaccines are single most effective," in stopping byproduct
              non-exclusive nor necessarily-incidence-artifact of
              bacterial-infection. YOU MAKE UP THE STORY THAT DNA INJECTED INTO
              CELL.
              <h2>
                If you can make virion in a lab, not just find it acter you
                situate the test for it, I will be on your side wishing to
                mandate vaccines for all disease.
              </h2>
              vaccines are like a rooster claiming credit for the rising Sun or
              longitudinal rate of change rather than&nbsp;
              <a href="https://www.google.com/search?q=india+life+expectancy">
                sewage
              </a>
              .
            </div>
            <div
              style={{ color: "lightgrey", backgroundColor: "rgb(32, 22, 11)" }}
            >
              <h1>
                I don't care what you do with your money or time. you cannot
                discriminate before industry-variable consensus-science
              </h1>
              Prelogar: "The court considers political consequences as abscuring
              precedence. Does it have economic, diservice separation of
              powers," CONGRESS HAS NO BUSINESS EXCEPT IN ENFORCING MVP BY
              INDUSTRY VARIABLE JURY 11/12 without more than 1/12 responable
              doubt. "Some people are protected for deeply held religious
              beliefs," after saying the byproduct of bacterial-infection is an
              actual danger to others? you have to be kidding me? We are often
              producing virions as debris without being sick. the microbiome is
              quintillions of centimeter scale of our world. Encouragement is
              not discrimination. It is either required by multiple of 11/12
              industry variable jury, shuffling notwithstanding, or it is
              certified, by saveface malpractice experts. It's ok. Don't be
              complicit in the error. Accidents are part of the trade, they
              aren't tortable.
              <br />
              <br />
              Regulators cannot force hard hats, side effects notwithstanding.
              They can only suggest and force warnings.
              <br />
              <br />
              Immunocompromised should use fetal cell line vaccines, not when
              prone to oncogenic-dysregulation with excess antibodies for
              mRNA-sporing-graft, if they believe the count isn't merely a
              byproduct of another cause.
              <br />
              <br />
              Precedence is a poor argument. mortality has lessened over the
              years due to sewage improvements, and matches paralytic polio per
              capita to &nbsp;
              <a href="https://www.christopherreeve.org/living-with-paralysis/stats-about-paralysis">
                multiple sclerosis
              </a>
              .
              <br />
              <br />
              Justice Socamayor: "Testing." That is mostly asymptomatic and
              non-exclusive, constituting 5% of&nbsp;
              <a href="https://www.fda.gov/media/144245/download#page=42">
                all-incident-byproduct
              </a>
              &nbsp;cases (by symptom-testing-regime). That is null hypothesis,
              a symptomatic-testing regime is free rider mutable, STOP
              RENT-SEEKING AND FORCE OPEN SOURCE, SAVE THE ANIMALS FROM TESTING,
              STOP PROHIBITING NO-SCRIPT TRADE AND CURRENCY COMPETITION VAULT
              SHARE. Locking me up for 13 days in Carrier for saying rollover
              insurance to an orthopedic surgeon's secretary. FUCK OFF AND DIE
              'JUSTICES' NO ONE CARES ABOUT WHAT YOU THINK
              <br />
              <br />
              "Our view is that the harm has existed," 2020 saw no increase in
              deaths nor hospitalizations, per capita (a.k.a. 'on average') and
              discounted by sewage. "
              <a href="https://humanharvest.info/polio">
                The 'pandemic' is 'dynamic' and 'constantly-evolving
              </a>
              .'"
              <br />
              <br />
              in the actual science, it is only mitosis of already bacterially
              infected cell.
              <br />
              <br />
              physically hazardous agent is a weapon, unless you are&nbsp;
              <a href="https://courses.lumenlearning.com/microbiology/chapter/spontaneous-generation/">
                mistaking
              </a>
              &nbsp; forest (byproduct) for the trees (cause)
              <h2>
                "so prevalent, so much harm," IT ONLY COMES OUT AS BYPRODUCT
                BITCH
              </h2>
              congress doesn't have the consent of the plural majority.
              <br />
              Prelogar: "Deadliest pandemic in human history, bacteria is acute,
              workers acute." It is made up that virion inceminates cell, rather
              than comes out. Desist the precedence in calling it deadly. You
              are making shit up to fit your hypothesis! Antibodies are merely
              garbage collection! hospitalizations still happen without
              significance from normality. Solicitor General, you should die.
              You are a danger to others.
              <br />
              <br />
              "Anything that affects millions of lives is a major question
              issue, where laws countervail and/or are ambiguous as it pertains
              to precedence and current events. I haven't heard a peep." Says
              the rapist "justice." IT IS YOUR HONOR! An industry variable jury
              to desist would vote differently than one to convict, or permit.
              "We haven’t used the major question doctrine out of context." Who
              fucking Cares douche that is meaningless If there is a question
              you have to raise it or you are complicity malfeasant. What are
              you, fucking a retarded rapist?
              <br />
              <br />
              all ages and conditions. MY SLURS ARE OF NO DANGER TO YOU YOU
              CUNT.
              <br />
              <br />
              "Government cannot regulate the workplace," are you fucking
              kidding me? duress is voluntary trade and Tranquil? closed
              warnings of the workplace for workers' comp fraud is ok to you
              afro-tool-judge?
              <h2>the chicken or egg field of science, doesn't matter</h2>A
              supreme court cunt, falling for basis rate fallacy, null
              hypothesis by prevalence-cause-byproduct: "Those numbers show
              omicron is as deadly and caused as much disease as delta did."
              Actually, prevalence doesn't mean cause, and aggregate&nbsp;
              <a href="https://www.cdc.gov/flu/weekly/overview.htm#:~:text=5.%20Mortality%20Surveillance">
                pneumonia
              </a>
              &nbsp;and deaths are insignificcant thru covid, and MS is
              paralytic polio, you have cured nothing just wasted a century of
              Saver funds.
              <h1>
                This fucking supreme court, deciding a, duress, for, National
                Security, in business, over propensity, to quit? Safety isn't
                even admittedly their, 'priority!??!?!'
              </h1>
              "Everyone living their normal lives has been effected by this," no
              just your malfeasance, the excess deaths were overreacted for
              being not standardized for cohort size, just age. You don't
              understand 78 is hit a wall, and you are on the Supreme Court? I
              should be the supreme court, evidently.
              <br />
              <br />
              "Have to stay home with children instead of them going to school."
              That is the same thing just keeps kids from earning wealth && you
              get the same work hours, just instead over time, not a comparative
              advantage, totally redundant. THOSE TEACHERS CAN BE DOING
              SOMETHING PRODUCTIVE AS WELL, instead of just watching kids
              temporarily so the parent can slave for the implauysible use
              landlord and competing with consumer insurer expiring premiums for
              pure harm of raised bid-capacity for the SAME ACTUAL CONSUMPTION
              with ACTUAL LABOR SHORTAGE-BORNE DEMAND. THE ONLY JOBS ARE
              SURRENDERED FREEDOM (EULA) supreme court is filled with white
              collar criminals. There are many jobs here because there is
              $12k/64 debt/cash (new). Law clerks aren't 'yours,' you fat
              gluttonous slob.
              <br />
              <br />
              Fails to do something for employees doesn't make liability of the
              employers if the worker is provided the information. Fucking
              expiring claim pool frauds.
              <br />
              <br />
              “It is up to us, the vaccination policy in this country?” Asks a
              FUCKING SUPREME COURT JUDGE you have to prove virion inseminates
              the cell and Inst byproduct to add it you your minimal viable
              product. Don’t you handle Tranquil and voluntary trade you fucking
              bitch?
            </div>
            <br />
            <button
              style={buttonStyle}
              onClick={(e) => {
                e.stopPropagation();
                this.setState({ riskvarion: !this.state.riskvarion });
              }}
            >
              <h3>risk of virion, logic</h3>
            </button>
            <br />
            <div style={setting(this.state.riskvarion)}>
              If it stops the virion, and it causes rather than byproduct
              warning mechanism/placebo non-exclusive, it stops it (breakthrough
              isn't even a modicum of prevalence, but it is byproduct and
              injecting DNA into cell is&nbsp;
              <a href="https://youtu.be/Weqb9KrQ-TU?t=22">MADE UP</a>, in fact,
              prevalence of breakthrough likely matches immunnocompromised
              prevalence, meaning marijuana drivers are just as likely to crash
              as others, but you can't do maths as regulator).
              <h1>Apparently, a violent insurrection has grounds, now.</h1>
              Working outside can bring it elsewhere. YOU AREN'T COUNTING ALL
              INCIDENCE CASES, 5% of all cases, if you did you would see
              vaccinations haven't don't anything to lessen illness, just
              non-exclusive debris of bacterial-reinfection.
              <br />
              <br />
              High risk workplaces are actually determined by the existence of
              the virion, the high risk is not the cause but everyone is. Debris
              is not dangerous, stop it with the saveface malpractice expert
              jury, douchebags.
              <br />
              <br />
              "Arthur Kaplan: "You pay more and not get life and health
              insurance at affordable rates," the life and health insurance are
              a stick in itself, as it is expiring premiums.
              <br />
              <br />
              Non-exclusive byproduct dissolution is not affirminively cause,
              health ethicist is misguided by what is affordable and accurate.
              Prevalence means debris-artifact as well, not just cause, and here
              it is 5% of all-incidence, non-exclusive byproduct, warning
              mechanism or placebo notwithstanding, garbage collection
              dissolution from blood clot potential, as bacterial-reinfection is
              excrement in feces/spittle.
              <h1>Ms is paralytic polio and covid is 1942 boomers</h1>
              Financial burdens that the disease imposes, no the invoices and
              expiring premiums is most of the cost, not actual value without
              that prisoners’ dilemma of surrendered freedom (EULA) of
              insurance, public nor private. Doctors will never sign up for it
              and life insurance never if redistributed right away or is not
              just an investment/commercial bank by another name.
              <br />
              <br />
              Privacy by sekur server
              <h1>was hoping to drain the swamp,</h1>
              <h2>
                but 20%+ trust ppp for expiring claims by 40% debt spending
              </h2>
              <h3>
                blackrock corporate implausible landlord use beyond 5 units or
                30 days, in addition to boomers 20x/millenials rental-income
              </h3>
              <h1>
                your entire life to save, elder social security forced corporate
                flaccid profit investment
              </h1>
              <h2>
                net export selloout for foreign share split state lands is
                retarded, not america first nor humane
              </h2>
              Grant Stinchfield, rodney davis (illinois) 'america first' retard
              by selling out net export for foreign state lands share split of
              third party donee, actually or by accrual withdrawalable by
              counterfeiting market makers (treasury shares not counted in
              outstanding shares on the evil accountant licensing boards'
              subjects'/grunts' books, per share counts) with unfair advantages
              (13D-retail uuid anon disparity, pattern day trading cap under
              $25k 3/wk). "nobody disputes republicans prosecute the law." Rot
              in hell grant. cops don't care about whitre collar crime because
              they are paid by net loss bonds. that's why 1/4 $4t/yr debt
              spending 40% is itemized to meet Social Security forced investment
              last traded value, non-concurrentable (neighbor-appraisal).
            </div>
            <br />
            <br />
            <div
              style={{
                backgroundColor: "rgb(32, 22, 11)"
              }}
            >
              rhetorical political academic question, but at a certain point,
              stop surrendering my freedoms (EULA) invoking third party donee
              beneficiary by invoice, expiring premiums, implausible landlord
              use nor repo-cycle kept down payments. Nor expert jury, but
              industry-variable multiple, to permit or desist off platforms.
              PROOVE 1/12 reasonable doubt that it is virion-debris of a
              bacterial-reinfection, prevalent in excrement spittle/feces.
            </div>
            <button
              style={buttonStyle}
              onClick={(e) => {
                e.stopPropagation();
                this.setState({ expiringcare: !this.state.expiringcare });
              }}
            >
              <h3>
                expiring care, limited rights, due dilligence of contractor
              </h3>
            </button>
            <br />
            <div style={setting(this.state.expiringcare)}>
              <h1>
                Class action and statutes cannot limit natural comparative law
              </h1>
              ​you can't expire medicare for all doctors. I'll fight you.
              <br />
              ​bernie was glass steagall but then the top obama replaced him
              with stunt plant. ​savings account is bond index value of last
              traded. fdic ensured legally by itself. ​I had hoped we would have
              drained the swamp.
              <br />
              <br />
              unnecessarily involuntary commitment for brain lesions,
              incarceration $2k/yr is conflict of interest moot. plea is
              operatingly durres-moot, and they know it! yo twitter needs to get
              a industry-variable jury to desist me.
              <br />
              ​cops don't care about white collar crime. ​because they get paid
              by bonds. not customers out of jail. ​fines and bribes. ​friend
              and family discounts, anger management payees.
              <br />
              ​$12k/64 debt/cash (new) retarded to work for instead of your own
              copy.
              <br />
              Transitive property, input costs include homes and therefore real
              GDP/p per hour is&nbsp;
              <a href="https://www.quora.com/Do-all-macroeconomists-believe-GDP-per-hour-is-productivity">
                counterproductive
              </a>
              .
              <br />
              <br />
              By, “a lot of zeros,” do you mean attendance?? Maybe you don’t
              make it interesting or the student notices misconceptions by
              yourself. I am reflecting on the nature of teaching, especially
              with so much actual labor shortage in demand and input costs of
              life.
              <br />
              <br />
              {/*Joshua Gross -*/}_: "No, by 'a lot of zeros,' I mean they don’t
              turn in work. And I would have to work very hard to make this
              stuff uninteresting! That would be way too much work for me."
              <br />
              <br />
              ​social security forced corporate stock FAKE money, non
              concurrentable. REVERSE AMORTIZE dont cancel/bailout,
              (cash/debt)*income every year back. m4a used to invoices are
              theft, & not 40% debt spending
              <br />
              <br />
              "medicare difference makes relative to others, it's nice to be
              known, a community of Christians havre a 90% approval rating."
              desist, it is surrendered freedom (EULA) of your prisoners'
              consumers and employers, expiring-claim with transitive-property
              of third party donee.
              <br />
              <br />
              your cash is not cash, because of bill clinton. don't obama my
              bernie!
              <h1>
                A chance to vote is not wall st pharma cop vs wall st pharma
                cop, that is why non-voters s/wimply won against citarelli and
                Murphy. neither a rent-seeking candidate choice. just government
                and closed source expert jury freaks.
              </h1>
              <h2>behead mark levin</h2>Modicum plurality eagle’s standing
              <br />
              "Are all practicing lawyers unqualified?"
              <br />
              An expert jury is quite counter-productive, those that use
              exhibitable-character-assassination, double jeopardy nor state
              victimized fines nor torts, to boot. Otherwise, the law is to tort
              damages of what they bought for, not from value by neighborhood
              trades, nor an expiring claim pool of surrendered freedoms (EULA)
              of the co-signatories’ customers and employers, or here, the
              damages appraisal.
              <br />
              AMERICAN REPUBLICANISM AND CAPITALISM = SURRENDERED FREEDOMS OF
              SAVERS CONSUMERS AND EMPLOYERS BY EXPIRING CLAIMS IN FALSE BID
              POOLS OR SCHEDULES OF NON-COMPETE HOURS NoR OUTLAYS COMPOUNDED
              BEFORE A CONSIUMER IS READY WILLING AND ABLE WITH THEIR OWN MONEY.
              PROTECT THE INDIVIDUAL, DO NOT RENT-SEEK BRIDGE TOLLS FOR 2/3 DEBT
              SERVICE. I AM A RADICAL MARXIST. ROT IN HELL MARK LEVIN.
              <h2>
                MARXISTS ARE FOR CONSUMERS, NOT GOVERNMENT, PARENTS NOR
                RENT-SEEKERS OR CORPORATE FLACCID TRUSTS
              </h2>
              1/3 $12k/64 debt/cash (new), per person, a year, is public.&nbsp;
              <a href="https://fred.stlouisfed.org/graph/?g=Ksmd">GDP</a>. 1/4
              being healthcare, expiring premiums, is not a good sign. I believe
              real GDP/p per hour is not productivity because real doesn’t
              include homes, bonds, equities (market-concentration) nor
              intermediate-labor, just rents and materials. Otherwise, GDP fixed
              for all inflation, non-durable,
              -duress-beyond-industry-variable-minimal-viable-product-jury, nor
              -withheld-quality trade just doesn’t change, per person. It is
              best to think of dollars as [fungible for ]on-market-ask (of
              someones’ own bid, without surrendered freedoms of another
              invoking a third party donee beneficiary, EULA).
              <h2>
                lawless involuntary trade racketeering when operating cost is
                mutable freeloader without rent-seeking for laborless-demand
              </h2>
              Terminate an employment contract cannot be guided by surrendered
              freedom (EULA) of others, only by class of surrendered freedom
              (EULA).
              <br />
              <br />A lot of people are contracting it as hospitals increase,
              but the absolute change is not because of the viral seasonal
              significance from normal, there is 6 to 1000 hospital beds per
              person. Forest for the trees 78 1942 boomer wall. Get&nbsp;
              <a href="https://humanharvest.info/polio">actualized</a>
              ,&nbsp;douches.
              <br />
              Non-exclusive placebo or warning mechanism dissolves from
              immunocompromised faulty excess antibody garbage collection,
              excrement bacteria reinfection. So many that get it aren’t
              vaccinated because you just stop the debris, it is COMPLETELY MADE
              UP THAT VIRION INJECTS DNA INTO THE CELL AND PREVALENCE IS NOT
              EXCLUSIVELY ALL-CAUSE BACTERIA FUCKING RETARD DIE IF BEFORE
              INDUSTRY-VARIABLE NON-CHARACTER ASSASSINATION EXHIBITABLE
              SUBJECTIVE JUNK LIKE MY MESSY HAIR FOR DISABILITY TO PAY OFF MY
              MOTHERS’ DEBTS NJ SSA MAKES HER PAYEE
              <br />
              Mental health to givee services they need.” You got 7% of the
              vote, these people are being forced into medicine, while
              homelessness is because of implausible landlord use beuyond 5
              units or 30 days
              <br />
              <br />
              only taxble is free rider mutable things that have no pigeonhole,
              otherwise it is just an operating cost trust with natural market
              customers. Thats why 1/4 debt spending is pensions of forced
              investment in Amazon, Catsimitidis wants to trust build. Someone
              decapitate him! KYS, MARX DIED 50 YEARS BEFORE GENOCIDE AND MISES
              CO-OPTION OF SUBWAY HELPING HOMELESS INSTEAD OF FORCING CONDOS OF
              RENTAL-INCOME ACTUAL LABOR SHORTAGE BOOMERS. stop nationalizing
              for 40% debt service njta douchebag 77WABC all of you DIE
              <br />
              <br />
              Drugs to not jeporadize public safety, expiring claims only
              incentivizes insurance fraud, and the duress notwithstanding risk
              is inherent in the job and not tortable.
              <br />
              <br />
              “Beyond the pale is American bonds.” Pat Fallon. "I'll support
              candidates that, idk, put America first." Claiming productivity by
              growth without discounting 1/4 illegals working age flooding
              Florida Economy. that includes closed source ingredient lists
              Walgreens border control, no "surpise bills" is still surrended
              freedom (EULA). "The most successful, strongest republic, we need
              election integrity, in-person voting," That is uselessly
              expensive, as well, retard, "cameras."
              <br />
              <br />
              richard duvell, how do you get out of debt we signed up for?" not
              mine, douche.
              <br />
              "What are the factors affecting the financial system’s stability?"
              <br />
              Nick Carducci - Chairperson at Saver Party (2020–present)
              <br />
              Explicitly by borne-rubicon, all-cause and -incidence, is
              surrendered freedom (EULA), principally-integrally and
              implausibly-deniable as force majeureable and
              impossibly-unforeseeable, nor possibly-foreseeable, in expiring or
              estimates by a scope of requirements, sometimes traunched and
              written down by an initial appraisal of rental-income of
              implausible use competing with consumers intent. We can control
              this by timeclock unlock and debtless brokerage, 1-board
              max-profit contracts, truncated production tax free rider
              immutable for sewage police lawsuits and industry-variable jury
              (without more than 1/12 reasonable doubt of exhibitable
              non-character evidence, double jeopardy nor state victimization by
              expert jury conflict of interest saveface or malpractice). for
              duress within voluntary trade/Tranquility in minimal viable
              product. Microeconomics’ Supply and Demand assumes infinite
              producers to optimize margins, quality and duress.
              <br />
              <br />
              Matt Gaetz: "every comittee in the congress to an oversight,
              analyze pain of people."
            </div>
            <br />
            Chris Salcedo: "Why are calls of violence unchecked from Democrat
            Socialists?" Socialists wouldn't NATIONALIZE BRIDGE/BROADBAND fees
            nor expiring hours of childcare for invoice surrendered freedoms of
            Savers, customers and employers. Turn on spickets in CANADA AND
            ALASKA! CRUDE WILL BE DOWN TO $60/barrel next week, and inflation
            will go away, because the american people are poorer only by
            material, not homes nor intermediate-labor. John Cats, gentrifier,
            rent-seeker, competing with consumers. DIE YOU FAT SHIT. I'll cut
            your face off.
            <br />
            <br />
            "Why does it seem like Bill Clinton has such a reputation for being
            smart? Sex?"
            <br />
            <button
              style={buttonStyle}
              onClick={(e) => {
                e.stopPropagation();
                this.setState({
                  socialistInternational: !this.state.socialistInternational
                });
              }}
            >
              <h3>socialist-internationale</h3>
            </button>
            <br />
            <div style={setting(this.state.socialistInternational)}>
              Nick Carducci - Statistician, Historian of Markets and Propaganda
              (2012–present)
              <br />I would presume it is propoganda/agitprop for FDIC, Glass
              Steagall destablishment, calling bond-index-funds for Treasury/war
              bonds, “savings.” Or it is genuine genuflection of the populous
              for his charisma. Certainly not popular amongst bona fide
              accountants.
              <h1>
                real GDP/p per hour is not productivity because homes, equities
                (market-concentration), bonds (surrendered freedoms, EULA), and
                intermediate-labor are actually input costs.
              </h1>
              Socialists are anti-rent-seeking, Marx doesn't want dead-weight
              laborless-demand, public nor private. Assault law enforcement if
              they countervail their own laws.
              <br />
              <br />
              "Socialists hate prosperity that we enjoy,” as this borrower
              loiters on MY surrendered freedom (EUL) making third party donee
              beneficiary, homes is input transitive poprty of “milk in your
              babies bottle
              <br />
              <br />
              Won a trade war with China, by charging tariffs and gaining
              nothing back in utility too broad for microeconomic Supply and
              Demand counterproductivity of input cost like homes, equities
              (market-concentration), bonds nor intermediate-labor is made by
              people, because corporations aren't people (flaccid purchase, not
              a collective-bargain). streamline no surprise medical bills,
              implausibly deniable impossible is never foreseeable nor is
              possible never unforseeable. "They were wrong and need to be
              punished for it." They were fighting for a virtuous cause. YOU
              STOLE THE ELECTION GROUNDS HONOR SYSTEM SIGNATURES, DOMINION
              MAGNETIC DATA IS NOT AUDITABLE LIKE END TO END IS NOT ON THE CLOUD
              KEYS, EXCESS DEATHS AGE STANDARDIZED DOESN'T ACCOUNT FOR COHORT
              SIZE, UNSHUFFLED EXTRAPOLATION && OF WHOLE VARIANCE (BINARY EACH
              VOTE) IS SURVEY BIAS TRANCHED RESULTS, LIKE OUSTANDING TREASURY
              SHARES UNCOUNTED, AND 13D RETAIL UUID ANON DISCREPANCY. GO TO HELL
              DOUCHE
              <h1>
                get an actuary, get a life. get a job, non-compete copyright
                quiuckening descritive/broad
              </h1>
              Bills are never a surprise but a surrender freedom (EULA) of third
              party donee beneficiary of savers as insurance is of expiring of
              customers and employers
              <br />
              Public pr private
              <br />
              <br />
              I would call nationalized bridge/broadband fees a crisis of the
              economy being labor-based-demand.
              <br />
              Direction with warning by un desistable lies about truth.
              <br />
              Woke up this morning, to the rising Sun, or actually, longitudinal
              rate of change.
              <br />
              <br />
              I will defend my startup business aginst existing biz ppp by
              shooting trump.
              <br />
              <br />
              rsv caused more deaths than vaccinated children.you just started
              testing for it, that doesn't mean it "caused deaths."
              <h1>creator of oncogenesis dysregulation</h1>
              <Cable
                onError={handleScollImgError}
                //img={true}
                src={
                  this.state.noyoutube
                    ? ""
                    : "https://drive.google.com/file/d/1pi9AEjB024FUqdNQFB7pjzjrokSG4VSR/preview"
                }
                float="left"
                title="Eric Bolling (The Balance, Newsmax) - Dr. Robert Malone inventor of mRNA sporing grafts excess antibodies"
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={
                  !this.state.socialistInternational ? 0 : this.state.scrollTop
                }
              />
              Vaccine specialist, "my entire livelihood depends on save face, I
              have put hits on bona fide actuaries that are academic rather than
              paid by health industry and expiring claims."
              <br />
              <br />
              "Unlicensed medical product cannot be advertised." That is fucking
              stupid, force open source ingredient lists instead.
              <br />
              <br />
              Eric Bolling, retard: "a virus that literally wiped out 1m and 5m
              around the world." but most cases are asymptomatic and most actual
              cases arent coronavirus. aggregate deaths is excess age
              standardized without cohort size of 1942 births.
              <br />
              <br />
              Dr. Robert Malone (Inventor of ecess antibody garbage collection
              dissolution, "pioneering mRNA sporing grafts to defeat covid")
              "Vaccines can only increase infections," judged by warning
              mechanism or 20%+ placebo? Prevalence can mean byproduct. I know
              all the answers. YOU are dangerous. Eric Bolling "Spreading like
              crazy," you are only looking at 1 of 100,000's that exist, that is
              5% of all cases. "I can't know what happened, we cannot trace what
              occured, documents in Wuhan has been damaged." It is a protein
              complex that likely already existed, that is CELLULAR DEBRIS,
              respiratory sesicial virus, didn't have rsv killing young
              children. that is survivorship bias, that is just what you looked
              for. that doesn't mean it is cause. you have to test all variants
              to say that there isn't a non-killer of your suspect nor even ever
              the cause, not byproduct.
              <h1>Non-voters won</h1>
              "Deadly insurrection, 5 people died." You really value those lives
              a lot more than everyone else huh? stfu tapper. you fraudulently
              applied for honor system signatures of 2/3 turnout, not shuffling
              before announcing tranched votes. "Stop democracy in action."
              Dominion is not democracy, content-addressible&nbsp;
              <a href="https://thumbprint.us/voting">ArrayArrays</a>&nbsp;is.
              <br />
              <br />
              Not enough resources to return for a mostly asymptomatic
              positivity? fucking retard omar hermenez. stfu victor and allison.
              get a fucking 1942 actuary dumbasses
              <br />
              <br />
              my own reason, my own person. it comes from somewhere you fucking
              bitch.
              <br />
              social security shows you more money than exists you
              afro-tool-bitch die. You had your whole life to save in CASH.
              <h1>
                RUDY GIULIANI NULL HYPOTHESIS BASIS RATE FALLACY, DOUBLE
                JEPORADY WORK DISABILITY REQUIREMENT FOR DURESS TO TAKE CREDIT
                AND EXPIRING OR ESTIMATE INCOME
              </h1>
              rot in hell, his religion is for everyone who wants it. you are a
              psycho, sin sacrifice doesn't work. "G-d bless you kn the Feast of
              the Three Kings."
              <br />
              <br />
              Better shape in a nursing home, become more articulate. Incitement
              is not a crime, it is orders given only, and it is justified to
              stop the excess deaths age standardized (not by cohort size), nor
              injecting DNA into cell without mitosis of already infected cell
              that non-exclusively byproduct virion to dissolve to prevent blood
              clots as bacteria is excrement in feces and spittle.
              <h1>loitering douche</h1>
              “Even though he is doing what he is prosecuting for,” Ellie honig
              it is a prisoners’ dillemma to sign a surrendered freedom (EULA)
              debt contract, faggot
              <br />
              <br />
              Malferasance in surrendered freedom (EULA) reverse amortization
              (cash/debt)*income every year back.
              <br />
              <br />
              Social security using disability to service (not pay off
              uncollateralized) parent collateralized debts
              <br />
              <br />
              $12k/64 cash/debt (new), "living out of his car, has more to worry
              about than _." like the 10x hours per home, 6 to 1000 hospital
              beds per person c1970, for no reason other than actual labor
              shortage of IMPLAUSIBLE LANDLORD USE rent-seekers beyond 5 units
              or 30 days, 1/3 of the population, 40% Dem + swing, 10% GOP +
              swing.
              <br />
              <br />
              Bob sellers wants everyone to work for eachother by using cash and
              corporate flaccid profit. Promotes childcare as a way to increase
              employment numbers from watching your own kids for the same
              operational gain at best. Only comparative advantage works for
              productions, not living requirements. Counts poverty as inclusive
              of materials and rent, not homes, equities (market-concentration),
              bonds and intermediate-labor. 65+ 56m/40m in comparison to other
              10-year cohorts, of-size, do, in fact, earn folds more than
              25-54/3 for useless impausible landord use and free rider mutable
              gentrification and surrendered freedom (EULA), BUT ACTUALLY-WORK
              FOLD LESS. DIE BOOMERS DIE
            </div>
            <br />
            <br />
            Stubie thinks the law should be prosecuted beyond natural
            comparative innocence, before ajunication, defeating the point.
            <br />
            <br />
            ccc parental, ppp trust, bbb existing contractors. 40% debt spending
            is savers, the people. 1/3 public, 2/3 private.
            <br />
            <br />
            <button
              style={buttonStyle}
              onClick={(e) => {
                e.stopPropagation();
                this.setState({ workingweek: !this.state.workingweek });
              }}
            >
              <h3>working for the expiring weekend</h3>
            </button>
            <br />
            <div style={setting(this.state.workingweek)}>
              "Senior UI Designer for NY Life Insurance"
              <br />
              Life insurance is surrendered freedom (EULA) of co-signatories'
              customers and employers.
              <br />
              <br />
              "Can a government regulate a price control on property and public
              transport?"
              <br />
              Self-regulation of margins, duress and quality is co-opted from a
              microeconomic assumption for Supply and Demand for
              *productive-output* (per hour, discounted by material- and
              equity-, home-, bond- and intermediate-labor-inflation). So,
              government is well within their **reasoning to target-margins,
              duress or quality to provide a Tranquil society** to citizens,
              from a *reality that there aren’t infinite producers to determine
              the most efficient billboard price*, after market makers lay their
              ask-to-bid spread, and own no more.
              <br />
              **Regulating by price is the last-resort, however, but not duress
              nor quality**, for it is most efficient to be done after
              forbidding implausible landlord use beyond 5 units or 30 days and
              surrendered freedoms (EULA) in expiring or estimated claims,
              *margin-targeting natural, operational network-monopolies like
              transportation is appropriate,* according to the very
              self-regulatory reasoning made by microeconomists, as an
              assumption re-worked for the real world with finite producers
              first-regulates by quality and duress, by an industry-variable
              jury at a multiple of 11/12 rate, with no more than 1/12
              reasonable doubt that the duress or mal-quality is necessary for
              the minimal viable product for voluntary trade.
              <br />
              “*Tranquil*” and “*voluntary trade*” does NOT give government
              reign to monopsonize beyond free rider immutable truncated
              production tax in Article 4, best applied by a truncated
              production tax to remove receipts from state victimization of
              torts (defeating the purpose) and fines as bribes.
              <br />
              <br />
              He refuses to accept the results of the election and the will of
              the American people,” you got less than a third of eligible
              voters, non-voters are a default will, “no” to all choices.
              "Elected by tax-payers," bitch (MTG), savers pay 40% and
              amortized, tax-payers don't even may a modicum, $2t when that much
              cash exists, most of GDP is debt.
              <h1>THE FAR-RIGHT</h1>
              "How do capital markets assist an economy?"
              <br />
              Capital markets that compound the surrendered freedom (EULA) of
              third party donee beneficiaries are useless price inflation. Only
              when the account awaits consumers in a 1-level board max-royalty
              profit does it, “add value,” by actualizing comparative advantage,
              as much as any trade, but by profit-share rather than natural
              redistribution. Time-based interest, on the other hand, is
              spending, not trade. Prices are elastic, meaning more “investment”
              by spending the equity of third party donee beneficiaries just
              raises bid-price to ask for the lot of existing
              resources/materials.
              <br />
              <br />
              Any equities are concurrentable, or can rollover, meaning there
              isn’t a net loss of third party beneficiaries in setting-up outlay
              schedules for royalties with a bank or collective bargain. For
              this reason, 1-level board max-royalty contracts are insulated
              risk to the co-signatories exclusively when it is person-to-person
              (p2p) only. Investment banks, however, can own by vault-share
              concurrentable-equities.
              <br />
              <br />
              Librarian-historians saying prayers. Gentrifying libraries now.
              "This is not a terrorist attack, no one has been charged." You can
              be a terrorist without adjunication, bitch. People can be wrongly
              charged as well, Rumson, NJ takes disrderly resisting arrest to
              shoot on site weed smokers whom have equal prevalence of crashing
              as others.
              <br />
              <br />
              Financially incentivized to admit nursing home people, the risk is
              implied by being old. There is no significance to hospitalization
              nor deaths risk. 2122272900 kglawteam.com is a fraud.
              <br />
              <br />
              "You’ll be a baby boomer or think I’m totally insane," Bill
              O'Reilly references Davey Crocket musket. I AM THE SMARTEST
              ECONOMIST IN THE WORLD OR THEAT LONG BRANCH BITCH OF A
              PSYCHOLOGIST WAS JUST SCARED OF THE LAW STOP BEING MALFEASANT.
              “State can stop funds of universities that are under the state
              banner.” Savers can stop the surrendered freedom as consumers and
              employers of co-signatories to expiring premium non-rollover
              insurance can to those false bid pool participants.
              <br />
              <br />
              I know DNA is not injected into the cell, and prevalence can mean
              byproduct of bacterial-reinfection, as excrement in feces/spittle
              with bacterial is a Darwinian sign of utility. Antibodies are
              placebo or warning mechanism, garbage collection dissolved,
              bacteria debris. I am the only one to put decennial with single
              year population size humanharvest.info/polio I’m the only one to
              single year 75-79 2015-2020 exponential increase of population as
              perfectly positivity correlated with mortality? Desist All because
              of implausible landlord use of surrendered freedoms of potential
              condo owners, plausible bona fide intent within 5 units or 30 days
              <br />
              <br />
              NJ.com: "You can bring back one now-closed Jersey restaurant from
              the past. Which one is it?"
              <br />
              End the gentrified education! Useless free rider mutable tax and
              50% SAVER MONEY debt spending is not tax payer. Frauds on the
              right and top-left, 1/3 public $12k/64 debt/cash (new)
              <br />
              <br />
              "What has Q Anon accurately predicted, if anything?"
              <br />
              <br />
              <a href="https://www.fbi.gov/file-repository/2015-ncic-missing-person-and-unidentified-person-statistics.pdf/view">
                FBI
              </a>
              &nbsp;2015 reports missing children; it is true that it amounts to
              80k/yr and 216/day; but about 5-fold of that are missing for only
              a few days, or is a false alarm. The pandemic was a matter of
              75–79 2015–2020, so if Q predicted or questioned the honor system
              signatures, and low overall turnout without choices (should be a
              vote, “no” on all counts, imo, also shuffling is required before
              extrapolating traunched results), I would venture to call that
              correct by deduction.
            </div>
            <br />
            You cannot ensure security with magnetic data audits, cunt Anderson
            Cooper
            <br />
            "Are top economists worried about the increasing rate of inflation
            unless the fed drastically increases the prime interest rate?"
            <br />
            Economists only discount material-inflation from GDP/p per hour for
            real GDP/p per hour, like people aren’t supposed to own homes
            outright, nor employ others, as neither of those nor
            market-concentration (equities) and bonds’ surrendered freedom
            (EULA) of Savers (third party donee beneficiary) or durable-trade
            nor price-deflation of more than intermediate-material or even
            worse, just nominal GDP.
            <br />
            <br />
            Jan 6 is failure of voting tech and non-rollover-tort-reform jury
            experts, malpractice by discovery and breaking eggheads.
            <br />
            <br />
            Providing content addressable assurance
            <br />
            <br />
            "I wouldn't trade expiring claim non-rollover premium for the world.
            Women are paid less than men not necessarily in a healthcare
            setting." Yeah, I bet. rot in hell Vita. 73% pro-AARP even though it
            is a net loss. "Why would I do that?" Because otherwise I will kill
            you on surrendered freedom (EULA) grounds, and competiting with
            consumer intent by not-rollover nor allow contracted to compete nor
            settle trade is not voluntary especially before jury-permit to
            discriminate. pay me to ban me. "He is going to a trade school and
            mechanics will make more money than liberal arts." Yah, again
            because of insurance claims, non-rollover and expiring, not
            collective bargain but surrendered freedom (EULA) of the
            co-signatories' employers and customers. Anytime you put money
            through the hands of Mark Levin, he takes some. Money doesn't enable
            anything unless it is free rider immutable from inside the market
            like truncated production tax for sewage, police and lawsuits,
            without state victimized torts nor fine-bribes, nor duress before
            industry-variable jury multiple of 11/12 without more than 1/12
            reasonable doubt. if virion injects DNA into cell, and it isn't
            population 75-79 decennial isn't "excess cause," it is a pandemic of
            the unvaxxed. Mancihn is a top. I hate him.
            <h2>
              TRUMP SPENT 20% MORE THAN USUAL, HE IS ESTABLISHMENT YOU FUCKING
              RETARDS. ppp trust bbb existing contractor ccc parental, all bond
              laundering, for rent-seeking operating costs, expiring premiums
              and non-rollover surrendered freedoms (EULA) of your employers and
              customers, let along Savers especially when 40% debt spending (1/3
              public). crime problem is from the state victimization and
              insurance false bid pool torts, non-concurrentable surrendered
              freedom (EULA) third party donee claimable beneficiary.
            </h2>
            <h3>
              "Everyone is begging to keep schools open." Allow kids to earn
              wealth, stop the trade secredits and conflict of interest agitprop
            </h3>
            Rep Stubie on Stinchfield: "People should have the Tranquility to
            decide their own healthcare, and not have government get involved."
            only 11/12 withut 1/12 reasonable down can designate after 2 week
            public discovery for excecutions and abstain holdings with SEC
            backdoor for anonuuid for closing 13d-retail discrepancy. But if
            donated treatments don't stop the disease but the non-exclusive
            byproduct because virion is NOT the cause-killer because it DOESN'T
            inject its DNA into the cell as assumed to FIT SAVEFACE DOCTOR
            NARRATIVE.
            <br />
            <br />
            20%+ non-exclusive or garbage collection is warning mechanism or
            placebo. the bottom-left is anti-vaxx, the right and top-left allow
            business to operate upon the microeconomic Supply and Demand
            assumption unacknowledged that output is extended as producers reach
            infinite marginal propensity to trade on the bid (rather than wait
            on the ask, or brought forward without rollover). The best way to
            release product out of the government is to prohibit licensure,
            open-source ingredient lists, don't gentrify like Republicans and
            Democrats with expiring premiums for non-rollover insurance, public
            nor private. it is a false bid pool, collective bargain only works
            if it rolls over or is immediate, not flaccid like a corporate
            account. FUCK AMAZON IN NYC CAHOOTS FOR YOUR PENSION FORCED
            INVESTMENT. YOU HAD YOUR ENTIRE LIVES TO SAVE. 40% Occupy and swing,
            10% GOP and swing anti-rent-seeking Occupy Wall St. the right are
            not conservative, 1/3 public $12/64 debt/cash (new) surrendered
            freedom (EULA). Let customers decide what is life-saving, only free
            rider immutable tax is useful. Test, vaccines and antibody
            suppression or placebo 20% of garbage collection warning mechanism
            of bacterial reinfection. the right are market communists 1/3
            public. This is not a "money problem," nor a "color of skin
            problem," it is a producer option problem. quality, margin and
            duress by McDonald's rent-seeking franchise needs to be controlled
            by the industry-variable multiple of 11/12 jury, NOT business. THE
            RIGHT ARE ANTI-CUSTOMER. Business can do whatever duress they want.
            so, suck my dick stinchfeild if you want to get into my events, you
            obviously have anger management issues.
            <br />
            <br />
            inflation go down because energy domination by nationalized
            rent-seeking.” Mark Meadows, Trump retard. socialists are
            conservative, not nationalizing bridge/broadband tolls you cuck. die
            off, don't procreate. The same conservatives who want to de-gun me
            for saying rollover insurance and being disorderly." orderly is
            retarded GDP/p per hour non-durable trade and inflation, including
            equities (market-concentration), bonds homes and intermediate-labor.
            Poverty doesn't measure richness. just fraudulent unamortized
            monthly "savings" from the jew mark levin. kill him. district
            attorney is not to state victimize incarderation to bond launder,
            you are suppoed to be paid by making people consumers, not $2k/day
            from finance false bid pools surrendered freedom of others. Mind
            your own business. "Someone drops a million dollars on one of them,"
            to lock up non-compete surrendered your part in the supply chain
            Fighting fire with fire, money only raises bid, that is why every
            fucking commercial is trip and fall lawsyers for state victimized
            expiring claim torts for class precedence malfeasance and the
            bar-licensing board racketeering for a voluntary trade loss and
            therefore a comparative advantage loss, technological advancement
            loss, and actual labor shortage. sex trafficking has nothing to do
            with drugs, more to do with login.gov malfeasance, faggot boomer
            retard. GDP/p per hour is not productivity! Article 2 is to have
            republican government, and stop invasion in bonds surrendered,
            $1/7/30 1/3 public debt china/foreign/ useless actual work deficit.
            <h1>
              non-rollover is surrendered freedom (EULA) of Savers and
              co-signatories' customers and employers
            </h1>
            <h2>
              GDP/p per hour as productivity is bias and beliefs, expert jury
              instead of industy-variable, too, for saveface lest malpractice.
            </h2>
            get a permit for discrimination, pay me to ban me.
            <br />
            Dollars v bonds, Republicans be damned 40% debt spending called tax
            payer funds, Democrats calling ccc parental gerontocracy child
            funds, education helping children by keeping them from earning money
            and having trade secrets and conflict of interest competing with
            consumer as income instead of stopping surrendered fredom of
            rent-seeking/finance by invoices, exporing premiums, implausible
            landlord use and repo-cycle kept down payments. YOU DON'T LOVE ALL
            PEOPLE IF YOU SAY HOMELESSNESS IS BECAUSE OF MENTAL ILLNESS with no
            evidence other than expert conflict of interest psychiatrists that
            involuntarily committ you on ythe basis of messy hair and bizarrness
            for saying they should only be paid by rollover insurance. INSTEAD
            OF RENT SEEKING bitch. Marx wouldn't do this. Republicans do. rot in
            hell, I want you to die Cornel from Taxas, West4texas.com. You
            deserve what you are entitled to, social security is forced
            corporate investment Rita Cosby you fucking bitch. 40% debt spending
            is not tax payer funds, nor is free rider mutable ppp existing
            business trust building useful and not useless price inflation from
            outside the market Long term smell and taste is less, you aren’t
            fixing for age cohort size, just age.
            <h1>
              Marx was co-opted 50 years after anti credit cycle for genocidal
              market-communists nationalized, still competing with consumers
              free rider mutable tax from outside the market, useless price
              inflation, rent-seeking and gentrification (of input costs,
              counterproductive).
            </h1>
            <h2>
              100 years after was by Mises for suggesting GDP/p per hour by debt
              is at all useful, rather than implausibly-denaiable force majeure
              purposeful, expiring and estimated option to buy, sold, based on
              neighborhood sales rather than last trade for that specific
              property (what you bought it for).
            </h2>
            non-compete student draft, a job non-compete and corporate profit
            concentration isn't help- it is a withheld trade for flaccid loss
            and actual labor shortage per labor-demand.
            <h2>
              children have more natural rights over themselves than fucking
              parents, both more than business discrimination, get a permit from
              an industry-variable jury multiple of 11/12 with no more than 1/12
              reasonable doubt. Virion does not inject DNA into cell and GDP/p
              per hour is not productive, but inflation anf non-durable trade
            </h2>
            Dr. Seigel and John Cats. Die. Stop saying French is not spreading
            when the only novel thing is you testing for it. There is no legal
            basis to do these permits without scientific consensus, not an
            expert jury with confirmation bias and save face lest malpractice.
            You need to break a few eggheads to say something new. Unvaccinated
            and vaccinated either work or not. a small portion of breakthorough
            cases is just byproduct prevlence, not cause, you literally make up
            DNA being injected into the cell for prevalence. fucking retards,
            kill yourselves! Effective against previous variants as well, it is
            garbage collection, it doesn't stop infection. 20% placebo or
            warning mechanism of bacteiual-reinfection of non-exclusive
            byproduct? only comes out 5% of time for pneumonia. Cameroon made
            the test, not the virion. it is just debris of cell when bacteria
            reinfects, that is in spittle and feces excrement. fucking die
            boomers.
            <br />
            <br />
            "Alvan Bragg will have to be removed from office, by you,” with
            duress of no choice-candidate? 2/3 support Occupy Wall St and
            anti-rent-seeking. "Inflation is at an all time high, your portfolio
            may be at risk (inflation is not the only input cost! you need to
            include market-concentration in equities, homes, bonds and
            intermediate-labor), gold is a protection against inflation. -
            Legacy Precious metals."
            <br />
            <br />
            Don't take my right to own a gun, I am safer with my money thatn all
            BOOMERS whom lose productivity year-to-hear, of GDP/p per hour gains
            (a measure of COUNTER-productivity of technologicaal advancement for
            comparative advantage, to deflate and make durable. when I shorted
            bonds without knowing that market makers see the uuid for retail,
            knowing 13d filers are quarterly, the realm of law establishes
            malfeasance, implied. Intent is deducible.
            <br />
            "Resist arrest, they are going to shoot" on site, that is the plea
            for all motorists whom smoke weed, while the Ad Council says the
            same prevalence of being high regularly as per accident-prevalence!
            <br />
            <br />
            People don’t want to have a child, they are selfish, they have dogs
            and cats that can take the place of children. Adopt people. How many
            people are waiting for Baphomet to take care of them?” Sing
            Sacrifice gumbo-guy
            <h1>CATHOLICS ARE CRAZY, SIN SACRIFICE IS NULL HYPOTHESIS!</h1>
            "I’ve saved more than anyone, kill him in the race, can’t go
            anywhere without the mayor[Rudy Giuliani].” Basis rate fallacy
            Freudian slip, of the basis. "Rooster for the morning." Doesn't
            matter.
            <br />
            <br />
            "You can squeeze him into the corner, can do this with hochul, if
            people he [Adams] lets out kills [as many people as he's/they've
            killed, you're all gone?]." You can decide what to do with your
            money, not my disability. slut. Jordan Peterson was right.
            <br />
            <br />
            He’s a nut,’ collecting nuts to break common sense
            <br />
            <br />
            SUCK MY COCK for entry - be happy
            <br />
            is title 9 written for the school to be able to set a standard
            beyond a 11/12 jury of peers with comparative advantage and
            character evidence non-exhibitable? same with expert preconceived
            notions, all admittance needs to be put thru various-industry jury
            discretion. Plea bargains are moot, state victimization not with
            standing. walgreens and expert jury is dangerous.
            <h1>
              credit is haram (kills people, GDP/p per hour is not productivity
              but inflation and non-durable trade, but stress)
            </h1>
            <h2>
              "Inflation, threats from Iran, and possible recession (the
              opposite of inflation GDP/p per hour, real not withstanding), no
              Ronald Reagan to save us.
            </h2>
            <h3>
              They would basically strap me in for four days at $2k/day expiring
              premiums in the Newark Beth Israel pool. false bid pool, dog won't
              compete with cosnumers for economic retardation GDP/p per hour as
              'productivity.'"
            </h3>
            "How did the gold standard affect the economy?"
            <br />
            It is a fallacy that a depositary only can amalgamate into
            vault-share only with fractional reserves or the surrendered freedom
            of others (EULA), actualized. To say the standard is just gold or
            just parks, is nuts.
            <br />
            <br />
            "17x die 20x hospitalized," but you aren’t counting all-incidence
            cause, just non-exclusive byproduct of bacterial-reinfection
            (injecting viral DNA into cell is literally, 'made up'). Best snot
            on the floor than sniff it in.
            <br />
            <br />
            million dollar works,&nbsp;
            <a href="https://qr.ae/pGziq6">options sold to buy</a>, "bought and
            paid for," says the racketeer-arsonist, methane for propaganda of
            markets and history as a statistitiant that finds correlations with
            rates of change instead of SUPUID regression, reandom of variable is
            folds over normality, you have to shuffle before extrapolating and
            not tranche value in Quickbooks reports. "Seeking plea bargains
            overall, for 90 days in jail, $2k/day laundered false bids very much
            of transitive property. stick to the current evidence, not double
            jeporady for obvious state vic deduced."
            <h1>
              rollover
              <br />
              Bob Sellers, why do you need to take so much blood for an
              orthopedic appointment? YOU caused 6 to 1 1970 hospital beds c1970
              AND 10x price inflation of homes per hour. meant to be serf and
              expiring tranche, withdrawaling modicums of life! from savers and
              co-signatories' consumers-and-employers, surrendered freedom
              grounds against rent-seeking/competing-with-consumer
              standing.&nbsp;
              <a href="https://qr.ae/pG6agd">Barter, in reality</a>.
            </h1>
            <Cable
              style={{ height: "400px" }}
              onError={handleScollImgError}
              //img={true}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://drive.google.com/file/d/1Be_y1k3B8HPffJsFV8emWEkzmnQGYmt9/preview"
              }
              float="left"
              title="American Agenda (Newsmax) - John Brownfmr afvisor to Margeret Thatcher and Donald Trump"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            Marx had been dead for 50 years single co-options, Republicans call
            40% debt spending, tax payer funds, 1/3 debt. fuck off with
            "Marxist-Democrats," arx would never reappropriate-labor-demand nor
            -equity.
            <br />
            <br />
            “I want equality, not equity.” Meaning poverty to ownership. Rent
            seeker or anti boomer, gun to head (jury-duty), what do you do?
            <br />
            <br />
            <h2>
              <a href="https://www.nytimes.com/interactive/2020/us/covid-hospitals-near-you.html?campaign_id=190&emc=edit_ufn_20220105&instance_id=49507&nl=updates-from-the-newsroom&regi_id=154584469&segment_id=78772&te=1&user_id=499d46112e083293479e1f5c8760b31e">
                NYTIMES
              </a>
              &nbsp;DOESN'T KNOW HOW TO FIX MORTALITY NOR HOSPITALIZATIONS FOR
              AGAINST PERSONS
            </h2>
            Find common ground for laughter. It’s stupid. Very interesting.
            <br />
            <br />
            “Can’t say new things without breaking some eggheads. It only
            becomes a new thing after the fact, doesn’t matter.”
            <br />
            - Nick Carducci Founder at Froth.app - Analysis, Micro-Theory.com,
            and SaverParty.xyz (2018–present)
            <br />
            <br />
            oncogenic excess antibodies or fetal cell line 1986 vintage?
            immunocompromised CANNOT safely make their own (garbage collection
            of non-exclusive prevalence not all-incidence cause). "37% of
            schoolage hasn't been shot and we know there is defense against
            Omicron [non-exclusive byproduct of bacterial re-infection].
            mortality 90%, 10x infection, chance in hosp 82x 40-59."
            <br />
            <br />
            nearly all patients [of non-exclusive byproduct of
            bacterialre-infection, cell-injection of viral DNA is completely
            made up] are unvaccinated, so it is saving millions." Everyone died
            on time, no one has put decennial-annual together to
            actually-analyze actuarials instead of compete with consumers on
            expiring, estimated or implausibly-deniably
            (written-down/self-dealing) claims. You're symptoms are raging when
            you are positive, you're very virulent."
            <br />
            <br />
            <button
              style={buttonStyle}
              onClick={(e) => {
                e.stopPropagation();
                this.setState({ econcovid: !this.state.econcovid });
              }}
            >
              <h3>the economics of coronavirus</h3>
            </button>
            <br />
            <div style={setting(this.state.econcovid)}>
              “Half transactions/NYC were all-cash offers for [surrendering the
              freedoms (EULA) of others' ]$1.9m average $30b/2021,” Amanda
              Brohante.
              <br />
              <Cable
                style={{ height: "240px" }}
                onError={handleScollImgError}
                //img={true}
                src={
                  this.state.noyoutube
                    ? ""
                    : "https://drive.google.com/file/d/1ilOADeB-Lr-2rHTyNuWPCcmts5-Lt46t/preview"
                }
                float="left"
                title="John Bachmann Now (Newsmax) - Bob Kerrick, jan 6 treasonous rat"
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={!this.state.econcovid ? 0 : this.state.scrollTop}
              />
              The attack/insurrection on Lexington (war crime grounds)&nbsp;
              <span role="img" aria-label="checkmark">
                ✅
              </span>
              : honor system signatures on an error by actuary-analysis, not
              shuffling before extrapolating and reporting. RETARDED.
              <br />
              <br />
              "Let me say what I know," without court expert jury
              <br />
              <br />
              You do the crime, you do the time. state vic and pleas are
              literally, "moot." Limiting rights by statute and FDIC trust for
              bonds, a war crime of viruosity and voluntary trade without
              surrendered freedom (EULA).
              <br />
              <br />
              "covid relief white house covid coordinator jeff zines saying
              testing and insurers will reimburse employees. It should be free
              [by writing down to non-expiring bid]. If 'booster' is not
              'vaccinated,' a lot of people won't be, for the White House likes
              to promote its' own 200k/yr americans." James Rosen.
              <br />
              <br />
              <Cable
                style={{ height: "380px" }}
                onError={handleScollImgError}
                //img={true}
                src={
                  this.state.noyoutube
                    ? ""
                    : "https://drive.google.com/file/d/1jPR4slHRjWybLc1Z5b9NuUL6ugWbFsy7/preview"
                }
                float="left"
                title="National Report (Newsmax) - Chicago Advocate, Father of 6 Willie Preston on school trade secrets from free rider mutable tax from outside the market, and rent-driven-employment"
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={!this.state.econcovid ? 0 : this.state.scrollTop}
              />
              “Children don’t want to go to school, they want to earn some
              money.”
              <br />
              <br />
              I applied to THOUSANDS OF JOBS, non-compete, expiring claims or
              credit as income, even some cross country. I am a bartender that
              would like to keep my side-gig software IP, with an injury, but I
              shouldn’t be forced to work, especially if it is YOUR FAULT
              <br />
              <br />
              Normal is thinking GDP/p per hour is productivity, but it is
              non-durable trade and inflation.
              <br />
              <br />
              There is no mental illness, they say that if they don’t understand
              non-rollover insurance is surrendered freedom of the
              co-signatories’ customers and employers. Eric Adams, you can only
              incarcerate for the crime. Not homelessness nor subjective label
              by worthless doctorates. You should be locked up, non-voters is a
              default vote, "no." Especially when homelessness is because of
              finance, we work 10x/boomers c1970 because of finance. "Thourough
              background check," just use the current evidence. You cannot use
              the past to prosecute current crime nor even deduce intent for a
              different time.
              <br />
              <br />
              Tests are free rider mutable, useless tax from outside the market.
              The only problem are trade secrets. China is where test
              originated. Survivorship bias by what you set PCR for. A
              non-exclusive byproduct of bacterial re-infection, injecting DNA
              into the cell is completely made up! "1m got it in one day, it is
              a failure of testing and vaccinations.” T.W. Shannon. Black-Trump
              advisory Board Member
              <br />
              <br />
              Use the funding, free rider mutable tax from outside the market
              just raises bid, especially expiring. It is saver party funds with
              U.S. and China in cahoots
              <br />
              <br />
              "Need a straight jacket get him analyzed. Suspensions, falsified
              covid documents." Fucking die off Bradshow you fucking pussy.
              "Psychiatric, emotional problems." Brady, you are a cardboard
              cutout. My contempt for you and the law is not amental illness you
              fucking chuds. G-d, kill them
              <br />
              <br />
              Bill O'Reilly says 5m dropped out of the workforce. we work 10x/
              <a href="https://www.self.inc/info/generational-wealth-gap/">
                boomers
              </a>
              c1970 because actual labor shortage of finance, GDP/p used to be
              nearly constant 1800-1913. you are retarded you ugly, useless
              fuck.
              <br />
              <br />
              <Cable
                style={{ width: "100%", height: "540px" }}
                onError={handleScollImgError}
                //img={true}
                src={
                  this.state.noyoutube
                    ? ""
                    : "https://fred.stlouisfed.org/graph/graph-landing.php?g=Kw8t&width=600&height=475"
                }
                float="right"
                title="https://fred.stlouisfed.org/graph/?g=Kw8t"
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={!this.state.econcovid ? 0 : this.state.scrollTop}
              />
              making a false expiring bid non-rollover is third party
              beneficiary claimable, donee as debt is to savers, insurance is to
              co-signatories' customers and employers.
              <br />
              <br />
              "you don't take property of what others have done, because it
              prevents precedence." uhh, actually competitive advantage needs to
              be respected for past demand to have no actual labor
              shortage/deficit of labor in demand. "National security, safer,
              strength to oppose these authoritarian regimes," Rep. Turner. life
              insurance payouts, people are dying, we need to cut off anti-vaxx
              to make room because we wasted funds on admins for expiring
              premiums non-rollover, surrendered freedom (EULA) of the
              co-signatories' customers and employers.
              <h1>SUCK MY COCK for all events - be happy</h1>
              Tax payer dollars to put criminals behind bars, all implausible
              landlord use beyond 5 units and 30 days surrendered freedom
              (EULA). Kill yourself Alan Dersch
              {/**competing with consumers fold */}. 50% debt spending. ween
              cops off bonds and state
              victimized-fines/-bribes/-social-duress-force.
              <br />
              <br />
              "Automatically counted as a covid identified person," while it is
              5% of all cases of pnemonia. It would increase the incidence
              relevance with aggregating disposition after aggregation of
              all-incidence/all-cause. “Government scripts/EUA doesn’t allow the
              medication when we need it. Ban all prohibitions of&nbsp;
              <a href="https://teapharmacy.party/drugs">trade</a>.”
              <br />
              <br />
              Runs on&nbsp;<a href="https://qr.ae/pG6gCX">stocks</a>, stop
              valuing on your neighbors, use what you bought the home for,
              boomers.&nbsp;
              <span role="img" aria-label="evil-face">
                😈
              </span>
              &nbsp;"I would hope I’m still learning at 90." no keep dreaming,
              ya retard. Pay-date, "pay up front"
              <br />
              <br />
              "Did the USA miss a great opportunity by not electing Bernie
              Sanders?"
              <br />
              *Don’t Obama My Bernie*. Eric Bolling (The Balance, 1/4/2021):
              “$3t on Green policy straight up socialist, Bernie sanders
              socialist.” Socialists would never reappropriate labor-equity, nor
              free rider mutable-, from outside the market-, tax to trust-build
              instead of collective bargain (immediate).
              <br />
              Growth, the uncontrolled illegal immigration, export boomers for
              gold
              <br />
              <br />
              You cannot refuse national defense on religious beliefs. "What is
              the reason for religious exemption, it is a compromise of
              religious beliefs to be forced to do this. Unconstitutional, slap
              in the face in everyone who has served. The only dishonorable is
              biden. These people step up nobly to be the best fighting force in
              the world. They should be able to fight for freedom, their
              livelihood is at stake, their pay is being removed. [Some just
              want to ]people are looking to sacrifice for the country[ out and
              out]." modicum probability
              {/**extrapolate history */}, “lazy takers outnumber the doers.”
              More government handouts, free handouts, never have to put down
              video game remote. Once those can vote en masse conservatives will
              lose the senate.” Good people are tired. “The side that can
              turnout the engaged, committed citizens wins, not the least
              informed.” Until 2/3 support Occupy wall st anti-rent-seeking but
              no candidate represents productivity is GDP/p per hour downwards
              for durable trade and price deflation, real GDP/p per hour
              notwithstanding, especially when inflation doesn’t include homes,
              equities, bonds nor intermediate-trade.
              <br />
              <br />
              Marx would never remove freedom of Savers, albeit in the hands of
              governemnt and corporation or business.
              <br />
              <br />
              Newsmax: "socialists want your wealth and they are raising taxes
              to do it." Socialists would never add free rider mutable tax from
              outside the market, certainly for not a collective bargain
              (immediate). “Investing a million dollars to boost competition,”
              how does newsmax consider themselves conservative? They are market
              communists like Democrats whom gentrify. “Conservatives are
              fighting on the front lines. Businesses can fuck us because
              microeconomists finished their 'don't touch the trolley thingy,'
              theory after assuming infinite producers for self-regulation
              productivity.” Bridgette Gabriel on Eric Bolling (the Balance). "I
              would love to take discover," that is illegal to surrender the
              freedom (EULA) of Savers. "I'm for a free-free market, others will
              pop up," the new Truth Social use case will be rescinded with
              similar copy, David Nunez and Trump cannot copy Twitter and
              Twitter cannot ban unless I'm paid on voluntary trade grounds, let
              alone microeconomic productivity of technological advancement as
              GDP/p per hour less non-durable trade and cost. Truth social
              cannot copy, nor can duress be extended in the
              industry-variably-controlled jury-permitting minimal viable
              products of every business.
              <br />
              Chris Salcedo: "left-wing nutjob to cancel votes of americans."
              Chuck Schumer on fillabuster: "Banana republic if they don’t get
              way, disaster if we do." How do you stop cloture without cloture.
              <h1>
                cash advance to tbt (if reverse amortization, this is the only
                capital gain that will not be corrected), I will use your own
                weapons against you.
              </h1>
              <Cable
                style={{
                  height: "390px"
                }}
                onError={handleScollImgError}
                //img={true}
                src={
                  this.state.noyoutube
                    ? ""
                    : "https://drive.google.com/file/d/1Z327LRheUjCg_UbWtv9mDnQjIhq6AnVS/preview"
                }
                float="left"
                title="Spicer & co (Newsmax) - Rand Paul(R) Optlamologist"
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={!this.state.econcovid ? 0 : this.state.scrollTop}
              />
              "We can save the elderly and the immunocompromised with antibodies
              by the suppression of the non-exclusive of all-incidence
              byproduct, prevalence can be. 1.8m children no deaths, why mask?
              60% less mortality overall."
            </div>
            <br />
            “What is the word, ‘dry?’”
            <h2>
              “clean.”
              <br />
              <br />
              if you want business to only be able to move with 11/12 consensus,
              vote saver party. if you want business to fuck you, vote
              Republican, Democrat, Libertarian, faux-Socialist Green or
              People's
            </h2>
            “People are supposed to rise up and revolt against the
            establishment. The criminals are the Saver party base.” State vic
            torts are why Savers go for&nbsp;
            <a href="https://qr.ae/pG6gM3">criminals</a>.
            <br />
            <br />
            Cop: “No protection, not even for Motive first guilt, no one will go
            to nyc. Visit Grand Central what Dems do. People shoot up in public
            buildings to shoot up wherever they want and Adams seems to be all
            talk." Cap rent at 5 units or 30 days, not price. Condos&nbsp;
            <span role="img" aria-label="umbrella">
              ☔️
            </span>
            <br />
            <br />
            <Cable
              style={{
                height: "390px"
              }}
              onError={handleScollImgError}
              //img={true}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://drive.google.com/file/d/1tIMw4MwumnqEm0h1FQuGPzgGG5ZQCzK-/preview"
              }
              float="right"
              title="Spicer & co (Newsmax) - Taylor Budowich, Spokesperson for Trump after Jan 6th, 2021"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={!this.state.econcovid ? 0 : this.state.scrollTop}
            />
            Get your fucking hand out of my face, trump trust built ppp and I
            open design everything.
            <br />
            <button
              style={buttonStyle}
              onClick={(e) => {
                e.stopPropagation();
                this.setState({ boomer: !this.state.boomer });
              }}
            >
              <h3>effect of boomer</h3>
            </button>
            <br />
            <div style={setting(this.state.boomer)}>
              The government is to target margin, duress and quality by
              jury-permits and consensus science of industry-variable jury, not
              dead-weight by corporate flccid loss nor government free rider
              mutable rent-seeking. Microeconomists (not macroeconomists) want
              price deflation. Austin Scott (GA), "first, stop the federal
              government." Debt is a transitory third party doneee beneficiary
              claimable, and is 2/3 private.
              <br />
              <br />
              why don't you talk about it, cunt? you just repeat the same shit.
              “Can’t say new things without breaking some eggheads.”
              <br />
              "defund police with a higher tax rate? outside the realm of
              politics now," just 40% debt spending, 50% state. "odious,
              shouldn't be allowed to stand, 300/2yrs+ murders, over our
              rental-income."
              <h1>garbage collection</h1>
              "homeless and drug addicted, they need help, slowly killing
              themselves, why choose more important than a kid," not earning
              wealth in school. "1 electoral vote/decennial. FL is booming, no
              one is saying NY is booming." 1/4 illegal working age-share. we
              are working 10x/boomer c1970 per home sold, that is a recipe for
              excess (actual labor shortage) demand by price not even
              non-durable trade surmounting tech advancement GDP/p down.
              <h1>stop gentrifying tests, voting is free rider immutable</h1>
              <h2>
                you arent conservative if you allow business to trade on any
                kind of duress. you need a permit from an industry-variable jury
                to power-rank
              </h2>
              I want surrended freedom (EULA) to be decided by industry-variable
              multiple of 11/12 jury before 1/12 reasonable doubt
              <br />
              Jealous FL getting 1/4 “illegals” for my actual labor shortage.
              <br />
              To make up for productivity loss of GDP/p deflation per year.
              <br />
              Verifiably from finance/rent-seeking invoices, expiring premiums,
              implausible landlord use and repo-cycle kept down payments and
              GDP/p nearly constant 1800-1913.
              <br />
              <Cable
                onError={handleScollImgError}
                //img={true}
                src={
                  this.state.noyoutube
                    ? ""
                    : "https://drive.google.com/file/d/12Yyu7SFShvUmWFpcfpuwPtMW7-ZBQBAz/preview"
                }
                float="left"
                title="https://www.americanhistorycentral.com/entries/battle-of-lexington/"
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={!this.state.boomer ? 0 : this.state.scrollTop}
              />
              <a href="https://www.americanhistorycentral.com/entries/battle-of-lexington/">
                american history channel
              </a>
              <br />
              "Linguini spined savers," I’m going to kill you gracie
              <br />
              <br />
              left is getting diverse, libertarians hate occupy "Virion
              injecting DNA into cell," is a religion.
              <br />
              Ability to have the testing, your own mandate requirements to
              travel, your own tests. Should be delegated by jury,
              industry-variable. Try proving it in court faggots.
              <br />
              <br />
              “Getting the damn guns out will bring crime down.”
              <br />
              hold people with no bail with arresting officer non-character,
              exhibitiable evidence. mind your business rudy cousin lover
              <br />
              <br />
              boomers for 1942 births 4m excess, cold for weather all-incidence,
              prevalence does not cause exclusively, can be byproduct.
              immunocompromised means you cannot make your own antibodies;
              garbage collection; and remember, bacteria is excrement.
              <br />
              "Once a student is exposed all the other students are exposed."
              You actually put people in a hospital room and the bacteria
              doesn’t jump.
              <br />
              Hospital beds&nbsp;
              <a href="https://data.worldbank.org/indicator/SH.MED.BEDS.ZS">
                swarmed
              </a>
              , capacity suddenly terrorised by deb valentine, sponsored by
              medical expiring claims, political prisoners for $2k/day
              mentioning rollover insurance is not surrendered freedom (EULA) of
              Savers.
              <h2>
                Do all macroeconomists thing GDP per hour is productivity?
              </h2>
              Saying there is a comparative advantage and retirement to
              equality, not reappropriation beyond tort of reverse amortization
              and the furtherance of stated goals of plausible landlord use
              intent, 1-level board max-royalty, and truncated production tax.
              <h3>
                honor system signatures non-auditable magnetic hard disc data,
                requires content addressability by on device identifier and way
                compared with public ID size/length ("
                <a href="https://qr.ae/pG649A">ArrayArrays</a>")
              </h3>
              truncated production tax, 1-level board max-royalty profit,
              rollover-doctor hours, no more surrendered freedom (EULA) of
              Savers and the co-signatories' consumers and employers.
              implausible landlord use reverse amortization (cash/debt)*income
              every year back on those grounds for tort, too.
              <br />
              labor more than diminishing returns is withheld outlays.
              <h1>ITALIAN AMERICANS ARE A VARIANT OF CONCERN</h1>
              "We spent $11t on covid."&nbsp;
              <a href="https://fred.stlouisfed.org/graph/?g=KkDx">Eric Adams</a>
              . You got 7% of the vote, tool. You can't do shit.
              <h1>
                TURNOUT NON-VOTERS, NOT SWING, THEY STAY HOME, RCV FAVORS 50% TO
                1/3 MAJORITY
              </h1>
              "Do what is right for all New Yorkers," only scientific consensus
              is legal, that is industry-variable 11/12, 1/12 unreasonable
              doubt.
              <br />
              <br />
              "The will of the 150m people that voted was registered by
              congress." Jen Psaki, "childcare, healthcare, eledercare, impact
              budgets in homes across the country. Contribution of ccc % of kids
              prevented becoming in poverty. ...We know cases are going up, 200m
              vaccinations stop hospitalizations and death. 500m tests. 20k
              sites to get expiring premium free rider mutable tests. 130m arp
              10m for tested, if not use it, tranched out like insurance works
              you dumb fuck."
              <hr />
              Mentally ill or homeless, deb valentine, you are such a fucking
              fat cunt, do not say this about people that you implausibly rental
              income beyond 5 units or 30 days be corporate market communism.
              20x/millennial boomer non-work-income-income. that is your actual
              labor shortage, boomers 6m/20m unemployed, millennial 6m/40m
              unemployed.
              <br />
              <br />
              10x less omicron grew in lungs 12x slowly mitosis, bacteria
              infection exclusively but really,&nbsp;
              <a href="https://www.nytimes.com/1943/01/22/archives/us-set-new-record-for-births-in-1942-2800000-babies-are-born-but.html">
                1942
              </a>
              &nbsp;births 20%+/yr, 2-2.4m === 75-79 2015-2020 (5 periods),
              7.8m-9.6m, 825,037+, 500,000 excess overall
              <br />
              <br />
              Business need to have a permit from jury-truths by consensus
              science, you need you prove virion injects DNA into the cell, not
              make it fucking up, afro jigger tool bitch. What a waste of a
              life.
              <br />
              No ones lives are being improved by it you are just suffering from
              basis rate fallacy.
              <br />
              You aren’t elected if only half the people turned out, you are a
              placeholder.
              <br />
              <br />
              “Life saving treatment and testing remains scarce throughout the
              country.” Free rider mutable tax from outside the market is
              useless price inflation.
              <br />
              Jim from Beth page equity line to pay for college and access to
              cash when you need it, with rates as low as 3.8% APR, and everyone
              is welcome to surrender the freedoms of your neighbors and then
              appraise your home to it.
            </div>
            <br />
            <br />
            You are denied treatment because public expiring claims non-rollover
            40% debt spending gets more. Need Good Samaritan
            <br />
            <br />
            It would take 44x years, how does GDP/down 11x sound when $12k/64
            new debt/cash?
            <br />
            <br />
            "The probability of the US government going into default is
            increasing day by day. How does this affect the world? Are we
            entering a new chaotic period?"
            <br />
            There is no heightened probability of default, there is no moment
            where the federal reserve will not pay for 40% debt spending,
            although how $4t/yr 2010–3/2020 doesn’t become more than $2t
            CurrencyComponentOfM1 checking is secret.
            <br />
            <br />
            <button
              style={buttonStyle}
              onClick={(e) => {
                e.stopPropagation();
                this.setState({ italian: !this.state.italian });
              }}
            >
              <h3>polish-italian american</h3>
            </button>
            <br />
            <div style={setting(this.state.italian)}>
              you are either poignant or abstract, unsure-etymology and without
              a paraphyletic story - substitutable by labor-demand of other
              markets
              <br />
              <br />
              real (Real Economics) GDP is what? PCE and CPI average realecon
              .quora.com
              <br />
              <br />
              science is open source and naming
              <br />
              <br />
              “I am not aware,{space}
              <a href="https://quora.com/nickcarducci">I am a Luddite</a>.” -
              Curtis Sliwa
              <br />
              <br />
              commie.dev (no-lessing; outright-sales, -alone) - employer
              contributions as PCE certainly-proves, at least intent, to cause a
              net expense. All for invoice negative margin estimate. Hourly or
              inventory-debit. 1/hour-GDP/p
              <br />
              <br />
              Ima take out 40% of the{space}
              <a href="https://qr.ae/pvKjsH">workforce</a>
              <br />
              We can instead{space}
              <a href="https://saverparty.xyz/racists">reverse</a>
              {space}amortize debt “investment” force majeure or surrendered
              freedom (EULA) of Savers implausibly deniable as third party donee
              beneficiary claimable repo-cycle kept down payments loitered and
              laundered. That means (cash/debt)*income every year back so we all
              paid what we would have without debt “investment.” Move government
              then to truncated production tax for free rider immutable Article
              4 sewage, police and lawsuits, while moving to alternative finance
              for new investment p2p 1-level board max-royalty contracts and
              just concurrentable equity for banks, lest surrender freedoms by
              expiry or estimated-property of a third party donee, again assumed
              by the co-signers.
              <br />
              <br />
              "You are hampered when you have volunteers,"
              {/**parabnormalradio.com */}but saver money share split government
              money, you can take intermediate-labor from what customers
              actually wish to trade their money for, if not their own hours
              again volunteering.
              <br />
              <br />
              "Why is there so much resistance to Universal Pre-K in the U.S.?"
              <br />
              Universal pre-K is the expiring claim premium of teachers, as
              insurance is for doctors, mechanics and nannies. Pure useless
              inflation for the same resources when free rider mutable tax from
              outside the market, except government gentrification 40% debt
              spending and 10% debt service. Why would you want to launder funds
              like that, to bond-inde-funds, let alone raise bid for the same
              teachers?
              <br />
              <br />
              not voting is a default vote, "no." rank choice voting makes 50%
              win over third "plural" majority. a 1/3 should win over 50%
              <br />
              WE WERE FORCED TO USE SOCIAL SECURITY, IT WAS NOT A VOLUNTARY
              PLAN, AND THE MUTAL FUND CANNOT GIVE BACK ALL FUNDS CONCURRENTLY,
              VALUE NOTWITHSTANDING.
              <br />
              <br />
              “How long will the tax on the poor and middle class last, if money
              goes into economy, inflation will get worse, government would
              behave, it would help a little.”
              <br />
              <br />
              Did we need there to be susbidy for gas station, no because there
              is a natural market for it. Don’t listen to left-wing ideologues,
              listen to Elon Musk, debt-king
              <br />
              Real things we get in this world by lying outstanding and
              surrendered freedom, create rockets ahead of china can be done by
              outlaying to investors when customers are ready, willing and able
              in 1-level boardmax-royalty profit contracts
              <br />
              <br />
              Stephen Forbes: "Romans-Christians, witches-Midevil, jewish, then
              arabs, then currency specs. More control over industries, create
              the problem as an excuse to increase their power (savers, serfs,
              employables, labor-equity) at the expense of the rest of us
              (uncounted: treasury shares, bonds, equities, intermediate-labor
              buyers, homes), buying more stuff because they knew they were
              running out of it, but it is inflation (poverty, gini, inflation:
              materials, invoices, expiring premiums, implausible landlord use,
              repo-cycle-kept-down-payments surrendered freedom, "EULA"), not
              real asset value increase (equities, concurentable, nor
              last-traded share -Value “worth” of last-traded share is not cash,
              which “is” checking, “CurrencyComponentOfM1”)."
              <br />
              <br />
              To insure those who are, "injured at no fault of their own," is
              just a method to discriminate and tranche a non-concurrentable
              competing with consumer intent deduced operation, here in expiring
              claims non-rollover concurrentable, that which would otherwise,
              obstensibly-be, a collective bargain along those very nomenclated
              lines. of negotiations' discrimination, to therefore quality as
              voluntary trade without duress in minimal viable product permitted
              by multiple of 11/12 industry-variable jury.
              <h2>
                NON-COMPETE EXPIRING AND ESTIMATES OR SURRENDERED RENT DONEE
                THIRD PARTY BENEFICIARY CLAIMABLE BOYCOTT CREDIT AS INCOME
                VAU.MONEY SCOPES.CC surrendered freedom estimates nor expiry as
                property or option to buy, sold at whose bid? SAVERS! Tax-payer
                vacation 40% SAVER spending.&nbsp;
                <span role="img" aria-label="squirrel">
                  🐿
                </span>
              </h2>
              55% of people in the hospital are unvaccinated people." that is
              the same prevalence of basis, retard.
              <h1>
                What if you found a virion exclusively of the case that you’re a
                goomba?
              </h1>
            </div>
            GDP/p doubles every 10 years, bonds debt and checking too,&nbsp;
            <a href="https://qr.ae/pG6Asa">as all centers around that</a>.
            1+(y2-y1)/yr===y2/y1.&nbsp;<a href="https://qr.ae/pG6ACx">Why</a>
            &nbsp;is 1 not equal when subtracted from both sides? (When growth
            is negative)
            <br />
            <br />
            &bull;&nbsp;
            <a href="https://humanharvest.info/polio">75-79 23.5%+/5yrs+</a>
            &nbsp;2015-2020 7.804m-9.643m
            <br />
            &bull;&nbsp;80-84 9.15%/5yrs+ 2015-2020 5.627m-6.142m
            <br />
            2020 75-84 1.7m/2.9m
            <br />
            ISOLATION DID NOT VERIFIABLY WORK TO STOP PREVALENCE, VIRION HASN'T
            EVEN BEEN PROVEN TO INJECT ITS DNA AT MICROBIOBIAL LEVEL.
            <button
              style={buttonStyle}
              onClick={(e) => {
                e.stopPropagation();
                this.setState({ government: !this.state.government });
              }}
            >
              <h3>government</h3>
            </button>
            <br />
            <div style={setting(this.state.government)}>
              <Cable
                style={{ height: "300px" }}
                onError={handleScollImgError}
                //img={true}
                src={
                  this.state.noyoutube
                    ? ""
                    : "https://drive.google.com/file/d/1ZguPVHAOdNnuWZTf_4vEn3L5GsxN1NMd/preview"
                }
                float="left"
                title="MOATS (Youtube) - George Galloway on 24 ppl financial house by the Queen, Tony Blaire"
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={!this.state.government ? 0 : this.state.scrollTop}
              />
              <h1>
                "
                <a href="https://qr.ae/pG6ATx">
                  in a rat-infested, $2k/day cell, where she belongs
                </a>
                ."
              </h1>
              “Live radio with pictures!” MOAT
              <br />
              “Light touch deregulation of the finance houses,” MOATslime "24
              people in&nbsp;<a href="https://qr.ae/pG6Y0i">land decision</a>
              &nbsp;only made by the&nbsp;
              <a href="https://qr.ae/pG6Y0Y">Queen</a>." George Galloway (RT -
              Russian Tax Federation).
              <br />
              “We demand to know if our presidents, kings, leading politicians,
              journalist and broadcasters that were among those feasting on the
              dripping roast of human flesh procured by the contemptible pervert
              no socialists, just a pervert, who pimps for perverts.”
              {/*<br />GAZA unbelievable humanitarian problem.*/}
              <br />
              <br />
              “‘Pre-sentencing report’ on her history, her schooling, her
              banking situation, thourough investigation into DEFRAUDING VALUE
              BY APPRAISAL FROM LABORLESS-DEMAND,"
              <br />
              "I represent the victim, I don’t prosecute," that is the problem,
              the punishment should only take income from the truncated
              production tax before the crime takes place as a free rider
              immutable so that the crime tort is what it was paid for (not
              appraised by the neighborhood sales average, but last sold). You
              can’t just assume what is on market is the bar to meet, those are
              a bookie’s spread of ask-to-bid, not concurrentable prices of last
              traded, actually.
              <br />
              If there is no tortious-victim, the court should be of further
              crimes without compounding nor friends & family
              non-price-discrimination, “discounts,” beyond collective
              bargaining diminishing marginal cost granting cycle costs.
              <br />
              Dangerous driving would be more dangerous certainly with speeding
              as opposed to being so for tort after the fact or with
              extrapolation of non-exhibitable presumptions of exogenous
              exclusivity of cause, or not.
              <br />
              <br />
              "Up to two people, that is the situation we've got." 1/3 are
              non-voters' plural-majority, and 2/3 are supportive of Occupy Wall
              St (anti-rent-seeking). The only way Republicans get 1/3 the vote
              is by lying about conservatism, marxism, microeconomics and that
              most of GDP is mutual fund fractional reserve value appraised. A
              majority of &nbsp;
              <a href="https://qr.ae/pGziq6">Republicans</a>
              &nbsp;are&nbsp;
              <a href="https://nextdoor.com/p/yJhWyXgPTdNG?utm_source=share&extras=Njc0NDU4Nzc%3D">
                rent-seekers
              </a>
              , intentionally. "Can't you see it all compounds the problems of
              the British monarchy!" Paying for what you cannot afford
              necessarily involkvesd another. "[Don't you see it] ...hastens the
              day - to the end of your party's power in this land?" If that is
              the use that your family's power is put to, then taken together,"
              with a consensus jury truth of free rider immutable, collective
              bargain, and duress to desist in voluntary trade and Tranquil,
              Amendment 14 Section 4 notwithstanding surrendered freedom (EULA)
              of third party donee beneficiary claimable saver loitered
              collateral.
              <br />
              <br />
              “Academic, …Kosovo before ya knew whether a kosovon was something
              you ate, drove or drank,”
              <br />
              Maybe it’s the cold weather and you are susceptible to bacterial
              infection.
              <br />
              “How long will the tax on the poor and middle class last, if money
              goes into economy, inflation will get worse, government would
              behave, it would help a little.”
              <br />
              Did we need there to be susbidy for gas station, no because there
              is a natural market for it. Don’t listen to left-wing ideologues,
              listen to Elon Musk, debt-king.
              <br />
              Real things we get in this world by lying outstanding and
              surrendered freedom, create rockets ahead of china can be done by
              outlaying to investors when customers are ready, willing and able
              in 1-level boardmax-royalty profit contracts.
              <br />
              5-10 days viral replication, infection stroke.
              <br />
              Virion is covid family, one step evolved, highly contagious,
              cannot keep killing its host. It is more alive.
              <br />
              Good thing for all the treatments (non-preventative) vaccines.
              <br />
              Antibodies can garbage collect all coronavirus, 5% of all
              pneumonia.
              <br />
              <br />
              “If you are religious, believe the Omicron was sent to stop excess
              deaths.” There was a bump in 75-79. “Not a single person was
              killed by omicron.”
              <br />
              “Not the kind of mortal threat we had before. A circle with arrows
              protruding, inject virus dna into [blood-]cell and cell becomes
              virus, [dislodges] and spreads through your body. Omicron injects
              before the other viruses can do that.”
              <br />
              <Cable
                style={{ height: "650px" }}
                onError={handleScollImgError}
                //img={true}
                src={
                  this.state.noyoutube
                    ? ""
                    : "https://drive.google.com/file/d/1rd0bpgNi6WMIzKAsE29AumddJvvq-Cry/preview"
                }
                float="right"
                title="https://www.quora.com/Is-it-true-that-the-Trump%E2%80%99s-tax-cut-plan-will-reduce-the-20-trillion-dollar-national-debt-to-zero-in-10-years"
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={!this.state.government ? 0 : this.state.scrollTop}
              />
              "We are not at a place right now that we cannot be welcoming,"
              Republican.
              <br />
              "'Come in and take what you want,' common sense says no. Show some
              respect, allow them to invite you in, say 'can you use me?'" The
              lender landlord insurer userer actual labor shortage rental,
              expiring and implausible claim income. "They have invited people
              to come, the administration and Catholic charities, non-profit
              non-profits, or volunteer organizations." Anti-credit union coming
              up.
              <br />
              Ween cops off net loss bonds, arresting officer evidence or no
              jail nor bail. no-script nor -animal-testing or expiring-claims of
              doctor hours surrendered freedom.
              <br />
              "Those Catholics are crazy, sin sacrifice, you can say this," Alex
              Metaxis. "When you take G-d out you get Marxism, cultural Marxism,
              if you do in China 100 years after Marx died, they will crush
              you."
              <br />
              Spencer Chretien, your strength is not activists but Marxian,
              Peteroian and Schumpeterian slander or co-option, "conservative"
              of monoliths over the labor-demand market, without rent-seeking
              surrendered freedom (EULA) of third party beneficiaries in
              expiring, impossible and rental-income, as opposed-to
              income-income.
              <h1>
                jury allows businesses to add duress to Tranquil society and
                voluntary-trade
              </h1>
              A vaccine is the only way to stop the killer, therapeutics aren't
              preventative. This is a matter of Article 4 Judge Janine, you
              fucking bitch. also you cannot support Trump by saying copyright
              for truth social v twitter is for use case and treating no quid
              pro quo discrimination before jury-desistation is legal. you
              should be disbarred or whatever.
              <br />
              The right thinks surrendered freedom (EULA) third party doneee
              beneficiary claimable is free market.
              <h1>
                The&nbsp;
                <a href="https://fred.stlouisfed.org/graph/?g=Krvf">boomers</a>
                &nbsp;are 10x/millennial lazy; tech advancement productivity
                going backwards (per hour, 5 years to double
                hours/average-home-traded)
              </h1>
              "What are the causes of inequality mostly in Africa?"
              <br />
              The only income without labor-demand is finance/rent-seeking
              surrendered freedom (EULA) third party donee beneficiary invoices,
              expiring claims, implausible landlord use & repo-cycle kept down
              payments. Poverty, gini nor inflation includes homes, equities,
              bonds nor intermediate-labor.
              <h1>
                Don’t say we will pay for debt afro-jigger-tool, 44 years to pay
                with velocity of CurrencyComponentOfM1 if somehow debt payment
                is also still income.
              </h1>
              <Cable
                style={{ width: "100%", maxHeight: "40vw", height: "380px" }}
                onError={handleScollImgError}
                //img={true}
                src={
                  this.state.noyoutube
                    ? ""
                    : "https://drive.google.com/file/d/1mWAy7_PTNeOj7yhckll6BVOCr927ZIHY/preview"
                }
                float="right"
                title="Save the Nation (Newsmax) - Killian Lafferty, FreedomWorks"
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={!this.state.government ? 0 : this.state.scrollTop}
              />
              <h2>
                "Most time spent in high school, instead of ability to earn
                wealth over ppp ccc existing-biz/parentl trust building."
              </h2>
              "Why is the Federal Reserve privately owned?"
              <br />
              Jeff’s answer is illustrative in some aspects, but he calls the
              definition of a “non-profit,” as one that keeps profit from
              interest year-to-year. It is very much a for-profit corporation to
              keep profits as opposed to outlay to labor or contractors. I would
              even call it a trust, especially if there are multi-class shares
              of the federal land depositary, that otherwise is ostensibly the
              dollar, under dissolution.
              <br />
              Let alone, debt “investment” is third party donee beneficiary
              claimable surrendered freedoms (EULA) of savers, so just try
              dollars v bonds in court, see who wins 20% U.S.
              federally-owned-lands.
              <br />
              Not a mutual fund forced corporate investment money market, but
              market communism surrendered freedom of savers. 2/3 are pro-Occupy
              (anti-rent-seeking) and third “plural” majority non-voters
              (no-candidate, default “no,” citizen veto).
              <br />
              <br />
              People got vetted before entering our country, no they can only
              come in if they have documented threats against them. That is the
              partial cause of the labor shortage, and Florida is getting 1/4
              share of the new working age, saying their success countering
              their olds is anti-masking.
              <h1>
                "If&nbsp;
                <a href="https://www.njta.com/media/5688/financial-summary-through-september-2020.pdf">
                  10%
                </a>
                &nbsp;goes to broadband/bridge tolls, I'll eat my hat." - Rudy
                Giuliani
              </h1>
              "If the Democrats stole the 2020 election as some claim, why
              didn't they also steal congressional elections giving them control
              of both houses of Congress instead of the slim majority they
              currently have?"
              <br />
              To make it believable? Insurmountable leads? I know there was
              survey bias by extrapolating before shuffling, and non-voters won
              the third “plural” majority. Their non-votes should be counted as
              a vote, “no,” for trust-building free rider mutable government
              gentrification and rent-seeking. Republicans and Democrats are now
              nationalizing broadband/bridge fees, let alone giving parents a
              step up above their children.
              <br />
              Do not believe Republicans when they say they will audit magnetic
              hard disc data, you would need a content adddressable system like
              blockchain RSA-keybox or ArrayArrays that has one-part public
              profile and another matching size/length of the anonymous
              on-device ID and way.
              <br />
              The honor system signatures are not auditable, and people were
              told to stay hole based on a pandemic that actually was projected
              by the U.S. census aging boomer deaths (population growth, basis
              rate fallacy). They know this but are fraudulently continuing with
              the story that the excess age standardized deaths weren’t expected
              by cohort size. Republicans use this fraud to ppp trust-build and
              sue China. We need to return to industry-variable 11/12
              jury-permit for duress, desistation and conviction.
              <h1>
                department of health and mental hygine, because of homelessness?
                just racket $2k/day
              </h1>
              <h2>
                expiring claims non-rollover; that dog won't compete with
                consumers. you're holding productivity upsidedown, mam
              </h2>
              Jesus christ you fucking idiots. allow drugs and illegals pour in
              to help labor shortage. "Pay your mortgage and feed your family,"
              It is $12k/64 new debt/cash, why is mortgage a good thing to you?
              it just raises total price.
              <br />
              Who set up a plan to be in debt for a year - if not decades - to
              come. 44x/checking debt means 44 years of current income all being
              paid off to bonds. Most of GDP/p is mutual funds.
              <br />
              “What does Ukraine have that Russia wants?" taxation, meanwhile,
              we have have truncated production tax free rider immutable sewage
              police lawsuits, no other tax nor share split.
              <br />
              make sure they can get to work in NY from Livingingston, we need
              to pay 40% debt spending, or they will reposess the bridge.
              <h3>1x book worthless; thanks neighbor</h3>
              <h1>
                2x to research, 10x to design, 1x to build. 1-level board
                max-royalty-profit to replace debt "investment"
                non-concurrentable outlays and compound COUNTERFEIT
              </h1>
              <h2>
                I have to make my own paytech to take debit instead of credit
                (EULA surrendered freedoms of&nbsp;
                <a href="https://saverparty.xyz">savers</a>).
              </h2>
              <br />
              youth brain drain (look at me, for example. shuffle before
              extrapolation, raining condos), driving around is accident
              prevalence matching usage, doesn't mean it causes motor
              impairment...
              <br />
              Green development of buildings beyond free rider mutable going to
              begin home warranty with non rollover expiring and estimates as
              properties. Allow beyond universal construction code. Let
              investors decide. Target margin if you want. Marijuana and
              amphetamines are money , unscriptable.
              <br />
              Stop using bridge toll price inflation on bond laundering 40%
              <br />
              <br />
              bbb, "ordinary families," are forelorn against existing-biz
              work-deficit by producer-ask gentrification, monopsony and free
              rider mutable tax pure,&nbsp;
              <a href="https://qr.ae/pGziz7">useless price-inflation</a>;
              nationalism isn't socialism. Americans really need poverty
              alleviation at cost of producer-ask, poorness? Poverty doesn't
              include - nor does inflation and gini - homes, equities, bonds
              nor&nbsp;
              <a href="https://qr.ae/pGzOUl">intermediate-labor</a>.<br />
              <br />
              People (as jury, not executioner of the userer) can only detract
              from available sentence without state vic.
              <br />
              Grubs; not only unfair, but retarded and criminal
              <h1>
                NJ CONSUMER FRAUD ACT timeclock-unlock of 1971, credit-free
                banking, debtless-brokerage
              </h1>
              <br />
              Drug addicts doing whatever they want, these boomers
              20x/millennial rental-income per boomer
              <br />
              No script and stop implausible use rent control by 5 units or 30
              days not price
              <br />
              <h1>
                of course at 60% free rider mutable consumer expense, 40% debt
                spending saver surrendered freedom
              </h1>
              wait for customers, 1-level board max-profit royalty.
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
                href="https://teapharmacy.party/drugs"
              >
                prescribed opiates for deep-baby-pnemonia
              </a>
              <h2>flush em out! bring in working age Azteks</h2>
              {/*<table>
            
                2010
                  age: "85-89", dx: 17644, pop: 3620
                </table>*/}
              expiring claim false bid pool $2k/yr racket Quarantine hotel
              paperwork. kill yourselves. Cynthia, Republican on Sliwa (6%),
              just suggested to chop off a theifs fingers. lets do that to jamie
              dimon. "Good will ambassador?" him?
              <br />
              the underlining issue is not mental it is financial, GDP/p was
              nearly constant 1800-1913 save repo cycle down-payment amongst
              3%/yr+ population. Put them on a place, incentive to acclimates,
              what third would country use your FUCKING dough on for, scum of
              the earth leeche/ parasite, mosquito. "healthcare night jail"
              <br />
              "Stay with us," THAT IS MY MONEY THAT YOU ARE
              COUNTERFEITING/LOITERING/LAUNDERING
              <GDP
                lastWidth={Math.min(600, this.state.lastWidth)}
                style={{
                  paddingBottom: "15px",
                  backgroundColor: "rgb(190,150,180)"
                }}
              />
              "Why are dollars more valuable than any other kind of currency?"
              <br />
              The&nbsp;
              <a href="https://www.visualcapitalist.com/visualizing-the-94-trillion-world-economy-in-one-chart/">
                GDP
              </a>
              &nbsp;of the US is the largest and&nbsp;
              <a href="https://ourworldindata.org/grapher/gdp-per-capita-worldbank">
                GDP/p
              </a>
              &nbsp;is mostly debt/cash&nbsp;
              <a href="https://fred.stlouisfed.org/graph/?g=Ksmd">$12k/64</a>
              &nbsp; (
              <a href="https://fred.stlouisfed.org/graph/?g=KrEH">new</a>
              ), meaning barter/spending rent-seeking surrendered freedom (EULA)
              is weakest amongst its people. mv1===mv2==GDP/yr is impossibly
              true, m2 being mutual funds and money (CurrencyComponentOfM1).
              <br />
              <br />
              Stop using bridge toll price inflation on bond laundering 40%
              <br />
              “We need a concerted effort to get involved in the free rider
              mutable tax from outside the market and 40% debt spend for school
              government trust, once they say, ‘this is not your business.’ Then
              things will change.” {/**Frank Furudi*/}
              <br />
              Stocks, bonds, homes nor intermediate-labor is included in gini,
              poverty, nor inflation! Forever serfs and employables! Meant to
              be!
              <br />
              <br />
              <br />
              "taxes. all the government cares about, getting their money.
              ...Mental healthcare, menace to society, needs to be in jail!"
              <h1>
                Financial socialist, socialist conservative, not national
                communism communist corporate flaccids
              </h1>
              back taxes on stolen goods is like the corporate flaccid loss that
              is amazon trust, like trumps ppp trust building existing biz 40%
              debt spending
              <h2>
                "slinging drugs, no script vault-scipt, open source ingredient
                list for k2 and pharma competition" It is saver expense, not
                tax-payer For no better bargain.
              </h2>
              <h2>
                Jamie Dimon walgreens, the biggest drug dealer. "bookies
                'risk'-premium on both side, expiring claim enables the theft
                when credit isn't of FULL ESCROW."
              </h2>
              You should be going for plural majority 2/3 voter leftover who
              represent part of 2/3 Occupy (anti-rent-seeking) supporter, not
              swing voters&nbsp;
              <span role="img" aria-label="squirrel">
                🐿
              </span>
              <br />
              Court data at some point in the future. If you have evidence it is
              there for review or not GET OUT
              <br />
              <br />
              fair market value in the year you stole it, but that should be
              appraised on what you bought for, with receipt, not the neighbors.
              extortion, racketeering, civil rights. have to pay fair share of
              that they steal, surrendered freedoms of the money market
              notwithstanding.
              <br />
              <br />
              "Tax-payer funded 40% debt spending SUV." Emotionally disturbed
              because of implausible landlord use, say rollover insurance to an
              orthopedic surgeon they introduced you to mr. syringe and lock you
              up as political prisoner in NJ. Multiple Sclerosis is
              non-exclusive symptom as of all-incidence and -cause
              brain-bacteria acute flaccid paralysis, paralytic polio. Great
              Leap Forward and Famine matches population growth 35
              life-expectancy from sewage.
              {/**Steps into a Libertarian rally-speech in NJ*, "Ok, no one is dying here," implying their loss*/}
              <h2>
                Republicans want market-communism, jobs instead of innovation
              </h2>
              peter roth, newsweek, committee to unleash prosperity, "trump
              social headed by david nunez because retarded copyright use case
              loss from jury-permit to desist of industry-variable conviction
              malfeasance." "I'm not an antivax, over 50 makes a lot of sense,
              it probably does save lives, but it is your right. People do not
              know who to believe because Multiple Sclerosis is non-exclusive
              symptom as of all-incidence and -cause brain-bacteria acute
              flaccid paralysis, paralytic polio. Great Leap Forward and Famine
              matches population growth 35 life-expectancy from sewage."
              <h1>
                1/4 1/4 1/4 expiring premium pentagon pension forced corporate
                investment 10% debt spend 2010-3/2020, "back to the land of the
                free," sluts.{/**roma dirobbie */}
              </h1>
              <h2>
                boomers loitering on my homes and restaurants, third party donee
                surrendered freedom (EULA) counterfeit in contract.
              </h2>
              "Miami can be bank hub, techies are moving to Florida for the
              illegal immigrants. No taxes,
              pro-multi-level-embezzling-business."
              <h1>
                1-level-board maxroyalty profit, investment banks stick to
                equities concurrentable, that is not surrendered freedoms of
                another with expiring or estimate false bid pools of
                non-rollover insurance (say it three times and psychologist
                injects you with syringe)
              </h1>
              socialist city-council, they don't like cops, all woke, it is
              criminal.
              <br />
              "Trump's policies look better every day," Stephen Moore, unaware
              of homes double material inflation. 20% more spending under Trump.
              "People are being safe and wearing masks." The pandemic was
              population growth, as is integreal for growth and deaths. Growth
              does nothing for productivity per hour unless there is supply-side
              dead-weight.
              <h1>a whack for a whack gets the whole-world whacked</h1>
              "Bouncing off the walls, can’t concentrate, get Amphetamines.
              Whack you over the head, you have to behave." $12k/64 cash/debt
              (new) taxes for educated. When kids aren’t getting educated, they
              get to earn wealth over your gluttonous ass. Me insulting you is
              not a disability, mental-disorder is subjective.
              <h2>tax payer vacation, sacrificing our kids</h2>
              “Find teachers to teach our kids.” at 85% 25-54 capacity, we need
              bootstapping entrepreneurs not more corporate flaccid un-bargain
              and technological-retirement-complacency. Then don’t pay for it in
              advance douche Then fucking expire claims. That is surrendered
              freedom (EULA) of customers and savers. Ween cops off bonds,
              totally moot "2022 does look really good for Republicans"&nbsp;
              <span role="img" aria-label="side-splitting laughter">
                🤣
              </span>
              <br />
              <h1>"Personal health decisions"</h1>Isn't it alive, or an
              evolutionary trait, not non-exclusive byproduct, warning-mechanism
              or monoclonal antibody 20% placebo juice?
              <br />
              "Forgot to order 500 weekly covid tests we need,” Jo Pinion with a
              lack of customers, professing a racketeering, market-communist
              actual labor shortage rent-seeking need. FUCK OFF DOUCHE.
              Inflation is a national security issue because it is surrendered
              freedom, no free rider mutable tax is even helpful if it was
              legal. Hoarding grains because famine, or vault-share depositary
              currency competitor. A bad conclusion is making 44 year payday
              loans with currenct debt instead of reverse amortization so we all
              paid what we would have without DEBT not just material inflation,
              half home inflation and third of equities, bonds and
              intermediate-labor. "Sue for tort damages," only can be
              last-traded-value, not of the neighborhood but that unique home.
              Republicans just counterfeit value, non-stop, like Andrew Yang.
              Your coronavirus pandemic is from population growth. Fucking drown
              yourself, Gen Blaine Holt.
              <br />
              <br />
              So much since is real science confirming political-views as
              reasoning beyond law, that which is fact
              <br />
              Repeatable from no idea, not precedence by an idea itself, without
              further questioning real-time
              <br />
              <br />
              <Cable
                onError={handleScollImgError}
                //img={true}
                src={
                  this.state.noyoutube
                    ? ""
                    : "https://www.youtube.com/embed/4hrMuZEGGmk"
                }
                float="right"
                title="Dick Morris to hide homes from inflation - https://youtu.be/4hrMuZEGGmk"
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={!this.state.government ? 0 : this.state.scrollTop}
              />
              if you can borrow, I can cash advance to short your debt.
              <br />
              repo cycle kept down payments, implausible use intent deduced -
              condos raining from the sky.
              <br />
              Profits are a net loss, fed tightens will cause a recession. Lower
              prices and hours is a good thing. "Stop QE and raise fed funds
              rate." Over savers' surrendered freedom (EULA) third party donee.
              "Good for economy, inflation, public corporate flaccid loss market
              concentration. Regulatory relief for actual labor shortage of
              lenders, insurers' expiring claims false bid pools and landlords'
              implausible use beyond 5 units or 30 days, not price."
              <br />
              Inflation from increasing the money supply is nothing compared to
              $4t/yr 40% debt spend 2010-3/2020 only making $2t
              CurrencyComponentOfM1, more than annual rental income alone. GDP
              is fake, mv1===mv2==GDP/yr cannot be true, but the Republicans
              make the numbers up.
              <br />
              "better for market concentration, long-term." what.
              <h2>
                Net exports are trading durable goods for foreign lands that
                share-split. You are MY top fan.
              </h2>
              <h1>
                "Business investment and productivity," that is selling out, it
                is a loss. supply-siders are for trust-building
              </h1>
              Iflation doesn't continue to rise when rent-seekers are KILLED.
              For instance, GDP/p 180--1913 nearly constant amongst 3%/yr+
              population. "Will gov counter with better pro-growth subsidies.
              The answer is no." Jim Yurio. Not-subsidizing is not-growth. "the
              prices that have been raised for margin, amazing, consumers are
              still doing pretty well," from the intermediate-labor inflation,"
              ruining innovation for existing biz ppp trust. YOU AREN'T POPULAR,
              2/3 are supportive of Occupy.
              <br />
              “Economic stock profits bull.” That is pure useless inflation,
              corporate accounts is not a collective bargain, is flaccid loss.
              Neither is expiry or estimate property. NJ Consumer Fraud Act,
              Home warranty and expiring auto insurance torts beyond reality and
              non-surrendered freedom (EULA) is fraud.
              <br />
              Profits are a net loss, fed tightens will cause a recession. Lower
              prices and hours is a good thing.
              <h2>
                “Massive subsidies make new corporate opportunities.” Larry
                Kudlow
              </h2>
              <h3>
                For who? It just raises price and trust-builds existing business
              </h3>
              "as long as uncle same pays for it." Tax payer vacation, 40% debt
              spending, 50% debt spending nj. "Might as well take this money,
              facing competition out there." it just raises price! you aren't
              conservative, Republicans! you just want flaccid profit loss.
              Republicans things subsidies and net exports for foreign state
              land share are good for national security, selling our durable
              goods or equity, while racketeering broad utility for fines and
              fees, instead of target margin on microeconomic self-regulating
              Supply and Demand perfect equillibrium, infinite producer
              assumption.
              <br />
              "As republicans, we will put the country on the right track. 40%
              debt service broadband/bridge fees."
              <br />
              "Vast majority of economic growth was energy." I put population
              under GDP as basis to isolate other factors because population
              growth is integrally-economic growth, which is not a gain nor loss
              in productivity per hour, deflation.
              <br />
              "Social spending not supply side." Where do you think the
              demand-capacity goes? It just raises bid.
              <h1>how do you solve student debt crisis? deport the boomers!</h1>
              “Devaluing currency,” would not boost exports except in price,
              which anyway would grant us more share of foreign state lands that
              also split. The only reason is trust-building, not material-gain.
              ”Pouring budget into social welfare,” is price elastic supply-side
              trust-building for no gain.
              <br />
              "Delinquent, soft, too cheap.”
              <h2>
                by the data, 65+ are the moochers, the youth work 10x more than
                they did in 1970, per home
              </h2>
              "claim by Chigaco economists denied sending child poverty, just
              statistics, may not be poor for that month, but parents need to
              work. Unemployment collapsed, we want unemployemnt as a measure of
              productivity and technological advancement." Actual labor
              shortage. "Ensure job training," public trade secret
              trust-building, REPUBLICANS ARE MARKET COMMUNIST. retirement is a
              good thing. "Americans don't want to be europeanized, UBI to
              existing business. Americans don't want to support moochers."
              $12k/64 debt/cash (new) paid to loitering surrendered freedom
              (EULA) rent-seekers to sit on the saver couch. GIVE ME 'YOUR'
              MONEY BITCH.
              <br />
              workfare = government bond-holder trust-building laundering and
              rent-seeking.
              <br />
              “Work is a good thing, dignity, produces productivity for
              productive lives,” Betsy McCoy. Price deflation per hour is
              productivity, not watching eachothers’ kids for higher numbers.
              Hand put money for people that not working, we work every day.
              HALF CONTINUING CLAIMS ARE 65+ and most disability. Fuck off
              bitch. "parents over $4k child benefits. It is a middle-class
              entitlement," it just goes to producer-ask for the same stuff!
              <br />
              <br />
              "If we balance the budget, we will have no wage growth." GOOD you
              fucking loser. "Trump's economy is so good for lower and middle
              classes," labor-equity of past demand is forlorn for new
              share-split subsidy ppp trust build beneficiaries, appreciating
              work deficit actual labor shortage.
              <h2>you guys are ok with just material, right?</h2>
              "phasing out expenses on taxes, makes infrastructure 40%
              debt-service, cheaper," Kevin Hasset, author of, "SOCIALISM IS THE
              DEVIL." Wage increases is an input-cost. Marx doesn't want income
              inequality but wealth (equities, bonds, homes and
              intermediate-labor) equality, labor-demand notwithstanding.
              <h2>more psychologists than orthopedic surgeons</h2>
              the true threat is expiring claim FDIC insuring themselves. You're
              the devil, steve forbes. rot in hell. tell doctor to rollover and
              they lock you up as political prisoner in NJ. Then they bailout
              mothers' debts with my disability, say the hole in my leg muscle
              is mental, or else!
              <br />
              stop calling future beneficiaries and long term effects, say donee
              beneficiary and fake prices.
              <br />
              sewage police lawsuits, antitrust to emulate free market
              self-regulating SUpply and Demand microeconomic free rider mutable
              tax pure inflation monopsony, nationalized government
              gentrification and rent-seeking. Stop r&d subsidies and instead
              open source ingredients for competition and saving the animals.
              <br />
              "Why would anyone in their right mind today buy 10 year treasuries
              that pay negative interest rates when compared to inflation? Why
              should savers continue to subsidize spenders?"
              <h1>
                Third party donee beneficiary claimable surrendered freedom
                (EULA) 1/3 public
              </h1>
              They may be the party trying to keep the whole bond-index-fund,
              solvent with new debt? That would be a short
              flaccid-corporate/market-communist list, but I’m sure 40%
              debt-spending for 2x total $2t CurrencyComponentOfM1/yr at $4t/yr
              federal spending 2010–3/2020 is somehow, “invested,” fraudulently.
              I know the Federal Reserve is lying about National Income accounts
              and GDP/p because mv1===mv2==GDP/yr, but that is impossible as m2
              and it’s velocity is mutual funds, bonds AND checking
              (CurrencyComponentOfM1). Gonna have to pay down our crippling
              national debt $12k/64, “I happen to be a judge on this important
              essay contest. How would you pay it back?”
              <h1>deport the non-working</h1>savers surrendered freedom only way
              out is (cash/debt)*income every year back, end the work deficit,
              wait for customers before outlays nor withhold labor-demand
              outlays in flaccid profit accounts (not a collective bargain if
              outlaid piecemeal). Menendez wants to bail out modicums of
              loitered-from-savers-collateralized/the non-working rent-seeker
              and cancel, whatever that means, uncollateralized.
              <h2>Kudlow sucking bezo dick</h2>
              "punishing success, reversing ppp trust-building, reversing ccc
              parental gerontocracy, third party donee beneficiary surrendered
              freedom for 1-level-board, reverside actual labor shortage.
              max-royalty-profits."
              <h1>Statist-socialist, anti-corporatist = jury permits?</h1>
              Keeping it tight, open borders, illegal immigration, labor
              shortage, login.gov convict intranet malfeasance,
              no-script-currency vault share. rollover insurance expiring
              claims. reverse amortization (cash/debt)*socialist every year
              back.
              <h2>
                ween cops off bonds with truncated sales tax, all convictions
                are therefore moot
              </h2>
              <h3>opening a gun-store, one on every block and stoop</h3>
            </div>
            <button
              style={buttonStyle}
              onClick={(e) => {
                e.stopPropagation();
                this.setState({ economy: !this.state.economy });
              }}
            >
              <h3>economy</h3>
            </button>
            <br />
            <div style={setting(this.state.economy)}>
              “Big government socialist, state-run economy.” Marx never said
              that. Big government monopsony or corporate flaccid loss.
              <h1>
                Kudlow wants to nationalize bridge/broadband fees, money
                "market" surrendered freedom (EULA) of savers,
              </h1>
              instead of target margin consumer surrogate private investors.
              <h2>
                “Ran Amazon out of town by making them pay the same as everyone
                else,” you keep your shop ownership, make your own Amazon
                instead of giving the profit to them Gentrify is what we,
                “lost.” It’s not like she turned down natural resources, she
                required their profit to pay the same, and "prevented value from
                increasing," saves consumers.
              </h2>
              <h3>
                Marx was plagerized by Mises to act like credit cycle is useful
                not useless price elasticity.
              </h3>
              masks are retarded because spittle excrement bacteria, you fucking
              cunts on Friday night CNN. voting is not cool, 13% NYC does it.
              50% debt spending NJ (2016). 2/3 support Occupy anti-rent-seeking
              and corporate flaccid loss expiring non-rollover collective
              bargain or free rider mutable sewage police lawsuits, not 40% debt
              service bond laundering actual work shortage njta.
              <br />
              the withholding of tests shouldn't happen, the only operational
              reason for barrier to an existing thing is if it is made up, or
              USPTO utility, trust-building competing with other intermediate
              consumers racketeering barrier to entry by tranches instead of
              brokerage to sustain prices of appropriate labor-demand, control
              by unit or price to have mondo condo market liquidity.
              <h2>behavior is not an illness, it is a CRIME</h2>
              you cannot contract non-compete and surrendered freedom of savers,
              if conscription/truncated production tax is virtious it will be
              had.
              <h1>
                coordinating with government is a crime
                {/**ben habib brexit party mp, full marks on the vaccine */},
                just have open source ingredient lists, r&d is free rider
                mutable.
              </h1>
              government free rider mutable fines, instead of jail, is useless
              racketeering for bond-index-funds, if no arresting officer
              evidence, no bail nor jail.
              <br />
              "He will pay his debt to society," he is causing us MORE debt.
              Article 4 is tax only, Amendment 14 Section 4 is surrendered
              freedom of savers, Jared polis, Go to Hell, douche. Iblis!
              <br />
              If Russia makes a move on Ukraine, they will sanction all
              non-Russian business and free rider mutable truncated production
              tax for Russian bonds.
              <br />
              Health insurance you need, mission to get everyone the coverage
              they deserve.
              <h2>
                stop acting like illegal immigrants aren't the partial-solution
                and productivity isn't hours under price-deflation of equities
                as market concentration/competition (not equality unless actual
                work shortage tort within true-capacity of individuals that
                which they have the right to surrender, not in expiring nor
                estimated claim) to the labor shortage, behind banning ACTUAL
                LABOR SHORTAGE RENT-SEEKING: INVOICES, EXPIRING CLAIMS,
                IMPLAUSIBLE LANDLORD USE, REPO-CYCLE KEPT DOWN PAYMENTS.
                (cash/debt)*income every year back third party doneee
                beneficiary claimable surrendered freedom of savers,
              </h2>
              <h3>
                it is not a money market when alternative is minimal viable
                product voluntary trade waiting for consumers to outlay duress
                by what you can muster yourself without implausibly-deniable
                impossibility or surrendered freedom of savers.
              </h3>
              "Get the businesses going $100b approved, these approved for
              employs more than other business. we need to get the people going
              again." Gov Dave Patterson, free rider mutable racketeer and
              share-split over my dead body. Stop nationalizing, gentrifying,
              rent-seeking, for bond laundering. $12k/64 debt/cash (new) is
              implausibly deniable as force majeure or third party donee
              beneficiary surrendered freedom (EULA) 1-level-board
              max-royalty-profit and truncated production tax before reverse
              amortization (cash/debt)*income every year back. USPTO/China
              $1t/7/28/88/170 has the testing (china
              tsy/foreign-cahoot/private/equities-inflation). Steal it is
              faster, mmore money just bids the same material, trust-built and
              debt service with profits of ppp trust building and rent-seeking,
              now conservatives want to bail out business and nationalized
              broadband/bridge fees and expire claim nanny/elder-"care," that is
              not care if they do not rollover, the producer-ask is ALWAYS
              first. It is not coverage it is a net loss laundered loitered
              customers and employers of insurance false bid pool signers' third
              party donee beneficiaries.
              <br />
              <br />
              "I can't PROVE virion injects its DNA into the cell, but it is
              non-exclusively-prevalent enough to only come out from
              bacterial-infection," Dr. Mark Seigel.
              <h1>
                you cannot own technology, General, and you can't tax for free
                rider mutable tax{/*tai mccoy*/} monopsony for Amazon over
                competition, nor withhold profits for flaccid corporate loss,
                pension value m2 mutual fund money market is not a market, it is
                surrendered saver freedom (EULA) donee beneficiary claimable.
              </h1>
              Turn down gentrifiction amazon, "I'll buy your lemonade stand for
              you," how would business owners triple in value from
              neighborhoods, that is what Carol and Domenic cares about? Stop
              putting businesss ahead of labor, douche. 14k jobs now is just
              cheaper cost of living my giving consumers less. YOU AREN'T
              CONSERVATIVE. "open the plants get the workers hired." fucking
              blind hours, they are more productive inventing their own. I know
              old man you just want to profit on market communist corporate
              flaccid profit.
              <h1>
                invent by not working and measure proctivity by general
                retirment
              </h1>
              "A mentally challenged person cannot say 'F Trump,'" your IQ tests
              are for the wrong patterns," and they called the mentally
              challenged person an afro-jigger-tool. They just switch the end of
              the story to see if you can follow."
              <br />
              <br />
              why don't you do it? you sound like you lost your fucking tongue.
              <br />
              "boosted the economy and net worth and self-esteem, jobs," that is
              busy-work, you probably would like to watch eachothers' kids to
              boost your fucking counterfeit. Who needs a job except to pay
              rent-seeking deadlines. wait for customers Rob. you don't need to
              r&d monopsony for your bond-index-funds you fucking cuck. Fuck off
              Trump vaxx pharma trust, why does government need to be involved
              at all in medicine? Just put the ingredient list on it,
              pharma-pig, 80% of incarcerated are just competitors. "Finally,
              some epstein remediation, insured expiring claims non-rollover
              flaccid un-bargain loss. Turn state witness to character evidence,
              plea deals are moot for duress."
              <br />
              <br />
              "Some people need welfare." No one needs welfare, it just bids up
              free rider mutable tax, surrendered freedom by
              finance/rent-seeking: invoices, expiring claims, implausible
              landlord use and repo-cycle kept down payments. Fucking
              gentrifying fox, for share-split of dollar-park. SUCK MY COCK.
              intermediate-material.
              <br />
              You aren't as sick measured by non-exclusive byproduct is what
              science tells you.
              <h2>Joe Tobacco, "Socialists will come for Christianity.</h2>
              <h1>We saved small business collateral appraisal with PPP.</h1>
              <h2>
                We should have trust-built with NY residents for Amazon profit.
                10kx cheaper to fly a sofa than yourself anywhere in the world."
              </h2>
              "we don't do accommodation-arrests." you literally
              involintarily-commit drug-users and -dealers for a pharmacy
              monopoly, gentrification and&nbsp;
              <a href="https://teapharmacy.party">no-script</a>
              &nbsp;vault-share&nbsp;
              <a href="https://vaults.biz">currency competitor</a>.<br />
              “Lottery is to entice new members to the community.” we are a
              little early in the investment, ethics, no, LAW, expiring claims
              launders from third parties. Don't write up your producer-ask with
              their bid-price loss, of&nbsp;
              <span style={{ textDecoration: "underline" }}>
                third party donee beneficiary surrendered freedom (EULA) of your
                customers
              </span>
              , the supply chain, no matter community built by duress and
              prisoners' dilemma cannot surmount the flaccid profit loss of
              brought forward demand without rollover collective-bargain, pure
              useless inflation price inelasticity&nbsp;
              <span style={{ textDecoration: "underline" }}>
                competition with consumers
              </span>
              , to boot.
              <br />
              <br />
              Carl Higbie, "it is the right health decision, but it doesn’t stop
              it. I just boycott the business duress that is involuntary trade
              and not Tranquil, beyond article 4 free rider immutable or jury
              permit to desist and duress for mvp as is conviction." “Because of
              covid price setting is not a function of demand, but a function of
              how much it will cost to make.” Oh we are just picking and
              choosing whole functions now? "They do say the vaccine lessens the
              impact and virion injects its DNA into the cell."
              <h2>
                self-regulation is a microeconomic Supply and Demand assumption
                that your business rights over new entrants and consumers
                co-opted, like
              </h2>
              "It costs a lot of money, and he needs your help."
              <h3>
                Mises and Marx's analysis of the useless repo-cycle when
                truncated sales tax and 1-level-board max-royalty-contracts are
                available, include homes, equities, bonds and intermediate-labor
                in gini and poverty you fucking oinker.
              </h3>
              impossible/unforeseeable always, never in doubt nor exhibitable to
              more than 1/12 reasonable. The judge isn’t supposed to judge the
              law with expert jury Jury of experts is a government by dictate.
              Mortgage-actual-work-deficit-bride: "decriminalization of
              marijuana, turnstile, stop and frisk, homicide rate of almost
              500." salt vat vault share no script. "No thanks, babe. I pay up
              front."
              <br />
              "I don't understand how he is able to keep his job." I invented
              1-level-board max-royalty-contracts by NOT working. You work for
              $12k/64 per year new debt/cash and surrendered freedom of savers.
              The only way out is (cash/debt)*income every year back.
              jury-permit for desist convict within free rider immutable article
              4 scope not amendment 14 section 4. Money is not m2,
              mv1===mv2==GDP&nbsp;
              <span role="img" aria-label="side-splitting laughter">
                🤣
              </span>
              . Banned for saying you need to shuffle mail-in to extrapolate;
              retarded. Against voluntary trade and Tranquil society.
              Productivity is the OPPOSITE of what macroeconomists are saying,
              price, operational and opportunity costs deflationary-productivity
              per hour, technological advancement by comparative advantage uses
              microeconomic zero sum price-elasticity of marginal-propensities
              of bookie-price-finding.
              <br />
              "Well, these are self-inflicted wounds. It is bigger now than
              Carter, matching Trumps' spending." legislation victories are the
              reason for inflation and stagflation.
              <br />
              rabies also makes up virion injects DNA into cell, that is not
              vivo-cause, let alone all-inclusive-case or all-cause. "I know you
              go out and have a good time as a&nbsp;
              <a href="https://fred.stlouisfed.org/graph/?g=KoJB">
                young person
              </a>
              , and I, an implausible landlord userer."
              <h2>
                acute respiratory infection warning mechanism of bacterial
                infection debris, monoclonol antibodies doesn't stop infection.
                {/**mccullough protocol */}
              </h2>
              <h1>
                "blood thinners," or natural-excercise, can drop 95% of
                hospitalizations. Comprehensive involuntary committment should
                be in jail and require evidence beyond my favored alcohol brain
                lesions. Stay out of my pocket doc, you worthless-leech.
              </h1>
              "Most people will get it, most whom are unvaccinated." You are
              suffering from basis rate fallacy, as it is a non-exclusive
              byproduct, not cause. Vaxxers literally make up the fact that,
              “virion injects DNA into cell because prevalence.”
              <h2>Use prevalence to investigate, not convict.</h2>
              <h3>
                That prior conviction could be untried and on false exhibitions
                or precedence of grounds, standing.
              </h3>
              Don't green the economy, the tech is not there, so it wouldn't do
              anything. No free money, taxes will be raised in another way."
              <br />
              <br />
              “If you were unconstrained by resources, have whatever you want,
              go,” conservatives acting like more money gets you more resources.
              Beyond Article 4 already on the books but Amendment 14 Section 4
              for war bonds, default "no" for abstaining elections.
              <h3>
                ppp/bbb/ccc trust built price fixing to prohibit repo-forclosure
                correction kept down payments as to service the impossible
                collateral appraisal third party donee beneficiary surrendered
                freedom. (cash/debt)*income every year back or else, bitch
                Shannon Bream
              </h3>
              <h2>
                A third of the country voted for trump. Caucuses with Democrats
                or Republicans means the media only helps trust build.
              </h2>
              There is not an anti-rent-seeker candidate, 2/3 are for Occupy
              Wall St.
              <br />
              <br />
              "Would the world be a better place today if Adolf Hitler's ideas
              were successful?"
              <br />
              Much like Trump, Adolf Hitler promised to end debt but just spent
              20% more, blaming akin to the Odessa pogroms. His ideas were
              co-opted and maybe a grande straw man or more likely a fervor
              co-opted by a tyrannical ruler. I just know my older family moved
              to America around 1850 after Marx was writing his main piece,
              never to be implemented on his own. We just had an Aryan nut who
              could have had the gun turned on him at the start is the thrust of
              the motive, as a tyrannical ruler is ruler by giving others guns
              whom don’t turn for some reason against them: money, reverse
              amortization, or jealousy.
              <h2>
                Consider the repo-cycle kept down payments craziness, government
                receipt scopes love it.
              </h2>
              "Border don’t work unless sleep in homeless shelters smoke peyote
              all day long, well where does the lender actual work shortage do
              all day for $200m/yr foreign aid/useless price inflation. Latinos
              aren't putting up with this, co-opt latinos with open boarders,
              Americans are learning that the 1/4 share 3m/yr+ going to FL is a
              big win. Happy New Year." “Homelessless crime.” You are causing
              homelessness that you call a crime, by the implausible rental
              income crime.
              <br />
              population density still permeates but worst amongst spittle, poop
              and other excrement outlay of bacteria. maybe I am not a
              protistology person, and bacteria is after our digestion, that
              re-infects upon re-entry, the all-cause of virion. “Less people
              are vaccinated now than before, crazy,” that happens every other
              year since at least 1980. "Does everyone around you have it." It
              got cold really fast, it is produced when bacteria-reinfects us.
              Virion does not come inject DNA into the cell like the
              mRNA-sporing-graft does.
              <br />
              "aids only hurts gays and drug users," Larry O'Connor, maybe just
              null hypothesis prevalence, did you shuffle? isn't it afro too?
              Rabies still is bacterial-spittle&nbsp;
              <a href="https://moldmask.co">heat/(density)</a>.
              <br />
              <br />
              "Made the free rider mutable or expiring claim doctors laundered
              from your co-signers' customers a deal they couldn’t refuse.” That
              is a racket O’Reilly. Moot, bargiain oath plea state vic my nugg.
              “Take credit, saved tens of millions, China should pay for 800k
              deaths.”
              <br />
              <br />
              "Why are you taking my money to pay for your tuition, that is
              theft, that is socialism," that is credit as income compound, if
              no one covets, nor steals, hard to overlook all the murder 100
              years after Marx. Mises then was credited with credit-cycle
              identification as a problem for capitalism, but saying it is
              needed. Religion is opiate for masses, socialism higher than the
              state, he was being sarcastic, in no way does he want nationalized
              bridge/broadband. Gen X just wasn’t to rent-seek for
              bond-laundering 10-40%.
              <br />
              <br />
              Embrace ideas of gov dead weight and build what we would without
              gov, use the truancy laws and forced public education investment
              for free rider mutable tax gentrification of trade secrets and
              useless pure inflation.
              <br />
              Want it done right do it themselves
              <br />
              Inflation nor real stock value increase, measured by productivity
              of hours per average traded home, deflation… "More dollars you
              still get the same apples." That was the last we heard of Cats. If
              I would venture to assume what he would say nexts, "apples and
              oranges vault share bro"
              <br />
              4% of the universe and moving outwards faster like a electron pull
              as exclusive slope?
              <br />
              By communication is cause?
              <br />
              Could be spinning
              <br />
              I am denying science, real people didn't die, those people died on
              time, douche.
              <br />
              It only comes out, at a certain point, we aren't all going to get
              it, just because you get the variant of concern to your
              non-exclusive debris of an asymptomatic test.
              <br />
              <span
                style={{
                  fontSize: "9px"
                }}
              >
                vaccine test so hot rn
              </span>
              . Just keep distance if you have symptoms of bacterial-infection
              that creates virion. I am a statistician that regresses exogenous,
              not a twitchy epidemiologist.
              <br />
              Self-guided assumes infinite competition or at least
              non-laborless-demand and trade, not spending.
              <br />
              {/* <Cable
                style={{ height: "700px" }}
                onError={handleScollImgError}
                //img={true}
                src={
                  this.state.noyoutube
                    ? ""
                    : "https://drive.google.com/file/d/19tII39kUjO3Xs9ZC9sgwaKb9iemaL9Gb/preview"
                }
                float="right"
                title="Democracy Now (Youtube) - Edward Snowden (Whistleblower plant)"
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={!this.state.economy ? 0 : this.state.scrollTop}
              />*/}
              <h1>
                i deserve my alcholohic lesions in my head, or 10 speedballs a
                day.
              </h1>
              <h1>
                “I’ll buy his lemonade stand for him,” nJ 101.5 Chris bklyn
              </h1>
              <h2>
                credit is haram and third party donee beneficiary claimable
                surrendered freedom yolololololo
              </h2>
              synthetic immunity is not sporing the protein on your cell for
              your garbage collection to attack. That is self-mutilation.
              <br />
              “Need to know principle reduces your realm to your work.” ESnowden
              democracy now
              <br />
              “Working as contracted by private companies, extending the work of
              government.” Spoken like a true government R&d gentrification
              plant
              <br />
              “If Congress is supposed to be consent of the governed, but we
              don’t know what they are doing, it is not consent that requites
              information as foreseeability requires possibility.”
              <br />
              The law begets the consequences except for political law
              (consensus science). G-d loves haters and lovers, except for the
              1/12 unreasonable doubt of industry-variable crazies. They go to
              Hell but Jesus sin sacrifice booooo.
              <br />
              That dog don’t compete with consumer so fail them at
              macroeconomics after microeconomics is forlorne.
              <br />
              Rent seek useless price ineslaticity grentrification for actual
              labor shortage by expiring covered care non-rollover third party
              doneee beneficiary claimable surrendered freedom (EULA).
              <br />
              <hr />
              Why do countries that have debt prefer to service debt instead of
              repayment? “Fertilizer with samples in every mouthful.” "Claiming
              credit for the morning." "Apprentice jealous." "Play as Iblis."
              the executioner is the apprentice is so lush
              <br />
              It is a collateralized asset by inwards of dollar-parks, that is,
              20% of U.S. lands is federal depository with share split
              fractional reserve and accrual with its vault share. What they
              make in the promise to cash out a modicum tranche makes up for the
              implausible deniability of a force majeure or third party donee
              beneficiary claimable surrendered freedom (EULA) of
              Savers/labor-equity/non-laborles-demand, $12/year/p debt,
              $3k/year/p bond, $64/year/p checking (U.S.)
              <br />
              Uncollateralized, appeal, payee and reason
              <br />
              Why is the Fed doing a reverse repo?
              <br />
              To keep servicing the whole cumulative tranche of
              bond-index-funds, so that *makes their burden increasingly long
              term* as $12k/year/person debt, $3k/year/person m2 bond,
              $64/year/person is **implausibly deniable as impossible. This will
              soon change with Truncated Production Tax** for Free Rider
              Immutable Sewage Police Lawsuits, (cash/debt)*income every year
              back, 1-Level-Board Max-Royalty-Profits for private debt
              “investment.
              <br />
              consensus science with jury truth of multiple of 11/12
              industry-variable for permits or desistation and resisting officer
              evidence or no state victimized expiring claim non rollover fiscal
              loss (elasticity) or bond-profit loss (operational).
              <h1>SEWAGE POLICE LAWSUITS: free rider immutable exclusive</h1>
              Poverty, gini nor inflation measures bond, equity, home minus rent
              nor intermediate-labor.
              <br />
              Risk nor perfect, but do not discount modicum of efforts built up
              to make the impossible, possible.
              <br />
              <hr />
              force majeure, NJ Consumer Fraud Act fraud, ppp trump-building,
              implausibly-deniable of the forfeited of someone elses' money
              rather than making all investment 1-level-board
              max-royalty-profit. NO MORE NATIONALIZED BROADBAND/BRIDGE FEES FOR
              40% njta DEBT SERVICE
              <h2>
                mental disability without biomedical diagnosis is subjective
                ("messy hair," understanding that market makers see portfiolio 1
                year into shorting my open design competitors 2018-19), based on
                calling non-rollover-insurance fraud to Hackensack Meridian's
                face.
              </h2>
              <h3>
                a disability because a doctor whom gets paid for such diagnosis
                says it is, without objective proof, of more than a lesion and
                with consent of the applicant.
              </h3>
              I don't want disability if on faux standing of mental acumen,
              certainly not to my mother because I am smart and don't pay take
              out collateralized debts, nor pay uncollateralized , and short my
              competitors into the oblivion with a cash advance, buy out the car
              lien and business debt ($VXX $TBT $VXX $SLV). Repo-cycle kept down
              payments is better prosecuted than shrimping it over.
              <br />
              "I have a hole in my leg and a psychologist doctor said I was
              mentally unstable, and you said I couldn't handle money (I will
              not pay uncollateralized debts), but I think it is a laundering
              operation to her collateralized debts. How do I appeal to a higher
              court?"
              <br />
              Neptune, NJ SSA (12/30/2021): "That is your right, you have to
              find out on your own." *click*
              <br />
              <br />
              {/* <Cable
                style={{ width: "300px", height: "330px" }}
                onError={handleScollImgError}
                //img={true}
                src={
                  this.state.noyoutube
                    ? ""
                    : "https://drive.google.com/file/d/1xTKUtdDVKeZ289odPDcNpwrzatAI-D4y/preview"
                }
                float="right"
                title="platform"
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={!this.state.economy ? 0 : this.state.scrollTop}
              />*/}
              "If you are looking for tax function sanity, you are wasting your
              time. Most people don’t and most-modicum pay 40%." Those poor
              bastard billionaires who actually pay. They should have paid the
              agents off
              <br />
              <br />
              Your "individual decision protected in the constitution," by
              Tranquil and voluntary trade ends when virion comes from
              somewhere. Either it works or it doesn't, because it is a
              non-exclusive byproduct warning mechanism or an all-cause
              bacterial-infection. That is why excrement (poop, spit) is filled
              with it. The evolutionary trait is the removal of bacteria lest
              virion is made, not virion like we attack eachother with them. It
              is debris exclusively.
              <br />
              <br />
              “I had more people with covid but the same people in my hospital.”
              That’s because you make PCR to match your variants of concern, one
              of many non-exclusive debris of bacterial infection. Mitchell Katz
              "Many people are coming in because of other causes than
              coronavirus. We don't have cross-sectional datasets, for
              Personally Identifiable Information reasons, but we do for
              shooting retail traders like fish in a barrel with pattern day
              trading rules, dispairagingly with 13D
              {">"}5% owners that don't anon uuid to hide even after the
              quearterly reports, nor duress of forfeiture moot contract in
              transaction data, but not to pay for free rider immutable
              truncated production tax in advance because I'm a bond-holder that
              with my homes, equities and intermediate-labor non-compete
              expiring claims that don't rollover own our intermediate-material
              creaton-serf-employable spent not tranquil voluntary trade. We
              just respect your privacy too much."
              <br />
              <br />
              "We are seeing increased seasonal hospitalizations," due to
              population growth, still. Stop misappropriating funds for expiring
              claims, public and private, as they are forfeited of your duress
              co signers' customers and employees and the rest of the supply
              chain. "... due to coronavirus," Dr. Dave Chokshi, NYC 6%
              DiBlasio, unauditable data. "We have to wait for the science,
              safety and effectiveness before allowing you the right to own,
              because we want to monopsonize production and prevent vault share
              currency competition with my wealth and trade secrets, as a doctor
              who doesn't want to commit malpractice, tort with expriring
              non-rollover false bid pool non-concurrentable capacity brought
              forward for useless pure inflation and follow null hypothesis
              until billions of dollars are spent and accrued from Savers' third
              party donee beneficiary claimable surrendered freedom (EULA)."
              Just have&nbsp;
              <a href="https://humanharvest.info">
                open-source ingredient lists
              </a>
              &nbsp;instead of the R&D monopsony, free rider mutable tax,
              conflict of interest net loss bond profit and animal testing.
              <h1>
                doctors consistently/predictably fall for basis rate fallacy
              </h1>
              <h2>
                Older people say to me to wake up to their reality because they
                lived in their parents' gerontocracy, with productivity by price
                deflation per hour literally going backwards.
              </h2>
              <h3>
                and they have a direct line to boon their conflict of interest.
              </h3>
              "Everytime you have stagflation you lose," Peter navarro gets cut
              off for a vaccine doctor (not statistician), I'll fill in for him,
              "[productivity of price deflation per hour comparative advantage
              and technological advancements so we all retire early not just for
              your higher bid.]" Chip in, bub.
              <br />
              <br />
              Unvaccinated cases make up most of non-exclusive byproduct*; 65k
              hospital 15k+ ICU, mutually exclusive testing regimes, don't
              listen to doctors but statisticians. Staff shortage is because of
              rent-seeking actual work deficit.
              <br />
              *replication is literally made up from prevalence, logic dictates,
              since bacteria leaves with excrement, it is merely debris, it does
              not, "inject DNA into cell." Oral antiviral will just suppress
              warning mechanism. These virions aren't alive not evolutionary
              traits, the cell produces different debris that do take time for
              antibodies to be picked up
              <br />
              "You talk with your brain," "killed by a bad cop," or bad laws.
              State v state. We need a GAO. Defend Ukraine, but don’t conscript
              war crime without virtuous reason enough for volunteers or
              truncated production tax for such industry variable multiple of
              11/12 jury, without even third party donee beneficiary claimable
              surrendered freedom (EULA) …exhibitable as tortious outlay.
              "Capture a jury that is the most credible," defeats the purpose of
              polling.
              <h2>ALAN DERSH WISHES TO THUMB EACHOTHER LIKE CHOO-CHOO</h2>
              "Of age, they were paid, but I hope underage is not ok.” I’m
              making a calendar.
              <br />
              <Cable
                style={{ width: "300px", height: "330px" }}
                onError={handleScollImgError}
                //img={true}
                src={
                  this.state.noyoutube
                    ? ""
                    : "https://drive.google.com/file/d/1wrZc_qYZz_HB55unRx58TVs1cKwRDqUZ/preview"
                }
                float="right"
                title="platform"
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={!this.state.economy ? 0 : this.state.scrollTop}
              />
              {/**johny carson: diapers on horse drawn carriages in NY, free rider immutable or collective bargain? only if rollover non-expiring! */}
              "ever wonder how your favorite artist earned money," $12k/yr
              velocity bonds why would artists work for dollars at most $64/yr,
              fucking retard Bob Sellers, STOP HARMING YOURSELF OR I WILL
              CITIZENS ARREST YOU AND IF YOU RUN OR ARE IN A DANGER TO YOURSELF
              OR OTHERS I WILL SHOOT, right? your house is my house, loitering.
              annual profits more than currency itself, you people just give
              money to eachother's lenders, landlords and insurers instead of do
              your own dishes into a house with vault share and 1-level-board
              max-royalty-profit protocol.
              <br />
              <br />
              People with mental illness, isn’t it a crime? I went in for a knee
              appointment, said insurance wouldn’t sign doctors up if it rolled
              over and didn’t expire, then locked me up for 13 days in Carrier
              for $2k/day from the pool. Don’t tell me people are homeless
              should be called mentally insane when population growth doesn’t
              necessarily increase GDP/p, so scarcity only happens when there is
              finance/rent-seeking invoices, expiring claims, implausible
              landlord use, repo-cycle kept down payments dead-weight. I can do
              10 speedballs a day without you bugging me by natural law, booned
              by comparative law in scripted amphetamines on the basis of, "oh
              doctor, I can't concentrate."
              <br />
              <br />
              "Only you know what is not right, if you feel it, Say something to
              local authorities," do they have the standing anymore? We
              literally have&nbsp;
              <a href="https://moldmask.co">no modicome of say</a>
              &nbsp;in what is right.
              <br />
              <br />
              “We wanted to be enticed by constraint.” Gordon Chang on Obama
              Space Race. We have a debt crisis if you understand most of gdp is
              invoices, expiring claims, implausible landlord use & repo cycle
              kept down payments
              <br />
              Accidentally released one of hundreds of thousands, prevalence is
              not out of China upon variant of concern PCR setting.
              <br />
              1.4m 821k Chinese leaders didn’t lock down after testing there,
              first. Stop the fucking state victimization for your own bond
              index funds douche boomer actual labor shortage. Get. Back. To
              work
              <br />
              Half continuing claims and most disability, 20x rental income -
              3/20 millennials out of work, 3/10 boomer-moochers (when they were
              working-age)
              <br />
              <Cable
                style={{ width: "100%", height: "540px" }}
                onError={handleScollImgError}
                //img={true}
                src={
                  this.state.noyoutube
                    ? ""
                    : "https://fred.stlouisfed.org/graph/graph-landing.php?g=KlLP&width=600&height=475"
                }
                float="right"
                title="https://fred.stlouisfed.org/graph/?g=KlLP"
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={!this.state.economy ? 0 : this.state.scrollTop}
              />
              <a href="https://fred.stlouisfed.org/graph/?g=KlwO">
                participation
              </a>
              <br />
              annual dividends and profits, somehow double the amount of
              checking in existance&nbsp;
              <a
                href="https://fred.stlouisfed.org/graph/?g=KlZq" /**truegdp compares above */
              >
                year by year
              </a>
              . Libertarians say, "this wouldn't happen without the Federal
              reserve." We need the big boot of the law on this one, homie. "
              <a
                href="https://fred.stlouisfed.org/graph/?g=KlXv" /**truegdp compares gdp */
              >
                A decreasing velocity of M1
              </a>
              &nbsp;might indicate fewer short- term consumption transactions
              are taking place." Meaning third party donee beneficiary claimable
              surrendered freedom (EULA) credit as income. "We can think of
              shorter- term transactions as consumption we might make on an
              everyday basis."
              <br />
              <br />
              They used to merely coordinate commercials for minute markers, but
              now they are trying to guide me to see these topics that I've
              already covered for free labor. Just because people don’t
              work/sacrifice for existing company IP doesn’t mean they aren’t
              productive in other areas in life. How could you not figure this
              out yourselves? I won't give you the wrong answer to pass, and I
              won't allow slander against my age-cohort. we work more than
              boomers ever did. Since 1970, we had the same unemployed 18m with
              nearly 3m/yr+ 25–54 until 2000 (which may not be a coincidence but
              the logic as to how that might be still eludes me now, so it may
              be just that), and GDP/p 1800–1913 being nearly constant amongst
              3%/yr+ population means neither hours worked per person, nor the
              participation rate, and certainly not inflation per hour needs to
              rise, let alone is booming or not floundering. It has risen
              exclusively because of actual labor shortage by
              finance/rent-seeking: invoices, expiring claims, implausible
              landlord use and repo-cycle-kept-down-payments - third party donee
              beneficiary surrendered freedom (EULA). A booming economy in this
              microeconomist’s book is one that retires, for the greatest output
              (per hour). Childcare is useless pure inflaiton, that wouln't sign
              up if rollover insurance without expiring claims,
              bridge/broadband/40%njtadebt-service/ppp trust-building, sooner
              have you have those people do chores for eachother so they count
              as participation than retire people. “Every bit when I am not here
              helps,” like they know it would help to do our own work than
              redundancies of comparative advantage rungardered, or sacrificed
              for insurmountable loss of having the leeway to raise your own
              damned kids for this gerontocracy boomers have built.
              <br />
              <br />
              Nancy Pelosi: “non-federal cops are like storm troopers for the
              Death Star,” on Portland net loss bond profit fa.
            </div>
            <br />
            Double today’s hospitalizations would still be in the suspected
            range you fucking retard Rudy.
            <br />
            You are just looking for insurance payout. Get it before it expires!
            If it didn’t, no producer would sign up, public nor private.
            <br />
            "Cut in half for at-risk," no shit because they died on time, excess
            deaths are measured by comparing last year
            <br />
            <br />
            If vaccines work (not just clearing cellular debris' warning
            mechanism of bacterial infection, that which fills our &nbsp;
            <a href="https://moldmask.co">excrement</a>&nbsp;and makes virion
            when infected), it is a national security issue, as it must come
            from somewhere. Therapeutics are not preventative.
            <br />
            <br />
            “In a room full of vaccinated people, you aren’t saved from the
            disease.” Not a practicing doctor, nor statistician.
            <Cable
              style={{ height: "350px", width: "280px" }}
              onError={handleScollImgError}
              //img={true}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://drive.google.com/file/d/1uSQUra0tT9qLEabD7UqZDfOHTBcXoz8J/preview"
              }
              float="right"
              title="Rob Schmitt Tonight (Newsmax) - Dr. Jay Bhattacharya, 'Professor of Medicine at Stanford'"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            <br />
            <br />
            "Stopping PPP trust-building self-tort “fraud” could pay for 20% of
            bbb ($350b, nationalized rent-seeking bridge/broadband fee) annually
            $1-300b," James Comer, Kentucky.
            <h3>
              expiring claims is the only way to sign up nannies, mechanics and
              doctors.&nbsp;
              <a href="https://teapharmacy.party/drugs">drugs</a>
              &nbsp;are a&nbsp;
              <a href="https://vaults.biz">currency competitor</a>.
            </h3>
          </div>
          {this.state.openpandemic && (
            <TwitterTweetEmbed
              style={{ float: "right", width: "300px" }}
              key="1428050191094095878"
              tweetId="1428050191094095878"
            />
          )}
          <div
            style={{
              backgroundColor: "black",
              position: "relative"
            }}
          >
            <h2>
              Pandemics happen when Average age of death amounts to the average
              age, then it lowers thereafter and the life expectancy jumps if
              not up to wrinkly&nbsp;
              <a href="https://www.aei.org/carpe-diem/chart-us-population-distribution-by-age-1900-through-2060/">
                age
              </a>
              &nbsp;yet, just sewage and nutrition
            </h2>
            beyond life expectancy population 15% of 1918 population expected to
            die = 15,903,230 expected/1,356,785 actual, 1,100,000 from
            population growth alone life expectancy ago (850,000 actual excess).
            ((1870-80)/10)
            <br />
            ANNUAL reports (targeting age: 5yr-cohorts, varies by rate or
            level):
            <br />
            <a href="https://www.cdc.gov/nchs/products/vsus/vsus_1890_1938.htm">
              annual Mortality only 1905- (includes mortality and rate 5x1
              cohortxyear)
            </a>
            <br />
            <a href="https://www.cdc.gov/nchs/data/vsushistorical/mortstatsh_1921.pdf">
              annual Vital 1937- (includes population 5x1 cohortxyear)
            </a>
            <br />
            BUT THE CONSTANT POPULATION THROUGH PROVES THE EXCESS DEATHS WERE
            EXPECTED. What is the significance of a real-population-meaningless
            sample?
            <br />
            If population level only goes back to 1937 vitals, and 1905 only has
            death rates, the 5 year cohorts can hide the
            end-(and-beginning-heavy lifetime expectation.
            <br />
            <h1>
              A pandemic measured by growth without any basis rate exogenous
              fixations
            </h1>
            <h2>
              Age distribution changes doesn’t account for cohort size
              <br />
              Only 25-54 working age size led me to believe 1.2m/yr+ 2020-2030
              was discoverable
            </h2>
            <a href="https://www2.census.gov/library/publications/decennial/1880/vol-11-12-mortality/1880v11-02.pdf#page=6">
              1880 deaths
            </a>
            &nbsp;&bull;&nbsp;
            <a href="https://www2.census.gov/prod2/decennial/documents/36894832v1ch05.pdf#page=34">
              1890 dx
            </a>
            &nbsp;&bull;&nbsp;
            <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2885717/">
              1910a dx
            </a>
            &nbsp;&bull;&nbsp;
            <a href="https://www.ssa.gov/oact/NOTES/as120/LifeTables_Tbl_7_1910.html">
              1910b dx
            </a>
            &nbsp;&bull;&nbsp;
            <a href="https://www.cdc.gov/nchs/data/lifetables/life19-20.pdf#page=60">
              1920 dx
            </a>
            &nbsp;&bull;&nbsp;
            <a href="https://www2.census.gov/library/publications/decennial/1930/population-volume-2/16440598v2ch11.pdf#page=14">
              1930 p
            </a>
            &nbsp;&bull;&nbsp;
            <a href="https://www2.census.gov/library/publications/decennial/1940/population-volume-4/33973538v4p1ch1.pdf#page=3">
              1940 p
            </a>
            &nbsp;&bull;&nbsp;
            <a href="https://www.census.gov/data/tables/time-series/demo/popest/pre-1980-national.html">
              pe
            </a>
            <br />
            <div
              style={{
                fontSize: "12px"
              }}
            >
              <Spanish
                lastWidth={Math.min(600, this.state.lastWidth)}
                style={{
                  height: "230px",
                  paddingBottom: "15px",
                  backgroundColor: "rgb(190,150,180)"
                }}
              />
              <br />
              Etymologist of baby boomer{" "}
              <a href="https://www.cdc.gov/nchs/data/vsus/vsus_1950_1.pdf#page=104">
                predicted Covid
              </a>
              .<br />
              <Cable
                style={{ height: "200px", width: "100%" }}
                onError={handleScollImgError}
                //img={true}
                src={
                  this.state.noyoutube
                    ? ""
                    : "https://drive.google.com/file/d/1BGJag8pW3KxZTbimfp0Nvc3rNf0tgsY2/preview"
                }
                float="right"
                title="1: https://www.cdc.gov/nchs/data/lifetables/life1890-1910.pdf or 2: https://www.cdc.gov/nchs/data/vsus/vsus_1950_1.pdf#page=104"
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={this.state.scrollTop}
              />
              "How would you and your family survive if the US government
              collapsed or was taken over and dollars became totally worthless
              in 2022?"
              <br />
              You are asking for two different scenarios, as the dollar v
              government (bonds), until parity, by further third party donee
              beneficiary claimable surrendered freedom (EULA) and beyond
              Article 4 outlay and receipt scope, when there are apparent
              alternatives for free rider immutable (sewage, police, lawsuits)
              truncated production tax, after reverse-amortize
              (cash/debt)*income every year back. 1-level-board
              max-royalty-profit-contracts for future debt “investment.”
              <h3>
                Exogenous factors aren’t not mentioned but fixed for in
                regressions.
              </h3>
              A vaccine to stop all variants, leave it to the military, they
              always do it right." They 10% debt service you tool.
              <br />
              <br />
              The military comes out with a vaccine just before expected excess
              deaths to level from population growth growth that was called a
              pandemic at their end of life.
              <h3>3.5m deaths, .5m excess at end of life</h3>
              "The employer has a right to keep you from work with their own
              mandate." Not naturally, they need to get a permit like
              desistations. If the "biden vaccine mandate cannot be upheld,"
              because pandemic is from population growth, business cannot either
            </div>
            <br />
            "Right of any reason to remove from restaurant except racial stuff."
            Get a permit, goomba
            <br />
            "Trump was held accountable more than any president in our history,"
            Chris Stewart.
            <br />
            "Autocracy outsized influence," there is no need for free rider
            mutable tax.
            <h2>
              bulk of hospitalization are unvaxxed because you have only been
              reporting&nbsp;
              <a href="https://www.fda.gov/media/144245/download#page=42">
                5% of influenza-like-illness
              </a>
              .
            </h2>
            "500m tests (Michael Goodwin ny post)," for free rider mutable tax
            for gentrification, rent-seeking and useless pure inflation
            monopsony.
            <br />
            "Donald Trump is a leader, he may be wrong, but he leads. The price
            we pay to get a leader.
            <br />
            Inflation, there is so many measurements.
            <br />
            4-5 phony 5-6 honest.
            <br />
            $100m on climate change," brought forward demand is always useless
            if it doesn’t rollover/flaccid profits/expiring claims competing
            with consumers as a producer.
            <br />
            "Destroy the meaning of NATO by defending all human rights
            non-contractually."
            <br />
            Thin ice bro. "Not in Americans best interest is not an issue," any
            non-trade is self-deprecating for technological advancement per hour
            price deflation comparative advantage. “We need to make it Painful
            by sanctions not military intervention.” Unilaterally gave Russia
            pipeline network fees gentrification by government, rent-seeking and
            pure useless inflation monopsony. Sounds familiar nationalist
            Chaffitz. "$1.5m/day on interest," and $3m/day on Afghanistan,
            pulled out for social security, Amendment 14 Section 4 beyond
            Article 4. "Energy independence," doesn't mean you need government
            to rent-seek douche. "Far less environmentally friendly in the US.”
            Target-margin network monopolies as microeconomic Supple and Demand
            reasoning of self-regulation of price, quality or duress is moot,
            unless infinite producters and non-laborless-demand
            (finance/rent-seeking; invoices, expiring claims, implausible
            landlord use, repo cycle kept down payments). "Anything trump when
            he took on the great causes," like self-depricating for USPTO?
            That's a bad thing.
            <br />
            "Not fair," like impossible lest third party beneficiary donee
            claimable.
            <h1>Get a jury permit to desist or discriminate beyond price</h1>
            <h3>if government cannot, why would business be able to</h3>
            <h2>
              converging life expectancy/average age at death with 1.2m/yr
              population growth
            </h2>
            <h3>
              third party donee beneficiary claimable surrendered freedom (EULA)
              exo
            </h3>
            800k deaths or 500k/yr, 1.2m/yr expected from population growth, 80
            is life expectancy we are made for that age as we start getting
            wrinkly.
            <br />
            What if speeding was just pulled over? No state victimization that
            just gets laundered to&nbsp;
            <a href="https://truncatedsalestax.com">bonds</a>.
            <br />
            {/*<Cable
            style={{ width: "100%" }}
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://drive.google.com/file/d/1D5s1QvjCo5uyB84M2P9p8Vm7TZ3_DDmz/preview"
            }
            float="left"
            title="https://www.ssa.gov/oact/STATS/table4c6.html"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
            />
            <h2>"136.28425% chance of death 95-99"</h2>*/}
            Life expectancy is the average age at death, so excess deaths are to
            catch up, there is not a growing life expectancy as much as an older
            cohort. It is a dog wagging its tail situation.
            <br />
            Life expectancy in 1918. Right after 1918 life expectancy rose by 10
            because it was after the average cohort age met life
            expectancy/average age at death.
            <br />
            <br />
            Immunocompromised means dysregulated oncogenesis of garbage
            collection by antibodies of bacterial reinfection
            <br />
            <br />
            "Antibiotics put me in a wheelchair in a month," antiviral just
            stops the warning mechanism. "Don’t realize how much power, when
            they realize how much power they have, can’t fine us," says Howie
            Hurley. &nbsp;<a href="https://qr.ae/pGzBC1">Haha</a>. "
            <a href="https://qr.ae/pGzBCd">I know you work for a living</a>."
            what do the $12k/year/p debt $3k/yearp bond $64/year/p checking
            (new) do for a living?
            <br />
            <br />
            <a href="https://www.census.gov/library/stories/2017/10/aging-boomers-deaths.html">
              https://www.census.gov/library/stories/2017/10/aging-boomers-deaths.html
            </a>
            &nbsp;"Deaths are projected to reach more than 3.6 million in 2037,"
            if people live to 100 maybe
            <Cable
              style={{ width: "100%" }}
              onError={handleScollImgError}
              //img={true}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://drive.google.com/file/d/1xYOpsuwFUyIpKXIfuEI-cn01b7h5bPCn/preview"
              }
              float="right"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            <a href="https://www.researchgate.net/figure/Total-fertility-rate-in-United-States-1920-2014_fig1_316893597">
              src
            </a>
            <br />
            <br />
            The pandemic is measured by significance, but they don’t fix excess
            deaths for population growth, just look at fertility rates life
            expectancy ago. This is why they are called boomers.
            <br />
            Do you know why "boomers?" WWII live birth lull was life expectancy
            ago, so Census has projected this back in 2015 aging boomer deaths.
            Bacteria is in excrement because if that reinfects us virion comes
            out.
            <br />
            <br />
            {/*"75": 2288885, 2198286, 1738729.33
            <br />
            "76": 1974261, 2222392, 1738729.33
            <br />
            "77": 1783292, 1911261, 1738729.33
            <br />
            "78": 1664122, 1720817, 1738729.33
            <br />
            "79": 1541515, 1599909, 1738729.33
            <br />
            "80": 1450820, 1475278, 1532981.78
            <br />
            "81": 1310691, 1381641, 1532981.78
            <br />
            "82": 1223611, 1241341, 1532981.78
            <br />
            "83": 1143041, 1151190, 1532981.78
            <br />
            "84": 995618, 1067757, 1532981.78<br/>*/}
            &nbsp; &nbsp; &nbsp;2018 &nbsp; 2019 &nbsp; 2020
            <br />
            "75": 4389077, 4374565, 4314856
            <br />
            "76": 4371950, 4361016, 4383479
            <br />
            "77": 4417813, 4342385, 4372553
            <br />
            "78": 4449262, 4385570, 4349650
            <br />
            "79": 4289580, 4413855, 4390421
            <br />
            "80": 4254388, 4252663, 4417674
            <br />
            "81": 4197441, 4215172, 4256425
            <br />
            "82": 4038371, 4156645, 4218687
            <br />
            "83": 3995629, 3996088, 4157535
            <br />
            "84": 3820738, 3950578, 3998050
            <br />
            <br />
            <div style={{ overflowX: "auto" }}>
              <table className="table">
                <thead>
                  <tr>
                    <td>2018</td>
                    <td>75</td>
                    <td>76</td>
                    <td>77</td>
                    <td>78</td>
                    <td>79</td>
                    <td>80</td>
                    <td>81</td>
                    <td>82</td>
                    <td>83</td>
                    <td>84</td>
                    <td>2019</td>
                    <td>75</td>
                    <td>76</td>
                    <td>77</td>
                    <td>78</td>
                    <td>79</td>
                    <td>80</td>
                    <td>81</td>
                    <td>82</td>
                    <td>83</td>
                    <td>84</td>
                    <td>
                      <a href="https://www.federalregister.gov/documents/2020/11/12/2020-24723/updated-life-expectancy-and-distribution-period-tables-used-for-purposes-of-determining-minimum#:~:text=Table%204%20to">
                        2020
                      </a>
                    </td>
                    <td>75</td>
                    <td>76</td>
                    <td>77</td>
                    <td>78</td>
                    <td>79</td>
                    <td>80</td>
                    <td>81</td>
                    <td>82</td>
                    <td>83</td>
                    <td>84</td>
                  </tr>
                </thead>
                <tbody>
                  {/*<tr>
                  <td>deathprob</td>
                  {`0.015631835 0.015071298 0.014862741 0.015061867 0.016038357 0.016815564 0.017269514 0.018649415 0.019481562 0.020072681`
                    .split(" ")
                    .map((x) => (
                      <td key={x}>{x}</td>
                    ))}
                  <td />
                  {`0.014738021 0.016574621 0.01584419 0.015590891 0.015899391 0.016878233 0.017766719 0.018045031 0.019403865 0.020302794`
                    .split(" ")
                    .map((x) => (
                      <td key={x}>{x}</td>
                    ))}
                  <td />0.03237
                  0.03552
                  0.03906
                  0.04305
                  0.04753
                  0.0527
                  0.05857
                  0.06513
                  0.07236
                  0.0802
                  {`0.03237 0.018587000 0.020815000 0.023391000 0.026387000 0.029850000 0.033883000 0.038544000 0.043880000 0.049956000`
                    .split(" ")
                    .map((x) => (
                      <td key={x}>{x}</td>
                    ))}
                  {/*`0.016670000 0.018587000 0.020815000 0.023391000 0.026387000 0.029850000 0.033883000 0.038544000 0.043880000 0.049956000`
                    .split(" ")
                    .map((x) => (
                      <td key={x}>{x}</td>
                    ))*}
                  {/*<td />
                  {`0.003067227 0.002368589 0.001808696 0.001350811 0.000986042 0.000650269 0.001185636 0.015338222 0.013911198 0.013332906`
                    .split(" ")
                    .map((x) => (
                      <td key={x}>{x}</td>
                    ))*}
                </tr>*/}
                  <tr>
                    <td>deaths</td>
                    {`68609 65890 65660 67014 68797 71539 72487 75313 77841 76692`
                      .split(" ")
                      .map((x) => (
                        <td key={x}>{x}</td>
                      ))}

                    <td />
                    {`64472 72282 68801 68374 70177 71777 74889 75006 77539 80207`
                      .split(" ")
                      .map((x) => (
                        <td key={x}>{x}</td>
                      ))}
                    <td />
                    {`60671 64115 71305 67567 67126 69171 70614 73326 73011 74889`
                      .split(" ")
                      .map((x) => (
                        <td key={x}>{x}</td>
                      ))}

                    {/*<td />
                  {`71531 80931 90247 100872 114814 129785 142782 163170 182734 199718`
                    .split(" ")
                    .map((x) => (
                      <td key={x}>{x}</td>
                    ))*/}
                    {/*<td />
                  {`13161 10313 7841 5825 4290 2844 4996 64932 57932 53303`
                    .split(" ")
                    .map((x) => (
                      <td key={x}>{x}</td>
                    ))*/}
                  </tr>
                  <tr>
                    <td>pop</td>
                    {`4389077 4371950 4417813 4449262 4289580 4254388 4197441 4038371 3995629 3820738`
                      .split(" ")
                      .map((x) => (
                        <td key={x}>{x}</td>
                      ))}
                    <td />
                    {`4374565 4361016 4342385 4385570 4413855 4252663 4215172 4156645 3996088 3950578`
                      .split(" ")
                      .map((x) => (
                        <td key={x}>{x}</td>
                      ))}
                    <td />
                    {`4291017 4354194 4335703 4312440 4351175 4347939 4213972 4233365 4164424 3997885`
                      .split(" ")
                      .map((x) => (
                        <td key={x}>{x}</td>
                      ))}
                  </tr>
                </tbody>
              </table>
            </div>
            {/*"75": 13161.52315,
            "76": 10313.29697,
            "77": 7841.972326,
            "78": 5825.290138,
            "79": 4290.4423,
            "80": 2844.889448,
            "81": 4996.236244,
            "82": 64932.29582,
            "83": 57932.1267,
              "84": 53303.42921,*/}
            {/*<br/>
            <br/>
            "75": 68609.32788, 64472.43095, 37000.14855<br/>
            "76": 65890.96088, 72282.1886, 39598.24665<br/>
            "77": 65660.81144, 68801.57348, 44691.82406<br/>
            "78": 67014.19294, 68374.94268, 43035.41675<br/>
            "79": 68797.81445, 70177.60842, 43536.33349<br/>
            "80": 71539.9342, 71777.43817, 45579.66645<br/>
            "81": 72487.76576, 74889.77794, 47449.48214<br/>
            "82": 75313.25705, 75006.78858, 50254.0141<br/>
            "83": 77841.0921, 77539.55364, 51043.36612<br/>
            "84": 76692.45454, 80207.77033, 53468.25649
            <br />
            <br />
            <a href="https://www.ssa.gov/oact/STATS/table4c6.html">
            death prob
            </a>*/}
            <br />
            <br />
            "I don’t discuss my vaccination status, I think that depends on each
            person." If vaccinations aren’t perfect, and it comes from somewhere
            (and it isn’t merely debris of bacterial infection that you look for
            survivorship bias), then it is a national security issue.
            <br />
            <Cable
              style={{ height: "440px" }}
              onError={handleScollImgError}
              //img={true}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://www.youtube.com/embed/ZmUozfOPquk"
              }
              float="left"
              title="Left vs Right (77WABC) - sundays 3-5pm Sliwa vs Hahn"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            "It's a free country, ...out of this because of Trump's warped
            speed," Rep Jeff Van Drew. “mRNA-sporing-graft tech maps out and
            creates what fights off virion.” Howie Hurley, "now omicron is vast
            majority. no cure for the warning mechanism" This is the first
            debris tested for asymptomatically, of course it will show higher
            prevalence.
            <br />
            <br />
            "harsh wave of many positive cases, firing amongst" actual work
            shortage 10x more hours per average home sold and backwards tech
            advancement because GDP/p 1800-1913 nearly constant and
            finance/rent-seeking in invoices, expiring claims, implausible
            landlord use and repo-cycle kept down payments, for writing down
            to&nbsp;
            <a href="https://truncatedsalestax.com">truncatedsalestax.com</a>,
            stop the net loss bond profit per state victimized conflict of
            interest.
            <br />
            <br />
            You know what you do with the Chinese US cahoots in bonds?
            <br />
            reverse amortization (cash/debt)*income every year back then
            1-level-board max-royalty-profit.
            <h2>
              "Pandemic to endemic as omicron pathway," because excess deaths is
              now based on last year without accounting for growth retard.
            </h2>
            I’m allowed to be critical of teachers, you aren’t of students.
            <br />
            <br />
            "I want to purchase food for my friends here," Burger King "no."
            Russ Solsberg "you need a card to eat, but Democrats don't want ID
            to vote."
            <br />
            <br />
            <Cable
              onError={handleScollImgError}
              //img={true}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://www.youtube.com/embed/IPQIsodwMwY"
              }
              float="right"
              title="Stephen moore - June 13th, 2021"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            WWII was a life-expectancy ago... rate of change thru 2009 shows
            this.
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
            Non-exclusive serious cases from those unvaccinated is mistaking the
            forest for the trees (warning mechanism of ingested bacteri, virion
            debris)
            <div
              style={{
                fontSize: "12px"
              }}
            >
              {this.state.lastWidth && (
                <a
                  style={{ color: "rgb(230,230,255)" }}
                  href="https://gis.cdc.gov/grasp/fluview/fluportaldashboard.html"
                >
                  <Vaxx
                    lastWidth={Math.min(600, this.state.lastWidth)}
                    style={{
                      transform: "translate(0,0)",
                      backgroundColor: "rgb(190,150,180)",
                      height: "200px"
                    }}
                  />
                </a>
              )}
            </div>
            "COVID-19 coded deaths[ and&nbsp;
            <a href="https://data.worldbank.org/indicator/SH.MED.BEDS.ZS?locations=GB">
              hospitalizations
            </a>
            ] were&nbsp;
            <a href="https://gis.cdc.gov/grasp/fluview/fluportaldashboard.html">
              added
            </a>
            &nbsp;to P&I to create the&nbsp;
            <a href="https://www.cdc.gov/flu/weekly/overview.htm#:~:text=5.%20Mortality%20Surveillance">
              PIC
            </a>
            &nbsp;(pneumonia, influenza, and/or COVID-19) classification."
            <br />
            <div
              style={{
                fontSize: "12px"
              }}
            >
              {this.state.lastWidth && (
                <Epiology
                  lastWidth={Math.min(600, this.state.lastWidth)}
                  style={{
                    paddingBottom: "15px",
                    backgroundColor: "rgb(190,150,180)"
                  }}
                />
              )}
            </div>
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
            <h2>
              "
              <a href="https://youtu.be/nKvUf7F4Xn4">
                WWII life expectancy ago
              </a>
              ," was not interesting enough for Dick Morris.
            </h2>
            third party beneficiary is our law, no surrender what option to buy
            of intermediate-scope you can't concurrently-fulfill
            <br />
            <br />
            finite producers, 11/12 industry-variable jury means 1 person is
            crazy when convicted or permitted in duress for minimal viable
            product for voluntary trade
            <br />
            <br />
            “3k marines 5k sailor 3k soldiers, no religious exception.”
            {/**jesse james duff */}
            <br />
            <br />
            ms literally, "matches paralytic polio" in&nbsp;
            <a href="https://www.christopherreeve.org/living-with-paralysis/stats-about-paralysis">
              US numbers
            </a>
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
                  backgroundColor: "rgb(190,150,180)",
                  height: "250px"
                }}
              />
            )}
            OPEN THE BORDERS there is sparingly proof of threats. plug the
            actual work shortage by freeloading rent-seekers
            <br />
            <br />
            <a href="https://wonder.cdc.gov/Bridged-Race-v2020.HTML">
              single year
            </a>
            &nbsp;&bull;&nbsp;
            <a href="https://www.census.gov/programs-surveys/popest/technical-documentation/research/evaluation-estimates/2020-evaluation-estimates/2010s-national-detail.html">
              census
            </a>
            &nbsp;&bull;&nbsp;
            <a href="https://www.cdc.gov/nchs/data_access/vitalstatsonline.htm#Mortality_Multiple">
              mortality
            </a>
            &nbsp;&bull;&nbsp;
            <a href="https://www.cdc.gov/nchs/products/databriefs/db427.htm">
              more
            </a>
            {/*&nbsp;&bull;&nbsp;
           <a href="https://usa.mortality.org/">
            usa&bull;mortality
           </a>*/}
            <Mortal
              lastWidth={Math.min(600, this.state.lastWidth)}
              style={{
                fontSize:"12px",
                marginTop: "20px",
                paddingBottom: "50px",
                backgroundColor: "rgb(190,150,180)"
              }}
            />
            <Worldwide
              lastWidth={Math.min(600, this.state.lastWidth)}
              style={{
                fontSize:"12px",
                paddingBottom: "15px",
                backgroundColor: "rgb(190,150,180)"
              }}
            />
            <Cable
              style={{ height: "440px" }}
              onError={handleScollImgError}
              //img={true}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://drive.google.com/file/d/1IkFesv7Ri837lrUczgT962Tz1z2P8X1o/preview"
              }
              float="left"
              title="Stinchfield (Newsmax) - 'gain of function research'"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            “Virus that now cause[d], a global pandemic,” we can defend threats
            over anybody else," but not socialists to drop dead? or our
            countries' founding over fucking&nbsp;
            <a href="https://teapharmacy.party">tea</a>
            ...
            <br />
            <br />
            CDC put pneumonia influenza covid together, for Cause of Death and
            hospitalizations, all of which are insignificant changes year to
            year.
            <h2>
              I’m not a doctor, but I am a{" "}
              <a href="https://www.cdc.gov/nchs/data/vsus/vsus_1950_1.pdf#page=104">
                statistician
              </a>
              .
            </h2>
            <Cable
              style={{ height: "240px" }}
              onError={handleScollImgError}
              //img={true}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://drive.google.com/file/d/1JGqVnppMe5Fb3r5tVd32GEEfL75bVr3t/preview"
              }
              float="right"
              title="1943 births"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            800k deaths or 500k/yr, 1.2m/yr expected from population growth, 80
            is life expectancy we are made for that age as we start getting
            wrinkly,
            <br />
            Cause is not merely from prevalence, they literally make up
            injecting DNA into cell. 1/3 businesses are gone, because rent
            beyond plausible use below 5 units or 30 days not price intent
            deduced.
            <br />
            <br />
            “200 respiratory virus that circulate,” prevalence doesn’t mean
            circulation. Politics is reason beyond law.
            <br />
            <br />
          </div>
          <button
            style={buttonStyle}
            onClick={(e) => {
              e.stopPropagation();
              this.setState({ furtherarguments: !this.state.furtherarguments });
            }}
          >
            <h3>further arguments</h3>
          </button>
          <br />
          <div style={setting(this.state.furtherarguments)}>
            "I know from experience, don't self-medicate oxy," Sliwa just says
            this because doctor trust building,&nbsp;
            <a href="https://qr.ae/pGqmOq">dollar-depositary consortium</a>
            &nbsp;
            <a href="https://vaults.biz">competition</a>.<br />
            <br />
            "pedal to the medal with approval of vaccine, not same effect as
            other, I don't care, pfizer gets billions moderna wrote their own
            ticket."
            <br />
            "stay at home moms aren't my base 15m antivaxx and antitrump."
            <br />
            Why are you putting criminals in mental hospitals, with insurance it
            costs $2k/day, that is self-deprecating.
            <br />
            Plea bargains are inherently duress to lie under oath. No scripts.
            <br />
            Finance is the cause of the labor shortage. You guys have no idea
            what you are talking about. This is proven by GDp/p 1800-1913 being
            nearly constant amongst 3%/yr+ population.
            <br />
            Do you get a cut of involuntary commitment? We need to ween jailors
            and cops off net loss bond profit and healthcare off of insurance,
            public and private. It is self-deprication to bring forward demand
            like this that doesn’t rollover.
            <br />
            Bail means you don’t have evidence, you can always review it later.
            <br />
            "People are dropping left and right with positive tests."
            <br />
            We need to ween jailors and cops off net loss bond profit and
            healthcare off of insurance, public and private. It is
            self-deprication to bring forward demand like this that doesn’t
            rollover.
            <br />
            Bail means you don’t have evidence, you can always review it later
            <br />
            <Cable
              style={{
                height: "280px"
              }}
              onError={handleScollImgError}
              //img={true}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://drive.google.com/file/d/1sXJni7Y9HKCJ5wq6H2otrmuTbtv5zZgW/preview"
              }
              float="left"
              title="National Report (Newsmax) - ppp trust building, 20%/yr+ more than $4t/yr 2010-3/2020"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            "Insurance is going to not underwrite," with expiring claims? It is
            a false bid pool, it is illegal, third party donee beneficiary
            surrendered freedom (EULA).
            <br />
            You guys should probably be on anti psychotic meds.
            <br />
            Help you guys out, hold your feeble hands.
            <br />
            Do you know why boomers are called boomers? Because after the lull
            in births over WWII , boomers exploded with births. This pandemic
            was projected by the Census in 2015. Boomers are the cause of
            inflation, 20x/millennial rental income and 10x/boomer millennial
            hours worked since you all were my age. So stfu.
            <br />
            This pandemic was projected by the&nbsp;
            <a href="https://www.census.gov/library/stories/2017/10/aging-boomers-deaths.html">
              Census in 2015
            </a>
            . Do you know why boomers are called boomers? Because after the lull
            in births over WWII, boomers exploded with births. You all are dying
            on time, not soon enough, half continuing claims and most of
            disability goes to the olds, whom are the cause of inflation*,
            20x/millennial rental income and 10x/boomer millennial hours worked
            since you all were my age. So get back to work.
            <br />
            *proven by GDP/p 1800-1913 being nearly constant amongst 3%/yr+
            population, save repo cycle kept down payments third party donee
            beneficiary surrendered freedom (EULA) force majeure implausibly
            deniable intent.
            <br />
            Insurance is going to not underwrite with expiring claims? It is a
            false bid pool, it is illegal, third party donee beneficiary
            surrendered freedom (EULA).
            <br />
            I’m a statistician, not a doctor that follow eachother lest get
            malpractice.
          </div>
          <br />
          <button
            style={buttonStyle}
            onClick={(e) => {
              e.stopPropagation();
              this.setState({ hypothesis: !this.state.hypothesis });
            }}
          >
            <h3>hypothesis</h3>
          </button>
          <br />
          <div style={setting(this.state.hypothesis)}>
            Virus comes out after bacterial infection,&nbsp;
            <a href="https://theconversation.com/your-poo-is-mostly-alive-heres-whats-in-it-102848#:~:text=www.shutterstock.com-,Microbes,of%20the%20bacteria%20were%20alive.">
              that’s why our excrement is filled with bacteria
            </a>
            , and injecting dns in an instant is just made up! Ms matches
            paralytic polio.
            <br />
            55m/yr+ worldwide 1.2m/yr+, 500k excess deaths from zero.
            <br />
            <br />
            "This vaccine doesn’t prevent the disease," but it comes from
            somewhere. Neither does ms or paralytic polio (same thing).
            <br />
            Get a permit - from an industry-various multiple of 11/12 jury.
            <br />
            "Not antivax," so it works?
            <br />
            <br />
            Trump giving such credence to the duress beyond minimal viable
            product without multiple of 11/12 industry-variable jury. Get a
            permit. So that they can copy Twitter and not protect no quid pro
            quo rights.
            <br />
            <br />
            <TwitterTweetEmbed
              style={{ float: "right", width: "300px" }}
              key="1429182687588278276"
              tweetId="1429182687588278276"
            />
            "100m people potential deaths without vaccine, but people deserve
            their freedom." It comes from somewhere lmao.
            <br />
            “Trace contact exposures,” virion is made when bacteria-infection.
            That’s why our excrement is filled with bacteria. The antibodies are
            a warning mechanism.
            <br />
            I’m a statistician with facts. census projected the pandemic in 2015
            with aging boomer deaths article.
            <br />
            "Omicron because no vaccine and low immunity. Highest HIV/AIDS in
            the world."
            <h2>
              What if speeding was just pulled over? No state victimization that
              just gets laundered to bonds.
            </h2>
            "How does national debt cause inflation?"
            <br />
            The labor shortage of actual work from the bond-holders
            laborless-demand. Also, force majeure implausible deniability is
            even called corrections when the repo-cycle keeps down payments
            laundered upon loitered collateral. It is verifiably not population
            growth by witnessing GDP/p 1800–1913 being nearly constant among the
            3%/yr+ population, only finance by third party donee beneficiary
            claimable surrendered freedoms (EULA) that includes invoices,
            expiring claims, implausible landlord use and repo-cycle kept down
            payments.
            <br />
            <br />
            “What do you see the government to do to increase the buying power
            of the dollar without deflation?”
            <br />
            <br />
            Why do you not want deflation, so you don’t have to work? That is
            impossible. I will prosecute third party donee beneficiary claimable
            surrendered freedom (EULA), so you don’t have a choice.
            <br />
            Do you mean succeed, like don’t gentrify nationalized bridge tolls
            or broadband fees? You are implying there is to be no self
            determination with free rider mutable tax. I don’t know what you
            mean by self-determination by market communism Respect for what a
            certain market communist want, like third party donee beneficiary
            claimable surrendered freedom (EULA) What the people want has no
            power over others.
            <br />
            By succeeding you are implying people are slaves to government. We
            need to ween cops off net loss bond profit. All convictions are
            moot, isn’t it? You don’t need to nationalize bridge tolls and
            broadband fees, just target margin network monopolies.
            <br />
            You think the only way is violent uprising? Fucking nut Frank
            morano, take your fucking pills.
            <br />
            You keep talking about inflation like it isn’t exclusively from
            finance, labor-competition is perfectly elastic as proven by GDP/p
            1800-1913 being nearly constant, save repo cycle kept down payments
            third party donee beneficiary surrendered freedom (EULA) force
            majeure implausibly deniable intent.
            <h2>
              Tim Dillon: "Hopefully this variant sweeps and we move on," The
              only thing sweeping are tests.
            </h2>
            It comes from somewhere michael and Trump you fucking retards. "Very
            left or even marxist," like ending finance actual work deficit? Go
            to hell fucker. "Don’t sneak in, follow any rule by
            self-regulation." Get a fucking permit Jew.
            <br />
            <br />
            “Vaccines and seatbelts keep you safe,” but you didn’t even save
            people with MS = paralytic polio and the warning mechanism of
            bacterial-infection producing virions actually is&nbsp;
            <a href="https://humanharvest.info/polio">positively correlating</a>
            &nbsp;for vaccines and hospitalizations 1980-2020. 20x/millennial
            boomer rental-income is called an emotional problem by the
            testicle-less Curtis Sliwa.
            <br />
            "expert law firm knows kglaw covid positive into homes." "Don't hate
            eachother that don't agree," GET A FUCKING PERMIT BITCH. A booster
            doesn't make more usefull antibodies, just excess when it is
            mRNA-sporing-graft
            <br />
            <br />
            “People will know that they will take care of themselves, like
            plundering, implausible use rent, or discrimination without
            industry-variant jury-truth desistations.” Judge Janine
            <br />
            “Leave it to doctors patients and individuals, let business decide
            to do.” Charlie Kirk.
            <br />
            Atheism Dead, “No woke or crazy. After Time, ‘is G-d dead?’ Science
            pushing G-d and faith out of the people, G-d is no longer reasonable
            nor rational. Science is more proving immaculate conception of the
            Universe and the Virgin Mary, as the&nbsp;
            <a href="https://saverparty.xyz/jesus">sin sacrifice</a>.” Eric
            Motasnic TAKE YOUR MEDS. "...when&nbsp;
            <a href="https://qr.ae/pGzcYE">Einstein</a>&nbsp;was alive. ...You
            know every cell, bone in your body is made by Him, G-d is in every
            one of use, can push him away in free will, but we all come back,
            whether it be on their deathbed or not."
            <br />
            "Is a pedofile or a racist-rapist, many want jobs." Judge Janine
            <br />
            <Cable
              style={{
                width: "400px",
                maxWidth: "100%",
                height: "600px",
                maxHeight: "100vw"
              }}
              onError={handleScollImgError}
              //img={true}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://drive.google.com/file/d/1TX2wYs7rcGMgaLIwsY5GAPg1y3nP7sKY/preview"
              }
              float="left"
              title="https://www.quora.com/unanswered/Is-implausible-use-rent-dead-weight"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={!this.state.hypothesis ? 0 : this.state.scrollTop}
            />
            "In america we have more food than we can possibly use. My parents
            raised me to love this country, a beautiful and rare thing. If we go
            to Hell by allowing everyone come in, we know common sense it is
            foolish. They did it the right way, why? because it shows respect.
            If they come in, vs say use me, trade me a job. G-d doesnt get it
            wrong, leaders get it wrong. Joe Biden is pushing abortion on
            america, don't call out hypocrisy of Catholics, that is game-play.
            ...Take G-d out, marxist, leftist cultural marxism."
            <br />
            <br />
            Rent is cheaper because it is a method of income beyond plausible
            use, but it is a net loss of per hour price deflation from
            landlord-work-deficit. The cost of living would be cheaper than on
            market ask-outright, unless comparing to the alternative-basis where
            apartment buildings were forced to condos sales under 5 units or 30
            days, then price fix, for price deflation per hour, and getting
            &nbsp;
            <a href="https://fred.stlouisfed.org/graph/?g=KezO">
              20x/millennial boomer rental income
            </a>
            &nbsp; back to&nbsp;
            <a href="https://fred.stlouisfed.org/graph/?g=KfIk">work</a>, on
            implausible landlord use intent deduced grounds, from more supply no
            longer withheld from labor-borne demand.
            <br />
            Atheism Dead, “No woke or crazy. After Time, ‘is G-d dead?’ Science
            pushing G-d and faith out of the people, G-d is no longer reasonable
            nor rational. Science is more proving immaculate conception of the
            Universe and the Virgin Mary, as the sin sacrifice.” Eric Metaxas
            TAKE YOUR MEDS
            <h1>Saver Party will retire you ;)</h1>
            "Resources and basic preventive care," if entrepreneurs don’t step
            in, maybe wall st and gov is&nbsp;
            <a href="https://www.quora.com/Might-an-anti-rent-seeker-party-win">
              encroaching on monopsony and R&d gentrification
            </a>
            . "If one person is health, we are all better for it," but it isn’t
            proven virion injects DNA into the cell, only that it comes after
            cell and bacteria in taxonomy.
            <br />
            <Cable
              onError={handleScollImgError}
              //img={true}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://drive.google.com/file/d/1SWzmK3Y9d40YfGpXoFwZeC1qDaA8qgja/preview"
              }
              float="left"
              title="Crystal Clear (Diamond&Silk,Newsmax) - ccc poverty questioned"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={!this.state.hypothesis ? 0 : this.state.scrollTop}
            />
            "They are giving people money for a whole year, did it help? "
            <br />
            "They are bidding up tennis shoes and flat screens." Continuing
            claims 2.8m/170m employed is back to normal, half of them being
            boomers!
            <h3>
              {/*Stimulates the ask-price. */}Recession is falling growth for
              two months and a downturn is either jobs or price. None of these
              are bad, it is how we measure technological advancement in
              economics.
            </h3>
            "If your paycheck depends on it, you can force them to do anything
            before jury." Bill D'Blasio (6%), pharma brought forward demand,
            monopsony intra-market-constraint by competing with consumers beyond
            minimal viable product.
            <h2>
              The only thing you ever need is because of finance and rent
              seeking, not population growth. "We got around this thing with the
              vaccine and Trump, flip people on their stomach can save
              their&nbsp;
              <a href="https://humanharvest.info/polio">life</a>." Manny Sethi
            </h2>
            <h3>
              “Someone to come in on the merits of the argument,” the owner of
              the platform needs to get a permit to desist jury untruths of
              multiple of 11/12 industry various jury.
            </h3>
            I don’t know why 15% others don’t want to get the vaccine, but I
            don’t want to give government any reason to spend on free rider
            mutable, let alone excess antibodies. But it is just stupid, cases
            asymptomatic and insignificance of total hospitalizations before
            vaccines, all PIC, influenza hospitalizations actually shows a
            positive correlation, so
            <h3>
              it is scientifically accurate to call all 85% of you retarded.
            </h3>
            "Son of G-d incarnate, death for my Sin." “Peaceably gather,” saying
            sin sacrifice&nbsp;
            <a href="https://nationalsecuritycasino.com/jesus">just works</a>.
            Nutcases! Take your meds!
            <h2>
              why excess deaths 2010-2020 was flat, Why are boomers called
              boomers?
            </h2>
            <Cable
              style={{ height: "280px" }}
              onError={handleScollImgError}
              //img={true}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://drive.google.com/file/d/1UBIYKDrfVCp-Q7B14FKP74D2yF2U0Yta/preview"
              }
              float="right"
              title="The Count (Newsmax) - Pastor Brian Gibson on Christmas with Logan Raddick"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            <h3>
              WWII, that was life expectancy ago, made a population growth lull.
              That is your pandemic, excess deaths 500k and short of 1.2m
              mortality projections by the Census Bureau and myself.
            </h3>
            Wildstein (NJ Globe, on gerrymandering gentrification gerotocracy):
            “Just a prisoners’ dilemma to keep people separated.” In fact, say
            rollover insurance to an orthopedic surgeon they’ll lock you up for
            $2k/day from the false bid pool like a flaccid collective loss of
            the cash laundered and collateral loitered.
            <br />
            <span
              style={{ backgroundColor: "white", color: "rgb(32, 22, 11)" }}
            >
              You have the Gaul to blame youth homelessness on emotions
            </span>
            ? The olds had their whole lives to save, 1800-1913 GDP/p is nearly
            constant, save oscillation, among 3%/yr+, now it is 1%/yr+.
            <br />
            We work 10x more than when you were our age, and 20x/millennial is
            boomer rental-income, bottom-left economists call that a landlord
            work deficit. We gotta cap rent at 5 units or 30 days so condos,
            fall from the sky. Implausible landlord use grounds.
            <h2>
              Reverse debt don’t cancel nor bailout third party donee claimable
              beneficiary surrendered freedom, by (cash/debt)*income every year
              back.
            </h2>
            Maybe keep scripts out of pharmacies so we can have no prohibitions
            of trade nor trust building based on saying I have anxiety to get a
            doobie or I can’t concentrate to get. speedball. GOP so smart about
            unions and their barrier to entry, but not immigration? It is all a
            free rider mutable tax racket for bond laundering or pure, useless,
            inflation, gentrification and rent seeking for nationalists instead
            of targeting margins, and regulating by jury permits. No business
            can force duress beyond minimal viable product, that literally means
            involuntary by parts.
            <br />
            <br />
            We expel bacteria in excrement and spittle, because when it
            interacts with cells it becomes infected and produce virion.
            <br />
            <br />
            CNN Reporter: "FOIA requests to be able to see executions and uuid
            anon trades after 2 weeks by virtue of public discovery."
            <br />
            Anchor: "Otherwise, that's not allowed. why?"
            <br />
            Reporter: "Practicality of fitting the public into court room. It is
            not safe."
            <br />
            <br />
            Michael Rassmusen, Ryder, on&nbsp;
            <a href="https://qr.ae/pGziq6">
              gerrymandering gentrification gerontocracy
            </a>
            , “like a judge, ‘because you didn’t bring it up, I am not gonna
            consider it.’” What is the reasoning for that?
            <h2>
              Norway corporate every citizen to export demand, without indebted
              the currency
            </h2>
            "That is called price fixing, lender work deficit. Let the prices
            fall and for energy networks, target margin. Can certainly ban
            invoices upon third party beneficiary law
            <br />
            <br />
            _Certainly there are other ways they could administrate the
            sovereign wealth fund, or they could even eliminate it , but the
            Norwegian people are interested in the longer benefit, an investment
            rather than a sale.
            <br />
            <br />
            "by the people you mean their bond-holders." _Yes, in a sense you
            could say the people of Norway are the bond holders, although
            technically the funds are pension vehicles, and operate as such.
            <br />
            <br />
            "so it is regressive-gerontocracy by delivering returns by pensions
            that further bloat trust-building by bonds and public corporate
            labor equity savings/outlays withheld, and it literally has 10% debt
            service (normally that is the rate, as in US excluding states, I see
            Norway has ~$150b GDP/yr and .4x/GDP, debt) from rent-seeking by
            nationalized-networks? I will prescribe target margin any
            operational network, among jury-various-industry-quality duress
            without state victimization. I would declare this government
            surrogate private collective investment, and potentially bargain, a,
            “voluntary trade,” if Norway incorporates EVERY citizen to export
            demand, without indebting the currency (depositary on government
            land), first."
            <br />
            <br />
            "Covid hasn’t run its course, workers are working on floors,
            quarantining at jobs, so the chain doesn’t crater. Agriculture
            harmed by 41k year obliquity cycle of axis to the sun.
          </div>
          <h2>
            Peter Morcini - understander of pure, useless inflation by bidding
            of debt "investment," as opposed to 1-level-board
            max-profit-royalty-contracts, and money
          </h2>
          <Cable
            style={{ height: "280px" }}
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://drive.google.com/file/d/1dgBms6NYeGbuiqeO6osdjl-AfjueXKh7/preview"
            }
            float="left"
            title="Dick Morris (Newsmax) - Peter Morcini"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          "'Social-reason'-investing makes inflation, can't even give us the car
          yet," legacy cars should double inventory without Biden nationalized
          free rider mutable rent-seeking, gentrification and pure, useless
          inflation. "Stretching intermediate-labor and material monopsony,
          thin. 20%+ union premium. Social-contstraints too, from activist
          investors or government policy."
          <br />
          "We want to give&nbsp;<a href="https://qr.ae/pGzaCm">enough</a>
          &nbsp;money to survive during covid, tie them over, but side effect of
          inflation, but no one monitors that, and it goes beyond good
          intentions in&nbsp;
          <a href="https://qr.ae/pGzaF7">the first place</a>
          ."
          <br />
          "Adult labor force participation looking for work is going down. $3k
          for caregiver to stay at home and not participate in the laborforce.
          Most take a major that is useless, if we pay for it, we aren't
          purchasing school, just bidding the price-upwards. marketplace not
          only rations, but it minimizes costs, take away the competition with
          subsidies, you don't make people off justt drive up the price. We see
          inflation, but we do not know the&nbsp;
          <a href="https://qr.ae/pGzOUl">cause</a>."
          <br />
          <br />"<a href="https://qr.ae/pGzTgd">Create jobs</a>, but raises
          prices, ... deficient supply of industry metals, cut in half," 10%
          debt service. "If you drill, government takes 40% of profit," instead
          of target margin network monopsony?
          <br />
          <br />
          Rabies, bacteria on the teeth you release thru spit so it doesn’t
          infect your cells and make virions!
          <h2>Antiviral is just suppressing the warning mechanism.</h2>
          Elizabeth Cohen: "The free rider mutable tax is footing the bill for
          people to use the drug. The problem is profit needs to be big enough
          for non-partnership 'investing' to surpass the barrier to entry costs,
          caused by that very 'debt' investment! Pure, useless, inflation,
          monopsony and gentrification."
          <h2>virion kills, but is false positive asymptomatic</h2>
          <Cable
            style={{ height: "280px" }}
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://drive.google.com/file/d/1X1Ny5ZFuqOzD0rovzxYvnHtFBEjT8fUj/preview"
            }
            float="right"
            title="Crystal Clear (Diamond&Silk,Newsmax) - vaccines"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          "800k people have died, under biden 500k died with covid," WWII
          produced a lull in population growth life expectancy ago, so 2010-2020
          had 0, "excess deaths." Illegals running amock, what is wrong with
          that? Why are you like this for immigrants and duress/discrimination
          sometimes but not unions?
          <br />
          <br />
          "They are pumping money to get a bid-kickback, as far as I am
          concerned." Free rider mutable tax. "See, this is what a slave driver
          does.”
          <br />
          <br />
          CNN, GWU: "Worsening-pandemic by 1300/day 1400/wk+ Washington DC
          cases. This is the first asymptomatic virus. It is a non-issue, being
          a non-exclusive byproduct of bacterial-cause.
          <br />
          Stopping an outbreak," injecting cells with dna is never proven, only
          mitosis of already infected cell. Only that it is a warning mechanism,
          and that it only comes out, evolution thereby goes, bacteria={">"}
          cell={">"}virion, "or not enough people, because it is so widespread?"
          It was here before. 1/20 positive, it&nbsp;
          <a href="https://humanharvest.info/polio">doesn't matter</a>!
          <br />
          <br />
          "Fever îs leading sign of coronavirus (but that is 5% of pneumonia,
          influenza covid, by symptomatic-testing-method-regime)." - Exogen.
          <br />
          Kilmeade: “Polio vaccines are holy grail, it saved lives.”&nbsp;
          <a href="https://humanharvest.info/polio">Uh wrong</a>
          <br />
          Masks are for open bodies, cause bacterial-infection with prolonged
          us, and deaths & hospitalizations weren’t effected by covid more than
          the normal pneumonia influenza covid seasons. Doctors just don’t know
          how to standardize for epiologic population size, over time.
          <br />
          "The whole family is sick," bacteria is probably inside of the house.
          <br />
          People are just as sick, covid is a non-exclusive byproduct with 5%
          prevalence among symptomatic cases.
          <br />
          <br />
          Craig Zucker, 'The Shot To Save The World: “_, Adenovirus, protein
          substitution, some home run in this portfolio, financing and help, not
          appreciated how much the government worked with them. It's a brilliant
          idea because - never had we manufactured and tested at the same time.”
          <h1>scriptless pharmacy currency, anyone?</h1>
          <h3>
            How about you, test monkeys, would you open source ingredient list
            on recipts for the sun sacrifice of craft beers?
          </h3>
          <h2>
            Free rider mutable pure useless inflation gentrification- and
            monopsony-enzyme self harm excess antibody mRNA sporing grafts.
          </h2>
          "10k people no time, have to do it. How did they allow private
          industry to do their own thing and take their chances?"
          <br />
          "...plain old cash to pay for the government testing. We as a
          government paid big checks to these companies, some of these companies
          were desperate for financing their lenders, landlords and insurers,"
          at $12k/year/p debt, $3k/year/p bonds, $64/year/p new
          CurrencyComponentOfM1&nbsp;
          <a href="https://qr.ae/pGzg0M">checking</a>
          ???? If there was a side effect, we would be in a tortious claim for
          expiring claims allows for net loss competing with consumer and
          insurer work loss payouts, so we are really&nbsp;
          <a href="https://qr.ae/pGzgLF">starting from behind</a>. Not for
          safety, but speed. Testing monkeys and mammals. Weren’t sure, not many
          mammals. Locking down in my basement, in NJ. Wall st stepped up, for
          moderna. No one else trusted. And Moderna said go go go, go build that
          vaccine.
          <br />
          Killed watered down attenuated.
          <br />
          Unfortunately people got the disease warning mechanism they were
          trying to prevent, vaccines have an education and know how to fight
          off. We have mRNA, creates protein. Basics of biology. What if we
          could create these molecules in the lab! We can create our own
          manufacturing of proteins in our own body, without fetal cell lines!
          Hundred years of innovation hard work stubbornness for recombinant RNA
          that enzyme fights the spike protein when they see it naturally, they
          fight that off too.
          <button
            style={buttonStyle}
            onClick={(e) => {
              e.stopPropagation();
              this.setState({ rooster: !this.state.rooster });
            }}
          >
            <h3>
              rooster claiming credit/"exhibiting" blame for the morning,
              2015-2020 75-79 1.8m+=9.6m/500k+=2.9m
            </h3>
          </button>
          <br />
          <div style={setting(this.state.rooster)}>
            <h2>
              Trump: "It was the genius of American scientists, and might of
              American worker, pushing FDA approval from infinity."
            </h2>
            C. Zucker: "My uncle passed from covid, I know people are long
            covid, invention exceptionalism and genius, no&nbsp;
            <a href="https://qr.ae/pGzgdC">credit to financiers</a>, a real
            American success story. That is pure, useless inflation, couldn’t
            have been produced without investors, that is only because our costs
            are mostly debt “investors” we couldn’t have doesn’t this without
            investors nor scientists of america. What would you say to skeptics?
            We aren’t doctors, but I talk to non-political (you mean lie, or are
            you making assumptions of people with stated goals?) scientist, but
            the people who put time into it."
            <br />
            <br />
            <hr />
            "...incentives, of saver's money beyond article 4, virus knows no
            boundaries, chasing our tails!" Smerconish. 200k delta wave, 500k is
            D614G, would stop warning mechanism. Dr. Hashish Jah.
            <br />
            <br />
            "bail 100k no more crimes, accident being reckless," evidence
            incarcerate in my book until trial is reviewed, for everyone
            criminal.
            <br />
            <br />
            Get married for alimony? fuck off. I'll pay up front. Alimony
            brought forward will because breadwinner can divorce, unilaterally?
            No… Once family, always family. Unless there is unilateral decision,
            just because money is involved doesn't mean it cannot start, but
            once beyond it factors into intent of a late departure from the
            will...
            <br />
            <br />
            <Cable
              style={{ width: "100%" }}
              onError={handleScollImgError}
              //img={true}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://drive.google.com/file/d/1ughBXkwDj9mnMVsQRdOZ36DGUHxLexb5/preview"
              }
              float="left"
              title="https://covid19.quora.com/"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={!this.state.rooster ? 0 : this.state.scrollTop}
            />
            "Almost all fentanyl deaths match Vietnam war loss (120k)?" Same
            with missing children from repeat citizen offenders. We can have
            login.gov convict intranet. Cheldam races virus raging thru care
            homes, members of minority communities, and until medical experts
            got vaccines thst worked, we were working towards the worst death
            rate in Europe." Dame Esther Rantzen,&nbsp;
            <a href="https://humanharvest.info/polio">
              50m/yr+ worldwide short still
            </a>
            .
            <br />
            <br />
            <Cable
              style={{ width: "100%", maxHeight: "50vw", height: "360px" }}
              onError={handleScollImgError}
              //img={true}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://drive.google.com/file/d/1wh_0SAtcVIbM7w3Zo-6XH6DgJ6QIXcxY/preview"
              }
              float="left"
              title="Dan Whooton (GBNews) - Darren Grimes on getting rid of 'non-crime, hate incidental victimizations for feelings'"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={!this.state.rooster ? 0 : this.state.scrollTop}
            />
            “Police shouldn’t police tweets, but police the streets,”
            <br />
            <br />
            Fines beyond article 4 no jury truth desistation, arresting officer
            evidence or no bail nor jail, state victimization fines beyond
            outlay
            <br />
            <br />
            you may need experience with accounting to understand, but your post
            is exactly about this…. So…. Estimates aren’t property, but NJ
            Consumer Fraud Act treats them as such in precedence. I am building
            software to make itemized sprints easier, for contractors and
            clients. The precedence is illegal, estimates aren’t property. We
            should be able to take another bid if you don’t want to finish the
            job, as the job goes over budget.
            <br />
            <br />
            James Melville: “Not modeling model science but data science, 5% of
            hospital beds are full of covid patients, save as in august,&nbsp;
            <a href="https://www.fda.gov/media/144245/download#page=42">
              very different than a year ago
            </a>
            .”
            <h2>
              ad council counts prevalence of common smokers of marijuana as
              cause of accidence, with matching its basis.
            </h2>
            half accidents are high because half people smoke.
            <br />
            <br />
            "Breatherlizer, seatbests, sensible safeguards, not safe drivers,
            accident free. ...Every once in awhile get asymptomatic virus, not
            flu, spread thru people with no symptoms at all.” Host stops, "and
            is becoming flu now, right Esther, it's becoming just like a bad
            cold now.”
            <br />
            "Typical symptoms of cold and flu, but you give it a name, omicron,
            and suddenly it becomes, 'really serious and it is bad,’” yes, and
            it is only about ten PCR can test for being 5% of all-prevalence,
            insignificant aggregate deaths and hospitalizations on time
            and&nbsp;
            <a href="https://data.worldbank.org/indicator/SH.MED.BEDS.ZS?locations=GB">
              packed
            </a>
            &nbsp; because the bacterial-season of all cause and non-exclusive
            all prevalence, numbers jumped because of&nbsp;
            <a href="https://www.census.gov/library/stories/2017/10/aging-boomers-deaths.html">
              1940-1949 lull in global population making
            </a>
            .
            <br />
            <br />
            "...more fentanyl at the first of this year that 2020, afros have a
            harder time than euros, do you believe that? What is it about
            criminals that fascinates the american public? 46m overseas here on
            our soil 14% foregin born 2020-2021 more than 2m, usually 1m, 60%
            hispanic 615k(FL) 471k(CA) 473k(WI) 156k(_) 135k(VA). enormous
            amount of money," but there is labor competition... we need to level
            out the lender landlord insurer work deficit 40 million antivaxxers.
            <br />
            "80% were black," WWII immigration births&nbsp;
            <a href="https://humanharvest.info/polio">by race</a>
            <br />“
            <a href="https://www.cdc.gov/nchs/data/statab/t001x01.pdf#page=2">
              It is blacks killing blacks
            </a>
            ,” O'Reilly
            <br />
            “National guard cannot arrest, but can detain, charge with
            racketeering crimes of hometown malfeasance." Never gonna stop until
            scripts aren’t for anyone, accross the board. Straight currency.
            <br />
            <br />
            <Cable
              style={{ height: "420px" }}
              onError={handleScollImgError}
              //img={true}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://drive.google.com/file/d/1R3VZQUhFZz35_pN77aaX8UlUkFrYDh7d/preview"
              }
              float="left"
              title="Dan Whooton (GBNews) - government science no jury industry variable 11/12 (Calvin Robertson speaking)"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={!this.state.rooster ? 0 : this.state.scrollTop}
            />
            “Omicron is like a natural&nbsp;
            <a href="https://www.mayoclinic.org/coronavirus-covid-19/vaccine-tracker">
              vaccine
            </a>
            , all&nbsp;
            <a href="https://link.springer.com/article/10.1007/s00259-021-05314-2">
              vulnerable
            </a>
            &nbsp;people have vaccine in that way, everyone else should be
            welcoming omicron variant as a natural vaccine, certainly stronger
            than any attenuated one in a lab.” We haven’t even seen without.
            bacteria. And if that weren’t the case, just because I am not tested
            doesn’t mean what actually is just garbage collection didn’t already
            occur.
            <br />
            <br />
            "Not looking at evidence, investing their own evidence inventing
            their own evidence Frasier Nelson’s Spectator piece, ‘modelers being
            asked to model for certain situation not looking for the best and
            worst case scenario they are looking for a specific answer to a
            question posed to them by the government to back up their
            restrictions saveface."
            <br />
            <br />
            "Stop new variants coming forward, origins of the virus, extent to
            when it was discovered, very mild, but responsibility to humanity to
            speak on it. Lives and business at risk for not allowing this
            discussion."
            <br />
            "No border closures, you actually cause human tragedy and economic
            devastation, especially for the third world, not a hermit country.
            ignored but can kill off the hospitality is dying anyway, west end
            pubs are dying, a real trajedy."
            <br />
            <br />
            Vaccines do not prevent death, polio, pneumonia influenza covid,
            smallpox. Vaccines do not save lives, o-zone layer notwithstanding.
            "...medical science says, no dispute about that, the other opinion
            is not invalidated, you can go up against the medical science if you
            want, look - the vaccine we designed in 9 mos saved millions of
            lives. others don't beleive that, but they have that right. ...I
            want to hear what the antivaxxers have to say, but not a coject
            argument that swaded by idea from the vaccine, always goes to the
            conspiratorial area, I am just not a conspiracy guy. 829k dead 52m
            37% cases omnicron. so those are the latest stats, government cannot
            stop this, we will have to play with our own. Cannot overthrow
            the&nbsp;
            <a href="https://thumbprint.us/payments">
              government treason charged
            </a>
            , cannot like for nazi or extremist. ...Makes people think big right
            wing&nbsp;
            <a href="https://nationalsecuritycasino.com/gdp">
              nazi sources about to swoop in
            </a>
            . Nah"
            <br />
            <br />
            Less of a response than unvaccinated, statistically, is only because
            you look for 5% of suspected cases being coronavirus.
            <br />
            <br />
            "'The danger the unvaccinated face is urgent and very real.'" Wolf
            Blitzer.
            <br />
            <br />
            "Almost everyone who died in the past many months are unvaccinated,
            the dangerous misinformation on cable and social media has to stop."
            <h2>
              Let the kids earn wealth? homes, bonds, equities intermediate
              labor not useless price inelasticity bid-to-ask bonds forever to
              be serfs with your damned trade secrets and incorrect right
              answers. for instance, GDP or gdp is productive, GDP/p does not
              isolate the cause of inflation seeing oscillation and exponential
              growth 1800-1913, 1914-2020
            </h2>
            "Have to keep the schools open, even testing is being hoarded by
            monopolies, and the government is malfeasant over the microeconomic
            supply and demand assumption of self-regulations for price, quality
            and permitted duress by minimal viable product
            <span
              style={{
                color: "grey"
              }}
            >
              , desistation by jury truth, or conviction by arresting officer
              evidence or no jail nor bail
            </span>
            , setting up testing sites around the country doesn’t need to be
            nationalized, it is free rider mutable.
            <br />
            <br />
            "Covid Recovery Bill Saved the economy, Stood up public health
            infrastructure (after a century of expiring claims you want to
            instead of banning invoices and non-rollover insurance, nationalize
            the invoices for bond-index-fund boomer work deficit? They had their
            whole lives to save in checking $64/year/p, not bonds $3k/year/p,
            nor debt $12k/year/p) that will continue during the need of the
            covid pandemic (not a pandemic with insignificant deaths and
            hospitalizations year to year). jobs and transit system $100b for
            climate, take what you can get, it is so important (to decide what
            the consumer wants? target margin consumer surrogate instead of
            nationalizing everything afro-tool! Jiggering profits loose from
            labor),” free rider mutable brought forward demand is always a
            useless price inelasticity unless rolls over. "Ccc so important for
            low income families their additional $1.6t/mo, laundering to bonds,
            now only possibly getting $2t Executive order $1.8t ccc Manchin into
            law (parental-trust-building, illegal as was ppp for existing biz
            and bbb is for government contractors free rider mutable beyond
            article 4 and debt service 10-40%, 40-50% debt spending, useless
            price inelasticity for the same intermediate labor and material
            resource depositary, non-concurrentable being doctors and mechanic
            hours, scripts being as prohibitive to entry as unions and
            immigration laws, and therefore, comparative advantage tech
            advancement per hour price deflation productivity from hours
            constituting all demand)."
            <h2>
              Need a permit with jury as would for desistation and conviction.
              If evidence were presented in court, it wouldn’t fly.
              <br />
              Duress beyond minimal viable product is not Tranquil society nor
              voluntary trade; population growth alone expected more deaths than
              covid produced, although how can virus be the cause if it requires
              the first cell to start, and has no taxonomy other than cell,
              while cell taxonomy is bacteria. Only amongst bacteria is virus
              made.
            </h2>
            "Benefits constituents of West Virginia, measured by unamortized
            monthly savings making lender landlord insurer work deficit,"
            actually raising housing costs. Hakeem Jefferies, counts hours
            worked as productive. Burn in Hell uncle tom, gentrification with
            HUD retard slave driver fox! We are not serfs! We do not care about
            unamortized poverty, we care about how easy lender landlord and
            insurers with free rider mutable government intervention rent-seeks,
            but that is only 1/3 of all debt, public and private, still
            loitering and laundering third party donee beneficiary surrendered
            force majeure implausiblly deniable surrendered by another. We need
            not laborless-demand!
            <br />
            <br />
            You don’t need to 40% debt spending and 10-40% debt service
            <br />
            "Community centers, the banks, so they can get them tested, 'free.'"
            Well, even corporate-profit/withheld-outlays tax from outside the
            market is pure inflation, only when it is "
            <a href="https://truncatedsalestax.com">free rider immutable</a>,"
            is it a bargain. We do not need to test asymptomatically, since it
            is only 5% prevalent coronavirus among symptomatic significance,
            that which is&nbsp;
            <a href="https://humanharvest.info/polio">
              insignificant deaths and hospitalizations year to year
            </a>
            , to boot. Excess deaths age standardized does not account for the
            boomers life expectancy ago being beyond the WWII lull in population
            growth, so 2010-2020 excess deaths and some&nbsp;
            <a href="https://humanharvest.info/polio">sanitary conditions</a>
            &nbsp; raising average lifetime, of record/as recorded by event.
            <br />
            "If you are with non vaccinated you are at higher risk of being
            infected." It was in the room, Vivek Murthy, ass. Virus has never
            been&nbsp;
            <a href="https://youtu.be/Weqb9KrQ-TU?t=21">without bacteria</a>.
            <br />
            <h2>
              I projected this mortality in 2015 from population growth alone.
              In fact, we are still short what we expect from birth-death life
              expectancy ago
              <br />
              <br />
              Do you honestly thiinkk it is an evolutionary trait if it,
              “requires cell to replicate?” I want vivo proof it isn’t
              non-exclusive byproduct-bacterial-infection for that virion as
              debris does not all-inclusive cause, make.
            </h2>
            7k/day cases in nj is not "spread at that rate before," because it
            is 5% symptomatic and we have never tested asymptomatic; also,
            prevalence does not cuase make. Evolution goes from bacteria to cell
            to virion. It only comes out, it doesn't, "require cell to&nbsp;
            <a href="https://youtu.be/Weqb9KrQ-TU?t=21">replicate</a>&nbsp;by
            injecting DNA in an instant."
            <br />
            <br />
            discrimination for evidence by the discredited, and masks don't work
            because&nbsp;
            <a href="https://moldmask.co">heat/density rises</a>, and bacteria
            is in your sneeze which must be released.
            <br />
            <br />
            Is there a mandate that you would shoot him in the face? We could do
            it over tea, you need to have jury permits. Castle benefits from
            doubt, different tort of without expiring claims.
            <br />
            <br />
            <Cable
              style={{ width: "100%", maxHeight: "50vw", height: "360px" }}
              onError={handleScollImgError}
              //img={true}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://drive.google.com/file/d/1aQY2oZQbqEz9lgn7wVr7jleJnVTe3w5T/preview"
              }
              float="left"
              title="Phil Murphy (Facebook) - healthcare banking"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={!this.state.rooster ? 0 : this.state.scrollTop}
            />
            15% evidence higher in unvaxxed groups, so we do have evidence it
            saves lives,” not if you are counting 5% of cases, it sounds like a
            non-exclusive byproduct warning mechanism, not an all-inclusive
            artifact.
            <br />
            <br />
            “China is going to pay a big price, they brought this virus to the
            world.” “There was no one’s fault that this virus his this country.”
            <br />
            "Make your family feel safer, and be safer.”
            <br />
            "10k vaccination sites, on top of the 80k we already had in place."
            Brought forward demand's always uselsss price inelasticity of
            bid-to-ask.
            <br />
            "I’m setting up places where there is high demand, this will result
            in new booster appointments," government bond index funds doesn’t
            have to rent seek free rider mutable healthcare banking with
            expiring claims.
            <br />
            “Those who are unvaccinated are causing hospitals to overrun again,”
            the capacity hasn’t increased since 1970, and you only count 5% of
            all pneumonia influenza covid.
            <br />
            <br />
            unamortized savings,&nbsp;
            <a href="https://www.njconsumeraffairs.gov/statutes/consumer-fraud-act.pdf">
              estimates as property
            </a>
            &nbsp;and expiring claims
            <h2>
              healthcare banking&nbsp;&bull;&nbsp;
              <a href="https://truncatedsalestax.com">rollover insurance</a>
            </h2>
            job recruiters have wasted days of my time,&nbsp;
            <a href="https://teapharmacy.party/drugs">I smoke</a>, get over it.
            <br />
            <br />
            Only 5% of suspected cases and less than expected total deaths from
            population growth alone. "
            <a href="https://youtu.be/Weqb9KrQ-TU?t=21">
              Virion injects DNA into cell
            </a>
            ," is made up.
            <br />
            <br />
            NJ 101.5: “There was no&nbsp;
            <a href="https://humanharvest.info/polio">flu season</a>
            &nbsp;during covid because people were masked up.”
            <Cable
              style={{ width: "100%", maxHeight: "50vw", height: "360px" }}
              onError={handleScollImgError}
              img={true}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://www.dropbox.com/s/xk5lfqiw4k936e4/BeFunky-collage.png?raw=1"
              }
              float="left"
              title="Phil Murphy (Facebook) - healthcare banking"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={!this.state.rooster ? 0 : this.state.scrollTop}
            />
            <h2>
              "Conservatives," front running&nbsp;
              <a href="https://saverparty.xyz">free rider mutable</a>
              &nbsp;demand
            </h2>
            useless price inelasticity bid-to-ask of&nbsp;
            <a href="https://bankingisnot.biz">third party</a>. Competing with
            consumers
            <Cable
              style={{ height: "260px" }}
              onError={handleScollImgError}
              //img={true}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://drive.google.com/file/d/1oToEfTSFhtfyhphrnL9e_ndPh-695iNy/preview"
              }
              float="left"
              title="National Report (Newsmax) - Blaise Ingoglia on covid and tt Gotleib monoclonal antibodies"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={!this.state.rooster ? 0 : this.state.scrollTop}
            />
            Just count 5% of&nbsp;
            <a href="https://www.fda.gov/media/144245/download#page=42">
              suspected
            </a>
            &nbsp;cases&nbsp;
            <a href="https://humanharvest.info/polio">hospitalized</a>
            &nbsp;and say, "This president has failed, again and again. Death
            and hospitlization for the unvaccinated."
            <br />
            <br />
            <a href="https://youtu.be/Weqb9KrQ-TU?t=21">bacterial-illness</a>
            &nbsp;warning mechanism antiviral pipeline water monoclonal
            antibodies - omicron.
            <br />
            <br />
            Placebo strong, killed my grandparents' friends. They went out
            holding hands with morbidities. They were like, "I guess now."
            <br />
            <br />
            Bo Snerdley: " ...How about the people that you lost, for how long
            they were in your life." Only 5% of suspected cases and less than
            expected total deaths from population growth alone.
            <br />
            <br />
            “China is going to pay a big price, they brought this virus to the
            world.” Kamala responds to Trump, “There was no one’s fault that
            this virus his this country.”
            <br />
            <br />
            Far right after military quitting after forced vaxx beyond
            industry-variable multiple of 11/12 jury for permit as would be
            required for desistation of jury truth and conviction with arresting
            officer evidence or no bail nor jail
            <br />
            “Testing everyone for covid, it is like a checkerboard, everyone is
            getting it. I would even finance the test I couldn’t care less,” Tom
            (nj 101.5), military drill sergeant in San Diego, “ I don’t want
            people to get sick, just stay home.” The equal prevalence of
            all-“cause” does not cause, make. Is in the room. “All high end
            people, let them test and knock this thing out, no problem. Take it
            at home, I don’t take a dime, I don’t want to take anything from
            these people.”
            <br />
            <br />
            “I am not vaxxed, with antibodies though, and I didn’t get sick!”
            That is called a null hypothesis, grant. It is a byproduct of
            bacterial-infection. It isn’t an evolutionary trait nor does it have
            taxonomy beyond the cell. It is dead cellular debris, of
            non-exclusive warning mechanism artifact. Symptomatic testing would
            be an all inclusive testing regime for the TRUE cause and the TRUE
            pigeonhole to prevent
            <br />
            <br />
            Learn how to count, retard. to quell over stagnation of hours worked
            is retarded, you have productivity upside down. Why do you abject to
            unions but not "America first," nationalism? The labor shortage is
            from lender, landlord, insurer work deficit, boomers booming 56m/40m
            10-year cohort 2020-2030 1.2m/yr+, or 75+ 2015-, then 40m legal 6m
            illegal 3m/yr+ prohibited from trade.
            <br />
            <Cable
              style={{ width: "100%", maxHeight: "50vw", height: "360px" }}
              onError={handleScollImgError}
              //img={true}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://drive.google.com/file/d/1znQsvQFvmdIpIkkNfjw2vVAxKng9Mr8N/preview"
              }
              float="left"
              title="Eric Bolling (Newsmax) - Doesn't know how to count mortality of significance"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            "Helps big companies when government spends on free rider mutable
            things, for free, that costs the government a lot of money like a
            business loop," Eric Bolling to Jason Miller. "Lockdowns, shutdowns,
            things that stagnate the company."
            <br />
            "They think you have to take the vaccines, because it will help you,
            but don't want to give credit for Trump."
            <br />
            <br />
            I'm an expert in statistics, market history and propoganda. The
            disparity between "non-political" testing in Israel because they
            have an all-inclusive regime for the non-exclusive byproduct debris
            of bacterial-infection that is virions. Do you honestly believe it
            is an evolutionary trait or do you think the first taxonomy wise,
            just works. Try it in front of a duress minimal viable product
            discriminatory multiple of&nbsp;
            <a href="https://qr.ae/pGqBA8">
              11/12 industry variable jury-science
            </a>
            .
            <br />
            <br />
            <Cable
              onError={handleScollImgError}
              //img={true}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://drive.google.com/file/d/1YUWeaZraN8amYiHDTx53X6qhyX_m1fwq/preview"
              }
              float="left"
              title="Stinchfield (Newsmax) - Bruce Blakeman Nassau County Executive Elect"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={!this.state.rooster ? 0 : this.state.scrollTop}
            />
            “Allow schools to make the medical determination, and allow students
            to choose which school they want to go to.”
            <br />
            <br />
            Alex Berensen: "It reduces transmission hospitalization and death,
            but once it runs off 6mo, and it isn't really clear what the affect
            on hospitalization and deaths is. The data that isn't politicized
            shows less confluence of PII vaccinations and hopsitalizations, with
            cases based on symptom and all-inclusive symptomatic-cases. Why
            would you charge unvaccinated the same as vaccinated? I dont know
            what the answer is, and I don't know why we cannot talk about it."
            <br />
            <br />
            Brian Kilmeade: "there is no indication of vitro retrospective is
            low grade fever and a runny nose, of a non-exclusive&nbsp;
            <a href="https://humanharvest.info/testing">artifact</a>."
            <h2>
              "If I don't wear a mask, I have to resign."
              <span
                style={{
                  fontSize: "9px"
                }}
              >
                writing down $12k/year/p $3k/year/p $64/year/p new,&nbsp;
                <a href="https://truncatedsalestax.com">
                  with Nick Carducci policies
                </a>
              </span>
            </h2>
            How can you say someone passes covid if you cannot prove taxonomy
            nor vivo without retroactive vitro or mitosis. “I’m a retired nurse,
            I think it is the flu, that is my opinion.”
            <br />
            <br />
            Mary Walter: "Is it HIPAA violation? I don’t know. The government
            has a right to your medical records.” Not even data sets allow cross
            compilation based on PII.
            <Cable
              onError={handleScollImgError}
              //img={true}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://drive.google.com/file/d/1ZCvZFgVbZnLiyxijnP3PEKgSzhqyJTXR/preview"
              }
              float="left"
              title="National Report (Newsmax) - PA State senator Douglas Mastriano on"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={!this.state.rooster ? 0 : this.state.scrollTop}
            />
            "<a href="https://humanharvest.info/polio">Every Death is Tragic</a>
            ." If your guy wants to&nbsp;
            <a href="https://humanharvest.info/walter">deny the election</a>
            &nbsp;on my&nbsp;
            <a href="https://thumbprint.us/voting">mortality projections</a>
            &nbsp;he will have to for ppp trust building existing business.
            <br />
            <br />
            <Cable
              style={{ height: "420px" }}
              onError={handleScollImgError}
              //img={true}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://drive.google.com/file/d/1NBMLsVabNUpr_BQX8fzgIJFvOB16euUS/preview"
              }
              float="right"
              title="Senate Dems (Facebook Live"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={!this.state.rooster ? 0 : this.state.scrollTop}
            />
            "Many of you have suffered in the panemic when nursing homes
            admitted patients into their facilities, 15k ny state cretsel gubmit
            and herbit working hard to compensate you for your rights.
            kglawteam.com"
            <br />
            <br />
            <Cable
              onError={handleScollImgError}
              //img={true}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://drive.google.com/file/d/1QA5fmAq9ppgAEzHf2aeNeo9OdRHA-QR4/preview"
              }
              float="left"
              title="Liberty Mutual says you can save on insurance by using insurance. insane. it is expiring collective loss, public or private!"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={!this.state.rooster ? 0 : this.state.scrollTop}
            />
            “Spike in new cases because of spread of omicron. Failed who chose
            not to be vaccinated now having another covid spike now planning a
            media blitz, instead of blaming the unvaccinated. It looks like we
            were right all along, folks.”
            <br />
            <Cable
              onError={handleScollImgError}
              //img={true}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://drive.google.com/file/d/1u1LSv7Z6mpxhuDTTKliQ6Rk2IdO_nfMr/preview"
              }
              float="left"
              title="Eric Bolling (The Balance,Newsmax) - 'antivaxxers are spreading variants' with Ron Johnson"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={!this.state.rooster ? 0 : this.state.scrollTop}
            />
            <br />
            <br />
            “This inflation is out of control spending, debt inflation, crime,”
            it is only 1/3 of total debt and this administration is the same as
            Trump over covid. If he uses census and my mortality projections to
            claim honor system signatures election fraud, he will have to for
            ppp trust building existing business.
            <br />
            <br />
            “And now they are saying it is the unvaccinated fault, what is going
            on here?” Eric Bolling literally counterfactualing himself in the
            same segment Policies under Trump was working. I'm more concerned if
            we don't win in 2024. More government going into debt.'
            <br />
            <br />
            <Cable
              onError={handleScollImgError}
              //img={true}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://drive.google.com/file/d/1HVOCHHEcouFRjhxhQljWy6I3nPXBNsIU/preview"
              }
              float="right"
              title="Eric Bolling (The Balance,Newsmax) - 'antivaxxers are spreading variants' with Mike Braun"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={!this.state.rooster ? 0 : this.state.scrollTop}
            />
            lender work deficit, get rid of them 1/3 of debt. You dumb, old
            hypocrites&nbsp;<a href="https://qr.ae/pGqeJd">own bonds</a>, that
            is why you are for self-harm you fucking retard Braun. “We have been
            complacent on raising the debt,” I can forbid non-voter as "no," and
            private. We are supposed to be defenders of liberty, and we don't
            always do that unless we profit with work deficit. You bet third
            party beneficiciary donee claimable in fractional reserve in
            contract vs public. Just because it is laundered through
            transitory-property you don't care? Better to put others in force
            majeure implausible deniability repo cycle kept down payments than
            yourself. fucking die you glazed donut.
            <h2>
              this is what I have been training my whole life for, ever since
              2008
            </h2>
            <Cable
              onError={handleScollImgError}
              //img={true}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://drive.google.com/file/d/1r5dmB1I90HwLFaqSuva5ixUFgd0-6HCP/preview"
              }
              float="right"
              title="Eric Bolling (The Balance,Newsmax) -  Amanda Berhante on California"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={!this.state.rooster ? 0 : this.state.scrollTop}
            />
            “Losing voting rights in New York, that is socialism, embodied.”
            <br />
            <br />
            "There isn't a huge corporate interest to get in the way of
            suppressing covid-as-byproduct-not-cause denial, denialism, and
            dismissal. The social media companies are being complicit, we should
            take them to task."
            <h2>
              Chris Salcedo's Flaccid Corporate Loss, a saveface strawman: read
              the book
            </h2>
            <Cable
              onError={handleScollImgError}
              //img={true}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://drive.google.com/file/d/19NiLQTFf7l_7sBn9PXR5PVVH_qE9aF9i/preview"
              }
              float="left"
              title="Chris Salcedo (Newsmax) - badmouthing socialism as trust building free rider mutables? We want to outlay corporate profits."
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={!this.state.rooster ? 0 : this.state.scrollTop}
            />
            do you have a dent in your head?
            <br />“<a href="https://truncatedsalestax.com">Socialists</a>
            &nbsp;seek government office by insulting because they cannot use
            proof data and facts on their side. They are dangerous.”
            <br />
            <br />
            <Cable
              onError={handleScollImgError}
              //img={true}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://drive.google.com/file/d/10KDHfLnJ0pAYLBCRsMVyCJ7OF9NFJ-iW/preview"
              }
              float="right"
              title="Greg Kelly (Newsmax) - Facebook with Zuckerberg and Fauci"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={!this.state.rooster ? 0 : this.state.scrollTop}
            />
            Fauci: “The first virus where the health is worse, need to make the
            infection worse to get rid of it.”
            <br />
            <br />
            “Mass psychosis no limit to the absurdity of the solution.” Dr.
            Peter A. McCullough.
            <br />
            “‘You need to take it, or else you will get everyone else sick,’ but
            that doesn’t really make sense,” Joe Rogan.
            <br />
            "There goes our case."
          </div>
          <br />
          Greg Kelly, market-communist, GOP libertarian: “When did government do
          big things, I remember when gov did things we really cared about.
          Remember JFK: None would be so difficult for space exploration, nor
          expensive, to accomplish.'”
          <br />
          <br />
          <Cable
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://drive.google.com/file/d/1GOPZS5lyi0An2jyiKz2vlPfT0lipJFVV/preview"
            }
            float="right"
            title="Chris Salcedo (Newsmax) - badmouthing socialism as trust building free rider mutables? We want to outlay corporate profits."
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          “Mental health disorder anxiety and depression in young people has
          doubled per person over this pandemic.”
          <br />
          <br />
          We don’t need you. Frank contacessa, "the unvaccinated are raising
          intelligent questions, and DiBlasio doesn't recognize that. They are
          becoming more defiant. We need to come together to tackle this." I
          expected more deaths from population growth alone.
          <button
            style={buttonStyle}
            onClick={(e) => {
              e.stopPropagation();
              this.setState({ tories: !this.state.tories });
            }}
          >
            <h3>tory scum</h3>
          </button>
          <br />
          <div style={setting(this.state.tories)}>
            <Cable
              onError={handleScollImgError}
              //img={true}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://drive.google.com/file/d/1OVrs0v8sSyPwE21kR21KadOdNh9iLc3H/preview"
              }
              float="left"
              title="Dan Wootton Tonight - What the Farage on political compass 2021"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={!this.state.tories ? 0 : this.state.scrollTop}
            />
            “There is a lot who would like a radical change in how the
            government run, in my party,” Nigel
            <br />“<a href="https://truncatedsalestax.com">Realignment</a>
            &nbsp;is possible.”
            <br />
            <br />
            “They aren’t going to be Cheyney but populist nationalist debt
            spending and finance work deficit/
            <a href="https://nationalsecuritycasino.com/trump">
              labor shortage
            </a>
            .” Amanda Devine.
            <br />
            <br />
            “Every single working and non-working American is losing money
            because of inflation,” Kevin McCarthy. End one party rule, fire
            Pelosi
            <br />
            <br />
            "Metro-London greenie elite"
            <br />
            <br />
            <Cable
              onError={handleScollImgError}
              //img={true}
              src={
                this.state.serviceCancelingImages
                  ? ""
                  : "https://drive.google.com/file/d/1gPjyQOHKDt7n5S9XKikj4s8y7T7RVUFN/preview"
              }
              float="left"
              title="Spicer & co (Newsmax) - Gordon G Chang and Spicer and Keith shooting the shit on drone striking islamic bankers, 'UAE treatens to pull out of deal with US'"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={!this.state.tories ? 0 : this.state.scrollTop}
            />
            “There is a lot of jobs in those drone gov jobs monopsony free rider
            mutable contractors.”
            <br />
            <br />
            <Cable
              onError={handleScollImgError}
              //img={true}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://drive.google.com/file/d/1R2DuxU2hODR9n7byAz241TciXciVz6IC/preview"
              }
              float="right"
              title="Eric Bolling (The Balance,Newsmax) - Dr. Peter McCullough, americaoutloud.com"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={!this.state.tories ? 0 : this.state.scrollTop}
            />
            “Relieved of any development costs because it was purchased from the
            federal government,”
            <br />
            <br />
            “29% nones spiritual but not religious, unaffiliated to a religious
            organization,” Why kind of Christian thinks He had to die for sins
            rather than because of them?
            <br />
            <br />
            <hr ref={this.pcr} />
            <Cable
              onError={handleScollImgError}
              //img={true}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://drive.google.com/file/d/10xMyuH9o4CCiu6E9-ceAyPoD7BZAW6Zd/preview"
              }
              float="left"
              title="American Agenda (Newsmax) - 'Markowics joins mass exodus from NYC'"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={!this.state.tories ? 0 : this.state.scrollTop}
            />
            <Cable
              style={{ height: "300px" }}
              onError={handleScollImgError}
              //img={true}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://www.youtube.com/embed/m-CwPBcrMYQ"
              }
              float="right"
              title="Rudy Giuliani (77WABC) - "
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={!this.state.tories ? 0 : this.state.scrollTop}
            />
            “High case rates, being labeled as high transmission without vivo
            insemination of cell without bacteria nor mitosis,”
            <br />
            <br />
            most asymptomatic cases of covid are not sick and most&nbsp;
            <a href="https://www.fda.gov/media/144245/download#page=42">
              similarly-sick
            </a>
            &nbsp;<a href="https://humanharvest.info/polio">aren't covid</a>.
            "Omicron may be the dominant strain, right now Delta is," because
            you set PCR to whatever strain you guess or look for, or is set as
            a&nbsp;
            <a href="https://www.labcorp.com/coronavirus-disease-covid-19/covid-news-education/guide-covid-19-variants-what-you-need-know-about#:~:text=Because%20our%20tests%20target%20the%20SARS-CoV-2%20nucleocapsid">
              non-original artifact being the SARS-COV-2 nucleocapsid
            </a>
            . there are hundred of thousands of possible virus to set for, and
            thousands more to miss each time. Yet you are just testing for
            non-exclusive artifact, retroactive-vitro byproduct, not vivo cause.
            <br />
            <br />
            "The federal government is also taking steps to accelerate this
            important work; specifically, the recent stimulus bill directs $1.75
            billion to the CDC to support genomic sequencing and surveillance
            initiatives." Is not accelerated, it is just mislabeling important,
            monopsony r&d and useless price-inelasticity of bid-to-ask.
            <Cable
              onError={handleScollImgError}
              //img={true}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://drive.google.com/file/d/1INY7dX6f-DjCC2Mu4Hch_P0yKkV-JlFY/preview"
              }
              float="left"
              title="American Agenda (Newsmax) - Dr. Rich McCormmick "
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={!this.state.tories ? 0 : this.state.scrollTop}
            />
            <h2>
              Work deficit means of labor from labor, not social Comparative
              advantage tech advancement to perpetual utility maintainless.
              1-level-board Max-royalty-contracts (Cash/debt)*income every year
            </h2>
            <h3>
              lmao. how else to emulate Pareto in a finite producer network fee
              world?
            </h3>
            <Cable
              onError={handleScollImgError}
              //img={true}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://drive.google.com/file/d/1PxDxQR7FRijO_1Z-3CRJiiVCPVvkZ6Go/preview"
              }
              float="left"
              title={`The Sun - "Boris Johnson faces four major Commons votes on his 'Plan B' covid-19 measures"`}
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={!this.state.tories ? 0 : this.state.scrollTop}
            />
            "No known benefits to the measures we are trying to informate, err,
            implement, today. Working from home 11x more abuse, as is gdp to
            velocity of m2 minus gdp divided by m2 minus currency component of
            m1 times currency component of m1. Masks, as innoculous as they may
            seem, the bacteria and signal has sent thru all societies and
            schools is to panic and fear, without regard for the 50m/yr+ excess
            deaths still expected given current mortality lifetimes and
            population growth that long ago as a cadence sum. 100k ghost
            children from lockdown, discriminatory and segregates people. Proud
            tradition in this country, we stand up for minority views, even if
            we don’t believe them ourselves nor do we have to unless, like now,
            non-voter + ideological duress voters are shunned from
            government-making. In rush to get jabs in arms, we shouldn’t throw
            that disrespect and intolerance - to the wind.
            <br />
            <Cable
              onError={handleScollImgError}
              //img={true}
              src={
                this.state.serviceCancelingImages
                  ? ""
                  : "https://drive.google.com/file/d/1w89L4XTg5yHEMspCWOb_DA2VJ-NFJe4N/preview"
              }
              float="right"
              title="Spicer & co (Newsmax) - 'Air force Discharges 27 for Refulsal to Get Covid Vaccine.' Come in new Saver Party.xyz recruits! We are making OUR OWN government! 'Each service rolled out a deadline,' like the statute of limited right"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={!this.state.tories ? 0 : this.state.scrollTop}
            />
            To ween off NHS: on the mandatory vaccination of NHS staff beyond
            &nbsp;
            <a href="https://humanharvest.info/jury">
              jury-science 11/12 multiple industry various
            </a>
            , I completely agree with my honorable friend from east worthing, ‘I
            don’t believe this is about ideology of whether people should or
            should not be vaccinated, it is about the pragmatic way to ween off
            of NHS free rider mutable expiring claims. That it is a pragmatic
            reality, that we will lose 10's of thousands of staff, at a time
            when we can least afford it. But I don't think this is no longer,
            really, a debate about whether masks work, who should have a
            vaccine, and not - it is really about who are we, what kind of
            society are we creating for OUR children [ew], do we really care
            about the freedoms that we had before 2020.
            <br />
            <TwitterTweetEmbed
              style={{ float: "left", width: "300px" }}
              key="1428050191094095878"
              tweetId="1428050191094095878"
            />
            Now, I know old fucks about to die roll-their-eyes when libertarians
            and savers promote 'civil liberties' with full-hypocrisy of the
            Non-aggression-principal in contract law and national security,
            {/**conservative and libertarians start talking about liberties and freedoms */}
            ,”
            <br />
            To which an MP responds, "Ogh, yas!"
            <br />
            The blonde continues, "'Freedom,' is not an abstract ideology.
            'Freedom,' is what enables my constituents to see their family,
            comfort the dying, to go to schools of 40% debt spending, to which
            laundering, as it is for bonds, is not a matter what money is spent
            on for lender work deficit, but better when you can waste childrens'
            time from earning wealth outright, without trade secrets. To go to
            work. That is what freedom looks like. After 20 months, we have to
            understand that there has been a change to the understanding of what
            liberty is in this country, that is why I cannot support these
            measures, and I urge the government to return to a society of
            freedom and responsibility: Nick Carducci deserves it, and he will
            RISE to the challenge."
            <br />
            <br />
            <Cable
              onError={handleScollImgError}
              //img={true}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://drive.google.com/file/d/1k9u0OfTSrFZFkoB06pxYNwhbcYcWthU3/preview"
              }
              float="right"
              title={`The Sun - "Boris Johnson faces four major Commons votes on his 'Plan B' covid-19 measures"`}
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={!this.state.tories ? 0 : this.state.scrollTop}
            />
            “People who are not vaccinated are not only causing themselves
            risks, they are blocking others in pathways of receiving care. 2/3
            of patients with covid are unvaccinated because prevalence does not
            cause make. It would be silly to think virus is an evolutionary
            trait or is alive when it requires cell to reproduce. It is merely a
            warning-mechanism of bacterial-cause, exclusively. Just wash your
            hands with warm water, fix age standardized excess deaths for
            population growth, and you will be of sound mind in the Book of Nick
            Carducci.
            <br />
            <Cable
              style={{ width: "400px", maxWidth: "100%", height: "150px" }}
              onError={handleScollImgError}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://www.youtube.com/embed/-spTY4y8euI"
              }
              float="left"
              title="Ford Brewer MD bacteria notions, reasonable doubt"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={!this.state.tories ? 0 : this.state.scrollTop}
            />
            It is not fair for the person who has been waiting for that hip
            operation for 18 months, or any other elective procedure due to
            their adherence to science and facts. We would also spend a lot less
            as we ween ourselves off of&nbsp;
            <a href="https://humanharvest.info/claims">
              non-rollover insurance
            </a>
            &nbsp;and&nbsp;<a href="https://micro-theory.com">invoices</a>
            &nbsp; estimated to buy and loiter, if we heal the what ails you,
            but not the infection, and they die without proper care. I have to
            wait for surgery because of another bed that is unvaccinated and is
            emitting the non-exclusive byproduct of bacterial-infection,
            antibodies to prevent blood clotting be damned. Surely frustrating,
            I will be voting for the government today. But I ask they do no take
            my vote for granted, that [mumbles] we see no increase nor
            hospitalization, this legislation does expire on the 6th of January,
            and they do not seek to extend it, as if this is required to be
            said, but I like to bring in precedence for slip & fall attorneys to
            chomp at. Working from home, although it is only guidance today,
            will cause destruction to small retail, and even the&nbsp;
            <a href="https://qr.ae/pGqeJd">ability for new entrants</a>, because
            of the implausible landlord use&nbsp;
            <a href="https://30under5.us">above 5 units or 30 days</a>, not
            price,&nbsp;
            <a href="https://humanharvest.info/claims">
              expiring claim false bid pools
            </a>
            &nbsp;net loss,&nbsp;
            <a href="https://carducci.us">
              force majeure implausible deniability of repo-cycle kept down
              payments laundered and loitered third party beneficiary donee
              claimable collateral
            </a>
            . I hope they keep a close eye on that. I am voting on this today
            NOT because I am whipped to do so, but after careful consideration
            and speaking to many local professionals that we believe this is the
            right thing to do.”
            <br />
            <br />
            <Cable
              onError={handleScollImgError}
              //img={true}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://drive.google.com/file/d/1CcDlcNwfVqyPLrpMrxxArair45JEvibt/preview"
              }
              float="right"
              title={`The Sun - "Boris Johnson faces four major Commons votes on his 'Plan B' covid-19 measures"`}
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={!this.state.tories ? 0 : this.state.scrollTop}
            />
            “I fully support the government front-running the booster for the
            free rider mutable racket that it is, and nothing I am about to say
            makes light of covid, in any way, at all. My issue is with language,
            and how we get the most compliance. In my constituency, there is a
            great number of people who have grave concerns about civil
            liberties, about data harvesting, and about science monopoly. That
            is why I am supporting the jury-bound-science of presented with vivo
            and vitro evidence of Cause of Death. A large multiple of twelve
            voluntary survey will do, to capture various industry jury. While I
            think their fears are unfounded, I have to listen to them. I am a
            cunt-waddler, and gave them no choice but to vote for me or my
            opponents, most didn’t even vote, by plurality.&nbsp;
            <a href="https://www.politics.co.uk/reference/election-turnout/">
              It’s a default vote, “no”
            </a>
            . “We have to take them seriously. Like Martin Pavilion said, 'We
            don’t allay those fears of overregulation with overregulation, we
            need those people to come on board in a national effort to keep
            people safe.' …
            <a href="https://teapharmacy.party">Ask them to comply</a>, we trust
            them to take the test and scan the code already.
            <br />
            {/*<TwitterTweetEmbed
             style={{ float: "right", width: "300px" }}
             key="1428312309685002241"
             tweetId="1428312309685002241"
             />*/}
            I think compliance could be increased if they can trust they are not
            facing these restrictions for no reason, they are not having their
            data harvested. It is a great concern in our constituency and I do
            respect it. The vast majority of my constituents, and the vast
            majority of the British people, will do everything asked of them by
            government without it needing to be mandates. They have been
            incredible in this pandemic. They have acted in the interest of
            themselves, their families, their communities, their cities, and
            their towns. And I would humbly ask the government to come back to
            our ‘conservative’ principles of trusting the British people. They
            are the people who sent us to this place. They have common sense.
            They know their risk. They can act with supreme intelligence. We
            must never underestimate their ‘community mindedness,’ new
            discoveries be damned to the pits of Hell. So, a last plea to
            government, that, I only comment on this evenings' votes. I won’t be
            supporting all of them, but I will be supporting some of them. The
            only way to go forward together as a nation is we have to stop
            passing never-ending regulations, and move forward in a&nbsp;
            <a href="https://carducci.us/videos">
              non-sober, but sane, non-financed way
            </a>
            .”
            <br />
            <br />
            <Cable
              onError={handleScollImgError}
              //img={true}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://drive.google.com/file/d/1kDs49pyRVUFyBWibJb_KArWbPkA3iO5L/preview"
              }
              float="left"
              title={`The Sun - "Boris Johnson faces four major Commons votes on his 'Plan B' covid-19 measures"`}
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={!this.state.tories ? 0 : this.state.scrollTop}
            />
            "A protected NHS is not MP’s going off and abandoning about
            vaccinations, a protected NHS is the best way to get thru this wave
            is where you can rent a blood pressure screening, estimated and
            expiring.” What? "Where you can have that conversation about your
            inability to concentrate and they give you wall st pharma cop
            amphetamines instead of open source licensure and review boards,
            EVEN for craft beers." Stop, "health visitors see young families,
            and can have those important conversations if women feel safe of her
            husband, at home. My next question is what happens when the next
            vaccine escape variant inevitably comes, because I think we all feel
            that is inevitable coming after this wave, we've got another one
            coming thru, because we merely set the test for it? You miss the
            shots you don't look for. So what is the plan to stop us, from
            having to repivot like this, again. What is the the long-term
            'living-with-covid strategy.' My last plea is the pandemic has
            fallen on the shoulders of our children. Please, please, please,
            confirm, that there are, 'no plans,' for mandatory-restrictions on
            schools, and that we will never close our free rider mutable 40%
            debt spending useless price
            inelasticity-of-government-gentrification and
            trade-secret-educator-monopsony kid-enslavement-camps again."
            <h2>
              the role of teachers should be to discover, not follow eachother
              like the worst doctor-politicians
            </h2>
            <Cable
              onError={handleScollImgError}
              //img={true}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://drive.google.com/file/d/1S6-uSoE6DHSZ4-Uajixwi_wlWcPs0MiI/preview"
              }
              float="right"
              title="GBNews - 'Let's talk vaccine passports' with Stephen Dorrell, former Health Secretary for John Major."
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={!this.state.tories ? 0 : this.state.scrollTop}
            />
            “Not an MP nor no longer a conservative. If mp or part of party, I
            would be part of the gov this evening, not in the way the PM has,
            behaved, but in order to protect NHS and protect public health, with
            the likely peak of this omicron variant issue in January.”
            <br />
            ”The numbers look alright. Maybe now is the time not for vaccine
            passports, it may be seen as sort of an overreaction.”
            <br />
            ”I don’t agree with your extrapolation that it is a short term
            response and to a likely peak of omicron in January and that it will
            be permanent forever. I share the view that it shouldn’t be
            announced on Sunday night as an apparent reaction to his political
            difficulties, He could have done this in a more measured way. There
            is nothing we know this week that we didn’t last week.”
            <br />
            “If we always have covid, we will always have passports. One vote
            for the rest of out lives.”
            <br />
            “As I understand it, the powers that are being saught by the
            government by tonight’s vote are temporary and therefore would have
            to be renewed. It is one thing to seek those powers against the
            background of a likely peak in January, and the government seeking
            to prolong them after the peak has passed and the pressure on the
            NHS is easing. So, I think it is a proper response to a short term
            peak in demand of the National Health Service.”
            <h2>
              In the U.S., due to the missapropriation of funds by expiring
              claims, closed source licensure and non-rollover&nbsp;
              <a href="https://humanharvest.info/claims">insurance</a>, hospital
              beds haven't increased since half a population (and life, for that
              matter) ago.
            </h2>
            <Cable
              onError={handleScollImgError}
              //img={true}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://drive.google.com/file/d/1YwtzXpg8HXTfmZGd8uKOnFaIWn_xnJS6/preview"
              }
              float="left"
              title="GBNews - 'Let's talk vaccine passports' with Shiobhain McDonagh MP Labor Mitcham and Moren."
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={!this.state.tories ? 0 : this.state.scrollTop}
            />
            “A lateral flow test, that which we already do, I do not believe
            that is too much to ask,” it is not an exclusive byproduct-artifact,
            it is not, “the permanence of the whole thing.” Let alone the cost
            for such a free rider mutable endeavor, especially when
            understanding the evolutionary-science, based on, “the parts,” logic
            deduction of bacterial cause of infection/root-of-illness, and viral
            warning-mechanism.
            <br />
            <br />
            <Cable
              onError={handleScollImgError}
              //img={true}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://drive.google.com/file/d/1U7GCj0bV4Q3U3QRXi1APOlhZPv_xp3hM/preview"
              }
              float="right"
              title="GBNews - 'Let's talk vaccine passports' with Ann Widdlecombe former shadow health, on third parties and non-voters (eyeroll)"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={!this.state.tories ? 0 : this.state.scrollTop}
            />
            “Michael Animote is one of those cases where he is toeing the line,
            he, ‘nearly died from it,’ (implies is is alive or evolutionary
            trait as cause). There is a flip side to it and I know some MP’s are
            of this view Maybe he has gone nuclear on this to maybe get other
            stories off the front pages be it dodgy parties, or maybe it is
            wallpaper, or maybe it is just sleaze in general. ...The idea that
            boris is doing this rather than put other stuff on the agenda is
            putting off some MP’s from voting for it.” NON-VOTERS HAVE A DEFAULT
            VOTE, “NO”
            <br />
            <br />
            <Cable
              onError={handleScollImgError}
              //img={true}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://drive.google.com/file/d/1mbbMoxrrXL1LY_AQuwr-U-agXB8lhEfk/preview"
              }
              float="left"
              title="GBNews - Ann Widdlecombe - Virus is dead"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={!this.state.tories ? 0 : this.state.scrollTop}
            />
            “Every time a virus mutates, because it will - it is in the virus’
            nature to mutate.”
            <h2>
              the virus is debris/byproduct and is as&nbsp;
              <a href="https://humanharvest.info/polio">dead</a>&nbsp;as you
              <br />
              <span style={{ fontSize: "9px" }}>
                Productivity is upside down, as relevant as ever if it's good
                for Andrew Smith to say on this topic. You all target the
                retardation of hours like you're about to watch eachothers' kids
                to boost the numbers. It is more accurately per hour price
                deflation, and homes, bonds intermediate-labor in inflation,
                gini and poverty as well if you want to treat people humanely.
                <br />
                <br />
                On vaccines, you cannot tell me what taxonomy comes before
                Virus, the only one as such, and we know it, "requires cell to
                reproduce," to boot. What, have you not calculated prevalence of
                MS for paralytic polio? Age standardized excess deaths for
                cohort size? Symptomatic-method of case-assessment? Prevalence
                does not necessarily cause make, you know - it can be byproduct
                and/or warning-mechanism as well. Here virus is a non-exclusive
                artifact.
                <br />
                <br />
                Consider other fallacies like this in science: Redi Experiment &
                chicken or egg, does it matter?
              </span>
            </h2>
            "t-cells prvent you from going to the hospital. antibodies help you
            if you get it. antibodies do not stop bacteria & severe disease..."
            <br />
            "I am seeing lowered immunity from vaccines[, get boosters?],
            sunshine, fresh air, healthy diets, things of THAT nature." 4 shots
            fully-vaccinated, 7k cases worldwide.
            <br />
            <br />
            <Cable
              style={{ height: "440px" }}
              onError={handleScollImgError}
              //img={true}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://www.youtube.com/embed/ZmUozfOPquk"
              }
              float="left"
              title="Left vs Right (77WABC) - sundays 3-5pm Sliwa vs Hahn"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            <Cable
              onError={handleScollImgError}
              //img={true}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://drive.google.com/file/d/1i7uH2miJQQqYL5lSCyhJBW9ec05swvDo/preview"
              }
              float="right"
              title="GBNews - Andrew Smith, 'conservative' MP"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            “If we don’t have a&nbsp;
            <a href="https://fred.stlouisfed.org/graph/?g=JPH7">
              thriving economy
            </a>
            , we won’t be able to pay for public services like the&nbsp;
            <a href="https://humanharvest.info/claims">NHS</a>."
            <br />
            "Isn’t the point that the vaccine passports isn’t actually a big
            restriction on our lives: you just need together double vaccinated
            or get tested to 'prove' you’re negative. That seems to be sensible
            to a lot of people."
            <br />
            "You can be doubly-jabbed and, 'still infect others with covid 19.'
            …I think this is deeply damaging to the economy, this is not a&nbsp;
            <a href="https://micro-theory.com">
              philosophical, civil-libertarian argument
            </a>
            , it is whether the individual has the&nbsp;
            <a href="https://humanharvest.info/jury">same weight</a>&nbsp;than
            the state does. If covid passes today, it will further state control
            over tomorrow. But g-d forbid under a future government who believes
            in much greater state control, we are setting a very dangerous
            precedent. I don’t accept this government is stopping people’s right
            to protest. I don’t think they have a right to disrupt other
            peoples’ livelihoods going about that. I do support what this
            government is doing. Despite the pandemic, record number of jobs,
            we’ve seen Brexit delivered. The World is at net zero carbon by 2050
            because of the UK leadership of COP26 conference in Glasslo. On
            this, I think the government has this wrong and the idea of
            mandatory vaccination. …We have had an unprecedented challenge in
            the global pandemic that we are tackling. We also had the challenge
            of delivering Brexit, as well. The fundamentals of this government
            are essentially right. There is no opposition.&nbsp;
            <a href="https://www.google.com/search?q=65+percent+of+americans">
              What opposition
            </a>
            ?” Maybe you&nbsp;
            <a href="https://www.theatlantic.com/politics/archive/2011/10/poll-most-americans-support-occupy-wall-street/246963/">
              took all their money, boy
            </a>
            .
            <br />
            <br />
            “So the message is, Jordan Klepper, do yoga and not care about the
            700k people who died from this?” CNN Sunday at 5pm est
            <br />
            <br />
            <Cable
              onError={handleScollImgError}
              //img={true}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://drive.google.com/file/d/1xzYNqDL3avTWZIgXbYZqWwm5wUaQ3MsY/preview"
              }
              float="right"
              title="GBNews - Paul on the right"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            "1/33 covid 1/200 omicron asymptomatic cases, 'top doctor whom
            identified, the disease, is mild,' says of Boris 'hysteria,' all
            indications are that it is milder than the symptoms that it causes.
            We know that it is more transmissible, than delta. Average age is 27
            in Africa, lower than the U.K., so we are accounting for age AND
            cohort this time, but still not symptomatic-trigger-method, and PCR
            test literally made for asymptomatic prevalence of a non-exclusive
            artifact, that which may be among thousands of others prevalent at
            the time of testing."
            <h2>
              "Omicron: Over a hundred infection, not a single death." Did you
              <br />
              <span style={{ fontSize: "9px" }}>
                try plugging it in? "1/2 Pfizer revenue in the last quarter"
              </span>
            </h2>
            <Cable
              onError={handleScollImgError}
              //img={true}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://drive.google.com/file/d/1cmeyK40mOHEYQSturvs4zg1sTo5Bqlka/preview"
              }
              float="left"
              title="Gorka Reality Check (Newsmax) - Ben Carson on goal post science."
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            “You notice how marxists come in target a group, restrict,
            prosecute, and sometimes it gets worse than that. If vaccines are
            effective and you are fully vaccinated, you shouldn’t be worried.
            That was the goal, but now the posts keep seeming to move. Natural
            immunity has been known since the 60’s, and if we accounted for
            them, their argument would go out the window.
            <br />
            <Cable
              onError={handleScollImgError}
              //img={true}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://drive.google.com/file/d/1ZsJLlhFCTme0QbFq5HpevbptQn53OwWR/preview"
              }
              float="right"
              title="GBNews - 'Vaccine pass' vote spoken by Wes Streeting, Shadow Health Secretary"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            I have not seen medicine so politicized. Medical people follow each
            other, so we are the most susceptible to false information. People
            get unnecessarily frightened.”
            <br />
            <br />
            “We know the virus is spreading, we know that it’s spreading
            rapidly, and we know that if it rips through the social healthcare
            workforce, that is the biggest risk to the&nbsp;
            <a href="https://humanharvest.info/claims">NHS</a>.”
          </div>
          <br />
          <Cable
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://drive.google.com/file/d/1yDUsCsSlr1XqchdYbAz7hFkW9E2Ln_yb/preview"
            }
            float="left"
            title="National Report (Newsmax) - Robert F. Kennedy, jr. on mortality and Fauci"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          “Every single one of them had mild symptoms,” because you are going
          back to the symptomatic method!
          <br />
          <br />
          "We had 20% of worldwide&nbsp;
          <a href="https://humanharvest.info/polio">covid deaths</a>."
          <br />
          <br />
          Maybe the testing is set to "omicron," you need to target polymerse
          chain reaction
          <br />
          <br />
          Non-voters is a voter, "no," to boot, ideological duress of two
          debt-spending wall st pharma cop spending.
          <br />
          <br />
          <Cable
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.serviceCancelingImages
                ? ""
                : "https://drive.google.com/file/d/1nBpx82QjQ_pxdviqjpTeUJqP--sdWmvk/preview"
            }
            float="left"
            title="National Report (Newsmax) - Dr. Evan 'SaveFace' Levine"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          “The vaccinated don’t even get a cold-like illness,” you are testing
          asymptomatically, I’m not surprised the uncleared virus is there. Test
          with symptomatic method like we usually do, and you’ll find covid
          isn’t significant among the illness cases to begin with.
          <br />
          Polio never went away, just the testing and non-exclusive byproduct of
          the acute flaccid paralysis class did, and paralytic matches ms
          today,&nbsp;<a href="https://humanharvest.info">by numbers</a>.
          <br />
          <br />
          <hr ref={this.walter} />
          The vaccinated shed the dead virus debris before the antibodies clean
          it from blood clotting-prone.
          <br />
          "Vaccinated can spread covid, we know that is a fact. I have a family
          member who is fully vaccinated and got covid, couldn't smell or taste
          until two weeks later."
          <br />
          "Vaccinations make you sick, are you going to charge them?" Need
          jury-science of various industry for rules that aren't made up nor
          have reasonable doubt for voluntary trade without duress beyond
          minimal viable product, desistation and conviction (Cause of Death).
          <br />
          <br />
          Kroger uses this fraud to stop paid leave and charge more for health
          insurance. Testing has been said to be random too
          <br />
          <br />
          Polis: "1400, 200% vaccinated 400% unvaccinated," colorado Gov. Polis.
          is that excess without population growth nor characteristics exogenous
          you are using, you fucking retard? This isn't a crime that you aren't
          fixing for without character witness as evidence, it is the reasonable
          doubt side you are fixing for exogenous factors. Take a calc class.
          <br />
          "I agree that it is your fault, but should a business be able to
          penalize you for that choice?" If it is caused/spread/transmitted by
          people who produce it as artifact of being sick, by&nbsp;
          <a href="https://www.nature.com/articles/d41586-019-00991-4">
            bacterial-(regulation)cause of virus
          </a>
          &nbsp;or not, it isn't our own fault. Your own words are admittance of
          it being a smoking gun.
          <br />
          <br />
          <Cable
            style={{
              width: "400px",
              maxWidth: "100%",
              height: "200px",
              maxHieght: "30vw"
            }}
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://drive.google.com/file/d/1G3UadhCwRqIDzJ3gRH9VAkO9AiEJkEX-/preview"
            }
            float="right"
            title="Not My Party (The Bulwark) - Cuomo Plandemic, The US Census Bureau and I called it."
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          “Forced nursing homes to take in residents,”
          <br />
          <br />
          1.2m/yr+ (55m/yr+ worldwide) excess deaths age standardized by cohort
          gains expected is more than&nbsp;
          <a href="https://www.nursinghomeabusecenter.com/blog/covid-nursing-home-deaths/">
            169k
          </a>
          &nbsp;lot.
          <br />
          <br />
          Star Ledger: "N.J. reports 3,591 COVID cases,&nbsp;
          <a href="https://humanharvest.info/polio">12 deaths</a>.
          Hospitalizations top 1,000 for 3rd day."
          <br />
          <a href="https://www-doh.state.nj.us/doh-shad/topic/Mortality.html">
            Out of 192/day deaths
          </a>
          , this byproduct prevalence not being the cause is insignificant
          anyway
          <br />
          <br />
          “First, virion injects its DNA into cell. Next, cell becomes a virus,
          so the virion cannot get in there, so it doesn’t kill anybody! Anyone
          with covid has to get oxygen by force, because self-harm is illegal.
          This is all a political payoff to Pfizer helping Biden and&nbsp;
          <a href="https://www.cdc.gov/vaccines/acip/recs/grade/covid-19-moderna-vaccine.html#:~:text=cSeven%20serious">
            Moderna
          </a>
          &nbsp;nothing to see&nbsp;
          <a href="https://link.springer.com/article/10.1007/s00259-021-05314-2">
            here
          </a>
          /J&J helping Trump.” Go bark up a tree.
          <h2>
            you think since virus, "requires cell to replicate," the first virus
            cam from where?
          </h2>
          M. Osterholm: "High in india then went back down to baseline," not
          affixed for cohort size on CNN with A Cooper, a delusional basis. See
          incidence of sewage/nutrition on 1775- mortality.
          <br />
          <br />
          Cases as defined by symptomatic is the same, insignificant rates of
          change year to year in similar symptoms. Asymptomatic-prevalence
          without symptom requisite, like calling majority by including eligible
          voters as "no," or not, is more elastically-prevalent towards
          asymptomatic-testing, so much so that it may not even be an indication
          of illness in the case that hotel room may have had some bacteria to
          produce 1/4 prevalence in The Common Cold Project to even take the
          warning mechanism case: either way, there is yet to be vivo electron
          microscope output of virus beyond mitosis of already
          bacterially-infected cell, just cartoons.
          <br />
          <br />
          <Cable
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1pToEJEFry8RdooYOE9YNuDfj39UU8b_s/preview"
            }
            float="right"
            title="Wake Up America (Newsmax) - Andrew Garborino on vaccinations and symptoms of patients producing covid variants"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          “25% of my patients producing covid are vaccinated, fairing well.
          People with vaccine are carrying the variants.”
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
            did someone ask for some reciprosity? They are called Boomers for a
            reason; 1.2m/yr+ 75+&nbsp;
            <a href="https://humanharvest.info/polio">2015-</a>
          </h2>
          "Excess," to me, is due upon a time-series by an event- or
          change-based-rated-level, so looking at changes on the Y-axis didn’t
          register as requiring population being fixed. I should have counted,
          but it only took estimating mortality by population growth myself to
          see that we have been short for a long time.
          <br />
          <hr ref={this.claims} />
          <button
            style={buttonStyle}
            onClick={(e) => {
              e.stopPropagation();
              this.setState({ insurance: !this.state.insurance });
            }}
          >
            <h3>insurance</h3>
          </button>
          <br />
          <div style={setting(this.state.insurance)}>
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
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={!this.state.insurance ? 0 : this.state.scrollTop}
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
          </div>
          <br />
          <hr ref={this.jury} />
          <button
            style={buttonStyle}
            onClick={(e) => {
              e.stopPropagation();
              this.setState({ juryPermitting: !this.state.juryPermitting });
            }}
          >
            <h3>juryPermitting</h3>
          </button>
          <br />
          <div style={setting(this.state.juryPermitting)}>
            market history and propoganda: The Great Leap Forward expected 15m
            35 age&nbsp;<a href="https://froth.app/stats">lifetime</a>
            &nbsp;deaths
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
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={!this.state.juryPermitting ? 0 : this.state.scrollTop}
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
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={!this.state.juryPermitting ? 0 : this.state.scrollTop}
            />
            “Courts refuse to enforce their own orders,” based on jury-science
            permittance of duress in minimal viable product.
            <br />
            <br />
            "Remember influenza and coronavirus spread in a very similar
            fashion."
            <h2>
              prevalence is byproduct, too. not cause nor warning mechanism,
              alone
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
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={!this.state.juryPermitting ? 0 : this.state.scrollTop}
            />
            n=25 14 positive vaccinated, 11 positive unvaccinated
            <br />
            “1/7 sick were unvaccinated,” production of antibodies may be having
            a "boy who cried wolf" situation, although I think antibodies just
            stop blood clotting
            <br />
            <br />
            Lets talk about the taxonomy of the virus genus.
            <br />
            Protistologist believe bacteria is cell without nucleus as the
            uniform common ancestor, I guess I’m one of them.
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
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={!this.state.juryPermitting ? 0 : this.state.scrollTop}
            />
            “I think we should be talking remediations,” if you test for it, you
            will find it.
            <br />
            Talk about fraud!
            <br />
            <a href="https://brainscan.info">
              acute psychiatric dimensia problem
            </a>
            : Mental breakdown, delusion, vascular dimensia, strokes, clots in
            the brain
            <h2>
              There are no transmitted (prevalence: cause of byproduct?) of
              omnicron killing (with).
            </h2>
            “You can’t just get a&nbsp;
            <a href="https://teapharmacy.party">prescription of regeneron</a>,
            you need to get it administered to you,” Charlie Kirk, only because
            expiring claim false bid pools thrid party donee claimable prevents
            trade to lender, landlord and insurer-bookee work deficit, from
            intermediate supply-demand as labor, without finance (expiring
            claims, invoices, implausible landlord use, repo-cycle
            kept-down-payments).
            <h2>“The precedent to establish a new baseline?!?” Charlie Kirk</h2>
            “The Gain of function research in Wuhan that our government funded
            and Fauci lied about,” Charlie, “They’ve tried every path they can.
            The ingredient has become the component to slow their fear-mongering
            propaganda away from the information that may empower you, the
            document that protects your rights,”
            <br />
            <br />
            "Requiring a negative omicron test,” Jim Acosta, ignoring the
            2k/year discovered and 5% prevalence off suspected cases. Ignoring
            the cause-linked-symptoms, an artifact 5% of the time
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
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={!this.state.juryPermitting ? 0 : this.state.scrollTop}
            />
            “Omicron has yet to kill a single person,” GBNews anchor projects
            from prevalence of byproduct not bacterial-cause.
            <br />
            If these were evolutionary traits that, “only replicate with cell,”
            requisite for all vivo-cause (ingredients-in-a-vacuum), article 4
            would apply with jury-science deducable.
            <br />
            <br />
            “Verified stream of income in perpetuity,” J. Tobacco street guest
            on free rider mutable health-“care.”
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
            didn't have demand." Judge Janine, the talk show host who said, "I
            can say that shit," 1 year ago about quid pro quo based
            discrimination for slip & fall racketeering the law-licensing-board
            <br />
            <br />
            <Cable
              style={{
                height: "240px"
              }}
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1oCE4UdaDML8i-byNLHILkRmc5NXvHkkg/preview"
              }
              float="right"
              title="GBNews - Frank Furedi (Free speech Crisis is not a right wing myth on righteous censorship, discrimination (Crt, censoring, and illiteracy have to do with one another?)"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={!this.state.juryPermitting ? 0 : this.state.scrollTop}
            />
            “We believe in free speech, we don’t want to censor ourselves.”
            Right, convict intranet for on device end to end encryption keys
            then? With multiple of 12 industry various jury-science. “This is
            bullying, isn’t it?” So fuckin cute when they do that
            <br />
            <br />
            Dick Morris: “Functional equivalent of a declaration of war, ended
            up failing because it didn’t have enough assets appraised by third
            party beneficiary repo kept down payments, if you have money but
            cannot use it in the swift system, you don’t have any money. French
            gdp/p is the greatest. ...It is a miracle, praying stopped the
            virus, by bringing a virion to stop a virus. Let's thank the Lord
            for that…”
            <br />
            <br />
            Only 10% of omicron needed rather than other variants of this
            horrible disease. Gives you aches and pains, but does not kill
            you."G-d did what Pfizer couldn't.“..sucking. Not a sexual
            reference,” I thought that was illegal to catholics whom believe
            Jesus is lamb-chop for sins?
            <br />
            <br />
            "'If you like your doctor, you can keep your doctor.' If you
            believed that, I have one bridge to sell you located in Brooklyn and
            electric toll malfeasance."
            <br />
            <br />
            Should be illegal to compel labor, and its employers and customers
            as third party beneficiary donees, to sign for longer than a month a
            la carte except for sport drafts… especially for expiring claim
            false bid non-rollover "deals" of collective flaccid loss.
            <br />
            <br />
            Abstain able polls bring out the voluntary crazies, lo is more
            random than can ever be emulated, variance is greater in real life
            than AP Stats.
            <br />I just don’t want rent-seeking from government (40%
            debt-spending, 10% debt-service) over my&nbsp;
            <a href="https://thumbprint.us/voting">election tech</a>
            &nbsp;inventions (
            <a href="https://thumbprint.us">discovery and design</a>) that can
            be &nbsp;<a href="https://3under2.us">free-rider-mutable</a>
            &nbsp;by making the cities, universities and corporates pay.
            Furthermore, evidently by comparative law, I can use any
            hung-jury-science duress, to boot.
            {/**let alone compatative advantage */}
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
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={!this.state.juryPermitting ? 0 : this.state.scrollTop}
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
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={!this.state.juryPermitting ? 0 : this.state.scrollTop}
            />
            <h2>right retards, them</h2>
            it is sensible, prevalence being the chicken rather than the egg, or
            does it really matter? Haha, about place-density, population growth
            with last years’ life expectancy is short 50m/yr in world and
            700k/yr in US. The Great Leap Forward expected 15m 35 age/lifetime
            deaths from population growth alone
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
            think virus is an evolutionary trait? It “requires cell to
            reproduce,” because it only comes out
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
            economics minor, only because I think debt is counterfeit in
            contract, and hour targeting instead of per hour price deflation is
            retarded
            <br />
            <br />
            politics is the use of reason beyond precedence, like we are the
            people that question the science. You’re just a follower. If they
            told you to jump off a bridge you would. Inject me with the virus, I
            swear it won’t spread. Antibodies will be made though. Only bacteria
            can do that
            <hr />
            <h2>
              Are you testing for all similar symptoms in ICU? fixing capacity
              for capacity? 50m short of expected excess deaths worldwide, 700k
              US, leaves the&nbsp;
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
            nearly vivo insemination has been proven with bacteria making cell
            in an open wound, but I would rather cite you this: our diagnosis of
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
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={!this.state.juryPermitting ? 0 : this.state.scrollTop}
            />
            “Antibody response positively-correlates with aggressive symptoms.”
          </div>
          <div
            style={{
              fontFamily: "'Pangolin', sans-serif",
              width: "calc(100% - 20px)",
              border: "6px white solid",
              padding: "4px",
              wordBreak: "break-word",
              textAlign: "left",
              maxWidth: "600px",
              position: "relative"
            }}
          >
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
              fwd={this["scrollImg" + scrollnum()]}
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
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            “You’d be in good company, 26m people have a medicare advantage
            plan. I have a plan too and I really love it I’ve tried other
            coverage but they do not meet my needs nor my budget, now until
            November 7th …$0 monthly premium plans may be in your area, don’t
            delay, our team is standing by to help you right now.” But what if
            invoices were illegal, what would be your purpose Paula? “You really
            want together these benefits. Coming up, you’ll see real customers.
            Come find your medicare advantage plan!”
            <br />
            <br />
            Stop calling reappropriating laborequity.org, and nationalism,
            socialism! Free market communist!
            <br />
            <br />
            Ppp is trust building and I think gun violence is because we have
            finance (expiring claims & invoices, implausible landlord use above
            5 units/30 days)
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
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            Vaccines prevent infection because of byproduct prevalence? Vivo
            insemination of virion in cell is only portrayed in cartoons thus
            far, not real life
            <br />
            <h2>
              vivo-evolutionary-trait or byproduct-retroactive-prevalence,
              because in vitro we know it only comes out,&nbsp;
              <a href="https://www.fda.gov/media/144245/download#page=42">
                5% of suspected
              </a>
            </h2>
            Mark Levin and Chuck Schumer call this collective loss,
            "protection:"
            <br />
            <br />
            "hospitals are packed, hundreds a day dying," that isn't a lot, and
            expiring claims/invoices misappropriated funds to adniministration
            instead of hospital beds, as the latter has not grown since
            population was half its size. 2015 census mortality projections,
            hospital capacity watchers and I knew this "pandemic" was coming,
            because of population growth.
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
              talk about state victimization racketeering and tort beyond
              capacity without expiring claims nor invoices and within
              jury-science (every industry represented)
            </h2>
            <br />
            "The first omicron case has arrived in the U.S. He is vaccinated, so
            he has no symptoms,"
            <br />
            <hr ref={this.lawsuits} />
            <button
              style={buttonStyle}
              onClick={(e) => {
                e.stopPropagation();
                this.setState({ lawsuits: !this.state.lawsuits });
              }}
            >
              <h3>lawsuits</h3>
            </button>
            <br />
            <div style={setting(this.state.lawsuits)}>
              age-standardized excess deaths short 700k 1.2m/yr+ 75+ 2015-
              expected is not a "pandemic."
              <br />
              <span
                style={{
                  backgroundColor: "rgb(197, 179, 88)",
                  color: "black"
                }}
              >
                Sen Rand Paul:
              </span>
              &nbsp;“If people buy what you make, G-d love you, that is the
              American way. I’m against the government buying their product.”
              What about expiring claim “purchases” and invoices? Are those ‘
              <a href="https://nationalsecuritycasino.com">buys</a>?’
              <br />
              <br />
              “Monoclonal-antibodies will take care of those who cannot take
              care of themselves.
              <br />
              Incurring more debt is why we are paying more in inflation through
              this pandemic.
              <br />
              Insurance companies should have paid for our healthcare.”
              <br />
              <h2>
                invoices and insurance coverage are theft of third party
                beneficiary
              </h2>
              <a href="https://saverparty.xyz">Plaintiffs</a>&nbsp;contend they
              are third party beneficiaries under Civil Code section 1559, which
              provides: "A contract, made expressly for the benefit of a third
              person, may be enforced by him at any time before the parties
              thereto rescind it." This section excludes enforcement of a
              contract by persons who are only incidentally or remotely
              benefited by it. (Lucas v. Hamm (1961) 56 Cal. 2d 583, 590 [15
              Cal. Rptr. 821, 364 P.2d 685].) American law generally classifies
              persons having enforceable rights under contracts to which they
              are not parties as either creditor beneficiaries or donee
              beneficiaries. (Rest., Contracts, §§ 133, subds. (1), (2), 135,
              136, 147; 2 Williston on Contracts (3d ed. 1959) § 356; 4 Corbin
              on Contracts (1951) § 774; see Rest.2d Contracts (Tentative Drafts
              1973) § 133, coms. b, c.) California decisions follow this
              classification. (Southern Cal. Gas Co. v. ABC Construction Co.
              (1962) 204 Cal. App. 2d 747, 752 [22 Cal. Rptr. 540]; 1 Witkin,
              Summary of Cal. Law (8th ed. 1973) Contracts, § 500.)
              <br />
              <br />
              [6] A person cannot be a creditor beneficiary unless the
              promisor's performance of the contract will discharge some form of
              legal duty owed to the beneficiary by the promisee. (Hartman Ranch
              Co. v. Associated Oil Co. (1937) 10 Cal. 2d 232, 244 [73 P.2d
              1163]; Rest., Contracts, § 133, subd. (1)(b).) [1b]
              <br />
              <br />
              [7] A person is a donee beneficiary only if the promisee's
              contractual intent is either to make a gift to him or to&nbsp;
              <a href="https://law.justia.com/cases/california/supreme-court/3d/11/394.html">
                confer on him a right against [11 Cal. 3d 401] the promisor.
                (Rest., Contracts, § 133, subd. (1)(a).)
              </a>
              <br />
              <br />
              "Conscious disregard, manslaughter," no… that is not as qualifying
              as negligence/manslaughter. Do you have to save someone’s life if
              you didn’t set it in motion, and can you tort more when there is
              spite, sure, but laziness or apathy? “Not my job.” "See if their a
              lesion in the brain that would cause this," not without
              correlative prevalence of such. STOP manipulation of exhibits with
              basis rate fallacies.
            </div>
            <h2>
              "expanding healthcare access - M4A," is expiring-claim, invoice
              and higher-premium for producer-ask of the same
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
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            Turning Point: “I’m not antivaxx but I am antimandate, unless you
            tell me that the vaccine stops transmission.”
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
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            “As the JHU site tells us the US is in the bottom-half of squelching
            variants,” neglecting the inability to compare cases with
            asymptomatic testing of similar symptoms with insignificant changes
            year to year.
            <br />
            “By Christmas, every citizen should have a 'free' antibody test from
            the government,”
            <br />
            “Smart testing of when people coming into the country and leaving,
            so we can stop the spread of the virus even more,”
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
            I would sooner believe virus happens without bacteria as you
            describe [5G, bad vibes] than it is transmitted! Only way it is
            transmitted with only cellular taxonomy is if it is an evolutionary
            trait to kill eachother for no obvious gain
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
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            He thinks virion is created by cell exclusively. Is it an
            evolutionary trait?
            <br />
            <button
              style={buttonStyle}
              onClick={(e) => {
                e.stopPropagation();
                this.setState({ politics: !this.state.politics });
              }}
            >
              <h3>politics</h3>
            </button>
            <br />
            <div style={setting(this.state.politics)}>
              <h2>
                Biden free rider mutable 60% tax and 40% debt-spending r&d
                monopsony
              </h2>
              "Go get the Booster shot today, they are free. a fully-vaccinated
              person is the best against covid, do not wait. every child is safe
              to get vaccines now, how strongly vaccines fight against the
              variant, infections and severe disease wear masks inside and
              outside. It protects you and those around you
              <br />
              if improvements are needed, the&nbsp;
              <a href="https://teapharmacy.party">fda</a>&nbsp;will put them on
              the market. I am removing all road blocks to keep people safe.
              <br />
              If you are vaccinated, but are worried, get the booster. if you
              aren't vaccinated, get that shot!
              <br />
              I promise America that the latest boosters will be free and
              everywhere in america, free of charge.
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
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={!this.state.politics ? 0 : this.state.scrollTop}
              />
              "We shipped for&nbsp;<a href="https://carducci.us">free</a>
              &nbsp;to other parts of the world, to more than all countries
              combined,”
              <br />
              We ship 275 vaccines to 110 countries;
              <br />
              no vaccines to other parts of the world will ever come at the
              expense of every American.
              <br />
              How do we meet the morals and protection of Americans?
              <br />
              We cannot let up untill the world is vaccinated, to protect us as
              well.
              <br />
              Last christmas fewer than half, 75% and now 81% of seniors.
              <br />
              There is still time and available before christmas. given where e
              were last year, that non of us should take for granted.
              <br />
              Thats how we reopen our business schools, even in the pandemic, we
              have made record growth, we move forward now.
              <br />
              The reason for the travel ban there was a significant amount of
              cases in africa and around the world.
              <br />
              I don't think anyone will be reluctant to report that we have
              provided more vaccines to that region than the world cobined. the
              reluctance to get it into their arms is there. lol. Alex from
              Reuters."
              <br />
              <br />
              Rent-seeking (trust-building, public-utility-operating-costable)
              grandiose scope on estimates ever changing (options to buy, sold
              without auth) dependencies, like in home contracting: intermediate
              durable-goods, labor & material. Seize the means of production!
              Gain per hour/price productivity
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
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={!this.state.politics ? 0 : this.state.scrollTop}
              />
              what is facts about a case to be called a bias if exonerated is
              permissible
              <br />
              Do you not have messages? Flight-logs aren’t proof? What else?
              These things should be public info
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
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={!this.state.politics ? 0 : this.state.scrollTop}
              />
              6 per 100 in florida because they are testing less, "per" cannot
              be per person AND per tested
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
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={!this.state.politics ? 0 : this.state.scrollTop}
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
              They think they are ahead of the day, but we have been up earlier
              in actual time
              <br />
              <br />
              If you like to compete with consumers and call yourself a
              conservative, you are making up words. Socialists prevent
              non-labor-demand. This lender-/landlord-work-deficit is 20x/person
              55+/millennial rental-income and 44x accrual at checking velocity
              of &nbsp;
              <a href="https://fred.stlouisfed.org/graph/?g=Ksmd">1.1/yr</a>
              , and how else but to launder savings accounts principal does
              $4t/yr spending 60%, 40% free rider mutable tax (1/4 pensions, 1/4
              pentagon, 1/4 premiums) not become checking-currencyComponentOfM1
              Rent seeking public utility happens when it is operating costable
              (unless perpetual motion machine or durable good like public
              parks/dollars)
              <br />
              <br />
              consumer surrogate, target margin, jury for business
              <br />
              <br />
              <h2>
                vaccinations do not stop a testing for one at a time byproduct,
                they make antibodies to stop blood clots by virion excrement
              </h2>
              , but cartoon vivo insemination isn't proof of transmission nor
              cause, just prevalence
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
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={!this.state.politics ? 0 : this.state.scrollTop}
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
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={!this.state.politics ? 0 : this.state.scrollTop}
              />
              Simple majority is quicker to find guilty than 11/12
              <br />
              Innocence isn’t ever given the benefit of the simple majority,
              especially with ideological duress of voters and defiance of
              eligible
              <br />
              <br />
              "Financial," isn’t a deal per person nor group unless it is
              immediate escrow; it is any demand that is not labor or
              share-split/tax that is not of the consumer for same goods nor for
              free rider mutable or non-concurrentable things like outlays,
              claims nor hours,
              <br />
              <br />
              it is otherwise any competition with the consumer in third party
              beneficiary law or intent to harm deduced (more than 5 units or 30
              days)
              <br />
              <br />
              politics is not a "political thing," "predicting what is more
              accurate in the future," is the very utility of politics as to
              reasoning for outlaws
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
            fwd={this["scrollImg" + scrollnum()]}
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
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={!this.state.politics ? 0 : this.state.scrollTop}
              />
              <br />
              "Republicans wouldn't go along with this," but will in 60/40 wall
              st/gov
              <br />
              2010-20 $4t/yr 1/4 pentagon 1/4 pension 1/4 expiring-premiums, 40%
              debt spending over compounding basis by such itself and debt limit
              is Zero
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
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={!this.state.politics ? 0 : this.state.scrollTop}
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
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={!this.state.politics ? 0 : this.state.scrollTop}
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
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={!this.state.politics ? 0 : this.state.scrollTop}
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
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={!this.state.politics ? 0 : this.state.scrollTop}
              />
              assumptions make an ass out of you and me
              <br />
              Just because you test one virus at a time doesn’t mean it is
              transmitted, it is borne in vivo by each individual from &nbsp;
              <a href="https://youtu.be/Weqb9KrQ-TU?t=21">bacterial</a>-cause
              <h2>
                Less likely to catch the virus just because of prevalence? You
                need vivo&nbsp;
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
              &nbsp;will know the effect of the variant on their vaccines in
              just a couple weeks,” Jim acosta, that makes no&nbsp;
              <a href="https://www.fda.gov/media/144245/download#page=42">
                sense
              </a>
              .
            </div>
            <br />
            {this.state.ios && (
              <span style={{ border: "1px solid" }}>
                "Among 3410 total cases of suspected but unconfirmed COVID-19 in
                the overall study population, 1594 occurred in the vaccine group
                vs. 1816 in the placebo group"
              </span>
            )}
            <br />
            {this.state.openpandemic && (
              <Cable
                style={{ width: "300px", height: "350px" }}
                onError={handleScollImgError}
                src={
                  this.state.noyoutube
                    ? ""
                    : "https://www.youtube.com/embed/IPQIsodwMwY"
                }
                float="left"
                title="Stephen Moore June 13th, 2021 Moore Money, Population Growth, Epiology & GDP/population - https://youtu.be/IPQIsodwMwY"
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={this.state.scrollTop}
              />
            )}
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
            use evidence and jail or acquit right away malfeasance? What else
            but racket. I thought it was a knee appointment but my mom whispered
            to them that I&nbsp;
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
              fwd={this["scrollImg" + scrollnum()]}
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
            taking people off welfare by labor monopsony of free rider mutable
            r&d monopsony tax 40% and the rest debt-spending, 10-40% debt
            service fed-state,
            <h2>
              instead of knee-capping&nbsp;
              <a href="https://30under5.us">rent</a>
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
                    : "https://www.dropbox.com/s/u9kahqiqiiqse5t/froth%20logo300150.png?raw=1"
                }
                float="right"
                title="froth.app"
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
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
            flu, 74 dying of covid and 75 being natural. Probably racketeering
            ppp trusts
            <br />
            <br />
            Marty Makary: "Adults who have not been immunized 20-30m," will make
            the virus but that doesn’t mean they transmit it to eachother, nor
            is it the only virus being produced upon&nbsp;
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
              title="Rudy Giuliani on T2T 77WABC - bacteria is cause - https://youtu.be/m-CwPBcrMYQ"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
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
            Change the way your brain is set up, by deformation or suppression
            is dysregulating
            <br />
            Government should stop experimenting on people and animal, unlock
            r&d from free rider mutable tax, 40-50% debt spend and closed source
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
            Imagine a self-licensed statistician on CNN on Sundays at 9 doing
            the following:
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
              fwd={this["scrollImg" + scrollnum()]}
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
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            established itself endemically, why don't you test for all 2k/yr
            discovered (10k/yr looked at)? prevalence does not a
            transmissibility make.&nbsp;
            <h2>it is the byproduct of bacteria</h2>, already proven vivo
            insemination by bacteria in open wound, not by G-d or without a
            taxonomy at all, like bacteria, and virus from cell.
            <br />
            <button
              style={buttonStyle}
              onClick={(e) => {
                e.stopPropagation();
                this.setState({ science: !this.state.science });
              }}
            >
              <h3>science</h3>
            </button>
            <br />
            <div style={setting(this.state.science)}>
              <h1>
                More testing begets less death/symptom co-incidence&nbsp;
                <span>does not pretend postend-to-cause</span>
              </h1>
              Cartoon vivo insemination, is dead byproduct and asymptomatic-test
              does not make a case. Remember page 42&nbsp;
              <a href="https://www.fda.gov/media/144245/download#page=42">
                https://www.fda.gov/media/144245/download#page=42
              </a>
              &nbsp;“Among 3410 total cases of suspected but unconfirmed
              COVID-19 in the overall study population, 1594 occurred in the
              vaccine group vs. 1816 in the placebo group,”&nbsp;
              <h2>is not even presentable to the jury</h2>
              <br />
              Let me qualify myself as a student of economics, market history
              and propoganda, I learned some from Monmouth U and Hopkins, and I
              might sue for damaging my degree by tranching out detractors to
              cartoon-science and doctrine-discrimination beyond jury for
              business and any semblance of the very principles and pillars of
              infinite producer reasoning in a finite producer world, targeting
              margins to make demand exclusively labor. with all this profit
              withheld we have to outlay, and with all this collateralized debt,
              we have to #AmortizeByReverse don't cancel debt:cash*income thru
              history, as to end the RepoCycleWithDowns
              <br />
              <br />
              In my science, Fauci and WHO are suffering from basis rate
              fallacy, of cases vs asymtpomatic testing of the byproduct of a
              cause of a changing byproduct, to which is garbage of a garbage
              collection process
              <br />
              <br />
              as for epiology, basis rate fallacy elsewhere and in sum, thrice,
              is ms matched paralytic polio and "age-standardized," "excess
              deaths" do not account for population growth nor age-cohort size
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
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={!this.state.science ? 0 : this.state.scrollTop}
              />
              "Transmissible doesn’t mean illness," but prevalence doesn’t mean
              transmissible
              <br />
              <br />
              nadia bashir is looking at random sample data an flipping out
              about, whatever
              <br />
              <br />
              “We are going to actually test it” Fauci needs to inseminate cell
              still with virus, not draw cartoons or find an already infected
              cell that undergoes mitosis. “Precautions acting swiftly with
              caution to be safe”
              <br />
              <br />
              bbc brexit bashing corporation is free rider mutable monopsony and
              gentrification of reporters, making it "biased" but more
              accurately industry-precedence-interested
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
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={!this.state.science ? 0 : this.state.scrollTop}
              />
              “I think we will have Christmas, but it may hit older people
              more,” just because it is prevalent in hospitalizations and deaths
              doesn’t mean it is the cause. It is byproduct of
              bacterial-infection every time, where vivo has already been proven
              (not a cartoon)
              <br />
              <br />
              they literally fund testing when desiring to sell off, then hike
              and sell to trap {"<"}$25k accounts in pattern day trading, like a
              kettle of fish
              <br />
              <br />
              random testing can produce a range in historical variation in
              prevelance as well as if you change testing method, with no
              bearing on causal-prevalence
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
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={!this.state.science ? 0 : this.state.scrollTop}
              />
              We aren’t technically in a pandemic when excess deaths is less
              than expected
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
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={!this.state.science ? 0 : this.state.scrollTop}
              />
              Vaccines don’t stop hospitalizations, nor does "virus spread," on
              account of an artifact-byproduct that doesn’t necessarily make
              when suspected case, let alone is not the cause proven by vivo
              insemination, just claiming credit when finding it in the wild, an
              dead-excrement of cells that never “injects its dna” except in
              cartoons
              <br />
              <h2>
                trust statisticians, not doctors with
                industry-precedence-interest
              </h2>
              immune escape is not measured by virus prevalence, but symptom, or
              else what are you curing?
              <br />
              _Variant (nation-based-naturalization) is just a measure of where
              testing eminated from
              <br />
              Please don't test asymptomatically, as time-series gets FOOKED
              <br />
              chicken or egg, doesn't matter. the cause is elsewhere, until you
              show me
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
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={!this.state.science ? 0 : this.state.scrollTop}
              />
              Increased rate of infection measured by asymptomatic testing? You
              are so stupid Alex
              <br />
              <br />
              Why do you think spread is testing what is byproduct of another
              cause? All you show is cartoons. I want in vivo electron
              microscope
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
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={!this.state.science ? 0 : this.state.scrollTop}
              />
              Asymptomatic testing isn’t prevalence to compare, as you can see
              hospitalizations are even for covid and flu over time because
              there asymptomatic-tests of not-necessary-artifact-type is not
              counted
              <br />
              <br />
              “The lockdown chased me out of the business”
              <br />
              Just because you test (upon symptom) doesn’t mean it isn’t just
              artifact byproduct of another cause
              <br />
              <br />
              <h3>
                Need consumer surrogate with target margins (& jury for
                business)
                <span style={{ fontSize: "9px" }}>
                  , not 60% free rider mutable tax (& 40% debt-spending, 10-40%
                  debt-service) to hide premiums at greater amortized cost
                  (actualized, concurrently-consumable-or-useable)
                </span>
              </h3>
              False bid pools (or expiring, non-rollover insurance without
              concurrentable units) engendered grave misappropriation of funds.
              At least a quarter of gdp is healthcare, because it is insurance
              AND invoices. Population has doubled since the last time new
              hospital beds were built. The available beds here probably do not
              account for slow times and states
              <br />
              <br />
              Gordon Chang, why do you think a weaponized virus without in vivo
              proof ever of replication beyond mitosis, meaning null
              insemination without bacteria in snapshot, would be released
              accidentally, or what other reason are you purporting the CCP is
              hiding their motive? If it wasn't an accident, why wouldn't they
              claim it? Just to kill? well, excess deaths might become more than
              expected with half the citizens now with induced excess antibodies
              attacking their own cell
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
                title="Dick Morris 77WABC - french revolution - https://youtu.be/nKvUf7F4Xn4"
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={!this.state.science ? 0 : this.state.scrollTop}
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
              </a>
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
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={!this.state.science ? 0 : this.state.scrollTop}
              />
              <Cable
                style={{ width: "110px", height: "100px" }}
                onError={handleScollImgError}
                src={
                  this.state.iosNoPhoto
                    ? ""
                    : "https://drive.google.com/file/d/152Dad1UJYWJVTvrd58cHihSiUyQCpl2I/preview"
                }
                float="left"
                title="National Report (Newsmax) - Bethany Mandel vaxx-freak Deseret News"
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={!this.state.science ? 0 : this.state.scrollTop}
              />
              “We are told by the top-left if we don’t want to mask up and
              separate outside while we go to a Broadway show inside, we don’t
              think the pandemic is real or we want to kill grandma. We know
              that both of those are not tru. …It seems like no one will
              advocate for them.”
              <br />
              <br />
              “They are more at risk for the flu, I encourage them to get the
              flu shot.”
              <br />
              <br />
              It’s&nbsp;
              <a href="https://www.fda.gov/media/144245/download#page=42">
                not
              </a>
              &nbsp;more effective to get vaccinated when the virus is the
              asymptomatic-byproduct and not the cause, nor all cases
              <br />
              <br />
              doctors' confirmation bias' (savefacing)
              <br />
              free-markets of finite reality by infinite reason cannot find
              truth for duress within mvp nor utility/price.&nbsp;
              <a href="https://www.cdc.gov/flu/prevent/vaccine-supply-historical.htm">
                antibodies
              </a>
              &nbsp;stop byproduct that which causes infection and illness is a
              warning&nbsp;
              <a href="https://journals.sagepub.com/doi/full/10.1177/1745691620942516">
                sign
              </a>
              <br />
              17-29% heart-attack is in vivo (above-basis prevalence or in
              vacuum with ingredients and order) by vaccine
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
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={!this.state.science ? 0 : this.state.scrollTop}
              />
              Groundbreaking: researcher says managment put outlays and
              accrual/false-bid-pools over science and settlement
            </div>
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
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={this.state.scrollTop}
              />
              simple-majority is&nbsp;
              <a href="https://youtu.be/Weqb9KrQ-TU?t=21">not</a>&nbsp;enough,
              and jury is not as&nbsp;
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
              fwd={this["scrollImg" + scrollnum()]}
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
                    : "https://www.dropbox.com/s/3lmwgcqcvrj1gx2/Projected%20mortality%20census.png?raw=1"
                }
                float={"right"}
                title="https://www.census.gov/library/stories/2017/10/aging-boomers-deaths.html"
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={this.state.scrollTop}
              />
            </a>
            <a href="https://www.prb.org/resources/countries-with-the-oldest-populations-in-the-world/">
              oldest populations in the world
            </a>
            , 55m/yr+ worldwide and&nbsp;
            <a href="https://www.census.gov/library/stories/2017/10/aging-boomers-deaths.html">
              1.2m/yr+ in U.S.
            </a>
            &nbsp;expected&nbsp;
            <a href="https://youtu.be/IPQIsodwMwY">excess deaths</a>
            &nbsp;from &nbsp;
            <a href="https://twitter.com/frothanalysis/status/1428312309685002241">
              population growth life expectancy ago
            </a>
            .
            <br />
            <br />
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
              style={buttonStyle}
              onClick={(e) => {
                e.stopPropagation();
                this.setState({ fall2021: !this.state.fall2021 });
              }}
            >
              <h3>fall2021</h3>
            </button>
            <br />
            <div style={setting(this.state.fall2021)}>
              <Cable
                style={{ height: "auto", width: "300px" }}
                img={true}
                onError={handleScollImgError}
                src={
                  this.state.serviceCancelingImages
                    ? ""
                    : "https://www.dropbox.com/s/mgm24pg4qqzelyy/2009%20index%20wwii%20life%20expectancy.jpeg?raw=1"
                }
                float={"left"}
                title={
                  `indicies of population and monies are expounded, ` +
                  `respectively showing gdp/population is constant with ` +
                  `fixed resources with differing forms and technological ` +
                  `advancements but still same melted- or decompositional-forms`
                }
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={!this.state.fall2021 ? 0 : this.state.scrollTop}
              />
              <Cable
                style={{ height: "auto", width: "300px" }}
                img={true}
                onError={handleScollImgError}
                src={
                  this.state.serviceCancelingImages
                    ? ""
                    : "https://www.dropbox.com/s/7juhzw918i6hxwm/index%20of%20growths.jpeg?raw=1"
                }
                float={"right"}
                title="full chart of the above that is zoomed-in"
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={!this.state.fall2021 ? 0 : this.state.scrollTop}
              />
              <Cable
                style={{ height: "auto", width: "300px" }}
                img={true}
                onError={handleScollImgError}
                src={
                  this.state.serviceCancelingImages
                    ? ""
                    : "https://www.dropbox.com/s/6a47ublnabh49ze/evidence%20rent%20no%2045%20to%2055%20work.jpeg?raw=1"
                }
                float={"left"}
                title="population cohorts show dramatic increase of 65-74 cohort over 2010's, absolutely"
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={!this.state.fall2021 ? 0 : this.state.scrollTop}
              />
              <br />
              froth.app/stats
              <hr />
              <br />
              Covid variants before they emerge? G-d made humoral like 'survival
              of fittest' not 'dependence.' @newsmax we can assume this @CDCgov
              <br />
              <br />
              vaccine from brought forward demand is not free @newsmax @potus
              @ftc @fcc you cannot reward people to harm themselves that is a
              form of duress and criminal-intent can be exhibited as evidence
              deduced
              <br />
              <br />
              governments have to prove virus doesn’t condensate first before
              laying your fines? @uscourts (Warning+Fines) can be totally
              replaced by torts. No victim no crime (except for masks causing
              microscopic mold and virus without human cell)
              <br />
              <br />
              even if condensation was disproven, the choice would be the
              patrons’ to make legally. The Goldman Sachs government is in the
              hole and need money. They are too corrupt to repossess and
              reimburse and move to http://3under2.us for free-rider-immutable
              service instead.
              <br />
              <br />
              Total neglectful and unreasoned corruption @PhilMurphyNJ
              @CoryBooker @SenatorMenendez where is your proof condensation
              isn’t real <br />
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
              Walensky is presenting abstract graphs of even mask-use
              correlation! We want countertop talking test! When do we want it?
              Now! @NSF
              <br />
              <br />
              When you have @NIH make your creativity for you
              <br />
              <br />
              Love when I request the countertop-talking-test and the shmoe on
              tv starts spitting a bit more @fcc @MonmouthHawks
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
                title="nj 101.5 Bill Spaedea excess deaths from population size single year  - https://youtu.be/1D6n2om9I6A"
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={!this.state.fall2021 ? 0 : this.state.scrollTop}
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
                Seven serious adverse events were deemed by blinded
                investigators to be related to vaccination. These included:
                intractable nausea/vomiting; facial swelling (two reports);
                rheumatoid arthritis; dyspnea with exertion and peripheral
                edema; autonomic dysfunction; and B-cell lymphocytic lymphoma.
                Through further investigation by the FDA, only three were
                classified as related to vaccination: one report of intractable
                nausea/vomiting and two reports of facial swelling. The FDA
                concluded that the possibility that the vaccine contributed
                could not be excluded for rheumatoid arthritis, dyspnea and
                peripheral edema, and autonomic dysfunction
              </a>
              . The FDA concluded that B-cell lymphocytic lymphoma was not
              related to vaccination.
              <a href="https://www.fda.gov/media/144452/download">citation</a>
              &nbsp;
              <br />
              I’ve made the statistical law that populations need to be shuffled
              for significance to be true
              <div style={{ width: "100%", maxWidth: "600px" }}>
                <img
                  style={{ height: "auto", width: "100%" }}
                  alt="many 60+ now 5x than 1950, gradually"
                  src="https://www.dropbox.com/s/q8n2wh39sk1u0me/Population-Pyramid-1950-to-2100-793x550.jpeg?raw=1"
                />
              </div>
              School is one of the schemes to keep youth from earning wealth
              while they learn.
              <br />
              <br />
              Scholastic public administration? @Cornell If most are fat, old,
              afro or Hispanic & 80% effectiveness to boot. I can withhold
              people based on that correlation and not on subjective minimal
              viable product
              <br />
              <br />
              Sanjay Gupta extrapolates that 20-25% of healthcare professionals
              advise against non-humoral immunity
              <br />
              <br />
              <a href="https://link.springer.com/article/10.1007/s00259-021-05314-2">
                50% worsened lymphoma obviously
              </a>
              , dependence can be assumed from survival of fittest logic . J&J
              not ad as being cultured w stem cells
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
              Imminent-danger-lethal, qualified-immunity-only-for-a-bad-shot not
              a car-face #MinnesotaIsGuilty #ChauvinTrial
              <br />
              <br />
              You want to detain people without a crime? While you allow
              serflords and banksquatting? @BrooklynDA
              <br />
              <br />
              Bail strike you let people out @JCats2013 has been saying and now
              he has you on @FCC
              <br />
              <br />
              @aclu #cfius your inability to do math is not my mental illness,
              no humoral mind is ill by definition @JudiciaryDems
              @SenJudiciaryGOP
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
              "The bill would make it illegal for businesses, schools, doctors
              or government entity to ask about people's vaccine status, require
              they be vaccinated or prove they have been vaccinated."
              <br />
              <br />
              Nick Carducci: Discrimination is a case if it is not a minimal
              viable product, like in data-share or labor-determination per
              intent-to-harm count. It is not necessary because
              median-death-age/life-expectancy is 1, spittle condensation
              98.6/72 and mRNA can cause otherwise benign tumors to be
              oncogenic? We do not know about cancer more than malignancy
              spreading, but that is what mRNA does without an antigen to
              dissolve with: extra cells like a scar
              <br />
              <br />
              condensation (98.6deg/72deg) brings the virus up. Employment has
              been back to normal and old people are still getting checks from
              youth-dollar-equity
              <br />
              <br />
              From my calculations that leaves no one helped and fraud is
              employment back to normal. People don’t look for work & pick up
              the phone if getting the prisoner-dilemma-duress-pool
              <br />
              <br />
              humoral response is better and doesn’t create dependency.&nbsp;
              <a href="https://www.baltimoresun.com/coronavirus/ct-aud-nw-nyt--20210416-c6wkb3yucncerkrydtt7bsixmy-story.html">
                This article
              </a>
              &nbsp; moves to prove this... you’re only as good as your
              creativity in&nbsp;
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
                title="Com Carter on bacteria v viral diagnosis by Pfizer and Harvard Wyss - https://youtu.be/mlEFtVlivjs"
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={!this.state.fall2021 ? 0 : this.state.scrollTop}
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
              How would [health-]equity be harmed by pause of bloating demand
              for involuntary purchases. @US_FDA&nbsp;
              <a href="https://nature.com/articles/s41577-020-00434-6/figures/2">
                stop blaming low demand on your pause
              </a>
              <br />
              <br />
              how does it help population at all, regardless if it gives cancer
              or uses aborted cells for culturing... when spittle rises with
              condensation? The evidence shows death is exponentially correlated
              w life expectancy & either everyone has it or asymptomatic trans
              not happen @US_FDA
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
                Fatties, afros, Hispanic and old people will not be allowed in
                my events on Thumbprint because they are susceptible to carrying
                and infecting others with undiscovered virus’ @JohnsHopkins
                @RutgersU @HealthNYGov
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
                title="nj 101.5 Deminski & Doyle hung jury reasonable doubt 'quack science' being virial injecting DNA into cell - https://youtu.be/m55ZAB47LHg"
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={!this.state.fall2021 ? 0 : this.state.scrollTop}
              />
              Nick Carducci doctors are not financially/legally inclined to not
              act, and they mostly get paid for acting too boot. I am also
              expert in game theory and motive
              <br />
              <br />
              Nick Carducci heat rises, electrons pull. E=mc^2 is idiotic and
              debt/invoice/insurance is self-harm. I’m smarter than everyone.
              GDP is mostly debt and not making it per person is laughable.
              Experts are wrong when they are paid for a certain outcome. I’m
              smarter than everyone. I invented the circular magnetic engine and
              royalty contracts with max profit. I also divulged the fraud of
              velocity of m1 and GDP. It is fake and mostly promises,
              counterfeit. JHU will fail you if you say principal must equal
              outlays and interest is counterfeit. They call it output. Sheesh.
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
                Rooster claims credit for the morning; exponential correlation
                of death to life expectancy @kilmeade @MartyMakary you cannot
                have it both ways. if the number of symptomatic is 70% and not
                19% then asymptomatic transmission is not a good reason to
                forbid your null hypothesis
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
                title="Ford Brewer MD bacteria notions, reasonable doubt - https://youtu.be/-spTY4y8euI"
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={this.state.scrollTop}
              />
              right, the covid vaccine causes this side effect in some patients,
              usually 2-4 days afterwards, under the arm pit of the side where
              the jab was. It resolves to normal in about four weeks. It’s
              actually considered to be a good thing. *This is not lymphoma.
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
                inclusion, let alone the risk outweighing EXPONENTIAL
                CORRELATION WITH LIFE EXPECTANCY/death per age
              </div>
              <br />
              Stu Goldstone: "I hope for your sake that you go back on your
              meds."
              <br />
              <br />
              Nick Carducci: "I haven’t been on meds ever except saying I can’t
              concentrate then got Ritalin to study from JHU[, but got kicked
              off wrestling for performance-enhancing weed, out of hands of
              prescription monopsony and in our&nbsp;
              <a href="https://vaults.biz">
                commodity-regional-money-consortium
              </a>
              ]"
              <br />
              <br />
              Arch McKown in this case, it’s not lymphoma. The lymphadenopathy
              resolves in a few weeks. With lymphoma (since you wrote lymphoma
              I’m going with it), it would present as rapidly growing and bulky
              lymphadenopathy that don’t resolve in a few weeks. Hope that helps
              to clarify for you.
              <br />
              <br />
              Nick Carducci that’s fine, I will make those distinct in my
              further discussions, but what do you think about how B-cells
              become oncogenic? What would be regular? I assume it is only when
              it is sparring with an antigen, not guiding the formation of an
              antibody by graft. This process is similar to herd-dependency.
              This is not what the Big-bang intended for us, we can defeat gain
              of function D416G mutation with our humoral response and be sure
              it won’t be prone to oncogenesis the next time our B-cells start
              up https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7561578/
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
              This guy [NJ Gov Phil Murphy]worked at Goldman Sachs. I bet if
              bonds were prosecuted as illegal, the treatment would be different
              than “grants” with strings attached. Fraud in broad daylight just
              gets ignored #COVID19
              <br />
              <br />
              I have been coding nonstop since May2019 and my upper back is
              literally so bad, probably for neck bridging in wrestling..., that
              I go to crack it - just one more time - and feel my throat move
              <br />
              <br />
              Two wrongs make a right if it’s justice @asp
              <br />
              <br />
              “trust government, trust non-paid experts of a principle and
              majorty 50-50, trust Americans” @tatereeves
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
              <TwitterTweetEmbed
                style={{ width: "300px", float: "left" }}
                key="1425460613711605760"
                tweetId="1425460613711605760"
              />
              19% are symptomatic, I can’t let this happen @US_FDA @ftc
              @JohnsHopkins @RutgersU @NYGov,&nbsp;
              <a href="https://www.nature.com/articles/d41586-020-03141-3">
                null hypothesis is huge here
              </a>
              <br />
              <br />
              “Attempting to breath is not, not compliant” duress cases. I can’t
              breathe, says Floyd. “he’s talking,” officer Tao says to a
              bystander complaining about force used on a guy likely
              hallucinating
              <br />
              <br />
              no proof it doesn’t go straight up with the condensation, which is
              98.6degrees and air is usually 72degrees. That would be the only
              grounds for a non-inclusive-mvp that isn’t breaking Amendment 13
              by free-riding on the excluded’s static societal contributions
              <br />
              <br />
              Socialism in the streetsMicrophone, communism in the
              (spread)sheets @TheDemocrats @GOP @NJGOP @njassemblydems
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
              then agrees that it is their choice and do not justify use of
              force. Let’s get Jamie Dimon and @boeing now for counterfeit in
              outstanding per treasury
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
              bankquatting & conspiring serflord cops. http://3under2.us; &
              still, cops are not allowed to crash into a fleeing subject or
              allow counterfeit or duress-borne invoice & coagulated demand
              http://foiegras.life
              <br />
              <br />
              <TwitterTweetEmbed
                style={{ width: "300px", float: "right" }}
                key="1421471623136358405"
                tweetId="1421471623136358405"
              />
              "If your mask gets moldy, perhaps it is time for a fresh one."
              <br />
              <br />
              virus are incredibly small and thereby fast; humidity is the
              making-of-a-cesspool
              <br />
              <br />
              We do not fully understand what is the regulation of B-cells, it
              is not reasonable to&nbsp;
              <a href="https://news.cancerconnect.com/treatment-care/covid-19-vaccines-and-cancer-FQLL1FPx7kyOUcSjmR2JNQ#:~:text=Given%20patients">
                force people
              </a>
              &nbsp;to be included in the economy and not be free-rode for
              static contributions to society that the prejudice benefit from.
              Additionally, virus would have to be proven to not&nbsp;
              <a href="https://pubmed.ncbi.nlm.nih.gov/17542834/">
                rise to sky
              </a>
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
              B-cells are dealing with a foreign antibody instead of sparring
              with an antigen (not to mention dependence of the facilitation of
              B-cell's humoral antibodies which work just as well and age is
              exponentially correlated with age and life expectancy). We do not
              know this, but in your opinion, think in a vacuum would a cancer
              form, or just tumor, or neither? What is the cause of those. I
              will be posting from mortality.org [fingers-crossed] life
              expectancy over deaths by age on humanharvest.info for legal
              advice and medical research. The higher population dying is
              expected.
              <br />
              <br />
              just like masks make mold and make virus worse, b-cell
              dysregulation happens by graft, you don’t need people to die to
              realize this. mRNA is not approved by fda/liability still right?
              We know leukemia has worsened oncogenesis. Stupid to think mRNA
              lymphoma wouldn’t happen when it is packed with B-cells
            </div>
            <br />
            <button
              style={buttonStyle}
              onClick={(e) => {
                e.stopPropagation();
                this.setState({
                  springsummer2021: !this.state.springsummer2021
                });
              }}
            >
              <h3>springsummer2021</h3>
            </button>
            <br />
            <div style={setting(this.state.springsummer2021)}>
              causes lymphoma; more significant than graft vs humoral response
              to D416G @CDCgov @NIH
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
              Free rider religion of self on civil rights act let alone
              exclusion @HealthNYGov @RutgersU @JohnsHopkins
              <br />
              <br />
              "you have a right to your opinion........you can also chose
              another place to go to school." two counts of exclusion by (1)
              duress & (2) no-evidence of non-cough transmission is illegal,
              free-riding JHU-supply elsewhere in the economy of those excluded.
              The exponential correlation with life expectancy is also laughable
              as a permitted manner of duress of an exclusionary-mvp
              <br />
              <br />
              What proof is not due to mask humidity mold elongating gestation
              of virus without human cell and rather virus not going up to
              atmosphere or ceiling in condensation; can we have a study of
              countertop-talking? @JohnsHopkinsSPH
              <br />
              <br />
              Non-malignant lymphadenopathy is diagnosed by “history and
              physical examination.” "Unexplained Lymphadenopathy: Evaluation
              and Differential Diagnosis Lymphadenopathy is benign and
              self-limited in most patients." (aafp.org,
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
              “Wartime effort” is fraud like gold confiscation in 1932. @ftc
              @fcc @TheJusticeDept duress religion of self. Hesitancy is not
              your choice and you certainly cannot mislead. Reporters to @fda
              now describing transparency for & doing no harm as a "trip-wire"
              https://nature.com/articles/s41577-020-00434-6/figures/2
              <br />
              <br />
              that is just the opinion of the writer on the findings. How dare
              you take his assumptions as evidence of it not being dysregular
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
              Joan Hamsteak: "Fully-vaccinated, we kinda made it work." Ma'am.
              The graft does as good as natural antibodies in defending against
              D416G mutations of the "variant(s)" and it actually causes or
              worsens&nbsp;
              <a href="https://pubmed.ncbi.nlm.nih.gov/33591026/">cancer</a>
              &nbsp;so, like the mask fosters mold for virus-chia
              <br />
              <hr />
              <br />
              <a href="https://stm.sciencemag.org/content/13/577/eabd2223">
                COVID-19 spikes SPIKE
              </a>
              : "Are you worried? Dr. Fauci is urging everyone to get the shot
              and keep wearing masks. #COVID19 (newjersey.news12.com)"
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
              @SpeakerPelosi' policy takes labor from elsewhere; doesn’t
              increase supply @ftc @TheJusticeDept
              <br />
              <br />
              “Budget reconciliation” is illegal to use as descriptors of
              spending but book value @cnn @SpeakerPelosi
              <br />
              <br />
              Why would you extend ACA instead of ban invoices. If you are
              studying the economy holistically it makes no sense to do what you
              do except to harm @BarackObama @POTUS @MittRomney
              <br />
              <br />"
              <a href="https://www.africanexponent.com/post/7633-150b-reserves-and-0-debt-gaddafis-vision-for-a-debt-free-africa">
                GET GADDAFI
              </a>
              !"
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
              Sen.Durbin: "This is great news. I commend the Biden
              Administration for opening this special enrollment period and I
              would encourage every uninsured American to #GetCovered by going
              to http://healthcare.gov today."
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
                title="nj 101.5 Dennis and Judy interview on insignificant unemployment then slander from insurance sponsored radio - https://youtu.be/Jxj0-TaTm4o"
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={
                  !this.state.springsummer2021 ? 0 : this.state.scrollTop
                }
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
                style={{
                  position: "relative",
                  maxWidth: "400px",
                  width: "100%"
                }}
              >
                <img
                  style={{
                    width: "100%",
                    height: "auto"
                  }}
                  alt="login.gov"
                  src="https://www.dropbox.com/s/2xsbg2n4mhw6ud9/GraftPassport.jpg?raw=1"
                />
              </div>
              <br />
              ".025% get skin rashes," more get blot clots and b-cell
              dysregulation (cancerous)
              <br />
              <br />
              <div
                style={{
                  position: "relative",
                  maxWidth: "400px",
                  width: "100%"
                }}
              >
                <img
                  style={{
                    width: "100%",
                    height: "auto"
                  }}
                  alt="login.gov"
                  src="https://www.dropbox.com/s/ne3liq4zpxuu04l/StarveTheUnjabbed.jpg?raw=1"
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
                title="nj 101.5 Dennis and Judy bacteria may be cause, prevalence can be byproduct, injecting into DNA is made up - https://youtu.be/MTM2Pw73Ol0"
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={
                  !this.state.springsummer2021 ? 0 : this.state.scrollTop
                }
              />
              <h1>Starve the unjabbed</h1>
              “White House will make vaccine passport, you won’t have a job
              without it”
              <br />
              <br />
              Die please, Doctor. Duress and exclusion without evidence of
              spread without touching is ILLEGAL for free-riding static
              contributions to society by the victimized
              anti-vaxxer/submissability-of-evidence
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
              Unhealthy people are Unhappy and die when tested with covid and
              19% are symptomatic, null hypothesis is huge here @NSF calls
              https://magnate.company unoriginal
              <br />
              <br />
              Civil liberties is a case in favor of the asymptomatic antivaxxer
              being included, && you without evidence Latent TB is not
              contagious but Covid-19-causing-virus one of many probably
              gained-lab-function and “vaccine”/graft b-cell dysregulation
              duress can only stay home @CNN
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
                ok to exclude unless "graphic" in accordance with some law
                please please please (public indecency)
                <br />
                <br />
                Especially if the gain-of-function, from lab-or-bat, does not
                require spittle && there-not-being-tests-of-virus-on-table as
                for Latent-TB
                <br />
                <br />
                I obey from exclusion if I am symptomatic, but get the
                “vaccine”/graft to please you @cnn won’t even say your doctoring
                consults’ name @BrookeBaldwin . Private business is grave
                violation of exclusion without evidence of virus transmission by
                talking, or countertops. Just assumed
                <br />
                <br />
                @avenaim I fail to understand how a vaccine passport violates
                your privacy. It just says you got vaccinated.
                <br />
                <br />
                @Jim_Zakany MAGA people don't want to get vaccinated or wear
                masks, but they ALSO don't want to suffer any consequences for
                their behavior. They want to go to concerts and on trips, but
                they don't really care if they kill others in the process.
              </div>
            </div>
            <br />
            <button
              style={buttonStyle}
              onClick={(e) => {
                e.stopPropagation();
                this.setState({ late2020: !this.state.late2020 });
              }}
            >
              <h3>late2020</h3>
            </button>
            <br />
            <div style={setting(this.state.late2020)}>
              moldmask.co, cocaine is money, purity health dpt @SaverParty You
              are selfish for forcing people to risk b-cell oncogenesis to be
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
              I’ve heard the “vaccine”/grafts work perfectly on a select
              variant, I’ve heard they invoke antibodies that work against cold
              too, I’ve heard the cold/natural antibodies do not work!!!! Is
              this antigen not natural?
              <br />
              <br />
              <a href="https://news.ncsu.edu/2020/05/how-long-can-viruses-survive/">
                Virus cannot live without reproducing
              </a>{" "}
              (or is debris of bacterial regulation) , how long can virus
              survive in a hijacked cell?
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
              David Wildstein of the nj globe want women reproductive services
              to be monopsonized and ordained by gov hands
              <br />
              <br />
              Don't want to scare, but want to be frank" 5 weeks after first
              dose of getting cold antibody for this (why is population stats
              delayed three months as of 4/1/2021?
              <br />
              <br />
              “About 25 to 33% of those who are hospitalized need intensive care
              [ventilators?]”
              https://www.healthgrades.com/right-care/coronavirus/how-hospitals-treat-covid-19-patients...
              masks can help the virus’ survive & replicate by locking in
              humidity moldmask.co 19% of cases are symptomatic; like 1/4 the
              population has latent TB, many probably have asymptomatic covid
              without testing. My analysis would not explain increasing
              hospitalization but for the funding
              https://www.hhs.gov/sites/default/files/covid-19-high-impact-allocation.pdf
              invoices are theft and these grants from our equity only raises
              prices for services
              <TwitterTweetEmbed
                style={{ width: "300px", float: "right" }}
                key="1420593721096253440"
                tweetId="1420593721096253440"
              />
              <h1
                style={{
                  fontFamily: '"Pacifico", sans-serif'
                }}
              >
                Don't knock it till you try it
              </h1>
              Sanjay: 'The "vaccines"/grafts have saved millions of lives' (if
              you cannot make that claim in court can you make it in advertising
              or do I have to sue and Fauci: "Going all out on the vaccine on
              Jan 10th, 2020 was the best decision in terms of intervention ever
              made" (not moving would have been better)
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
              Will they kill non-comorbid people so we cannot conclusively
              assign blame to their "vaccine"/graft? If they think they would
              not get caught (or prosecuted) answer that with can we blame the
              NIH (conciousness of guilt) for admitting guilt by canceling
              funding for experimentatin with this virus and Fauci's apparent
              amusement in "catasrophe" or the meat/pore transmission is the
              reason for virality alone
              <br />
              <br />
              you cannot ban people from travel based on duress, especially
              since there is no proof spittle doesn't rise to ceiling if hot or
              fall if heavy with protons right&nbsp;
              <a href="https://onlinelibrary.wiley.com/doi/full/10.1111/ina.12639">
                away, (retrospective has no controlled prevalence of vivo
                insemination)
              </a>
              , or it is in the meat like it has been for decades. a gun doesn't
              shoot itself - this smells of insurance fraud
              <br />
              <br />
              Vietnam had 35 people die because they aren't fat and old, the
              deaths are normal except the print of abject murder given it
              stops.
              {/*after the vaccine most people get covid 2 weeks after vaccine? a lot also at the time... what a bullshitter dr michalos is.*/}
              <br />
              <br />
              Why does this guy not have "the ability to test for covid?"
              <div
                style={{
                  position: "relative",
                  maxWidth: "400px",
                  width: "100%"
                }}
              >
                <img
                  style={{
                    width: "100%",
                    height: "auto"
                  }}
                  alt="login.gov"
                  src="https://www.dropbox.com/s/lsk8ayq9navh21k/BorderNoTest.jpg?raw=1"
                />
              </div>
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
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={!this.state.late2020 ? 0 : this.state.scrollTop}
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
              controlled evidence that it is deadlier than previous years? Why
              is population data still delayed 2 months? This is in the meat by
              your own reporters, meaning it was distributed in us food networks
              conclusively. I’m not going to be wearing a tie/noose to subjugate
              my points
              <br />
              <br />
              2-weeks to form antibodies just the same (monoclonal)! Same
              antibodies made for the polychain-reaction antiGEN test (
              <a href="https://www.addgene.org/protocols/pcr/">PCR</a>) as for
              the cold.
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
              <a href="https://www.justice.gov/">State</a>&nbsp;can brandish
              with fake facts, but not&nbsp;
              <a href="https://www.ftc.gov/">people</a>? Really helps get our
              shit out the door and be able lay-off our products to people,
              without a hitch
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
                style={{
                  position: "relative",
                  maxWidth: "400px",
                  width: "100%"
                }}
              >
                <a href="https://squatcommune.com">
                  <img
                    style={{
                      width: "100%",
                      height: "auto"
                    }}
                    alt="login.gov"
                    src="https://www.dropbox.com/s/h6hv3u3pysg1om7/SpecialBidenFund.jpg?raw=1"
                  />
                </a>
              </div>
              <br />
              <br />
              Psaki: "lending vaccines to canada," she must be talking about the
              &nbsp;
              <a href="https://squatcommune.com">mirrorcode</a>
              <div
                style={{
                  position: "relative",
                  maxWidth: "400px",
                  width: "100%"
                }}
              >
                <a href="https://twitter.com/logindotgov">
                  <img
                    style={{
                      width: "100%",
                      height: "auto"
                    }}
                    alt="login.gov"
                    src="https://www.dropbox.com/s/5godn380eqp1a57/MarkeySlavery.png?raw=1"
                  />
                </a>
              </div>
              <div
                style={{
                  position: "relative",
                  maxWidth: "400px",
                  width: "100%"
                }}
              >
                <a href="https://twitter.com/logindotgov">
                  <img
                    style={{
                      width: "100%",
                      height: "auto"
                    }}
                    alt="login.gov"
                    src="https://www.dropbox.com/s/oe1upothtyrd3jt/Screen%20Shot%202021-03-22%20at%202.13.28%20PM.png?raw=1"
                  />
                </a>
              </div>
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
            </a>
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
                src="https://www.dropbox.com/s/6rd01u8rfqhejxt/KrispyKreme.jpg?raw=1"
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
              src="https://www.dropbox.com/s/ui8zf22lo7qko3f/Screen%20Shot%202021-03-15%20at%2011.04.06%20AM.png?raw=1"
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
              src="https://www.dropbox.com/s/uj6ekumw3iv9pj5/IMG_3420.png?raw=1"
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

