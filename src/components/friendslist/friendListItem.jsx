import css from './friends.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.listitem}>
      <span
        className={`${css.status} ${isOnline ? css.online : css.offline}`}
      ></span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};
