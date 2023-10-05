import css from './statistics.module.css';
export const Statistics = ({ title, stats }) => {
  return (
    <div className={css.stat}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.list}>
        {stats.map(userstats => {
          return (
            <li className={css.userstats} key={userstats.id}>
              <span className={css.userstats}>{userstats.label}</span>
              <span className={css.percentage}>{userstats.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
