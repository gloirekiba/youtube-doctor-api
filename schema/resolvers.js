const ytdl = require("ytdl-core");

const resolvers = {
  Query: {
    validateURL: (_parent, { url }) => ytdl.validateURL(url),
    video: (_parent, { url }) =>
     await ytdl
        .getInfo(url)
        .then(({ videoDetails }) => videoDetails)
        .catch((err) => {
          throw new Error(err);
        }),
  },
};

module.exports = resolvers;
