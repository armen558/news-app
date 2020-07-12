import React from "react";

import Article from "../../components/Article/Article";
import Modal from '../../components/Modal/Modal';
import { fetchTopArticles } from "../../Helpers";

class Home extends React.Component {
  state = {
    articles: [],
    activeArticle: {},
    isModalOpen: false,
  };

  componentDidMount = () => {
    fetchTopArticles().then((data) => {
      console.log(data.articles);
      this.setState({ articles: data.articles.slice(0, 20) });
    });
  };

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
      this.setState({isModalOpen: false})
  }

  render() {
    return (
      <div className="home">
        <h2>Latest news</h2>
        {this.state.articles.map((article) => (
          <Article
            key={article.url}
            title={article.title}
            imgUrl={article.urlToImage}
            description={article.description}
            clicked={() => this.handleClick(article)}
          />
        ))}
        {this.state.isModalOpen ? (
          <Modal close={this.handleModalClose}>
            <div class="imgWrap">
              <img src={this.state.activeArticle.imgUrl} />
            </div>
            <div className="text">
              <h3>{this.state.activeArticle.title}</h3>
              <p>{this.state.activeArticle.content}</p>
            </div>
          </Modal>
        ) : null}
      </div>
    );
  }
}

export default Home;
