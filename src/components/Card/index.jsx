import classes from './Card.module.scss';

export default function Card({ imageUrl, title, price, isFavourite, onLikeClick, onPlusClick, inCart }) {
    return (
        <div className={classes.card}>
            <img
                src={isFavourite ? "img/heart-liked.svg" : "img/heart-unliked.svg"}
                className={classes.favourite}
                onClick={onLikeClick}
                alt={isFavourite ? 'liked' : 'unliked'}
            />
            <img src={imageUrl} width="133" height="112" className="mb-15" alt="sneakers" />
            <h5 className="mb-15">{title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{price} руб.</b>
                </div>
                <img
                    className={classes.plus}
                    src={inCart ? "img/btn-checked.svg" : "img/btn-plus.svg"}
                    onClick={onPlusClick}
                    alt="plus"
                />
            </div>
        </div>
    )
};