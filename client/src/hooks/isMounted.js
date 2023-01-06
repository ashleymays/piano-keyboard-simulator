import { useEffect, useRef } from "react";

function isMounted() {
    let isMount = useRef(false);
    useEffect(() => {
        isMount.current = true;
    }, [])

    return isMount.current;
}

export default isMounted;