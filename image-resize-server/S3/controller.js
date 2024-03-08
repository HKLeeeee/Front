const s3Service = require("./service");

const s3Controller = {
  getList: async (req, res, next) => {
    console.log("getList");
    const result = await s3Service.getList();
    if (result instanceof Error) return next(result);
    return res.json(result);
  },
};

module.exports = s3Controller;
