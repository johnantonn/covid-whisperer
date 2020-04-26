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

// Get all articles
router.get("/", async (req, res) => {
  try {
    const results = await client.search({
      index: process.env.ELASTICSEARCH_INDEX_NAME,
    });
    return res.status(200).json({ ok: true, results });
  } catch (error) {
    return res.status(500).json({ ok: false, message: error.message });
  }
});

// Get a specific article by id
router.get("/:ARTICLE_ID/", async (req, res) => {
  try {
    const results = await client.get({
      id: req.params.ARTICLE_ID,
      index: process.env.ELASTICSEARCH_INDEX_NAME,
    });
    return res.status(200).json({ ok: true, results });
  } catch (error) {
    return res.status(500).json({ ok: false, message: error.message });
  }
});

// Store an article
router.post("/", async (req, res) => {
  try {
    await client.index({
      index: process.env.ELASTICSEARCH_INDEX_NAME,
      body: req.body,
    });
    return res.status(200).json({ ok: true });
  } catch (error) {
    return res.status(500).json({ ok: false, message: error.message });
  }
});

// Update an article
router.post("/:ARTICLE_ID/", async (req, res) => {
  try {
    await client.index({
      index: process.env.ELASTICSEARCH_INDEX_NAME,
      id: req.params.ARTICLE_ID,
      body: req.body,
    });
    return res.status(200).json({ ok: true });
  } catch (error) {
    return res.status(500).json({ ok: false, message: error.message });
  }
});

module.exports = router;
