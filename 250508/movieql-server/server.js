import { ApolloServer, gql } from "apollo-server";

// GET /allTweets => 지금까지의 전체 총 트윗자료를 가져와!!!
// GET /tweet/8
// GET /ping => 문자열의 값을 반환!!! (*반드시)

let tweets = [
  {
    id: "1",
    text: "First One!",
    userId: "2",
  },
  {
    id: "2",
    text: "Second One!",
    userId: "1",
  },
];

let users = [
  {
    id: "1",
    firstName: "David",
    lastName: "Beckam",
  },
  {
    id: "2",
    firstName: "Elon",
    lastName: "Mask",
  },
];

const resolvers = {
  Query: {
    allMovies() {
      return fetch("https://yts.mx/api/v2/list_movies.json")
        .then((response) => response.json())
        .then((json) => json.data.movies);
    },
    movie(root, { id }) {
      return fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        .then((response) => response.json())
        .then((json) => json.data.movie);
    },
    allUsers() {
      return users;
    },
    allTweets() {
      return tweets;
    },
    tweet(root, { id }) {
      return tweets.find((tweet) => tweet.id === id);
    },
  },
  Mutation: {
    postTweet(root, { text, userId }) {
      const newTweet = {
        id: tweets.length + 1,
        text,
      };
      tweets.push(newTweet);
      return newTweet;
    },
    deleteTweet(root, { id }) {
      const tweet = tweets.find((tweet) => tweet.id === id);
      if (!tweet) return false;
      tweets = tweets.filter((tweet) => tweet.id !== id);
      return true;
    },
  },
  User: {
    fullName({ firstName, lastName }) {
      return `${firstName} ${lastName}`;
    },
  },
  Tweet: {
    author({ userId }) {
      const result = users.find((user) => user.id === userId);
      if (!result) {
        console.log("해당 자료가 없습니다!");
        return null;
      }
      return result;
    },
  },
};

const typeDefs = gql`
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    """
    Is the sum of firstName + lastName as a String
    """
    fullName: String!
  }
  """
  Tweet Object represents a resource for a Tweet
  """
  type Tweet {
    id: ID!
    text: String!
    author: User
  }
  type Query {
    allMovies: [Movie!]!
    movie(id: String!): Movie
    allUsers: [User!]!
    allTweets: [Tweet!]!
    tweet(id: ID!): Tweet
  }
  type Mutation {
    postTweet(text: String, userId: ID): Tweet
    """
    Delete a Tweet if found, else returns false
    """
    deleteTweet(id: ID): Boolean
  }
  type Movie {
    id: Int!
    url: String!
    imdb_code: String!
    title: String!
    title_english: String!
    title_long: String!
    slug: String!
    year: Int!
    rating: Float!
    runtime: Float!
    genres: [String]!
    summary: String
    description_full: String!
    synopsis: String
    yt_trailer_code: String!
    language: String!
    mpa_rating: String!
    background_image: String!
    background_image_original: String!
    small_cover_image: String!
    medium_cover_image: String!
    large_cover_image: String!
    state: String!
  }
`;

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Running on ${url}`);
});
