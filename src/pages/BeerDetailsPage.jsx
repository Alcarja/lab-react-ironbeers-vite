import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

function BeerDetailsPage() {
  const [singleBeer, setSingleBeer] = useState([]);
  const { beerId } = useParams();

  const fetchOneBeer = async () => {
    try {
      const res = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
      );
      console.log("Here are the details", res.data);
      setSingleBeer(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchOneBeer();
  }, [beerId]);

  return (
    <>
      <img src={singleBeer.image} />
      <h2>{singleBeer.name}</h2>
      <h2>{singleBeer.tagLine}</h2>
      <h2>{singleBeer.first_brewed}</h2>
      <h2>{singleBeer.attenuation_level}</h2>
      <h2>{singleBeer.description}</h2>
      <h2>{singleBeer.contributed_by}</h2>
    </>
  );
}

export default BeerDetailsPage;
