import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Loader from "../Loader/Loader";
import { getArticle } from "./utils";

import fileIcon from '../../assets/Icons/icons8-article-48.png';
import photoIcon from '../../assets/Icons/icons8-photo-48.png';
import schema from '../../assets/Images/mechanical-drawing-services.png';
import { Section, HeadingBox, Heading, Icon, Span, Image, InfoContainer, Column, Paragraph, Form, InputCheck, InputNum, FormGroup,Button } from "./elements";

const Article = ({ setPass }) => {
  let [order, setOrder] = useState([])
  let [show, setShow] = useState(false);
  let [isLoading, setLoading] = useState(true)

  let { year, id } = useParams();
  let requestedOrder = `${year}/${id}`;
  let navigate = useNavigate()
  //  navigate('/',{replace:true})

  useEffect(() => {
    setLoading(true)
    getArticle(requestedOrder)
      .then(order => {
        setOrder(order)
        setLoading(false)
      })

  }, [])

  function onSubmit(e){
     e.preventDefault()
     console.log(e.currentTarget[0].isCheck)
  }
  

  return (
    <>
      {isLoading
        ? <Loader />
        : <Section>
          <HeadingBox>
            <Icon src={fileIcon} />
            <Heading>ПОРЪЧКА: <Span>{order[0].MONo}</Span></Heading>
            <Heading>ОПИСАНИЕ: <Span>{order[0].Description}</Span></Heading>
            <Heading>КЛИЕНТ: <Span>{order[0].CustomerName || 'NULL'}</Span></Heading>
          </HeadingBox>
          <HeadingBox>
            <Heading>АРТИКУЛ</Heading>
            <Heading>№</Heading>
            <Span>{order[0].BOM}</Span>
            <Icon src={photoIcon} style={{ cursor: 'pointer' }} onClick={() => setShow(!show)} />
          </HeadingBox>
          {show && <Image src={schema} />}
          <InfoContainer>
            <Column>
              <Heading>№</Heading>
              {order.map((o, i) => <Paragraph key={i}>{o.Parameter}</Paragraph>)}
            </Column>
            <Column>
              <Heading>ОПИСАНИЕ</Heading>
              {order.map((o, i) => <Paragraph key={i}>{o.ParameterDescription || 'няма'}</Paragraph>)}
            </Column>
            <Column>
              <Heading>ЗАБЕЛЕЖКА</Heading>
              {order.map((o, i) => <Paragraph key={i}>{o.Notes || "няма"}</Paragraph>)}
            </Column>
            <Column>
              <Heading>МЕ</Heading>
              {order.map((o, i) => <Paragraph key={i}>{o.UoM}</Paragraph>)}
            </Column>
            <Column>
              <Heading>РАЗМЕР</Heading>
              {order.map((o, i) => <Paragraph key={i}>{o.ExpectedNumResult || '0'}</Paragraph>)}
            </Column>
            <Column>
              <Heading>Д.ГРАНИЦА</Heading>
              {order.map((o, i) => <Paragraph key={i}>{o.LowerBound || '0'}</Paragraph>)}
            </Column>
            <Column>
              <Heading>Г.ГРАНИЦА</Heading>
              {order.map((o, i) => <Paragraph key={i}>{o.UpperBound || '0'}</Paragraph>)}
            </Column>
            <Column>
              <Heading>ИНСТРУМЕНТ</Heading>
              {order.map((o, i) => <Paragraph key={i}>{o.AnalysMethodDescription || 'няма'}</Paragraph>)}
            </Column>
            <Form onSubmit={(e)=>onSubmit(e)}>
              <FormGroup>
                <Heading>ГОДНО</Heading>
                <Heading>ИЗМЕРЕНО</Heading>
              </FormGroup>
               {order.map((o,i)=>
                <FormGroup key={i}>
                <InputCheck type="checkbox" name={`Bool${i}`}/>
                <InputNum type="number" name={`Result${i}`} required/>
              </FormGroup> 
               )}
               <Button type="submit">ЗАПАЗИ</Button>
            </Form>
          </InfoContainer>
        </Section>
      }
    </>
  )

};

export default Article