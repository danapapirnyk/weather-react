import React from "react";
import "./styles.css";

export default function Form() {
  return (
    <form className="input-group mb-3 search-tab" id="search-tab">
      <input
        type="text"
        className="form-control shadow"
        id="search-input"
        placeholder="Enter a city"
        autocomplete="off"
        autofocus="on"
      />
      <button
        className="btn btn-outline-light search-button shadow"
        type="submit"
        id="button-addon2"
      >
        Search
      </button>
      <button
        class="btn btn-outline-light current-button shadow"
        id="location-button"
      >
        Current location
      </button>
    </form>
  );
}
