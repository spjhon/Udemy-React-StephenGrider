import ReactDOM from "react-dom";
import { useEffect } from "react";
import "./Modal.css"

function Modal({onClose, children, actionBar}) {
    //el useEffect es para que se active el overflow una vez el componente cargue
    useEffect(() => {
        document.body.classList.add('overflowHidden')

        return () => {
        document.body.classList.remove('overflowHidden')
        };
    }, []);

    //dentro del div de devuelta hay dos divs, uno va a funcionar como el background
    //los portals son utilizados para arreglar el problema del posicinamiento del background y del modal
    //ojo el .modal-container debe de agregarse al html del root
    //el portal le dice a react que no renderice en ese punto en particular sino en otro lado, que locura
    return ReactDOM.createPortal(
    <div>
        <div onClick={onClose} className="modal__background"></div>
        <div className="div__modal">
            <div className="modal__interior">
            {children}
                <div className="modal__button">
                    {actionBar}
                </div>
            </div>
        </div>
    </div>, 
    document.querySelector('.modal-container')) 

}

export default Modal;