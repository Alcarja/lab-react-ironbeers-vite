import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddBeerPage() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [tagLine, setTagLine] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed, setFirstBrewed] = useState("");
  const [brewers_tips, setBrewersTips] = useState("");
  const [attenuation_level, setAttenuationLevel] = useState("");
  const [contributed_by, setContributedBy] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://ih-beers-api2.herokuapp.com/beers/new",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            tagLine,
            description,
            first_brewed,
            brewers_tips,
            attenuation_level,
            contributed_by,
          }),
        }
      );

      if (response.status === 200) {
        const parsed = await response.json();
        navigate(`/beers/${parsed._id}`); //This doesn't work
      }
    } catch (err) {
      console.log(err);
    }
  }; //Handle Submit

  return (
    <>
      <h1>New Beer</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name :
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <label>
          Tagline:
          <input
            value={tagLine}
            onChange={(event) => setTagLine(event.target.value)}
          />
        </label>
        <label>
          Description:
          <input
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </label>
        <label>
          First Brewed:
          <input
            value={first_brewed}
            onChange={(event) => setFirstBrewed(event.target.value)}
          />
        </label>
        <label>
          Brewer Tips:
          <input
            value={brewers_tips}
            onChange={(event) => setBrewersTips(event.target.value)}
          />
        </label>
        <label>
          Attenuation Level:
          <input
            type="number"
            value={attenuation_level}
            onChange={(event) => setAttenuationLevel(event.target.value)}
          />
        </label>
        <label>
          Contributed by:
          <input
            value={contributed_by}
            onChange={(event) => setContributedBy(event.target.value)}
          />
        </label>

        <button type="submit">Add Beer</button>
      </form>
    </>
  );
}

export default AddBeerPage;
