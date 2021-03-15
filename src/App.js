import React from 'react';
import './App.css';

function App() {
    const [naamValue, setNaamValue] = React.useState('');
    const [leeftijdValue, setLeeftijdValue] = React.useState('');
  return (
    <div>
        <form>
        <fieldset>
        <legend> Gegevens </legend>
            <label for="naam"> Naam: </label>
            <input
            type="text"
            value={naamValue}
            onChange={(e) => setNaamValue(e.target.value)}
            />
            <br/>
            <label for="leefijd"> Leeftijd: </label>
            <input
            type = "text"
            placeholder="0"
            value={leeftijdValue}
            onChange={(e) => setLeeftijdValue(e.target.value)}
            />
        </fieldset>
        </form>
        <form>
        <fieldset>
        <legend> Jouw review </legend>
            <label for="hoe heb je dit recept gevonden?"> Hoe heb je dit recept gevonden? <br/> </label>
            <select name="hoe heb je dit recept gevonden?" id="hoe heb je dit recept gevonden?">
            <option value="Anders"> Anders </option>
            <option value="Google"> Google </option>
            <option value="Vriend"> Vriend </option>
            <option value="Advertentie"> Advertentie </option>
            </select>
            <br/>
            <label for="opmerkingen"> Opmerkingen: <br/> </label>
            <textarea name="opmerkingen" id="opmerkingen">
                wat vond je van het recept?
            </textarea>
            <br/>
            <button type="submit"> Versturen </button>
        </fieldset>
        </form>
    </div>
  );
}

export default App;
