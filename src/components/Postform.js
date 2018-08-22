import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postAction';

class PostForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      body: ''
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e){
    e.preventDefault();
    console.log(e);
    const post = {
      title: this.state.title,
      body: this.state.body
    }
    this.props.createPost(post);
    //call action
  }
  onChange(e){
    this.setState({[e.target.name]: e.target.value});
    console.log(this.state);
  }
  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title: </label> <br />
            <input name="title"
              onChange={this.onChange} type="text"
              value={this.state.title} />
          </div>

          <div>
            <label>Body: </label> <br />
            <textarea name="body"
              onChange={this.onChange}
              value={this.state.body} />
          </div>
          <button type="submit">
            Submit
          </button>
        </form>
      </div>
    )
  }
}

PostForm.PropTypes = {
  createPost: PropTypes.func.isRequired,
  
};

export default connect(null, { createPost })(PostForm);
