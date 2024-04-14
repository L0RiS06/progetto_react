import articles from "../../article.json";
import Article from "../../common/Article/Article";
import './Menu.css';
import React from 'react'

const Menu = () => {
  return (
    <div id="home" className='wrapper'>
      <h1>Menu Homepage</h1>
      <section className='section-one'>
        <div className="left-section">
        {articles.map(article => (
          <Article
            key={article.id}
            article={article}
          />
        ))}
        </div>
      </section>
    </div>
  );
}

export default Menu
