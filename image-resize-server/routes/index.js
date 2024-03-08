const express = require("express");
const router = express.Router();
const { upload } = require("../S3/middleware");
const s3Controller = require("../S3/controller");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.json({ message: "hello" });
});

router.get("/getList", s3Controller.getList);

// router.post("/upload", upload.single("images"), function (req, res, next) {
//   res.send("Successfully uploaded " + req.files.length + " files!");
// });

module.exports = router;
