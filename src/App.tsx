import AutoComplete from "./components/AutoComplete";
import { Name } from "./components/Name";
import { COUNTRIES } from "./constants";

const App = () => {
  return (
    <div className="App">
      <div>
        <Name/>
        <AutoComplete
          options={COUNTRIES}
          id="myInput"
          onChange={value => {
            console.log(value);
          }}
        />
      </div>
    </div>
  );
};

export default App;