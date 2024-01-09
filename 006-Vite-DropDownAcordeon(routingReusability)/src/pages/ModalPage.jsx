import { useState } from "react";
import Modal from "../components/Modal/Modal";
import Button from "../components/Button/Button";
import "./ModalPage.css"

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    }

    const handleClose = () => {
        setShowModal(false);
    }

    const modal = <Modal onClose = {handleClose} actionBar = {<Button primary="true" onClick={handleClose} >I accept</Button>}>
        <p>Consequat nisi commodo tempor irure in do ex sit laboris dolor aute qui proident. Sit dolor qui duis ea excepteur ullamco dolore officia cupidatat ea sit excepteur dolore. Cupidatat nisi nostrud est anim ut. Ipsum non dolor officia velit nisi ut cillum nostrud ex et qui. Anim dolor ut mollit id ad nulla id deserunt officia non proident. Ut nostrud ex amet et qui culpa veniam nulla.</p>
    </Modal>;

    return <div className="text__div">
        
        <p>Non est tempor incididunt fugiat. Laborum fugiat exercitation veniam tempor ut nulla incididunt excepteur commodo. Lorem cupidatat anim exercitation eu voluptate Lorem velit do. Enim anim tempor adipisicing voluptate consectetur eiusmod nisi cillum aliqua.

Dolor magna esse cupidatat consequat reprehenderit qui. Do fugiat nisi commodo aliqua dolor reprehenderit ut cillum ullamco enim. Ut enim do eu nostrud est aliquip consectetur deserunt. Consectetur mollit excepteur proident quis.

Excepteur adipisicing non nostrud esse occaecat nulla minim officia id quis veniam adipisicing cillum elit. Exercitation anim eiusmod ipsum incididunt sunt. Sunt do veniam elit laborum sit dolore aliqua ea veniam pariatur. Dolore et sunt consequat adipisicing. Cupidatat ut culpa mollit ex dolore amet commodo. Aute eu do ex quis minim commodo occaecat eiusmod sit irure.</p>

<p>Non est tempor incididunt fugiat. Laborum fugiat exercitation veniam tempor ut nulla incididunt excepteur commodo. Lorem cupidatat anim exercitation eu voluptate Lorem velit do. Enim anim tempor adipisicing voluptate consectetur eiusmod nisi cillum aliqua.

Dolor magna esse cupidatat consequat reprehenderit qui. Do fugiat nisi commodo aliqua dolor reprehenderit ut cillum ullamco enim. Ut enim do eu nostrud est aliquip consectetur deserunt. Consectetur mollit excepteur proident quis.

Excepteur adipisicing non nostrud esse occaecat nulla minim officia id quis veniam adipisicing cillum elit. Exercitation anim eiusmod ipsum incididunt sunt. Sunt do veniam elit laborum sit dolore aliqua ea veniam pariatur. Dolore et sunt consequat adipisicing. Cupidatat ut culpa mollit ex dolore amet commodo. Aute eu do ex quis minim commodo occaecat eiusmod sit irure.</p>

<p>Non est tempor incididunt fugiat. Laborum fugiat exercitation veniam tempor ut nulla incididunt excepteur commodo. Lorem cupidatat anim exercitation eu voluptate Lorem velit do. Enim anim tempor adipisicing voluptate consectetur eiusmod nisi cillum aliqua.

Dolor magna esse cupidatat consequat reprehenderit qui. Do fugiat nisi commodo aliqua dolor reprehenderit ut cillum ullamco enim. Ut enim do eu nostrud est aliquip consectetur deserunt. Consectetur mollit excepteur proident quis.

Excepteur adipisicing non nostrud esse occaecat nulla minim officia id quis veniam adipisicing cillum elit. Exercitation anim eiusmod ipsum incididunt sunt. Sunt do veniam elit laborum sit dolore aliqua ea veniam pariatur. Dolore et sunt consequat adipisicing. Cupidatat ut culpa mollit ex dolore amet commodo. Aute eu do ex quis minim commodo occaecat eiusmod sit irure.</p>

