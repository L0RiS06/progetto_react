import React from 'react'
import './Article.css'

const Article = ({article}) => {
    return (
        <article className='blog-article'>
          <img src={article.image} alt={article.title} className='article-img'/>
          <div className='article-header'>
          </div>
          <h2>{article.title}</h2>
          <p>{article.price}</p>
        </article>
      );
    };
    
    export default Article;
