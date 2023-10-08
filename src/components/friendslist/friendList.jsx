import { FriendListItem } from './friendListItem';
import css from './friends.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friends}>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        );
      })}
    </ul>
  );
};
