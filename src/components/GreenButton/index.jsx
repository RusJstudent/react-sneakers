import classes from './GreenButton.module.scss';

export default function GreenButton({ onClick, text, isArrowRight }) {
    let buttonClasses = [classes.greenButton];
    if (!isArrowRight) {
        buttonClasses.push(classes.rotate);
    }

    return (
        <button className={buttonClasses.join(' ')} onClick={onClick}>
            <img src="img/arrow-right.svg" alt="arrow" />{text}
        </button>
    )
};