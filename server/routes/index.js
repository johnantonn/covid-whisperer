const express = require("express");

const articleRoutes = require("./articles");

const router = express.Router({ mergeParams: true });

router.use("/articles/", articleRoutes);

router.all("/", (req, res) => res.status(418).json({ ok: true, notOk: false }));

module.exports = router;
