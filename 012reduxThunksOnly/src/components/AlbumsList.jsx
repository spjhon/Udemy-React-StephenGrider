import { useEffect} from "react";
import { useSelector } from "react-redux";
import { fetchAlbums, addAlbums } from "../store";
import Skeleton from "./Skeleton";
import Button from './Button'
import useThunk from "../hooks/useThunk";
import AlbumsListItem from "./AlbumsListItem";



function AlbumsList ({user}){
    
    const [doFetchAlbums, isLoadingAlbums, loadingAlbumsError] = useThunk(fetchAlbums);

    const [doCreateAlbum, isCreatingAlbum, creatingAlbumError] = useThunk(addAlbums)
    
    const {data}= useSelector((state) => {
        
        return state.albums

    });

    const filteredData = data.filter(item => item.userId === user.id);

   

  

    const handleAddAlbum = () => {
        doCreateAlbum(user);
    };

    useEffect(() => {
        doFetchAlbums(user);
    }, [doFetchAlbums]);

    //console.log(data, error, isLoading);

    let content;
    if (isLoadingAlbums) {
        content = <Skeleton className="h-10 w-full" times={3}></Skeleton>
    }else if (loadingAlbumsError) {
        content = <div>Error loading albums.</div>
    }else {
        content = filteredData.map(album => {

            return <AlbumsListItem key={album.id} album={album}></AlbumsListItem>
        });
    };

    return (
    <div>
        <div className="m-2 flex flex-row items-center justify-between">
            <h3 className = "text-lg font-bold">Albums for {user.name}</h3>
            <Button primary="true" loading={isCreatingAlbum} onClick={handleAddAlbum}>
                + Add Album
            </Button>
        </div>
        
        <div>{content}</div>
    </div>);
}

export default AlbumsList;