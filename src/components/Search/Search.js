import { useNavigate,createSearchParams } from "react-router-dom";

import { Button, Input, Form,Image } from "./elements";
import searchIcon from "../../assets/Icons/icons8-search-50.png"


let Search = () => {

    let navigate=useNavigate();

    function onSubmit(e){
        e.preventDefault()
         let query=e.currentTarget.query.value
         let params={query:query}
         navigate({pathname:'/Articles',search:`${createSearchParams(params)}`})
        
    }


    return (
        <Form onSubmit={(e)=>onSubmit(e)}>
            <Input type="search" name="query" required pattern="[0-9]"></Input>
            
            <Button type="submit"><Image src={searchIcon}/></Button>
        </Form>
    )

};

export default Search;

//<Input type="search" name="query" required pattern="[0-9]\d+"></Input>