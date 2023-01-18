export const Filter = ({ value, handleChange }) => {
  return (
    <div>
      <h4>Find contacts by name</h4>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
};
