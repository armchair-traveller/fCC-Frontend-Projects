import React, { useState } from "react";
import { Button, Card } from "@material-ui/core";
import { Twitter, ChatBubbleOutline, FormatQuote } from "@material-ui/icons";

const QuoteBox = () => {
  const [quotes, setQuotes] = useState(randomQuotes());

  var [[[quote, author = "Anonymous"]]] = quotes;
  function randomQuotes() {
    var quotes = [
      [
        "Everyone has flaws, just like the apple bitten by god. But there are people whose flaws are bigger.",
        "War And Peace"
      ],
      [
        "If god gives you something but you don't take it, then you only have yourself to blame"
      ],
      [
        "Great men are not born great, they grow great...",
        "Mario Puzo, The Godfather"
      ],
      [
        "The lawyer with the briefcase can steal more money than the man with the gun.",
        "Mario Puzo, The Godfather"
      ],
      [
        "I hold it to be true that Fortune is the arbiter of one-half of our actions, but that she still leaves us to direct the other half, or perhaps a little less.",
        "Niccolò Machiavelli, The Prince"
      ],
      [
        "A prince must prepare rigorously during peacetime in order to be well prepared for wartime.",
        "Niccolò Machiavelli, The Prince"
      ],
      [
        "So long as victory can be attained, stupid haste is preferable to clever dilatoriness.",
        "Chang Yu, The Art of War"
      ],
      ["Knowledge is crystallized wisdom"],
      [
        "It's better to use a straight rod than to seek wrong",
        "Jian Ziya, Investiture of the Gods"
      ],
      ["All great ideas take a whole generation before they're implemented."],
      [
        "To even regret not having more education, one has to have had some before."
      ],
      ["We only react to urgent issues when it's too late."],
      [
        "A truly powerful person is one who has a strong and unyielding will. With such a will, even an old man can move mountains."
      ],
      [
        "Everyone knows that a diamond will never show its shine if you never polish it."
      ],
      [
        "Isn't it better to regret trying, than regretting not having tried at all?"
      ],
      ["I can't live a life without a plan."],
      [
        "It's said that the path to greatness is being ruthless, and everyone thinks that being ruthless is the only way to step on the path to greatness. But what they don't know is that this world can only be balanced with opposition."
      ],
      [
        "Just having a smooth sailing the entire way is not necessarily great luck! Some people lived a life of hardship but finally rose to the top after facing many challenges. That's a form of good luck as well!"
      ],
      [
        "Strength can be relied on, but weakness can also be used as an advantage. We're all pawns but as soon as one understands the rules, he can become master of the game and turn the tables."
      ],
      [
        "Humanity has sought knowledge relentlessly to understand the world and the rules governing it. But instead of using its rules, they end up letting these rules restrict themselves."
      ],
      [
        "If a man never flatters himself and seeks pleasure in sorrow, he'll be immersed in pain."
      ],
      [
        "Being defeated is only a state of mind. If you haven't given up, then you haven't lost!"
      ],
      [
        "Envy's the privilege of those who don't know what things're really like. Always has been, always will be."
      ],
      [
        "Fear of the unknown -- without understanding something, humans naturally can come to fear it. After understanding it, it can become less frightening, or even a blessing."
      ],
      [
        "You need to understand that you can only take bold measures because you are prepared."
      ],
      ["You thinking you couldn't do it was just an assumption on your part."],
      ["Diligence is the father of power."]
    ];
    var result = [];
    for (
      let i = Math.floor(Math.random() * quotes.length);
      quotes.length;
      i = Math.floor(Math.random() * quotes.length)
    ) {
      result.push(quotes.splice(i, 1));
    }

    return result;
  }

  return (
    <Card
      id="quote-box"
      variant="outlined"
      style={{
        maxWidth: "70vw",
        margin: "auto",
        padding: "10px",
        marginTop: "25vh"
      }}
    >
      <FormatQuote />
      <h1 id="text">{quote}</h1>
      <p id="author">{author}</p>
      <div className="quote-buttons">
        <a
          id="tweet-quote"
          href={`https://twitter.com/intent/tweet?hashtags=quotes&text="${quote}" ${author}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>
            <Twitter />
          </Button>
        </a>
        <Button
          id="new-quote"
          onClick={() => {
            if (quotes[1]) {
              setQuotes(quotes.slice(1));
            } else {
              setQuotes(randomQuotes());
            }
          }}
        >
          New Quote&ensp;
          <ChatBubbleOutline />
        </Button>
      </div>
    </Card>
  );
};

export default QuoteBox;
