import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Loading from '../commponents/Loading';

function Loading() {
    const [loading, setLoading]= useState(false);

        const cambiarEstado=()=>{
            setLoading(false);
            setTimeout(()=>{
                setLoading(false);
            }, 5000);
        }
    if(loading){
        return(
            <Loading></Loading>
        )
    }
    else{
  return (
    <div>
      <h1>Oops, something went wrong...</h1>
    </div>
  )
}
}

export default Loading