<p>Non est tempor incididunt fugiat. Laborum fugiat exercitation veniam tempor ut nulla incididunt excepteur commodo. Lorem cupidatat anim exercitation eu voluptate Lorem velit do. Enim anim tempor adipisicing voluptate consectetur eiusmod nisi cillum aliqua.

Dolor magna esse cupidatat consequat reprehenderit qui. Do fugiat nisi commodo aliqua dolor reprehenderit ut cillum ullamco enim. Ut enim do eu nostrud est aliquip consectetur deserunt. Consectetur mollit excepteur proident quis.

Excepteur adipisicing non nostrud esse occaecat nulla minim officia id quis veniam adipisicing cillum elit. Exercitation anim eiusmod ipsum incididunt sunt. Sunt do veniam elit laborum sit dolore aliqua ea veniam pariatur. Dolore et sunt consequat adipisicing. Cupidatat ut culpa mollit ex dolore amet commodo. Aute eu do ex quis minim commodo occaecat eiusmod sit irure.</p>

<p>Non est tempor incididunt fugiat. Laborum fugiat exercitation veniam tempor ut nulla incididunt excepteur commodo. Lorem cupidatat anim exercitation eu voluptate Lorem velit do. Enim anim tempor adipisicing voluptate consectetur eiusmod nisi cillum aliqua.

Dolor magna esse cupidatat consequat reprehenderit qui. Do fugiat nisi commodo aliqua dolor reprehenderit ut cillum ullamco enim. Ut enim do eu nostrud est aliquip consectetur deserunt. Consectetur mollit excepteur proident quis.

Excepteur adipisicing non nostrud esse occaecat nulla minim officia id quis veniam adipisicing cillum elit. Exercitation anim eiusmod ipsum incididunt sunt. Sunt do veniam elit laborum sit dolore aliqua ea veniam pariatur. Dolore et sunt consequat adipisicing. Cupidatat ut culpa mollit ex dolore amet commodo. Aute eu do ex quis minim commodo occaecat eiusmod sit irure.</p>

<p>Non est tempor incididunt fugiat. Laborum fugiat exercitation veniam tempor ut nulla incididunt excepteur commodo. Lorem cupidatat anim exercitation eu voluptate Lorem velit do. Enim anim tempor adipisicing voluptate consectetur eiusmod nisi cillum aliqua.

Dolor magna esse cupidatat consequat reprehenderit qui. Do fugiat nisi commodo aliqua dolor reprehenderit ut cillum ullamco enim. Ut enim do eu nostrud est aliquip consectetur deserunt. Consectetur mollit excepteur proident quis.

Excepteur adipisicing non nostrud esse occaecat nulla minim officia id quis veniam adipisicing cillum elit. Exercitation anim eiusmod ipsum incididunt sunt. Sunt do veniam elit laborum sit dolore aliqua ea veniam pariatur. Dolore et sunt consequat adipisicing. Cupidatat ut culpa mollit ex dolore amet commodo. Aute eu do ex quis minim commodo occaecat eiusmod sit irure.</p>

<p>Non est tempor incididunt fugiat. Laborum fugiat exercitation veniam tempor ut nulla incididunt excepteur commodo. Lorem cupidatat anim exercitation eu voluptate Lorem velit do. Enim anim tempor adipisicing voluptate consectetur eiusmod nisi cillum aliqua.

Dolor magna esse cupidatat consequat reprehenderit qui. Do fugiat nisi commodo aliqua dolor reprehenderit ut cillum ullamco enim. Ut enim do eu nostrud est aliquip consectetur deserunt. Consectetur mollit excepteur proident quis.

Excepteur adipisicing non nostrud esse occaecat nulla minim officia id quis veniam adipisicing cillum elit. Exercitation anim eiusmod ipsum incididunt sunt. Sunt do veniam elit laborum sit dolore aliqua ea veniam pariatur. Dolore et sunt consequat adipisicing. Cupidatat ut culpa mollit ex dolore amet commodo. Aute eu do ex quis minim commodo occaecat eiusmod sit irure.</p>
<Button primary="true" onClick = {handleClick} >Open Modal</Button>

{showModal && modal}
    </div>
}
//ahi arriba dice si showModal is true, display that component
export default ModalPage;