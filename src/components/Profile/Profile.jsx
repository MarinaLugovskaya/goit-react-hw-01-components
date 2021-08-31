import PropTypes from "prop-types";
import css from "./Profile.module.css";

export default function Profile(stats) {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={stats.avatar} alt="Аватар пользователя" className={css.avatar} />
        <p className={css.name}>{stats.name}</p>
        <p className={css.tag}>{stats.tag}</p>
        <p className={css.location}>{stats.location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{stats.followers}</span>
        </li>
        <li>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{stats.views}</span>
        </li>
        <li>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  folowers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
