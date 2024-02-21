import { GoTrashcan } from "react-icons/go";
import { removeAlbum } from "../store";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import PhotosList from "./PhotosList";
import useThunk from "../hooks/useThunk";

function AlbumsListItem({album}) {
    const [doRemoveAlbum, isLoading, error] = useThunk(removeAlbum);

    const handleRemoveAlbum = () => {
        doRemoveAlbum(album);
    }

    const header = (
    <>
        <Button primary="true" className="mr-2" loading={isLoading} onClick={handleRemoveAlbum}>
            <GoTrashcan></GoTrashcan>
        </Button>
        {album.title}
    </>)

    return (
    <ExpandablePanel key={album.id} header={header}>
        <PhotosList album={album}></PhotosList>
    </ExpandablePanel>)
}

export default AlbumsListItem;