import React from "react";
import { Form } from "semantic-ui-react";

function Search({ handleChange, search,setSearch }) {
  // function handleSearch(e){
  //     const value = e.target.value
  //     // setSearch(value);
  // }

  return (
    <Form>
      <input
        //  value = {search}
        type="text"
        //  id = "search"
        value={search}
        placeholder="Search Fish..."
        //  onChange = {handleChange}
        onChange={(e) => setSearch(e.target.value)}
      />
    </Form>
  );
}

export default Search;
