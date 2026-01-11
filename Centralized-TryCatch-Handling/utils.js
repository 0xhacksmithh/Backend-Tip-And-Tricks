export const errorHandler = (fn) => {
  return async function (req, res, next) {
    try {
      const result = await fn(req, res, next);
      return result;
    } catch (error) {
      res.status(500).send({ message: "Internal Server Error" });
      console.log("fetcing failed");
    }
  };
};
