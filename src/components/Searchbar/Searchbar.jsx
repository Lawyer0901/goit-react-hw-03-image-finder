import css from './Searchbar.module.css';
import { ImSearch } from 'react-icons/im';
export function Searchbar() {
  return (
    <header className={css.searchbar}>
      <form className={css.searchForm}>
        <button type="submit" className={css['searchForm-button']}>
          <span className={css['button-labe']}>
            <ImSearch className={css.icon} />
          </span>
        </button>

        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}
