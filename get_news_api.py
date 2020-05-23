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
from datetime import datetime

load_dotenv()

# API key
newsAPIKey = os.getenv('NEWS_API_KEY')

# Init
newsapi = NewsApiClient(api_key=newsAPIKey)

# /v2/everything
today = datetime.today().strftime('%Y-%m-%d')
results = newsapi.get_everything(q='covid-19',
                                 from_param=today,
                                 language='en',
                                 sort_by='relevancy',
                                 page=1)

# Write to Elasticsearch using server API
all_articles = results['articles']
maxArticles = int(os.getenv('MAX_ARTICLES'), 10)
serverAPIUrl = os.getenv('SERVER_API_URL')
articleCount = 0
for article in all_articles:
    x = requests.post(serverAPIUrl, data=article)
    print(x.text)
    articleCount += 1
    if articleCount == maxArticles:
        break

print('Script finished.')
