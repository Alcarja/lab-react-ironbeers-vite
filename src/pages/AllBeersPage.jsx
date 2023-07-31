import { Link } from "react-router-dom";

function AllBeersPage({ beers }) {
  return beers.map((oneBeer) => {
    return (
      <div key={oneBeer.name} className="beerContainer">
        <Link to={`/beers/${oneBeer._id}`}>
          <img src={oneBeer.image} />
          <h2>{oneBeer.name}</h2>
          <h2>{oneBeer.tagLine}</h2>
          <h4>Contributed by: {oneBeer.contributed_by}</h4>
        </Link>
      </div>
    );
  });
}

export default AllBeersPage;
