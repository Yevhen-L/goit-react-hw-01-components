import css from './prof.module.css';

export const CardProfile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <div>
      <div className={css.profile}>
        <img className={css.img} src={avatar} alt={username} />
        <p className={css.username}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ul className={css.statistics}>
        <li>
          <span className={css.label}>
            Followers:
            <span className={css.quantity}>{followers}</span>
          </span>
        </li>
        <li>
          <span className={css.label}>
            Views: <span className={css.quantity}>{views}</span>
          </span>
        </li>
        <li>
          <span className={css.label}>
            Likes: <span className={css.quantity}>{likes}</span>
          </span>
        </li>
      </ul>
    </div>
  );
};
