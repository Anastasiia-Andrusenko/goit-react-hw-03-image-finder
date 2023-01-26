
import css from '../Button/Button.module.css';

const Button = ({loadMoreBtn}) => {
  return <button type='button' className={css.button} onClick={loadMoreBtn}>
  </button>
}

export default Button;