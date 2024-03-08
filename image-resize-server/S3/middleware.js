const multer = require("multer");
const multerS3 = require("multer-s3");
const myS3 = require("./myS3");
const { v4: uuidv4 } = require("uuid");
const path = require("path");

const upload = multer({
  storage: multerS3({
    s3: myS3,
    bucket: process.env.BUCKET,
    acl: "public-read",
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: function (req, file, cb) {
      const extname = path.extname(file.originalname);
      cb(null, "images/" + uuidv4() + extname);
    },
  }),
});

module.exports = upload;
