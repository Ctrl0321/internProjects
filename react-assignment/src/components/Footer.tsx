import * as React from 'react';
import { useState,useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {increment} from '../actions'
 function Footer(){
    interface RootState {
        counter: number;
      }
    const counter=useSelector((state:RootState) => state.counter)
    const dispatch=useDispatch()
    return(
        <>
          <h1 className=' bg-red-500'>{counter}</h1>
         <button onClick={()=>dispatch(increment())}>Click</button>
     

        </>
    )
}
export default Footer