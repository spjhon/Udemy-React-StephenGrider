import { GoTrashcan } from "react-icons/go";
import { useRemoveAlbumMutation } from "../store";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import PhotosList from "./PhotosList";

function AlbumsListItem({album}) {
    const [removeAlbum, results] = useRemoveAlbumMutation();

    const handleRemoveAlbum = () => {
        removeAlbum(album);
    }

    const header = (
    <>
        <Button primary="true" className="mr-2" loading={results.isLoading} onClick={handleRemoveAlbum}>
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