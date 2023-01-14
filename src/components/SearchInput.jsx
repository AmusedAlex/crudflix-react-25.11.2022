import { useState } from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { GET_SEARCH_INPUT } from "../redux/actions";

const SearchInput = () => {
  // let stateInput = useSelector((state) => state.search.input);

  let dispatch = useDispatch();

  const [input, setInput] = useState(null);

  const onChangeHandler = (value, fieldToSet) => {
    fieldToSet(value);
  };

  const onSubmitHandler = (event) => {
    if (event.key === "Enter") {
      dispatch({
        type: GET_SEARCH_INPUT,
        payload: input,
      });
    }
  };

  return (
    <div className="pt-1">
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text
            id="inputGroup-sizing-sm"
            style={{ background: "transparent" }}
          >
            <Search color="white" />
          </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          style={{ background: "transparent", color: "white" }}
          placeholder="Start typing..."
          value={input}
          onChange={(e) => onChangeHandler(e.target.value, setInput)}
          onKeyPress={onSubmitHandler}
        />
      </InputGroup>
    </div>
  );
};

export default SearchInput;
