from bs4 import BeautifulSoup, Tag
import json
import time

pub_data = {}

pubs = ['The_Startup',]

image_url_data = {}

article_data = {}

article_id = 0


def get_content(article, tag, classes):
    field = article.find(tag, class_=classes)
    if field is None or isinstance(field.contents[0], Tag):
        return '' 
    else:
        return field.contents[0]

def scrape_article(article, pub, url):
    global article_id

    title = get_content(article, "h3", "graf--title")
    if title == '': 
        return

    subtitle = get_content(article, "h4", "graf--subtitle")

    image = article.find("img", "graf-image")
    if image is not None:
        image_url_data[article_id] = image['src']
    else:
        image_url_data[article_id] = None

    date = get_content(article, "time", "")
    month = date[:3]
    if url[-5] == "/":
        year = url[-4:]
    elif url[-3] == "/":
        year = url[-7: -3]
    else:
        year = date[-4:]

    author = get_content(article, 
        "a", 
        "ds-link ds-link--styleSubtle link link--darken link--accent u-accentColor--textNormal u-accentColor--textDarken"
    )

    articleUrl = article.find_all("a")[3]['href'].split('?')[0]

    claps = get_content(article, 
        "button",
        "button button--chromeless u-baseColor--buttonNormal js-multirecommendCountButton u-disablePointerEvents"
    )
    if claps == '': 
        claps = '0'
    elif claps[-1] == 'K':
        claps = float(claps[:-1]) * 1000

    claps = int(claps)    


    article_data[pub][title] = {
        'title': title,
        'subtitle': subtitle,
        'author': author,
        'date': date,
        'article_url': articleUrl,
        'article_id': article_id,
        'claps': claps,
        'year': year,
        'month': month
    }

    article_id += 1

def scrape_page(url, page_content, pub):

    soup = BeautifulSoup(page_content, 'html.parser')

    articles = soup.findAll(
        "div",
        class_="postArticle postArticle--short js-postArticle js-trackPostPresentation js-trackPostScrolls"
    )

    for article in articles:
        scrape_article(article, pub, url)

def main():
    global article_id

    for i, pub in enumerate(pubs):
        article_id = (i+1)*1000
        article_data[pub] = {}
        with open(f'data/page_data/{pub}.json', 'r') as f:
            pub_data = json.load(f)

            for url, page_content in pub_data.items():
                scrape_page(url, page_content, pub)
    
    with open('data/article_data.json', 'w') as f:
        json.dump(article_data, f)
    with open('data/image_url_data.json', 'w') as f:
        json.dump(image_url_data, f)


start_time = time.time()

main()

duration = time.time() - start_time
print("duration: ", duration)