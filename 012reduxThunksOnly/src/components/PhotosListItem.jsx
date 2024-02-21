
import { GoTrashcan } from "react-icons/go";
import { removePhoto } from "../store";
import useThunk from "../hooks/useThunk";

function PhotosListItem({photo}) {
    const [doRemovePhoto, isLoading, error] = useThunk(removePhoto);


    const handleRemovePhoto = () => {
        doRemovePhoto(photo);
    };

    return <div onClick={handleRemovePhoto} className="relative m-2 cursor-pointer">
        <img className="h-20 w-20" src={photo.url} alt="random pic"></img>
        <div className="absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80">
            <GoTrashcan className="text-3xl"></GoTrashcan>
        </div>
    </div>;
};

export default PhotosListItem;