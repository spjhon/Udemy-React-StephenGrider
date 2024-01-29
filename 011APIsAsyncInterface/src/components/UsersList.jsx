import { useEffect} from "react";
import { useSelector } from "react-redux";
import { fetchUsers, addUser } from "../store";
import Skeleton from "./Skeleton";
import Button from './Button'
import useThunk from "../hooks/useThunk";
import UsersListItem from "./UsersListItem";


function UsersList () {
    //ESTE PRIMER COMPONENTE HACE FETCH A LOS USUARIOS QUE EXISTEN

    //este primer const es para manejar es spiner del fetch users
    //como cada thunk hace una operacion asincrona ya sea de fetching o una operacion de escritura con el post
    //pues se hace con el custome hook
    //el isLoadingusers es boolano
    //el loadingUsersError es un error que viene desde fetch users
    const [doFetchUsers, isLoadingUsers, loadingUsersError] = useThunk(fetchUsers);

    const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser)

    
    //se aplica deconstruccion para separar lo que viene del otro lado de una vez en una variable llamada data
    const {data}= useSelector((state) => {
        return state.users
    });

    useEffect(() => {
        //aqui funciona el dispatch(fechusers())
        //esta es una extraccion que pasa por el hook de creacion del thunk de los spiners
        //basicamente lo que se busca es saber cuando una info se ha llegado, se ha cargado, se ha recibido
        //a travez del useEffect sobre el componente
        doFetchUsers();
    }, [doFetchUsers]);

    const handleUserAdd = () => {
        doCreateUser();
    };


    /*Este use effect seria el que se utilizaria en lugar del hook

    useEffect(() => {
      setiIsLoadingUsers(true);
      dispatch (fetchUsers())
        .unwrap()
        .catch((err) => setLoadingUsersError(err))
        .finally(() => setiIsLoadingUsers(false));   
    }, [dispatch])

    y asi seria el handleUserAdd

    const handleUserAdd = () => {
        setIsCreatingUser(true);
        dispatch(addUser())
            .unwrap()
            .catch((err) => setCreatingUserError(err))
            .finally (() => setIsCreatingUser(false))
    }*/
    

    let content;

    if (isLoadingUsers) {
        content =  <Skeleton times = {6} className="h-10 w-full"></Skeleton>//<div>Loading...</div>
    }else if (loadingUsersError) {
        content =  <div>Error fetching data...</div>
    }else{
        content = data.map ((user) => {
           return <UsersListItem key={user.id} user={user}></UsersListItem>
        });
    }

    return <div>
        <div className="flex flex-row justify-between items-center m-3">
            <h1 className="m-2 text-xl">Users</h1>

                <Button primary="true" onClick={handleUserAdd} loading={isCreatingUser}>
                    + Add User
                </Button>
            {/* Este comparador && dice que si existe un error se muestre error */}
            {creatingUserError && 'Error creating user...'}
        </div>
        {content}
        </div>

}

export default UsersList;

 /* return <div>
        <div className="flex flex-row justify-between m-3">
            <h1 className="m-2 text-xl">Users</h1>
            {

                isCreatingUser? 'Creating User...' :

                <Button onClick={handleUserAdd}>
                    + Add User
                </Button>
            }
            {creatingUserError && 'Error creating user...'}
        </div>
        {renderedUsers}
        </div>  */