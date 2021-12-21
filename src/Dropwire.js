import React from "react";
class Cable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { limit: [], cache: null };
    this.page = React.createRef();
  }
  componentDidUpdate = (prevProps) => {
    if (this.props.scrolling !== prevProps.scrolling) {
      const { cache } = this.state;
      const { scrollTopAndHeight, scrollTop } = this.props;
      var continuee = this.props.fwd.current;
      if (!continuee && !cache) return;
      clearTimeout(this.setset);
      this.setset = setTimeout(() => {
        var page = this.page.current;
        var between =
          page.offsetTop - scrollTop > -1000 &&
          scrollTopAndHeight - page.offsetTop > -1000;
        if (!continuee) continuee = cache;
        this.setState({ cache: continuee, between }, () => {
          if (!between) return continuee.remove();
          if (page.children[0] !== this.state.cache)
            page.appendChild(this.state.cache);
        });
      }, 1000);
    }
  };
  componentWillUnmount = () => {
    clearTimeout(this.setset);
  };
  render() {
    const { between, continuee } = this.state;
    const { src, float, title, img } = this.props;
    //const limited = limit.find((x) => x === Object.keys(this.props.fwd));
    return (
      <div ref={this.page}>
        {!continuee || between ? (
          src === "" ? (
            <span ref={this.props.fwd} style={{ border: "1px gray solid" }}>
              {title}
            </span>
          ) : img ? (
            <img
              onError={this.props.onError}
              alt={title}
              style={{
                shapeOutside: "rect()",
                float,
                width: "200px",
                border: 0,
                ...this.props.style,
                display: src === "" ? "none" : ""
              }}
              ref={this.props.fwd}
              src={src}
            />
          ) : (
            <iframe
              onError={this.props.onError}
              title={title}
              style={{
                shapeOutside: "rect()",
                float,
                width: "200px",
                border: 0,
                ...this.props.style,
                display: src === "" ? "none" : ""
              }}
              ref={this.props.fwd}
              src={src}
            />
          )
        ) : null}
      </div>
    );
  }
}
export default React.forwardRef((props, ref) => <Cable fwd={ref} {...props} />);
