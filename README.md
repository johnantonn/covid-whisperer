# Covid Whisperer
A news platform/aggregator for COVID-19 that provides personalised updates based on fake news detection and sentiment text analysis.

## Description
Covid Whisperer is an initiative to empower every person to have a personalised news hub/aggregator, where they can come to find and discover unbiased COVID-19 updates without being confused by the massive amount of information or getting stressed by the overwhelming content.

The system is based on novel techniques for fake news detection and sentiment analysis of news articles related to COVID-19. This functionality is provided via respective back-end modules (more details expected soon). Elasticsearch is used as a storage and search engine for the news articles, which are made available to the back-end modules and the front-end clients via a dedicated API, developed in node.js and express.js. The front-end is implemented as a React single page application.

## Back-end
Below there is a short description of the various back-end components of the Covid Whisperer application.

### Elasticsearch
Elasticsearch server is used to store the articles retrieved by the online news APIs, as well as for basic search capabilities and analytics calculation, via its RESTful API. To that aim, the news articles and their metadata are used by the back-end components to calculate indicators and metrics related to fake news, sentiment and other statistics.

### Server API
The back-end server was built using Node.js and Express.js with the purpose to server the incoming requests.

### Sentiment analysis module
To be updated soon.

### Fake news detection module
To be updated soon.

## Front-end
To be updated soon.

## How to run
To be updated soon.
