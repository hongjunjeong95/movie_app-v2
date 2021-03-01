import React from "react";
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component {
  state = {
    result: null,
  };
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    } else {
      this.setState({ result: location.state });
    }
  }
  render() {
    const { result } = this.state;
    if (result) {
      return <DetailPresenter result={result} />;
    } else {
      return null;
    }
  }
}
