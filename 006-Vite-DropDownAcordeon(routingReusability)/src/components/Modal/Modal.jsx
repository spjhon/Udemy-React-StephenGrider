import ReactDOM from "react-dom";
import { useEffect } from "react";
import "./Modal.css";

// ALGORITMO
// - El componente Modal es una ventana modal que se renderiza mediante ReactDOM.createPortal.
// - Utiliza el estado de useEffect para agregar y eliminar la clase 'overflowHidden' del body para controlar el desbordamiento.
// - El fondo del modal y el contenido del modal se dividen en dos secciones dentro de un div.
// - Se utiliza ReactDOM.createPortal para renderizar el modal fuera del flujo normal del DOM, en el elemento con clase 'modal-container'.
// - La prop 'onClose' se utiliza para cerrar el modal al hacer clic en el fondo.
// - El contenido del modal y la actionBar (si se proporciona) se colocan dentro del modal.
//ultimo video en el 239, borrar este comentario

function Modal({onClose, children, actionBar}) {
    // useEffect para agregar y eliminar la clase 'overflowHidden' al cuerpo para controlar el desbordamiento.
    useEffect(() => {
        document.body.classList.add('overflowHidden');

        return () => {
            document.body.classList.remove('overflowHidden');
        };
    }, []);

    // Retorna el modal renderizado mediante ReactDOM.createPortal.
    //dentro del div de devuelta hay dos divs, uno va a funcionar como el background
    //los portals son utilizados para arreglar el problema del posicinamiento del background y del modal
    //OJO el .modal-container debe de agregarse al html del root
    //el portal le dice a react que no renderice en ese punto en particular sino en otro lado, que locura
    return ReactDOM.createPortal(
        <div>
            {/* Fondo del modal, al hacer clic en él, se cierra el modal. */}
            <div onClick={onClose} className="modal__background"></div>

            {/* Contenedor principal del modal */}
            <div className="div__modal">
                {/* Contenido interior del modal */}
                <div className="modal__interior">
                    {children} {/* Contenido del modal proporcionado por la prop 'children' */}
                    
                    {/* Contenedor para la actionBar, que puede contener botones u otros elementos. */}
                    <div className="modal__button">
                        {actionBar}
                    </div>
                </div>
            </div>
        </div>,
        // El segundo argumento de ReactDOM.createPortal especifica dónde renderizar el modal.
        document.querySelector('.modal-container')
    );
}

export default Modal;
