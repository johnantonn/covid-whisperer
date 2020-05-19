"""
  Python module for retrieving and storing news articles
  Prerequisites:
   - .env should be set appropriately
   - The server must be up and running
"""
import os
import json
import requests
from newsapi import NewsApiClient
from dotenv import load_dotenv

load_dotenv()

# API key
newsAPIKey = os.getenv('NEWS_API_KEY')

# Init
newsapi = NewsApiClient(api_key=newsAPIKey)

# /v2/everything
results = newsapi.get_everything(q='covid-19',
                                 from_param='2020-20-05',
                                 language='en',
                                 sort_by='relevancy',
                                 page=1)

all_articles = results['articles']
maxArticles = int(os.getenv('MAX_ARTICLES'))
serverAPIUrl = os.getenv('SERVER_API_URL')
for article in all_articles:
    x = requests.post(serverAPIUrl, data=article)
    print(x.text)
    maxArticles += 1
    if maxArticles == 2:
        break
