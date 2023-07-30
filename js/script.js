"use strict";
const titleClickHandler = function(event){
  event.preventDefault();
  const clickedElement = this;
  /* [DONE] remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');
  for(let activeLink of activeLinks){
  activeLink.classList.remove('active');
  }
  /* [IN PROGRESS] add class 'active' to the clicked link */
  clickedElement.classList.add('active');
  /* [DONE] remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('.posts article.active');
  for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
  }
  /* [DONE] get 'href' attribute from the clicked link */
  const articleSelector = clickedElement.getAttribute('href');
  /* [DONE] find the correct article using the selector (value of 'href' attribute) */
  const targetArticle = document.querySelector(articleSelector);
  /* [DONE] add class 'active' to the correct article */
  targetArticle.classList.add('active');
}
const optArticleSelector = '.post',
optTitleSelector = '.post-title',
optTitleListSelector = '.titles',
optArticleTagSelector = '.post-tags .list',
optArticleAuthorSelector = '.post-author';

function generateTitleLinks(){
  /* remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);
  document.querySelector('.list.titles').innerHTML = '';
  /* for each article */
  const articles = document.querySelectorAll(optArticleSelector);
  for(let article of articles){
  /* get the article id */
    const articleId = article.getAttribute('id');
  /* find the title element */
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
  /* get the title from the title element */
  /* create HTML of the link */
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
  /* insert link into titleList */
    titleList.innerHTML = titleList.innerHTML + linkHTML;
  }
  const links = document.querySelectorAll('.titles a');
  for (let link of links){
    link.addEventListener('click', titleClickHandler);
  }
}
generateTitleLinks();
function generateTags(){
  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
  /* START LOOP: for every article: */
  for (let article of articles ){
    /* find tags wrapper */
    const tagList = article.querySelector('.post-tags .list');
    /* make html variable with empty string */
    let html = '';
    /* get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags');
    /* split tags into array */
    const articleTagsArray = articleTags.split(' ');
    /* START LOOP: for each tag */
    for (let tag of articleTagsArray){
      /* generate HTML of the link */
      const linkHTML = '<li><a href="#tag-">' + tag + '</a></li>&nbsp;';
      /* add generated code to html variable */
      html += linkHTML;
    /* END LOOP: for each tag */
    }
    /* insert HTML of all the links into the tags wrapper */
    tagList.innerHTML = html;
  /* END LOOP: for every article: */
}
}

generateTags();
function tagClickHandler(event){
  event.preventDefault();
  const clickedElement = this;
  const href = clickedElement.getAttribute('href');
  const tag = href.replace('#tag-', '');
  const activeLinks = querySelectorAll('a.active[href^="#tag-"]');
  for (activeLinks of activeLinks){
    activeLink.classList.remove('active');
  }
  const tags = document.querySelectorAll('a[href="' + href + '"}')
  for (let foundTag of tags){
    foundTag.classList.add('active');
  }
  generateTitleLinks('[data-tags~="' + tag + '"]');
}

function addClickListenersToTags(){
  /* find all links to tags */
  const links = document.querySelectorAll('.post-tags a');
  /* START LOOP: for each link */
  for (let link of links){
    /* add tagClickHandler as event listener for that link */
    link.addEventListener('click', tagClickHandler)
  /* END LOOP: for each link */
  }
}

addClickListenersToTags();


function generateAuthors() {
  const articles = document.querySelectorAll(optArticleSelector);
  for (let article of articles) {
    const authorWraper = article.querySelector(optArticleAuthorSelector);
    const articleAuthor = article.getAttribute('data-author');
    articleAuthor;
    const authorHTML = '<a href=#"> ' + articleAuthor + '</a>';
    authorWraper.innerHTML = authorHTML;
  }
}
generateAuthors();
const authorClickHandler = function(event){
  event.preventDefault();
  const href = clickedElement.getAttribute('href');
  const author = href.replace('#author-', '');
  const activeAuthorLink = document.querySelectorAll('a.active[href^="#author-"]');
  for (let activeAuthorLink of activeAuthorsLinks){
    activeAuthorLink.classList.remove('active');
  }
  const authorsLinks = document.querySelectorAll('a[href = "' + href +'"]');
  for (let authorLink of authorsLinks){
    authorLink.classList.add('active');
  }
  generateTitleLinks('[data-author="' + author +'"]')
}
addClickListenersToAuthors();
const addClickListenersToAuthors = function addClickListenersToAuthor(){
  const links = document.querySelectorAll('a[href^="author-"]');
  for (let link of links){
    link.addEventListener('click', authorClickHandler);
  }
}