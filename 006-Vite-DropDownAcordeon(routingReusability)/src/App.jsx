import AcordionPage from "./pages/AcordionPage";
import DropdownPage from "./pages/DropdownPage";
import Route from "./components/Route";
import SideBar from "./components/SideBar";
import ButtonPage from "./pages/ButtonPage";
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";
import CounterPage from './pages/CounterPage';


/*ALGORITMO
- Al cargar la app se cargan los el div principal y el sidebar
- Se carga una serie de componentes llamados route que pasa un prop y de acuerdo al path va a renderizar lo que esta envuelto
*/
function App() {
  return (
    <div>

      <SideBar></SideBar>
      
      <div id="pages">

      <Route path = '/accordion'>
        <AcordionPage>

        </AcordionPage>
      </Route>

      <Route path = '/'>
        <DropdownPage>

        </DropdownPage>
      </Route>
      
      <Route path = '/buttons'>
        <ButtonPage>

        </ButtonPage>
      </Route>

      <Route path = '/modal'>
        <ModalPage>

        </ModalPage>
      </Route>

      <Route path = '/table'>
        <TablePage>

        </TablePage>
      </Route>

      <Route path="/counter">
          <CounterPage initialCount={10} />
      </Route>

      </div>

    </div>
  );
}

export default App;
