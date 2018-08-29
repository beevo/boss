import React, { Component } from 'react';

import CodepadContainer from '../containers/CodepadContainer';
import NewsContainer from '../containers/NewsContainer.js';
import WordpadContainer from '../containers/WordpadContainer.js';
import FilesContainer from '../containers/FilesContainer.js';
class Window extends Component {
  componentWillMount(){
  }

  componentWillReceiveProps(nextProps){

  }

  render() {
    const { componentName } = this.props;
    switch (componentName) {
      case 'Codepad':
        return (
          <CodepadContainer />
        );
      case 'Wordpad':
        return (
          <WordpadContainer />
        );
      case 'News':
        return (
          <NewsContainer />
        );
      case 'Files':
        return (
          <FilesContainer />
        );
      default:
        return (
          <div>Component {componentName} not installed.</div>
        );
    }

  }
}

export default Window;
// export default connect(mapStateToProps, { fetchPosts })(Posts);
