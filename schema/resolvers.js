const ytdl = require("ytdl-core");

const resolvers = {
  Query: {
    video: (_parent, { url }) =>
      ytdl
        .getInfo(url)
        .then(({ videoDetails }) => videoDetails)
        .catch((err) => {
          throw new Error(err);
        }),
    validateURL: (_parent, { url }) => ytdl.validateURL(url),
  },
};

module.exports = resolvers;
