import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";

function useThunk (thunk) {
    const [isLoading, setIsloading] = useState(false);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

    const runThunk = useCallback((arg) => {
        setIsloading(true);
        dispatch(thunk(arg))
            .unwrap()
            .catch(err => setError(err))
            .finally(() => setIsloading(false));
    }, [dispatch, thunk]);

    return [runThunk, isLoading, error];
};

export default useThunk;