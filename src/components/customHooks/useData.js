import { useCallback } from 'react';

const useData = (loadDataToStore, serviceMethod, catchErr) => {

    const getData = useCallback(async(id) => {
        try {
            const data = await serviceMethod(id);
            loadDataToStore(data);
        } catch (err) {
            catchErr();
        }
    }, [loadDataToStore, serviceMethod, catchErr])

    return { getData }
}

export default useData;