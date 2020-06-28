import React, { Component } from "react";
import "./App.css";

import Articles from "./components/Articles";

class App extends Component {
  state = {
    articles: this.props.articles,
  };
componentDidMount()
{
  this.onTopHandler();
}
  onTopHandler = ()=>
  {

    const newArticles = this.state.articles;
    const topArticles = newArticles.concat().sort((a, b) => {
      if (a.upvotes > b.upvotes) {
        return -1;
      }
      if (a.upvotes < b.upvotes) {
        return 1;
      }
      return 0;
    });
    this.setState({articles : topArticles});
  }

  onNewestHandler = () =>
  {
    const newArticles = this.state.articles;
    const newestArticles = newArticles.concat().sort((a, b) => {
      const aDate = new Date(a.date);
      const bDate = new Date(b.date);
      if (aDate > bDate) {
        return -1;
      }
      if (aDate < bDate) {
        return 1;
      }
      return 0;
    });
    this.setState({articles:newestArticles});
  }
  render() {
    return (
      <div className="App">
        <div className="navigation">
          <button data-testid="top-link" onClick={this.onTopHandler}>Top</button>
          <button data-testid="newest-link"  onClick={this.onNewestHandler}>Newest</button>
        </div>
        <Articles articles={this.state.articles} />
      </div>
    );
  }
}

export default App;
