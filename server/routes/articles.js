const express = require("express");
const router = express.Router({ mergeParams: true });

const { Client } = require('@elastic/elasticsearch')
const client = new Client({   
  cloud: {
    id: process.env.ELASTICSEARCH_SERVER_CLOUD_ID,
  },
  auth: {
    username: process.env.ELASTICSEARCH_SERVER_USERNAME,
    password: process.env.ELASTICSEARCH_SERVER_PASSWORD
  } 
})

router.get("/", async (req, res) => {
  try {
    const results = await client.cat.indices();
    console.log(results);
    return res.status(200).json({ok: true, results});
  } catch (error) {
    return res.status(500).json({ ok: false, message: error.message });
  }
});

module.exports = router;