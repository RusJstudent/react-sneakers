import classes from './SearchBlock.module.scss';

export default function SearchBlock({ value, setValue }) {
    return (
        <div className={classes.searchBlock}>
            <img src="img/search.svg" alt="search" />
            <input onChange={e => setValue(e.target.value)} value={value} placeholder="Поиск..." />
            {value && <img className={classes.clearInput} onClick={() => setValue('')} src="img/cross.svg" alt="clear" />}
        </div>
    )
};