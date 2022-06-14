import { useAutoHooks } from "../../hooks";
import { IAutocompleteProps } from "../../interface";
import { styles } from "./styles";

 
const AutoComplete: React.FC<IAutocompleteProps>=({id,options:itemArray,onChange})=>{
  const { inputRef, onValueChange, onKeyDown } = useAutoHooks(itemArray, id, onChange);

return (
    <div className="autocomplete" style={styles.mainDiv}>
    <input
      ref={inputRef}
      id={id}
      type="text"
      placeholder="Countries"
      onChange={onValueChange}
      onKeyDown={onKeyDown}
    />
  </div>
);


}
export default AutoComplete