import { Helmet } from "react-helmet";

function Webhead() {
  return (
    <Helmet>
      <title>Flip a Coin</title>
      <meta name="description" content="Flip a coin with a simple click!" />
      <link rel="icon" href="./head.png" />

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Helmet>
  );
}

export default Webhead;
