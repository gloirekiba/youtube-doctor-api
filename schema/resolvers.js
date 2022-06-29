const ytdl = require("ytdl-core");

const resolvers = {
  Query: {
    validateURL: (_parent, { url }) => ytdl.validateURL(url),
    video: async (_parent, { url }) => {
      if (!ytdl.validateURL(url)) throw new Error("Invalid url");
      return await ytdl
        .getInfo(url)
        .then(({ videoDetails }) => videoDetails)
        .catch((err) => {
          throw new Error(err);
        });
    },
  },
};

module.exports = resolvers;
