import { useEffect } from "react";

function Logout (){

    useEffect(() => {
    window.location.reload();
    }, [])
}

export default Logout;
