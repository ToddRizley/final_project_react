import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import removeArticle from '../actions/removeArticle.js'
import fetchArticles from '../actions/fetchArticles'
import { ListGroup } from 'react-bootstrap'
import { ListGroupItem } from 'react-bootstrap'

class Article extends Component {

  componentWillMount() {
    this.props.fetchArticles.fetchArticles()
  }

  render(){
    debugger
      return(
      <div>
        <ListGroup>
          {this.props.articleList.articleList.map( (article) => {

            return(
              <ListGroupItem href="#" header={article.attributes.title}>
                {article.attributes.url}
              </ListGroupItem>
            )}
          )}
        </ListGroup>
      </div>

    )
  }
}

const ArticleList = connect(mapStateToProps, mapDispatchToProps)(Article)

function mapStateToProps(state) {
  debugger
  return {articleList: state.articleList}
  debugger
}

function mapDispatchToProps(dispatch) {
  return  {removeArticle: bindActionCreators({removeArticle}, dispatch),
  fetchArticles: bindActionCreators({fetchArticles}, dispatch)
    }
}

export default ArticleList
