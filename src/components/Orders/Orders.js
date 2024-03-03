import { useSearchParams,Link } from "react-router-dom";
import { Section,List,ListItem,Image,Span} from "./elements";

import fileIcon from "../../assets/Icons/icons8-file-67.png";

import { getOrders } from "./utils";

const Orders=()=>{
    
    let [params,setParams]=useSearchParams();
    let query=params.get('query');
    getOrders(query)
    .then(orders=>console.log(orders))
   
    return(

        <Section>
           <Link to={`/Order/${query}`}><List><ListItem><Image src={fileIcon}/>  ПОРЪЧКА <Span>№</Span><Span>6546455466456</Span></ListItem></List></Link>
        </Section>
    )

};

export default Orders;