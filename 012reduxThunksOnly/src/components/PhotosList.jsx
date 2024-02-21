import { useEffect} from "react";
import { useSelector } from "react-redux";
import { fetchPhoto, addPhoto } from "../store";
import Button from "./Button";
import Skeleton from "./Skeleton";
import PhotosListItem from "./PhotosListItem";
import useThunk from "../hooks/useThunk";

function PhotosList({album}) {
    const [doFetchPhoto, isLoadingPhoto, loadingPhotoError] = useThunk(fetchPhoto);

    const [doCreatePhoto, isCreatingPhoto, creatingPhotoError] = useThunk(addPhoto)


    useEffect(() => {
        doFetchPhoto(album);
    }, [doFetchPhoto]);

    const {data}= useSelector((state) => {
        
        return state.photos

    });


    const filteredData = data.filter(item => item.albumId === album.id);

    //console.log(data)

    const handleAddPhoto = () => {
        doCreatePhoto(album);
    };

    


    let content;
    if (isLoadingPhoto) {
        content = <Skeleton className='h-8 w-8' times={4}></Skeleton>
    } else if (loadingPhotoError) {
        content = <div>Error fetching photos...</div>
    } else {
        content = filteredData.map (photo => {
            return <PhotosListItem key={photo.id} photo={photo}></PhotosListItem>
        });
    }

    return <div>
        <div className="m-2 flex flex-row items-center justify-between">
            <h3 className="text-lg font-bold">Photos In {album.title}</h3>
            <Button primary="true" loading={isCreatingPhoto} onClick={handleAddPhoto}>
                + Add Photo
            </Button>
        </div>
        <div className="mx-8 flex flex-row flex-wrap jusitfy-center">{content}</div>
    </div>;
};

export default PhotosList;