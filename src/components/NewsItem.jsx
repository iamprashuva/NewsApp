import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title, description, imgUrl, newsUrl, date, author,source} = this.props;
    return (

        <div className="card" style={{width: "18rem"}}>
          
  <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: "90%", zIndex:"1"}}>
    {source}
  </span>
        <img src={imgUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text"><small className='text-muted'>By {author? author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
          <a href={newsUrl} target="_blank" rel='noreferrer' className="btn btn-dark">Read more</a>
        </div>
      </div>
    )
}
}


