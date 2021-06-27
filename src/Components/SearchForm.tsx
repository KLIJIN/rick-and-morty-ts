import React from "react";
import { useGlobalContext } from "../context/context";


const SearchForm: React.FC = () => {

  const { searchQuery, handleSearch, handleStatus, handleGender } = useGlobalContext();

  return (
    <>
      <form className="search-form" onSubmit={(e) => e.preventDefault()}>
        <input type="text" name="text" className="form-input" placeholder="search by name" value={searchQuery} onChange={(e) => { handleSearch && handleSearch(e) }} />
      </form>

      <div>
        <select name="character-status" className="character-status" onChange={(e) => { handleStatus && handleStatus(e) }}>
          <option value="">Character Status</option>
          <option value="alive">Alive </option>
          <option value="dead">Dead </option>
          <option value="unknown"> Unknown</option>
        </select>

        <select name="character-gender" className="character-gender" onChange={(e) => { handleGender && handleGender(e) }}>
          <option value="">Character Gender</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="genderless">Genderless</option>
          <option value="unknown"> Unknown </option>
        </select>
      </div>
    </>
  );
};

export default SearchForm;
