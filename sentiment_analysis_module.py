"""
  Python module for computing sentiment score for an article - called from get_news_api.py
  
"""

from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
from nltk import tokenize

#import nltk
#nltk.download('punkt')

def compute_sentiment(paragraph):

  """Compute the sentiment score of an article using Vader
  positive sentiment: compound score >= 0.05
  neutral sentiment: (compound score > -0.05) and (compound score < 0.05)
  negative sentiment: compound score <= -0.05
  """
    
  # Init Sentiment analyzer
  analyzer = SentimentIntensityAnalyzer()

  # Tokenize paragraph into sentences - VADER works best when analysis is done at the sentence level 
  sentence_list = tokenize.sent_tokenize(paragraph)
  paragraphSentiments = 0.0
  for sentence in sentence_list:
    vs = analyzer.polarity_scores(sentence)
    #print("{:-<69} {}".format(sentence, str(vs["compound"])))
    paragraphSentiments += vs["compound"]
  
  return(str(round(paragraphSentiments / len(sentence_list), 4)))

