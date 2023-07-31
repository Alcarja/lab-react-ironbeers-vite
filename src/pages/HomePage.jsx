import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <Link to={`/beers`}>
        <div>
          <img src={"/assets/beers.png"} />
          <h1>All Beers</h1>
          <p>Lorem</p>
        </div>
      </Link>
      ;
      <Link to={`/random-beer`}>
        <div>
          <img src={"/assets/random-beer.png"} />
          <h1>Random Beer</h1>
          <p>Lorem</p>
        </div>
      </Link>
      ;
      <Link to={`/new-beer`}>
        <div>
          <img src={"/assets/new-beer.png"} />
          <h1>New Beer</h1>
          <p>Lorem</p>
        </div>
      </Link>
    </>
  );
}

export default HomePage;
