import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import { removeUser } from "../store";
import useThunk from "../hooks/useThunk";
import ExpandablePanel from "./ExpandablePanel";
import AlbumList from "./AlbumsList";

function UsersListItem ({user}) {

    
    const [doRemoveUser, isLoading, error] = useThunk(removeUser);

    const handleClick = () => {
        doRemoveUser(user);
    }

    const header = <>
    <Button className="mr-3" loading={isLoading} onClick={handleClick}>
        <GoTrashcan></GoTrashcan>
    </Button>
    {error && <div>Error deleting user.</div> }
    {user.name}
    </>;

//En este caso el albumList seria el children
    return (
        <ExpandablePanel header={header}>
            <AlbumList user={user}></AlbumList>
        </ExpandablePanel>
    );
                
            
}

export default UsersListItem;