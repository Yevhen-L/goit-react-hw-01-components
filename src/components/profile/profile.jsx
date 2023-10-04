export const CardProfile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <div>
      <div className="description">
        <img className="avatar" src={avatar} alt={username} />
        <p>{username}</p>
        <p>{tag}</p>
        <p>{location}</p>
      </div>
      <ul>
        <li>
          <span className="label">
            Followers:
            <span className="quantity">{followers}</span>
          </span>
        </li>
        <li>
          <span className="label">
            Views: <span className="quantity">{views}</span>
          </span>
        </li>
        <li>
          <span className="label">
            Likes: <span className="quantity">{likes}</span>
          </span>
        </li>
      </ul>
    </div>
  );
};
