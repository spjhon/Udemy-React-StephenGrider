import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, addUser } from "../store";
import Skeleton from "./Skeleton";
import Button from './Button'

function UsersList () {

    //Este es un state cuando se esta cargando los usuarios por primera vez, el fetching
    const [isLoadingUsers, setIsLoadingUser] = useState(false);
    const [loadingUsersError, setLoadingUsersError] = useState(null);

    //Este es cuando se esta creando un usuario debdio al click de un usuario
    const [isCreatingUser, setIsCreatingUser] = useState(false);
    const [creatingUserError, setCreatingUserError] = useState(null);

    const dispatch = useDispatch();
    
    //se aplica deconstruccion para separar lo que viene del otro lado
    const {data}= useSelector((state) => {
        return state.users
    });

    useEffect(() => {
        setIsLoadingUser(true);
        //Esta promesa es que al hacer un dispatch que va devolviendo states
        //Entonces al comenzar el useEffect a funcionar se manda el state a que esta cargando y a mostrar el
        //esqueleto correspondiente, una vez que devuelve un success, se actualiza EL SLICE y se re-renderiza el componente
        //Y si llega error lo mismo y se utiliza el resto de la promesa para cambiar los states de acuerdo a como haya terminado la promesa
        dispatch(fetchUsers())
            .unwrap()
            .then(() => {
                console.log('SUCCESS');
            })
            .catch((err) => {
                console.log('FAIL!');
                setLoadingUsersError(err);
            })
            .finally(() => {
                setIsLoadingUser(false)
            })
    }, [dispatch]);

    const handleUserAdd = () => {
        setIsCreatingUser(true);
        dispatch(addUser())
            .unwrap()
            .catch(err => setCreatingUserError(err))
            .finally(() => setIsCreatingUser(false));
    };

    if (isLoadingUsers) {
        return <Skeleton times = {6} className="h-10 w-full"></Skeleton>//<div>Loading...</div>
    }

    if (loadingUsersError) {
        return <div>Error fetching data...</div>
    }

    const renderedUsers = data.map ((user) => {
        return <div key={user.id} className="mb-2 border rounded">
            <div className="flex p-2 justify-between items-center cursor-inter">
                {user.name}
            </div>
        </div>
    });

    return <div>
        <div className="flex flex-row justify-between m-3">
            <h1 className="m-2 text-xl">Users</h1>
            {

                isCreatingUser? 'Creating User...' :

                <Button primary="true" onClick={handleUserAdd}>
                    + Add User
                </Button>
            }
            {creatingUserError && 'Error creating user...'}
        </div>
        {renderedUsers}
        </div>

}

//export default UsersList;