import SideBar from "./components/SideBar";
import Route from "./components/Route";
import AcordionPage from './pages/AcordionPage';
import DropdownPage from "./pages/DropdownPage";
import ButtonPage from "./pages/ButtonPage"
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";

function App () { return(

  <div className="conatiner mx-auto grid grid-cols-6 gap-4 mt-4">
    <SideBar></SideBar>
    <div className="col-span-5">
      <Route path = '/acordion'>
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

    </div>
  </div>

  );
}

export default App;