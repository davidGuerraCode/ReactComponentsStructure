import React from 'react';

const SearchField = ({ value, setValue }) => (
  <input placeholder="Search" value={value} onChange={setValue} />
);

export default SearchField;
