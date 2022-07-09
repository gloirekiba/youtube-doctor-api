const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    video(url: String!): Video!
    validateURL(url: String!): Boolean!
  }

  type Video {
    embed: Embed
    title: String
    description: String
    format: Format
    lengthSeconds: String
    ownerProfileUrl: String
    externalChannelId: String
    isFamilySafe: Boolean
    availableCountries: [String]
    isUnlisted: Boolean
    hasYpcMetadata: Boolean
    viewCount: String
    category: String
    publishDate: String
    ownerChannelName: String
    uploadDate: String
    videoId: ID
    keywords: [String]
    channelId: ID
    isOwnerViewing: Boolean
    isCrawlable: Boolean
    allowRatings: Boolean
    author: Author
    isPrivate: Boolean
    isUnpluggedCorpus: Boolean
    isLiveContent: Boolean
    # media: Media
    likes: Int
    dislikes: Int
    age_restricted: Boolean
    video_url: String
    storyboards: [StoryBoards]
    thumbnails: [Thumbnails]
  }

  type Embed {
    iframeUrl: String
    flashUrl: String
    width: Int
    height: Int
    flashSecureUrl: String
  }

  type Author {
    id: ID
    name: String
    user: String
    channel_url: String
    external_channel_url: String
    user_url: String
    thumbnails: [Thumbnails]
    verified: Boolean
    subscriber_count: Int
  }

  type Media {
    year: String
    thumbnails: [Thumbnails]
    category: String
    category_url: String
  }

  type StoryBoards {
    templateUrl: String
    thumbnailWidth: Int
    thumbnailHeight: Int
    thumbnailCount: Int
    interval: Int
    columns: Int
    rows: Int
    storyboardCount: Int
  }

  type Thumbnails {
    url: String
    width: Int
    height: Int
  }

  type Format {
    mimeType: String
    qualityLabel: String
    bitrate: Int
    audioBitrate: Int
    itag: Int
    # initRange: {
    #   start: String
    #   end: String
    # }
    # indexRange: {
    #   start: String
    #   end: String
    # }
    lastModified: String
    contentLength: String
    quality: String
    projectionType: String
    averageBitrate: Int
    audioQuality: String
    approxDurationMs: String
    audioSampleRate: String
    audioChannels: Int
    loudness: Float
    url: String
    hasVideo: Boolean
    hasAudio: Boolean
    container: String
    codecs: String
    videoCodec: String
    audioCodec: String
    isLive: Boolean
    isHLS: Boolean
    isDashMPD: Boolean
  }
`;

module.exports = typeDefs;
