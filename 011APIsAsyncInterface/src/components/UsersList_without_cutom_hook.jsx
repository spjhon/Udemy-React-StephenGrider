import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, addUser } from "../store";
import Skeleton from "./Skeleton";
import Button from './Button'

function UsersList () {

    const [isLoadingUsers, setIsLoadingUser] = useState(false);
    const [loadingUsersError, setLoadingUsersError] = useState(null);

    const [isCreatingUser, setIsCreatingUser] = useState(false);
    const [creatingUserError, setCreatingUserError] = useState(null);

    const dispatch = useDispatch();
    
    //se aplica deconstruccion para separar lo que viene del otro lado
    const {data}= useSelector((state) => {
        return state.users
    });

    useEffect(() => {
        setIsLoadingUser(true);
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

                <Button onClick={handleUserAdd}>
                    + Add User
                </Button>
            }
            {creatingUserError && 'Error creating user...'}
        </div>
        {renderedUsers}
        </div>

}

//export default UsersList;