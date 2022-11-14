import contentful_management
import json
import asyncio
import aiohttp


SPACE_ID = 'zz9kiu500yrs'
ACCESS_TOKEN = 'CFPAT-dGEDheXTJ8L6GSZaxax9NyOif_VX7TWg1Fj4IX1xB7E'
ENVIRONMENT_ID = 'master'

client = contentful_management.Client(ACCESS_TOKEN)
space = client.spaces().find(SPACE_ID)
environment = space.environments().find(ENVIRONMENT_ID)

def create_entry(article, publication):
   entry_attributes = {
      "content_type_id": "article_component",
         "fields": {
            "title": {
               "en-US": article["title"]
            },
            "subtitle": {
               "en-US": article["subtitle"]
            },
            "author": {
               "en-US": article["author"]
            },
            "date": {
               "en-US": article["date"]
            },
            "url": {
               "en-US": article["article_url"]
            },
            'thumbnail': {
               'en-US': {
                  "sys": {
                     "id": f'asset_{article["article_id"]}',
                     "linkType": "Asset",
                     "type": "Link",
                  }
               }
            },
            "publication": {
               "en-US": publication
            },
            "month": {
               "en-US": article["month"]
            },
            "year": {
               "en-US": article["year"]
            },
            "claps": {
               "en-US": article["claps"]
            }

         }
   }
   try:
      entry = environment.entries().create(
         f'entry_{article["article_id"]}',
         entry_attributes
      )
      entry.publish()
   except contentful_management.errors.VersionMismatchError:
      print('already exists')
      return

def create_asset(article):
   new_upload = space.uploads().create(f'images/{article["article_id"]}.jpg')

   asset_attributes = {
         "content_type_id": "article_component",
         'fields': {
            'title': {
               'en-US': f'image_{article["article_id"]}'
            },
            'file': {
               'en-US': {
                  "fileName": f'{article["article_id"]}.jpg',
                  "contentType": "image/jpg",
                  "uploadFrom": new_upload.to_link().to_json()
               }
            }
         }
      }
   try:
      asset = environment.assets().create(
         f'asset_{article["article_id"]}',
         asset_attributes
      )
      asset.process()
      asset.publish()
   except contentful_management.errors.VersionMismatchError:
      asset = environment.assets().find(f'asset_{article["article_id"]}')


def main():
   posted_articles = {}

   with open('data/article_data.json', 'r') as f:
      article_data = json.load(f)

   with open('posted_articles.txt', 'r') as f:
      lines = f.readlines()
      for line in lines:
         posted_articles[line] = True
   
   for pub, articles in article_data.items():
         for title, article in articles.items():
            print(title)
            if title in posted_articles:
               continue
         
            create_asset(article)
            create_entry(article, pub)

            with open('posted_articles.txt', 'a') as f:
               f.write(title)
               f.write('\n')

main()