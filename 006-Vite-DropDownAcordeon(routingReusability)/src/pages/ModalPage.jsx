import { useState } from "react";
import Modal from "../components/Modal/Modal";
import Button from "../components/Button/Button";
import "./ModalPage.css";

// ALGORITMO
// - El componente ModalPage es una página que contiene un botón y, opcionalmente, un modal.
// - Utiliza el estado 'showModal' para controlar la visibilidad del modal.
// - La función 'handleClick' se ejecuta al hacer clic en el botón y establece 'showModal' en true.
// - La función 'handleClose' se pasa al componente Modal como prop 'onClose' para cerrar el modal.
// - El componente 'modal' se crea con el componente Modal, que muestra un contenido y un botón de acción.
// - El componente devuelve un contenedor <div> que contiene párrafos y el botón para abrir el modal.
// - Si 'showModal' es true, se renderiza el modal.
function ModalPage() {
  // Estado para controlar la visibilidad del modal.
  const [showModal, setShowModal] = useState(false);

  // Función para abrir el modal al hacer clic en el botón.
  const handleClick = () => {
    setShowModal(true);
  };

  // Función para cerrar el modal.
  const handleClose = () => {
    setShowModal(false);
  };

  // Componente Modal que se renderiza cuando showModal es true.
  const modal = (
    <Modal
      onClose={handleClose}
      actionBar={
        <Button primary="true" onClick={handleClose}>
          I accept
        </Button>
      }
    >
      <p></p> {/* Párrafo vacío */}
    </Modal>
  );

  // Devuelve un contenedor <div> con párrafos y un botón para abrir el modal.
  return (
    <div className="text__div">
      <p>
        Reprehenderit sit incididunt officia minim anim excepteur laborum sunt
        fugiat id laborum duis aliqua consectetur. Irure aliqua aliquip aliquip
        ullamco laboris sunt. Proident esse aliquip amet qui. Exercitation enim
        velit nisi id commodo officia nostrud ullamco. Nostrud dolor veniam
        eiusmod veniam. Veniam incididunt nostrud ipsum reprehenderit minim enim
        veniam duis dolor exercitation minim proident. Sunt elit veniam officia
        nostrud. Ad commodo exercitation laboris ut pariatur aute laborum nisi
        labore non eu pariatur consectetur nulla. Ea do velit mollit proident
        fugiat ex dolor qui incididunt. Culpa consectetur nisi adipisicing aute
        labore reprehenderit magna. Eiusmod sit aliqua consectetur mollit sit
        minim eiusmod reprehenderit id ex. Deserunt sit labore veniam aliquip.
        Exercitation reprehenderit labore incididunt veniam eiusmod exercitation
        nostrud mollit ad laboris occaecat. Aliquip ullamco sint esse id anim et
        proident id dolore sint. In ad ad deserunt voluptate ut ipsum non
        officia nulla consectetur cillum pariatur consequat. Deserunt sit irure
        in ut eu reprehenderit consectetur ad in anim non. Qui ex excepteur
        irure id ipsum elit tempor in eu. Nisi et labore esse consectetur est
        veniam enim magna ad proident id enim nostrud. Culpa cillum laborum amet
        enim cupidatat ullamco est eiusmod et ex laboris incididunt ipsum non.
        Quis ea ut labore officia enim. Nisi aliquip culpa non id enim
        reprehenderit cillum occaecat mollit eiusmod. Proident qui ullamco amet
        laborum minim fugiat duis est consectetur. Labore laborum non ad
        pariatur consectetur irure. Eiusmod aliquip adipisicing irure irure
        deserunt non. Ex adipisicing adipisicing deserunt aute duis non. Officia
        aliqua consectetur ut veniam ex tempor ad reprehenderit elit in
        incididunt. Voluptate consectetur elit cupidatat anim et dolor dolor
        nulla sunt aliqua aliqua nostrud. Nisi aliqua dolor dolor sint in
        deserunt amet veniam tempor aute est minim. Ut et mollit dolore
        voluptate tempor. Cillum dolor aliqua velit eiusmod tempor veniam. Eu
        proident et laborum cupidatat. Consequat sunt deserunt eu proident
        deserunt in consequat Lorem magna. Ad ex sint fugiat tempor. Ipsum et
        anim cupidatat ipsum nisi exercitation fugiat sint nisi mollit dolor
        nostrud mollit aliqua. Veniam fugiat laboris magna voluptate.
        Exercitation ullamco enim eu consequat ullamco occaecat proident. Culpa
        velit est ad minim proident occaecat incididunt deserunt pariatur Lorem.
      </p>
      {/* esto es un comentario */}
      <p>
        Reprehenderit sit incididunt officia minim anim excepteur laborum sunt
        fugiat id laborum duis aliqua consectetur. Irure aliqua aliquip aliquip
        ullamco laboris sunt. Proident esse aliquip amet qui. Exercitation enim
        velit nisi id commodo officia nostrud ullamco. Nostrud dolor veniam
        eiusmod veniam. Veniam incididunt nostrud ipsum reprehenderit minim enim
        veniam duis dolor exercitation minim proident. Sunt elit veniam officia
        nostrud. Ad commodo exercitation laboris ut pariatur aute laborum nisi
        labore non eu pariatur consectetur nulla. Ea do velit mollit proident
        fugiat ex dolor qui incididunt. Culpa consectetur nisi adipisicing aute
        labore reprehenderit magna. Eiusmod sit aliqua consectetur mollit sit
        minim eiusmod reprehenderit id ex. Deserunt sit labore veniam aliquip.
        Exercitation reprehenderit labore incididunt veniam eiusmod exercitation
        nostrud mollit ad laboris occaecat. Aliquip ullamco sint esse id anim et
        proident id dolore sint. In ad ad deserunt voluptate ut ipsum non
        officia nulla consectetur cillum pariatur consequat. Deserunt sit irure
        in ut eu reprehenderit consectetur ad in anim non. Qui ex excepteur
        irure id ipsum elit tempor in eu. Nisi et labore esse consectetur est
        veniam enim magna ad proident id enim nostrud. Culpa cillum laborum amet
        enim cupidatat ullamco est eiusmod et ex laboris incididunt ipsum non.
        Quis ea ut labore officia enim. Nisi aliquip culpa non id enim
        reprehenderit cillum occaecat mollit eiusmod. Proident qui ullamco amet
        laborum minim fugiat duis est consectetur. Labore laborum non ad
        pariatur consectetur irure. Eiusmod aliquip adipisicing irure irure
        deserunt non. Ex adipisicing adipisicing deserunt aute duis non. Officia
        aliqua consectetur ut veniam ex tempor ad reprehenderit elit in
        incididunt. Voluptate consectetur elit cupidatat anim et dolor dolor
        nulla sunt aliqua aliqua nostrud. Nisi aliqua dolor dolor sint in
        deserunt amet veniam tempor aute est minim. Ut et mollit dolore
        voluptate tempor. Cillum dolor aliqua velit eiusmod tempor veniam. Eu
        proident et laborum cupidatat. Consequat sunt deserunt eu proident
        deserunt in consequat Lorem magna. Ad ex sint fugiat tempor. Ipsum et
        anim cupidatat ipsum nisi exercitation fugiat sint nisi mollit dolor
        nostrud mollit aliqua. Veniam fugiat laboris magna voluptate.
        Exercitation ullamco enim eu consequat ullamco occaecat proident. Culpa
        velit est ad minim proident occaecat incididunt deserunt pariatur Lorem.
      </p>
      <p>
        Reprehenderit sit incididunt officia minim anim excepteur laborum sunt
        fugiat id laborum duis aliqua consectetur. Irure aliqua aliquip aliquip
        ullamco laboris sunt. Proident esse aliquip amet qui. Exercitation enim
        velit nisi id commodo officia nostrud ullamco. Nostrud dolor veniam
        eiusmod veniam. Veniam incididunt nostrud ipsum reprehenderit minim enim
        veniam duis dolor exercitation minim proident. Sunt elit veniam officia
        nostrud. Ad commodo exercitation laboris ut pariatur aute laborum nisi
        labore non eu pariatur consectetur nulla. Ea do velit mollit proident
        fugiat ex dolor qui incididunt. Culpa consectetur nisi adipisicing aute
        labore reprehenderit magna. Eiusmod sit aliqua consectetur mollit sit
        minim eiusmod reprehenderit id ex. Deserunt sit labore veniam aliquip.
        Exercitation reprehenderit labore incididunt veniam eiusmod exercitation
        nostrud mollit ad laboris occaecat. Aliquip ullamco sint esse id anim et
        proident id dolore sint. In ad ad deserunt voluptate ut ipsum non
        officia nulla consectetur cillum pariatur consequat. Deserunt sit irure
        in ut eu reprehenderit consectetur ad in anim non. Qui ex excepteur
        irure id ipsum elit tempor in eu. Nisi et labore esse consectetur est
        veniam enim magna ad proident id enim nostrud. Culpa cillum laborum amet
        enim cupidatat ullamco est eiusmod et ex laboris incididunt ipsum non.
        Quis ea ut labore officia enim. Nisi aliquip culpa non id enim
        reprehenderit cillum occaecat mollit eiusmod. Proident qui ullamco amet
        laborum minim fugiat duis est consectetur. Labore laborum non ad
        pariatur consectetur irure. Eiusmod aliquip adipisicing irure irure
        deserunt non. Ex adipisicing adipisicing deserunt aute duis non. Officia
        aliqua consectetur ut veniam ex tempor ad reprehenderit elit in
        incididunt. Voluptate consectetur elit cupidatat anim et dolor dolor
        nulla sunt aliqua aliqua nostrud. Nisi aliqua dolor dolor sint in
        deserunt amet veniam tempor aute est minim. Ut et mollit dolore
        voluptate tempor. Cillum dolor aliqua velit eiusmod tempor veniam. Eu
        proident et laborum cupidatat. Consequat sunt deserunt eu proident
        deserunt in consequat Lorem magna. Ad ex sint fugiat tempor. Ipsum et
        anim cupidatat ipsum nisi exercitation fugiat sint nisi mollit dolor
        nostrud mollit aliqua. Veniam fugiat laboris magna voluptate.
        Exercitation ullamco enim eu consequat ullamco occaecat proident. Culpa
        velit est ad minim proident occaecat incididunt deserunt pariatur Lorem.
      </p>
      <p>
        Reprehenderit sit incididunt officia minim anim excepteur laborum sunt
        fugiat id laborum duis aliqua consectetur. Irure aliqua aliquip aliquip
        ullamco laboris sunt. Proident esse aliquip amet qui. Exercitation enim
        velit nisi id commodo officia nostrud ullamco. Nostrud dolor veniam
        eiusmod veniam. Veniam incididunt nostrud ipsum reprehenderit minim enim
        veniam duis dolor exercitation minim proident. Sunt elit veniam officia
        nostrud. Ad commodo exercitation laboris ut pariatur aute laborum nisi
        labore non eu pariatur consectetur nulla. Ea do velit mollit proident
        fugiat ex dolor qui incididunt. Culpa consectetur nisi adipisicing aute
        labore reprehenderit magna. Eiusmod sit aliqua consectetur mollit sit
        minim eiusmod reprehenderit id ex. Deserunt sit labore veniam aliquip.
        Exercitation reprehenderit labore incididunt veniam eiusmod exercitation
        nostrud mollit ad laboris occaecat. Aliquip ullamco sint esse id anim et
        proident id dolore sint. In ad ad deserunt voluptate ut ipsum non
        officia nulla consectetur cillum pariatur consequat. Deserunt sit irure
        in ut eu reprehenderit consectetur ad in anim non. Qui ex excepteur
        irure id ipsum elit tempor in eu. Nisi et labore esse consectetur est
        veniam enim magna ad proident id enim nostrud. Culpa cillum laborum amet
        enim cupidatat ullamco est eiusmod et ex laboris incididunt ipsum non.
        Quis ea ut labore officia enim. Nisi aliquip culpa non id enim
        reprehenderit cillum occaecat mollit eiusmod. Proident qui ullamco amet
        laborum minim fugiat duis est consectetur. Labore laborum non ad
        pariatur consectetur irure. Eiusmod aliquip adipisicing irure irure
        deserunt non. Ex adipisicing adipisicing deserunt aute duis non. Officia
        aliqua consectetur ut veniam ex tempor ad reprehenderit elit in
        incididunt. Voluptate consectetur elit cupidatat anim et dolor dolor
        nulla sunt aliqua aliqua nostrud. Nisi aliqua dolor dolor sint in
        deserunt amet veniam tempor aute est minim. Ut et mollit dolore
        voluptate tempor. Cillum dolor aliqua velit eiusmod tempor veniam. Eu
        proident et laborum cupidatat. Consequat sunt deserunt eu proident
        deserunt in consequat Lorem magna. Ad ex sint fugiat tempor. Ipsum et
        anim cupidatat ipsum nisi exercitation fugiat sint nisi mollit dolor
        nostrud mollit aliqua. Veniam fugiat laboris magna voluptate.
        Exercitation ullamco enim eu consequat ullamco occaecat proident. Culpa
        velit est ad minim proident occaecat incididunt deserunt pariatur Lorem.
      </p>
      <Button primary="true" onClick={handleClick}>
        Open Modal
      </Button>
      {showModal && modal}
    </div>
  );
}

export default ModalPage;
