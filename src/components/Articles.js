import React from "react";

class Articles extends React.Component {
  state = {
    articles: this.props.articles,
  };

  
  componentWillReceiveProps(nextProps) {
    this.setState({ articles: nextProps.articles });
  }
  render() {
    const articles = this.state.articles.map((art) => {
      return (
        <tr data-testid="article" key={Math.random()}>
          <td data-testid="article-title">{art.title}</td>
          <td data-testid="article-upvotes">{art.upvotes}</td>
          <td data-testid="article-date">{art.date}</td>
        </tr>
      );
    });
    return (
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Upvotes</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>{articles}</tbody>
      </table>
    );
  }
}

export default Articles;
