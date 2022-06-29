import QuoteList from "./../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  {
    id: "quote1",
    author: "BJ",
    text: "Krishna helps those who helps themselves",
  },
  {
    id: "quote2",
    author: "Bhagirthi Jhamb",
    text: "Hare Krishna Hare Rama",
  },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
