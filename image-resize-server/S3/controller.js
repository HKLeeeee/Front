const s3Service = require("./service");

const s3Controller = {
  getList: async (req, res, next) => {
    const result = await s3Service.getList();
    if (result instanceof Error) return next(result);
    return res.json(result);
  },
  getThumbnails: async (req, res, next) => {
    const result = await s3Service.getThumbnails();
    if (result instanceof Error) return next(result);
    return res.json(result);
  },
  upload: (req, res, next) => {
    res.json({ image: req.file.location });
  },
};

module.exports = s3Controller;
