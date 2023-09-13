import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import App from "./app";
import Main from "./Main";

class Path extends React.Component {
  state = {}; //"worse than good"
  //water nationwide air
  render() {
    return this.state.more ? (
      <div>
        <div
          onClick={() => {
            this.setState({ more: !this.state.more });
          }}
        >
          less
        </div>
        <iframe
          style={{ width: "100%", height: "calc(100% - 20px)" }}
          src="https://41sze.csb.app"
          title="froth.quora.com"
        />
      </div> /*<App
        pathname={this.props.pathname}
        toggle={() => this.setState({ more: !this.state.more })}
      />*/
    ) : (
      <Main
        pathname={this.props.pathname}
        toggle={() => this.setState({ more: !this.state.more })}
      />
    );
  }
}
class PathRouter extends React.Component {
  state = {};
  componentDidUpdate = () => {
    const { pathname } = this.state;
    if (this.state.lastPathname !== pathname && pathname) {
      this.setState({ lastPathname: pathname }, () => {
        this.toPathname(pathname);
      });
    }
  };
  toPathname = (pathname) => {
    this.setState({ pathname });
  };
  render() {
    return (
      <Route
        render={({ location, history }) => {
          if (location.pathname !== this.state.pathname) {
            clearTimeout(this.pauseRender);
            this.pauseRender = setTimeout(() => {
              this.setState({ pathname: location.pathname, history }, () => {
                if (location.state && location.state.statePathname) {
                  this.setState({
                    statePathname: location.state.statePathname
                  });
                }
              });
            }, 200);
          }
          return (
            <TransitionGroup key="1">
              <CSSTransition key="1" timeout={300} classNames={"fade"}>
                <Switch key={location.key} location={location}>
                  <Route
                    //exact
                    path="/"
                    render={(props) => <Path pathname={this.state.pathname} />}
                  />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          );
        }}
      />
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <PathRouter />
  </BrowserRouter>,
  rootElement
);

