import { useFetchAlbumsQuery, useAddAlbumMutation, useRemoveAlbumMutation } from "../store";
import Skeleton from './Skeleton';
//import ExpandablePanel from './ExpandablePanel';
import Button from './Button';
import AlbumsListItem from "./AlbumsListItem";
//import { store } from "../store";


function AlbumsList ({user}){
    //data es el data que viene del fetch, el error es por si hay error y el isFetching es un booleano
    //entonces gracias a RTK query, cuando se usa el useFetchAlbumsQuery de inmediato se comienza a 
    //efectuar la operacion que transmite esas tres variables de data, error y isFetching
    //el user se pasa como argumento para saber que usuario es el que hay que buscar o hacer fetching
    const {data, error, isFetching, isSuccess} = useFetchAlbumsQuery(user);
    const [addAlbum, results] = useAddAlbumMutation();
    //una mutacion es diferente a los query, asi que vuelve una funcion y el segundo elemento es un object
    //que tiene propiedades tambien
    //const [removeAlbum, removeAlbumResult] = useRemoveAlbumMutation();
    //console.log(data, error, isFetching, isSuccess)
    //tambien se puede asignar el useFetchAlbumsQuery a una variable e imprimir toda la variable (es una promise)

/*In addition to data, error, and isFetching, there are some other properties that may be returned by the RTK Query hooks, depending on the specific situation:

isLoading: A boolean value indicating whether the query is currently loading. It's similar to isFetching, but it might represent a broader loading state that includes background refetching and other scenarios.

isSuccess: A boolean value indicating whether the query has successfully completed. This can be used in conjunction with data to check if the data has been successfully retrieved.

refetch: A function that can be called to manually trigger a refetch of the data.

fulfilledTimeStamp: A timestamp indicating when the query was last successfully fulfilled.

meta: Additional metadata about the query, such as timestamps and other information.*/

    
    const handleAddAlbum = () => {
        addAlbum(user);
    };

    //console.log(data, error, isLoading);

    let content;
    if (isFetching) {
        content = <Skeleton className="h-10 w-full" times={3}></Skeleton>
    }else if (error) {
        content = <div>Error loading albums.</div>
    }else {
        content = data.map(album => {
            return <AlbumsListItem key={album.id} album={album}></AlbumsListItem>
        });
    };

    return (
    <div>
        <div className="m-2 flex flex-row items-center justify-between">
            <h3 className = "text-lg font-bold">Albums for {user.name}</h3>
            <Button primary="true" loading={results.isLoading} onClick={handleAddAlbum}>
                + Add Album
            </Button>
        </div>
        
        <div>{content}</div>
    </div>);
}

export default AlbumsList;