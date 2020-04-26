define({ "api": [
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
          "content": "HTTP 200 OK\n{\n [\n  {},\n  {}\n  ...\n ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/articles.js",
    "groupTitle": "Articles"
  }
] });
