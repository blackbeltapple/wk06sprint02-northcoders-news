import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions/actions';

import TopicBar from './TopicBar.js';
import ArticleCard from './ArticleCard';

const ArticleList = React.createClass({
  componentWillMount () {
    this.props.fetchArticles();
  },
  render () {
    // this.props.params.topic
    return (
      <div id='ArticleList'>
        {this.props.articles.map((article, i) => {
          return <ArticleCard title={article.title} votes={article.votes} id={article._id} key={i} />;
        })}
      </div>
    );
  }
});

function mapStateToProps (state) {
  return {
    articles: state.articles,
    filter: state.filter
  };
}

function mapDispatchToProps (dispatch, props) {
  return {
    fetchArticles: () => {
      dispatch(actions.fetchArticles(props.articles));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);
