import Parser from 'rss-parser';

const parser = new Parser({
    headers: {
      Accept: 'application/rss+xml, application/xml, application/atom+xml',
    },
  });

const blog = {
    MUSINSA: 'https://medium.com/feed/musinsa-tech',
    D2: 'https://d2.naver.com/d2.atom',
    KURLY : 'https://medium.com/feed/musinsa-tech',
    WOOWA: 'https://techblog.woowahan.com/feed/'
}

async function parseUrl(url) {
    try {
        let feed = await parser.parseURL(url);
        console.log(feed.title);
      
        feed.items.forEach(item => {
          console.log(item.title + ' : ' + item.link)
          console.log(item.pubDate)
        });

    } catch(e) {
        console.log(e)
    }
}

await parseUrl(blog.D2)