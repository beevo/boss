import React, { Component } from 'react';
import PropTypes from 'prop-types';
//CONNECTS COMPONETS TO REDUX STORE
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postAction'
class Posts extends Component {
  componentWillMount(){
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }
  //dont need constructor because state will come from redux
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     posts: []
  //   }
  // }
  // componentWillMount(){
  //   console.log("will mount");
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then(res => res.json())
  //     .then(data => this.setState({posts:data}));
  // }
  render() {
    const postItems = this.props.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
    const header = (
      <h1>Posts</h1>
    );
    return (
      <div>
        { header }
        { postItems }
      </div>
    )
  }
}

Posts.PropTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
}
const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
});
export default connect(mapStateToProps, { fetchPosts })(Posts);
