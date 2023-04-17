import React from "react";
import { Form } from "semantic-ui-react";


function Search({ handleChange, search,setSearch }) {
  // function handleSearch(e){
  //     const value = e.target.value
  //     // setSearch(value);
  // }

  return (
    <Form className="searchBar">
      {/* <i className="search icon"></i> */}
        {/* <label className="searchIcon"></label> */}
      <input 
        //  value = {search}
        type="text"
        //  id = "search"
        value={search}
        placeholder="Search Fish..."
        //  onChange = {handleChange}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* <Search
            fluid
            loading={isLoading}
            value={search}
            placeholder="Search Fish..."
            on
          /> */}
    </Form>
  );
}

export default Search;
