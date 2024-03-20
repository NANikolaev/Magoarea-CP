import { useSearchParams, Link } from "react-router-dom";
import { Section, List, ListItem, Image, Span, Heading } from "./elements";
import { useState, useEffect } from "react";
import fileIcon from "../../assets/Icons/icons8-file-67.png";

import Loader from "../Loader/Loader";
import { getArticles } from "./utils";

const Articles = () => {

    let [isLoading, setLoading] = useState(true)
    let [articles, setArticles] = useState([]);
    let [params, setParams] = useSearchParams();
    let query = params.get('query');
    useEffect(() => {
        setLoading(true)
        getArticles(query)
            .then(data => {
                setArticles(data)
                setLoading(false)
            })
            .catch(err => console.log(err.message))
    }, [query]);

    return (
        <>
            {isLoading
                ? <Loader />
                : <Section key={query}>
                    {articles.length > 0
                        ? <List>{articles.map((o, i) =>
                            <Link to={`/Article/${o.MONo}`} key={i}>
                                <ListItem>
                                    <Image src={fileIcon} />ПОРЪЧКА <Span>№</Span><Span>{o.MONo}</Span>
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

export default Articles;