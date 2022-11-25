import { Component } from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";

class SearchInput extends Component {
  render() {
    return (
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
        />
      </InputGroup>
    );
  }
}
export default SearchInput;
