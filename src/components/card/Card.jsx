import style from './card.module.css'

const Card = (props) => {
    return (
        <div className={`${style.card} ${style[props.color]}`}>
			<h2 className={style.title}>{props.title}</h2>
			<p>{props.text}</p>
			<img className={style.card__img} src={props.icon} />
		</div>
    );
};

export default Card;
