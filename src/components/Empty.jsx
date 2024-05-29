import GreenButton from './GreenButton';

export default function Empty({ imageUrl, title, text, onClose }) {
    return (
        <div className="d-flex align-center justify-center flex">
            <div style={{ width: 285 }} className="d-flex align-center justify-center flex-column">
                <img src={imageUrl} className="mb-20" alt="empty image" />
                <h2 className="mb-10">{title}</h2>
                <p className="opacity-6 mb-40 text-center">{text}</p>
                <GreenButton onClick={onClose} text="Вернуться назад" />
            </div>
        </div>
    )
};