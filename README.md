![alt text](https://github.com/johnantonn/covid-whisperer/blob/master/cwlogo-horizontal.png)

**Covid Whisperer** is a news platform that provides personalised updates on COVID-19 based on fake news detection and sentiment text analysis. 

# Description
This project was inspired during the [EUvsVirus pan-European hackathon](https://euvsvirus.org/) that took place on 24-26 April 2020 with the purpose of connecting civil society, innovators, partners and investors across Europe in order to develop innovative solutions for coronavirus-related challenges.

## The problem
In a global crisis, like this pandemic, it's not a difficult task to take a moment, look around and observe other people's reactions. Most of us strive to get information about the COVID-19, countless times per day, about what is happening, how it will affect our future or when we will get back to our regular lives. We realised that the most crucial thing in a situation like this is how you deliver the message. We all agree that news travels extremely fast, and we need valid information in order to make decisions and plans. We believe in the simple, not the complex. We believe that we need to own and control the way we get informed.

That's why we came up with an initiative to empower every person to have a personalised news hub, where they can come to find and discover unbiased COVID-19 updates without being confused by the massive amount of information or getting stressed by the overwhelming content.

We introduce *Covid Whisperer*.

## The solution
*Covid Whisperer* is a news platform that provides COVID-19 related content based on fake news detection and sentiment analysis in combination with the user's personal preferences. The envisioned solution can be considered a hub, where news articles from a large number of sources are aggregated and displayed in a comprehensive and meaningful way for each user, with the assistance of intelligent algorithms.

More specifically, this set of algorithms are responsible for providing:

- up-to-date and reliable content related to the COVID-19 pandemic from various sources.
- intelligent techniques for the detection of fake news in the displayed content.
- indicators of emotional vocabulary in the displayed content.

# Architecture
The system architecture diagram is provided below.

![alt text](https://github.com/johnantonn/covid-whisperer/blob/master/arcitecture.png)

Below there is a short description of the various components of the *Covid Whisperer* architecture.

## Elasticsearch
Elasticsearch server is used to store the articles retrieved by the online news APIs, as well as for basic search capabilities and analytics calculation, via its RESTful API. To that aim, the news articles and their metadata are used by the back-end components to calculate indicators and metrics related to fake news, sentiment and other statistics.

## Server API
The back-end server was built using Node.js and Express.js with the purpose to server the incoming requests.

## Sentiment analysis module
Fake news differs in content quality and sentiments expressed from the truth. Compared to true news, fake news often carries a greater proportion of emotional (positive+negative) words. Sentiment Analysis refers to the use of NLP, text analysis and computational linguistics to determine the emotional state of the writer and the article. 

The [VADER](https://github.com/cjhutto/vaderSentiment) (Valence Aware Dictionary for Sentiment Reasoning) tool, a lexicon and rule-based sentiment analysis tool, is used to compute the sentiment score of each article. Vader provides a lexicon constructed using a combination of qualitative and quantitative methods. The lexical features are then combined with consideration for five general rules in sentence-level that embody grammatical and syntactical conventions. The score is computed by summing the valence scores of each word in the lexicon, adjusted according to the rules, and then normalized to be between *-1* (most extreme negative) and *+1* (most extreme positive). 

Typical threshold values are:
 - positive sentiment: *score >= 0.05*
 - neutral sentiment: (*score > -0.05*) and (*score < 0.05*)
 - negative sentiment: *score <= -0.05*

## Fake news detection module
To be updated soon.

## User interface
To be updated soon.

# How to run
Steps to build and spin up the different modules of the application.

## Python script to retrieve news articles using News API
The script will retrieve a number of articles from the [News API](https://newsapi.org/) and store them to an *Elasticsearch* cloud instance. Make sure you have *Python 3* and *pip* installed and follow the steps below:
 - Install the dependencies listed in the *requirements.txt* file using `pip install requirements.txt` command
 - Set up the required variables inside the *.env* file
 - Execute the *get_news_api.py* script

## Server
*Node.js* and *npm* are required. Make sure they are installed, then clone the repo locally and follow the steps below:
 - Go to *server* directory and install the server's dependencies using `npm i`
 - Set up the required variables inside the *.env* file
 - Spin up the server using `npm start` for production mode or `npm run dev` for development mode.

## News Platform UI
To be updated soon.
