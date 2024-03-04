import { useSearchParams, Link } from "react-router-dom";
import { Section, List, ListItem, Image, Span, Heading } from "./elements";
import { useState, useEffect } from "react";
import fileIcon from "../../assets/Icons/icons8-file-67.png";

import Loader from "../Loader/Loader";
import { getOrders } from "./utils";

const Orders = () => {

    let [isLoading, setLoading] = useState(true)
    let [orders, setOrders] = useState([]);
    let [params, setParams] = useSearchParams();
    let query = params.get('query');
    useEffect(() => {
        setLoading(true)
        getOrders(query)
            .then(data => {
                setOrders(data)
                setLoading(false)
            });
    }, [query]);

    return (
        <>
            {isLoading 
                ? <Loader/>
                : <Section key={query}>
                    {orders.length > 0
                        ? <List>{orders.map((o, i) =>
                            <Link to={`/Order/${query}`} key={i}>
                                <ListItem>
                                    <Image src={fileIcon} />ПОРЪЧКА <Span>№</Span><Span>{i}</Span>
                                </ListItem>
                            </Link>)}
                        </List>
                        : <Heading>НЯМА НАМЕРЕНИ РЕЗУЛТАТИ!</Heading>
                    }
                </Section>
            }
        </>

    )
};

export default Orders;