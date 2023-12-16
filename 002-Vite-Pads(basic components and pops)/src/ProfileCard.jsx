

const ProfileCard = ({title, handle, imageSrc, description}) => {
    //un truco para no tener que repetir props es guardar los props en variables
    //const title = props.title;
    //const handle = props.handle;

    //la siguiente linea es equivalente y se utiliza un descontruning o algo asi

    //const {title, handle} = props;

    //Sin embargo la mejor forma, la profesional es decir en los argumentos los que se van a utilizar
    //ya que el props puede venir con muchas otras cosas pero se seleccionan las que se necesiten y ya


    return (
    <div className='card'>
        <div className="card-image">
            <figue className='image is-1by1'>
                <img src={imageSrc} alt='Logos' />
            </figue>
        </div>

        <div className="card-content">
            <div className="media-content">
                <p className="title is-4">{title}</p>
                <p className="subtitle is-6">{handle}</p>
            </div>
            <div className="content">{description}</div>
        </div>
    </div>
    );
};

export default ProfileCard;