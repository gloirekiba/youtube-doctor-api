const ytdl = require("ytdl-core");

const resolvers = {
  Query: {
    validateURL: (_parent, { url }) => ytdl.validateURL(url),
    video: async (_parent, { url }) => {
      if (!ytdl.validateURL(url)) throw new Error("Invalid url");
      try {
        return (await ytdl.getInfo(url)).videoDetails;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};

module.exports = resolvers;
