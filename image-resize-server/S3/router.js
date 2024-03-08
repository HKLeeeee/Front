const express = require("express");
const router = express.Router();
const upload = require("../S3/middleware");
const s3Controller = require("../S3/controller");

router.get("/getList", s3Controller.getList);

router.get("/getThumbnail", s3Controller.getThumbnail);

router.post("/upload", upload.single("images"), s3Controller.upload);

module.exports = router;
