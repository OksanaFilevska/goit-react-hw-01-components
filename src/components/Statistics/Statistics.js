import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function Statistics({ stats, title }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statlist}>
        {stats.map(stat => (
          <li
            className={s.item}
            key={stat.id}
            style={{
              backgroundColor: `rgb(${getRandomNumber(0, 255)}, ${getRandomNumber(
                0,
                255,
              )}, ${getRandomNumber(0, 255)})`,
            }}
          >
            <span className={s.label}>{stat.label}</span>
            <span className={s.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

export default Statistics;
