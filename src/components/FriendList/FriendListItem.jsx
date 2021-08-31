import css from './FriendList.module.css';
import PropTypes from "prop-types";

export default function FriendListItem({avatar, name, isOnline}) {
  return (
    <li className={css.item}>
<span className={isOnline ? css.online : css.offline}></span>
<img ClassName={css.avatar} src={avatar} alt="" width="48" />
<p ClassName={css.name}>{name}</p>
</li>
)
}

FriendListItem.propTypes = {
  avatar:PropTypes.string.isRequired,
  name:PropTypes.string.isRequired,
  isOnline:PropTypes.bool.isRequired,
}