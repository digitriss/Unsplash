export const SearchBar = ({ setQuery }) => {
  return (
    <input
      onChange={(e) => setQuery(e.target.value)}
      type="text"
      placeholder="Search free hight-resolution photo"
    />
  );
};
