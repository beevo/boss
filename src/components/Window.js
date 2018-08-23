import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CodepadContainer from '../containers/CodepadContainer';
import NewsContainer from '../containers/NewsContainer.js';
import WordpadContainer from '../containers/WordpadContainer.js';
import FilesContainer from '../containers/FilesContainer.js';
class App extends Component {
  componentWillMount(){
    console.log("will mount");
    // this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps){
    console.log("received props",nextProps);
    // if (nextProps.newPost) {
    //   this.props.posts.unshift(nextProps.newPost);
    // }
  }

  render() {
    const { app } = this.props;
    console.log(app);
    switch (app.componentName) {
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
          <div>Component {app.componentName} not installed.</div>
        );
        break;
    }

  }
}

App.propTypes = {
}
export default App;
// export default connect(mapStateToProps, { fetchPosts })(Posts);
