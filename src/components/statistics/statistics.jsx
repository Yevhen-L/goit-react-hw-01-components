export const Statistics = ({ title, stats }) => {
  return (
    <div>
      {title && <h2>{title}</h2>}
      <ul>
        {stats.map(userstats => {
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
