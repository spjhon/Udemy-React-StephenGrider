import AcordionPage from "./pages/AcordionPage";
import DropdownPage from "./pages/DropdownPage";
import Route from "./components/Route";
import SideBar from "./components/SideBar";
import ButtonPage from "./pages/ButtonPage";

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

      </div>

    </div>
  );
}

export default App;
