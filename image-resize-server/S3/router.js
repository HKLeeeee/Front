const express = require("express");
const router = express.Router();
const upload = require("../S3/middleware");
const s3Controller = require("../S3/controller");

router.get("/getList", s3Controller.getList);

router.get("/getThumbnails", s3Controller.getThumbnails);

router.post("/upload", upload.single("image"), s3Controller.upload);

module.exports = router;
