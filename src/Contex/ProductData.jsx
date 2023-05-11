import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { v4 as uuid } from 'uuid';

const Appcontex = createContext()

// const initialState ={
//     isLoading:false,
//     isError: false,
//     ptoducts: [],
//     featureProducts: []
// }

const AppProvider = ({ children })=>{

    // const[state, dispatch] = useReducer(reducer, initialState)
    const [allProducts, setAllProducts] = useState([])

    useEffect(()=> {
        fetch('https://fakestoreapi.com/products')
                .then(res=>res.json())
                .then(json=>setAllProducts({products: json, categories: json.map(s => { return {category: s.category, id: uuid()} })}))
    },[])

 return <Appcontex.Provider value={allProducts}> 
        {children}
 </Appcontex.Provider>
}

const useProductData = () => {
    return useContext(Appcontex)
}

export {Appcontex, AppProvider, useProductData}