const express = require("express");

const router = express.Router({ mergeParams: true });

const { Client } = require("@elastic/elasticsearch");

const client = new Client({
  cloud: {
    id: process.env.ELASTICSEARCH_SERVER_CLOUD_ID,
  },
  auth: {
    username: process.env.ELASTICSEARCH_SERVER_USERNAME,
    password: process.env.ELASTICSEARCH_SERVER_PASSWORD,
  },
});

/**
* @api {get} /articles/ Get all articles
* @apiVersion 1.0.0
* @apiName GetArticles
* @apiGroup Articles
* @apiHeader {String="application/json"} Content-Type Content type of the request.
* @apiSuccess {Array[Object]} articles Array of Article objects.
* @apiSuccessExample {json} Success-Response:
*   HTTP 200 OK
*     {
*       [
*         {
*           "source":
*             [
*               "id",
*               "name"
*             ],
*           "author": "Mary Beth Griggs",
*           "title": "No one knows when the COVID-19 pandemic will end",
*           "description": "Even as states consider reopening and events are rescheduled..",
*           "url": "https://www.theverge.com/2020/4/29/21239689/coronavirus-pandemic-end-covid19-reopen-vaccine-treatment-testing",
*           "urlToImage": "https://cdn.vox-cdn.com/thumbor/VRG_Covid_Calendar_3995.0.jpg",
*           "publishedAt": "2020-04-29T12:30:00Z",
*           "content": "Illustration by Grayson Blackmon\n\n\n We’ve got to be ready for..",
*           "_id": "Huf4LnIBdv6aQgOEnEar"
*         },
*       ...
*      ]
*    }
*/
router.get("/", async (req, res) => {
  try {
    const results = await client.search({
      index: process.env.ELASTICSEARCH_INDEX_NAME,
    });
    // Extract hits from results
    const hits = results.body.hits.hits;
    // Create article array
    const articleArray = [];
    for (let i = 0; i < hits.length; i += 1) {
      const article = hits[i]._source;
      article._id = hits[i]._id;
      articleArray.push(article);
    }
    return res.status(200).json({ ok: true, articles: articleArray });
  } catch (error) {
    return res.status(500).json({ ok: false, message: error.message });
  }
});

/**
* @api {get} /articles/:ARTICLE_ID Get a specific article by ID
* @apiVersion 1.0.0
* @apiName GetArticleByID
* @apiGroup Articles
* @apiParam {String} ARTICLE_ID Article's unique ID.
* @apiHeader {String="application/json"} Content-Type Content type of the request.
* @apiSuccess {Array[Object]} the Article object.
* @apiSuccessExample {json} Success-Response:
*   {
*     "source":
*       [
*         "id",
*         "name"
*       ],
*      "author": "Mary Beth Griggs",
*      "title": "No one knows when the COVID-19 pandemic will end",
*      "description": "Even as states consider reopening and events are rescheduled..",
*      "url": "https://www.theverge.com/2020/4/29/21239689/coronavirus-pandemic-end-covid19-reopen-vaccine-treatment-testing",
*      "urlToImage": "https://cdn.vox-cdn.com/thumbor/VRG_Covid_Calendar_3995.0.jpg",
*      "publishedAt": "2020-04-29T12:30:00Z",
*      "content": "Illustration by Grayson Blackmon\n\n\n We’ve got to be ready for..",
*      "_id": "Huf4LnIBdv6aQgOEnEar"
*   }
*/
router.get("/:ARTICLE_ID/", async (req, res) => {
  try {
    const results = await client.get({
      id: req.params.ARTICLE_ID,
      index: process.env.ELASTICSEARCH_INDEX_NAME,
    });
    console.log(results);
    // Extract hits from results
    const article = results.body._source;
    article._id = results.body._id;
    return res.status(200).json({ ok: true, article });
  } catch (error) {
    return res.status(500).json({ ok: false, message: error.message });
  }
});

/**
* @api {post} /articles/ Store an article to Elasticsearch
* @apiVersion 1.0.0
* @apiName PostArticle
* @apiGroup Articles
* @apiParamExample {json} Body Example:
*   {
*     "source":
*       [
*         "id",
*         "name"
*       ],
*      "author": "Mary Beth Griggs",
*      "title": "No one knows when the COVID-19 pandemic will end",
*      "description": "Even as states consider reopening and events are rescheduled..",
*      "url": "https://www.theverge.com/2020/4/29/21239689/coronavirus-pandemic-end-covid19-reopen-vaccine-treatment-testing",
*      "urlToImage": "https://cdn.vox-cdn.com/thumbor/VRG_Covid_Calendar_3995.0.jpg",
*      "publishedAt": "2020-04-29T12:30:00Z",
*      "content": "Illustration by Grayson Blackmon\n\n\n We’ve got to be ready for..",
*     }
* @apiHeader {String="application/json"} Content-Type Content type of the request.
* @apiSuccess {Array[Object]} the Article object.
* @apiSuccessExample {json} Success-Response:
*   HTTP 201 CREATED
*     {
*       "ok": true,
*       "message": "Article created!"
*     }
*/router.post("/", async (req, res) => {
  try {
    await client.index({
      index: process.env.ELASTICSEARCH_INDEX_NAME,
      body: req.body,
    });
    return res.status(201).json({ ok: true, message: "Article created." });
  } catch (error) {
    return res.status(500).json({ ok: false, message: error.message });
  }
});

/**
* @api {put} /articles/:ARTICLE_ID Update an article by ID
* @apiVersion 1.0.0
* @apiName PutArticleByID
* @apiGroup Articles
* @apiParamExample {json} Body Example:
*   {
*     "source":
*       [
*         "id",
*         "name"
*       ],
*     "author": "Mary Beth Griggs",
*     "title": "No one knows when the COVID-19 pandemic will end",
*     "description": "Even as states consider reopening and events are rescheduled..",
*     "url": "https://www.theverge.com/2020/4/29/21239689/coronavirus-pandemic-end-covid19-reopen-vaccine-treatment-testing",
*     "urlToImage": "https://cdn.vox-cdn.com/thumbor/VRG_Covid_Calendar_3995.0.jpg",
*     "publishedAt": "2020-04-29T12:30:00Z",
*     "content": "Illustration by Grayson Blackmon\n\n\n We’ve got to be ready for..",
*   }
* @apiParam {String} ARTICLE_ID Article's unique ID.
* @apiHeader {String="application/json"} Content-Type Content type of the request.
* @apiSuccess {Array[Object]} the Article object.
* @apiSuccessExample {json} Success-Response:
*   HTTP 200 OK
*     {
*       "ok": true,
*       "message": "Article Huf4LnIBdv6aQgOEnEar updated."
*     }
*/
router.put("/:ARTICLE_ID/", async (req, res) => {
  try {
    await client.index({
      index: process.env.ELASTICSEARCH_INDEX_NAME,
      id: req.params.ARTICLE_ID,
      body: req.body,
    });
    return res.status(200).json({ ok: true, message: `Article ${req.params.ARTICLE_ID} updated.` });
  } catch (error) {
    return res.status(500).json({ ok: false, message: error.message });
  }
});

module.exports = router;
