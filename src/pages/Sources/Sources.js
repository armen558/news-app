import React from "react";
import { Link, withRouter } from "react-router-dom";
import { fetchArticles } from "../../Helpers";

import Article from "../../components/Article/Article";
import Modal from "../../components/Modal/Modal";
import { searchArticles } from "../../Helpers";

class Sources extends React.Component {
  state = {
    articles: [],
    activeArticle: {},
    isModalOpen: false,
  };

  componentDidMount = () => {
    if (this.props.match.params.id) {
      fetchArticles(this.props.match.params.id).then((data) =>
        this.setState({ articles: data.articles.slice(0, 20) }, () =>
          console.log(this.props)
        )
      );
    } else if (this.props.match.params.query) {
      searchArticles(this.props.match.params.query).then((data) =>
        this.setState({ articles: data.articles.slice(0, 20) })
      );
    }
  };
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      fetchArticles(this.props.match.params.id).then((data) =>
        this.setState({ articles: data.articles.slice(0, 20) })
      );
    } else if (prevProps.match.params.query !== this.props.match.params.query) {
      searchArticles(this.props.match.params.query).then((data) =>
        this.setState({ articles: data.articles.slice(0, 20) })
      );
    }
  }

  handleClick = (article) => {
    let activeArticle = {};
    this.state.articles.forEach((el) => {
      if (el.url === article.url) {
        activeArticle.imgUrl = article.urlToImage;
        activeArticle.title = article.title;
        activeArticle.content = article.content;
      }
    });
    this.setState({ activeArticle, isModalOpen: true });
  };

  handleModalClose = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    let content;

    if (this.props.match.params.id) {
      content = this.state.articles.map((el) => (
        <Article
          clicked={() => this.handleClick(el)}
          key={el.url}
          title={el.title}
          description={el.description}
          imgUrl={el.urlToImage}
        />
      ));
    } else if (this.props.match.params.query) {
      if (this.state.articles.length > 0) {
        content = (
          <>
            <div className="mediumText">Search results for: <b>{this.props.match.params.query}</b></div>
            {this.state.articles.map((el) => (
              <Article
                clicked={() => this.handleClick(el)}
                key={el.url}
                title={el.title}
                description={el.description}
                imgUrl={el.urlToImage}
              />
            ))}
          </>
        );
      } else {
        content = (
          <div className="mediumText">No result found for: <b>{this.props.match.params.query}</b></div>
        );
      }
    } else {
      content = this.props.sources.map((el) => (
        <Link key={el.id} to={`/sources/${el.id}`}>
          <Article name={el.name} description={el.description} type="source" />
        </Link>
      ));
    }
    return (
      <>
        <div
          className={`articles ${
            !this.props.match.params.id && !this.props.match.params.query
              ? "sources"
              : "list"
          }`}
        >
          {content}
        </div>
        {this.state.isModalOpen ? (
          <Modal close={this.handleModalClose}>
            <div className="imgWrap">
              <img src={this.state.activeArticle.imgUrl} />
            </div>
            <div className="text">
              <h3>{this.state.activeArticle.title}</h3>
              <p>{this.state.activeArticle.content}</p>
            </div>
          </Modal>
        ) : null}
      </>
    );
  }
}

export default withRouter(Sources);
