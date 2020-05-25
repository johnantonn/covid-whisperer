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
from sentiment_analysis_module import compute_sentiment

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
  paragraph = article['content']
  if paragraph == None:
    paragraph = article['description']

  article['sentiment'] = compute_sentiment(paragraph)

  x = requests.post(serverAPIUrl, data=article)
  print(x.text)
  
  articleCount += 1
  if articleCount == maxArticles:
      break 

# Test if the sentiment score has been saved to elasticsearch 

# Get the saved articles 
# all_articles = requests.get(serverAPIUrl).json()['articles']
# print(len(all_articles))

# for i in range(len(all_articles)):
#   print(all_articles[i].get('content'))

# print(all_articles[9].get('content'))
# print(all_articles[9].get('sentiment'))

print('Script finished.')