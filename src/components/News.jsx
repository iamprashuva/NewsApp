import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export class News extends Component {
  handlePrev = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2932a47ab34b4bfa8a23e5dde19bb16b&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({loading : true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading :false
    });
  };
  handleNext = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2932a47ab34b4bfa8a23e5dde19bb16b&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    this.setState ({loading : true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      loading:false
    });
  };

  constructor() {
    super();
    this.state = {
      page: 1,
      articles: [],
      loading: false,
    };
  }
  async componentDidMount() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2932a47ab34b4bfa8a23e5dde19bb16b&pageSize=${this.props.pageSize}`;
    this.setState({loading : true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    });
  }

  render() {
    return (
      <div className="container my-3">
        <h2>Recent News</h2>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={
                    element.description ? element.description.slice(0, 87) : " "
                  }
                  imgUrl={element.urlToImage}
                  newsUrl={element.url}
                  author ={element.author}
                  date ={element.publishedAt}
                  source ={element.source.name}
                />
              </div>
            );
          })}
        </div>
        <div className="d-flex justify-content-between my-3">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-primary"
            onClick={this.handlePrev}
          >
            &larr;Previous
          </button>
          <button
            disabled={
              this.state.page + 1 > Math.ceil(this.state.totalResults / 15)
            }
            type="button"
            className="btn btn-primary"
            onClick={this.handleNext}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
