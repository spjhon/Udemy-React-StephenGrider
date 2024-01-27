import { useEffect} from "react";
import { useSelector } from "react-redux";
import { fetchUsers, addUser } from "../store";
import Skeleton from "./Skeleton";
import Button from './Button'
import useThunk from "../hooks/useThunk";
import UsersListItem from "./UsersListItem";


function UsersList () {
    //ESTE PRIMER COMPONENTE HACE FETCH A LOS USUARIOS QUE EXISTEN

    const [doFetchUsers, isLoadingUsers, loadingUsersError] = useThunk(fetchUsers);

    const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser)

    
    //se aplica deconstruccion para separar lo que viene del otro lado de una vez en una variable llamada data
    const {data}= useSelector((state) => {
        return state.users
    });

    useEffect(() => {
        //aqui funciona el dispatch(fechusers())
        doFetchUsers();
    }, [doFetchUsers]);

    const handleUserAdd = () => {
        doCreateUser();
    };

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