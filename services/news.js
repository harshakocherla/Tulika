import { orderBy } from 'lodash';

import { _api_key, language, category, articles_url } from './uris';

export async function getArticles() {
  //   try {
  //     let articles = await fetch(`${articles_url}object`, {
  //       headers: {
  //         apikey: _api_key,
  //         title: 'rabbit',
  //         classification: 'Paintings',
  //       },
  //     });

  try {
    let articles = await fetch(
      `${articles_url}?category=${category}&language=${language}`,
      {
        headers: {
          'X-API-KEY': _api_key,
        },
      },
    );

    let result = await articles.json();
    articles = null;

    return orderBy(result.articles, 'publishedAt', 'desc');
  } catch (error) {
    throw error;
  }
}
