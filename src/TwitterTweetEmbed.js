import React, { Component } from "react";
import PropTypes from "prop-types";
import ExecutionEnvironment from "exenv";
import script from "scriptjs";

class Forward extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div ref={this.props.fwdtwe} />;
  }
}
const Forwardd = () =>
  React.forwardRef((props, ref) => <Forward fwdtwe={ref} {...props} />);
export default class TwitterTweetEmbed extends Component {
  static propTypes = {
    /**
     * Tweet id that needs to be shown
     */
    tweetId: PropTypes.string.isRequired,
    /**
     * Additional options to pass to twitter widget plugin
     */
    options: PropTypes.object,
    /**
     * Placeholder while tweet is loading
     */
    placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    /**
     * Function to execute after load, return html element
     */
    onLoad: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = {
      giveup: 0,
      isLoading: true
    };
    this.tw = React.createRef();
    this.fwdtwe = React.createRef();
  }

  renderWidget() {
    const { onLoad } = this.props;
    if (!window.twttr) {
      console.error(
        "Failure to load window.twttr in TwitterTweetEmbed, aborting load."
      );
      return;
    }
    if (!this.tw.current) {
      console.error(
        "Failure to load this.tw.current in TwitterTweetEmbed, aborting load.",
        this.tw.current
      );
      return;
    }
    /*let onClick = "ontouchstart" in window ? "touchstart" : "onclick";
    if (!this.tw.current["onClick"]) {
      console.error(
        "Failure to load this.tw.current[onClick] in TwitterTweetEmbed, aborting load.",
        this.tw.current["onClick"]
      );
      return;
    }*/
    if (!this.isMountCanceled && this.props.tweetId) {
      //this.tw.current.innerHTML = React.createElement("div", { ref: this.twe });
      //ReactDOM.render(reactElementUl, document.getElementById('app'));
      /*ReactDOM.render(
        forwardd(), //React.createElement("div", { ref: this.twe }),
        this.tw.current
      );*/
      this.tw.current.innerHTML = <Forwardd fwdtwe={this.fwdtwe} />;
      window.twttr.widgets
        .createTweet(
          this.props.tweetId,
          this.fwdtwe.current,
          this.props.options
        )
        .then((element) => {
          this.setState({
            isLoading: false,
            style: { height: "min-content", ...this.props.style }
          });
          if (onLoad) {
            onLoad(element);
          }
        })
        .catch((err) => {
          if (this.state.giveup === 2) return null;
          this.setState({ giveup: this.state.giveup + 1 }, () => {
            clearTimeout(this.timer);
            this.timer = setTimeout(() => {
              this.renderWidget();
            }, 1000); //in case either window.twttr or this.tw.current fails mount
          });
        });
    }
  }

  componentDidMount() {
    if (ExecutionEnvironment.canUseDOM) {
      //let script = require("scriptjs");
      script("https://platform.twitter.com/widgets.js", "twitter-embed", () => {
        this.renderWidget();
      });
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
    this.isMountCanceled = true;
  }

  render() {
    return <div ref={this.tw} style={this.state.style} />;
  }
}
