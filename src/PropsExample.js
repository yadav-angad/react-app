import React, {Component} from 'react';

class PropsExample extends Component {
  render() {
    return (
        <div>
          <h1>{this.props.headerProps}</h1>
          <h2>{this.props.contentProps}</h2>
        </div>
    );
  }
}
PropsExample.defaultProps = {
  headerProps: "Header from props...",
  contentProps: "Content from props..."
};
export default PropsExample;