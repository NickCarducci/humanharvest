import React from "react";
//import ReactDOM from "react-dom";
import ExecutionEnvironment from "exenv";

/*class Forward extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div ref={this.props.fwdtwe} />;
  }
}*/

class Cable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { limit: [], cache: null };
    this.page = React.createRef();
    this.fwdtwe = React.createRef();
  }
  componentDidMount() {
    if (ExecutionEnvironment.canUseDOM) {
      this.setState({ go: true });
    }
  }
  componentDidUpdate = (prevProps) => {
    if (this.state.go && this.props.scrolling !== prevProps.scrolling) {
      const { cache } = this.state;
      const { scrollTopAndHeight, scrollTop, girth, timeout } = this.props;
      var girt = girth ? girth : 1000;
      var timeou = timeout ? timeout : 1500;
      var continuee = this.props.fwd.current;
      if (!continuee && !cache) return;
      clearTimeout(this.setset);
      this.setset = setTimeout(() => {
        var page = this.page.current;
        var between =
          page.offsetTop - scrollTop > Number(`-${girt}`) &&
          scrollTopAndHeight - page.offsetTop > Number(`-${girt}`);
        if (!continuee) continuee = cache;
        this.setState({ cache: continuee, between }, () => {
          if (!between && continuee) {
            //while (page.firstChild) {
            //page.removeChild(continuee);
            continuee.remove();
            //while (page.firstChild) {
            //let onClick =
            //"ontouchstart" in continuee ? "touchstart" : "onclick";
            //if (continuee[onClick]) continuee.remove(); //touchevent
            //continuee.click();
            //}
            //continuee.parentNode.removeChild(continuee);
            //ReactDOM.unmountComponentAtNode(continuee); //ReactDOM.findDOMNode(this).parentNode
            return;
          }
          //if (!between && continuee) return continuee.remove();
          const children = [...page.children];
          if (
            children.length === 0 ||
            !children.find((x) => x === this.state.cache)
            //children[children.length - 1] !== this.state.cache
          )
            /*page.innerHTML = React.forwardRef((props, ref) => (
              <Forward fwdtwe={ref} {...props} />
            ));*/
            page.appendChild(this.state.cache);
        });
      }, timeou);
    }
  };
  componentWillUnmount = () => {
    clearTimeout(this.setset);
  };
  render() {
    const { between } = this.state;
    const { src, float, title, img } = this.props;
    //const limited = limit.find((x) => x === Object.keys(this.props.fwd));
    const onError = (e) => {
      //this.props.fwd.current.remove();
      this.props.onError(e);
    }; //ternaries remove the node and element; display removes the element, but not the node
    return (
      <div ref={this.page}>
        {src === "" ? (
          <span style={{ border: "1px gray solid" }}>{title}</span>
        ) : img ? (
          between && (
            <img
              onError={onError}
              alt={title}
              style={{
                shapeOutside: "rect()",
                float,
                width: "200px",
                border: 0,
                ...this.props.style
              }}
              ref={this.props.fwd}
              src={src}
            />
          )
        ) : (
          between && (
            <iframe
              onError={onError}
              title={title}
              style={{
                shapeOutside: "rect()",
                float,
                width: "200px",
                border: 0,
                ...this.props.style
              }}
              ref={this.props.fwd}
              src={src}
            />
          )
        )}
      </div>
    );
  }
}
export default React.forwardRef((props, ref) => <Cable fwd={ref} {...props} />);
