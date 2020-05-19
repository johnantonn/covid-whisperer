define({ "api": [
  {
    "type": "get",
    "url": "/articles/:ARTICLE_ID",
    "title": "Get a specific article by ID",
    "version": "1.0.0",
    "name": "GetArticleByID",
    "group": "Articles",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ARTICLE_ID",
            "description": "<p>Article's unique ID.</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Content type of the request.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array[Object]",
            "optional": false,
            "field": "the",
            "description": "<p>Article object.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"source\": \n    [\n      \"id\",\n      \"name\"\n    ],\n  \"author\": \"Mary Beth Griggs\",\n  \"title\": \"No one knows when the COVID-19 pandemic will end\",\n  \"description\": \"Even as states consider reopening and events are rescheduled, the uncomfortable truth is that we’re still a long way from the finish line. Vaccines and treatments are still early in development, and testing isn’t extensive enough to help us yet. We need to ge…\",\n  \"url\": \"https://www.theverge.com/2020/4/29/21239689/coronavirus-pandemic-end-covid19-reopen-vaccine-treatment-testing\",\n  \"urlToImage\": \"https://cdn.vox-cdn.com/thumbor/1b70k6QrPQMTkdr4VOCaZCogA1Y=/0x186:3000x1757/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/19932095/VRG_Covid_Calendar_3995.0.jpg\",\n  \"publishedAt\": \"2020-04-29T12:30:00Z\",\n  \"content\": \"Illustration by Grayson Blackmon\\n\\n\\n We’ve got to be ready for the long haul If you’ve been marking the pandemic by the pileup of cautious reopenings and rescheduled events, you might think that an end to this global disaster is in sight. Event planners for th… [+8793 chars]\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/articles.js",
    "groupTitle": "Articles"
  },
  {
    "type": "get",
    "url": "/articles/",
    "title": "Get all articles",
    "version": "1.0.0",
    "name": "GetArticles",
    "group": "Articles",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Content type of the request.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array[Object]",
            "optional": false,
            "field": "articles",
            "description": "<p>Array of Article objects.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK\n  {\n    [\n      {\n        \"source\": \n          [\n            \"id\",\n            \"name\"\n          ],\n        \"author\": \"Mary Beth Griggs\",\n        \"title\": \"No one knows when the COVID-19 pandemic will end\",\n        \"description\": \"Even as states consider reopening and events are rescheduled, the uncomfortable truth is that we’re still a long way from the finish line. Vaccines and treatments are still early in development, and testing isn’t extensive enough to help us yet. We need to ge…\",\n        \"url\": \"https://www.theverge.com/2020/4/29/21239689/coronavirus-pandemic-end-covid19-reopen-vaccine-treatment-testing\",\n        \"urlToImage\": \"https://cdn.vox-cdn.com/thumbor/1b70k6QrPQMTkdr4VOCaZCogA1Y=/0x186:3000x1757/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/19932095/VRG_Covid_Calendar_3995.0.jpg\",\n        \"publishedAt\": \"2020-04-29T12:30:00Z\",\n        \"content\": \"Illustration by Grayson Blackmon\\n\\n\\n We’ve got to be ready for the long haul If you’ve been marking the pandemic by the pileup of cautious reopenings and rescheduled events, you might think that an end to this global disaster is in sight. Event planners for th… [+8793 chars]\"\n      },\n    ...\n   ]\n }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/articles.js",
    "groupTitle": "Articles"
  },
  {
    "type": "post",
    "url": "/articles/",
    "title": "Store an article to Elasticsearch",
    "version": "1.0.0",
    "name": "PostArticle",
    "group": "Articles",
    "parameter": {
      "examples": [
        {
          "title": "Body Example:",
          "content": "{\n  \"source\": \n    [\n      \"id\",\n      \"name\"\n    ],\n  \"author\": \"Mary Beth Griggs\",\n  \"title\": \"No one knows when the COVID-19 pandemic will end\",\n  \"description\": \"Even as states consider reopening and events are rescheduled, the uncomfortable truth is that we’re still a long way from the finish line. Vaccines and treatments are still early in development, and testing isn’t extensive enough to help us yet. We need to ge…\",\n  \"url\": \"https://www.theverge.com/2020/4/29/21239689/coronavirus-pandemic-end-covid19-reopen-vaccine-treatment-testing\",\n  \"urlToImage\": \"https://cdn.vox-cdn.com/thumbor/1b70k6QrPQMTkdr4VOCaZCogA1Y=/0x186:3000x1757/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/19932095/VRG_Covid_Calendar_3995.0.jpg\",\n  \"publishedAt\": \"2020-04-29T12:30:00Z\",\n  \"content\": \"Illustration by Grayson Blackmon\\n\\n\\n We’ve got to be ready for the long haul If you’ve been marking the pandemic by the pileup of cautious reopenings and rescheduled events, you might think that an end to this global disaster is in sight. Event planners for th… [+8793 chars]\"\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Content type of the request.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array[Object]",
            "optional": false,
            "field": "the",
            "description": "<p>Article object.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 201 CREATED\n  {\n    \"ok\": true,\n    \"message\": \"Article created!\"\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/articles.js",
    "groupTitle": "Articles"
  },
  {
    "type": "put",
    "url": "/articles/:ARTICLE_ID",
    "title": "Update an article by ID",
    "version": "1.0.0",
    "name": "PutArticleByID",
    "group": "Articles",
    "parameter": {
      "examples": [
        {
          "title": "Body Example:",
          "content": "{\n  \"source\": \n    [\n      \"id\",\n      \"name\"\n    ],\n  \"author\": \"Mary Beth Griggs\",\n  \"title\": \"No one knows when the COVID-19 pandemic will end\",\n  \"description\": \"Even as states consider reopening and events are rescheduled, the uncomfortable truth is that we’re still a long way from the finish line. Vaccines and treatments are still early in development, and testing isn’t extensive enough to help us yet. We need to ge…\",\n  \"url\": \"https://www.theverge.com/2020/4/29/21239689/coronavirus-pandemic-end-covid19-reopen-vaccine-treatment-testing\",\n  \"urlToImage\": \"https://cdn.vox-cdn.com/thumbor/1b70k6QrPQMTkdr4VOCaZCogA1Y=/0x186:3000x1757/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/19932095/VRG_Covid_Calendar_3995.0.jpg\",\n  \"publishedAt\": \"2020-04-29T12:30:00Z\",\n  \"content\": \"Illustration by Grayson Blackmon\\n\\n\\n We’ve got to be ready for the long haul If you’ve been marking the pandemic by the pileup of cautious reopenings and rescheduled events, you might think that an end to this global disaster is in sight. Event planners for th… [+8793 chars]\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ARTICLE_ID",
            "description": "<p>Article's unique ID.</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Content type of the request.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array[Object]",
            "optional": false,
            "field": "the",
            "description": "<p>Article object.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP 200 OK\n  {\n    \"ok\": true,\n    \"message\": \"Article updated!\"\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/articles.js",
    "groupTitle": "Articles"
  }
] });
