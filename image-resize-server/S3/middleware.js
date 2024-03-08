const multer = require("multer");
const multerS3 = require("multer-s3");
const myS3 = require("./myS3");

const upload = multer({
  storage: multerS3({
    s3: myS3,
    bucket: process.env.BUCKET,
    metadata: (req, file, cb) => {
      cb(null, { fileName: file.fieldname });
    },
    acl: "public-read",
    contentType: multerS3.AUTO_CONTENT_TYPE,
  }),
});

module.exports = upload
