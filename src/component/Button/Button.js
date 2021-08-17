import style from '../Button/Button.module.css';

const Button = ({ onClick }) => (
  <button
    type="button"
    className={style.Button}
    onClick={onClick}
    aria-label="Найти больше картинок"
  >
    Load more
  </button>
);

export default Button;
