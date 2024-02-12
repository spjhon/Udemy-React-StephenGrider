import NavigationContext from "../context/navigation";
import { useContext } from "react";

//Est es el mismo hook empleado en el ejercico context 5-2 de grider
function useNavigation () {
    return useContext(NavigationContext);
}

export default useNavigation;