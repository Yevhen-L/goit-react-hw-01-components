export const Statistics = ({ userstats }) => {
  return (
    <div>
      <h2>Upload stats</h2>
      <ul>
        {userstats.map(userstats => {
          return (
            <li key={userstats.id}>
              <span>{userstats.label}</span>
              <span>{userstats.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
