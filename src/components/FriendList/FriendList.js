import PropTypes from 'prop-types';
import s from './FriendList.module.css';
import defaultImage from './defaultProfile.jpg';

function FriendList({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map(friend => (
        <li className={s.item} key={friend.id}>
          <span className={friend.isOnline ? s.statusOnline : s.statusOffline}></span>
          <img
            className={s.avatar}
            src={friend.avatar ?? defaultImage}
            alt={friend.name}
            width="48"
          />
          <p className={s.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.number,
  isOnline: PropTypes.bool,
};

export default FriendList;

<li class="item">
  <span class="status"></span>
  <img class="avatar" src="" alt="" width="48" />
  <p class="name"></p>
</li>;
