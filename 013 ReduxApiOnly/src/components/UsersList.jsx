import { useEffect} from "react";
import { useSelector } from "react-redux";
import { fetchUsers, addUser } from "../store";
import Skeleton from "./Skeleton";
import Button from './Button'
import useThunk from "../hooks/useThunk";
import UsersListItem from "./UsersListItem";


/* LO QUE ENTRA
   - El componente UsersList utiliza el hook useEffect de React para realizar operaciones asíncronas al montar el componente.
   - Utiliza los custom hooks useThunk para manejar las operaciones asíncronas relacionadas con fetching y creación de usuarios.
   - Utiliza el hook useSelector de react-redux para obtener el estado de los usuarios del store Redux.

ALGORITMO
1. **Inicialización de Custom Hooks y Variables:**
   - Se utilizan los custom hooks useThunk para las operaciones asíncronas fetchUsers y addUser.
   - Se utiliza el hook useSelector para extraer el estado de los usuarios (data), isLoadingUsers, y loadingUsersError del store Redux.
   
2. **Efecto al Montar el Componente:**
   - Se utiliza el useEffect para realizar la operación de fetchUsers al montar el componente.
   - El useEffect se ejecuta cuando cambia el custom hook doFetchUsers.
   - El custom hook doFetchUsers realiza el dispatch de la acción fetchUsers y gestiona los estados isLoadingUsers y loadingUsersError.
   
3. **Manejo de Creación de Usuario:**
   - Se utiliza el custom hook doCreateUser para manejar la operación asíncrona de addUser.
   - Se utiliza la función handleUserAdd para llamar a doCreateUser al hacer clic en el botón de agregar usuario.
   
4. **Renderizado Condicional:**
   - Se realiza un renderizado condicional del contenido del componente:
      - Si isLoadingUsers es true, se muestra un componente Skeleton para indicar la carga.
      - Si loadingUsersError es true, se muestra un mensaje de error.
      - Si no hay errores ni carga, se mapea la información de los usuarios y se crea una lista de UsersListItem.

5. **Renderizado de UI:**
   - Se renderiza la interfaz de usuario con un título "Users" y un botón "+ Add User".
   - El botón tiene lógica condicional para mostrar un spinner de carga si se está creando un usuario (isCreatingUser).
   - Se muestra un mensaje de error (creatingUserError) si hay un problema al crear un usuario.

LO QUE RETORNA
   - El componente UsersList retorna la interfaz de usuario que muestra la lista de usuarios, un botón para agregar usuarios, y mensajes de carga y error.
*/

function UsersList () {
    //ESTE PRIMER COMPONENTE HACE FETCH A LOS USUARIOS QUE EXISTEN

    //este primer const es para manejar el spiner del fetch users
    //como cada thunk hace una operacion asincrona ya sea de fetching o una operacion de escritura con el post
    //pues se hace con el custome hook
    //el isLoadingusers es booleano
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