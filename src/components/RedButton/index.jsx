import classes from './RedButton.module.scss';

export default function RedButton({ onClick, text }) {
    return (
        <button className={classes.redButton} onClick={onClick}>
            {text}
        </button>
    )
};