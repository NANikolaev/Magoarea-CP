import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Loader from "../Loader/Loader";
import { getArticle, putArticle, check, addValue } from "./utils";

import fileIcon from '../../assets/Icons/icons8-article-48.png';
import photoIcon from '../../assets/Icons/icons8-photo-48.png';
import schema from '../../assets/Images/mechanical-drawing-services.png';
import { Section, HeadingBox, Heading, Icon, Span, Image, InfoContainer, Column, Paragraph, Form, InputCheck, InputNum, FormGroup, Button } from "./elements";

const Article = ({ setPass, setUser, user }) => {
  let [order, setOrder] = useState([]);
  let [show, setShow] = useState(false);
  let [error, setError] = useState(false)
  let [isLoading, setLoading] = useState(true);

  let { year, id } = useParams();
  let requestedOrder = `${year}/${id}`;
  let navigate = useNavigate()

  useEffect(() => {
    setLoading(true)
    getArticle(requestedOrder)
      .then(order => {
        setOrder(data => {
          order.header.WorkerId = user.WorkerID
          return order
        })
        setLoading(false)
      })
      .catch(err => {
        if (err.message == 'Failed to fetch') { err.message = 'Няма връзка със сървъра!' }
        setLoading(false)
        setError(err.message.toUpperCase())
      })

  }, [])

  function onSubmit(e) {
    e.preventDefault()
    setLoading(true)
    putArticle(order)
      .then(res => { setPass(false); setUser(''); navigate('/', { replace: true }); })
      .catch(err => {
        if (err.message == 'Failed to fetch') { err.message = 'Няма връзка със сървъра!' }
        setLoading(false)
        setError(err.message.toUpperCase())
      })
  }


  return (
    <>
      {isLoading
        ? <Loader />
        : <Section>
          {error
            ? <Heading style={{ color: 'red', fontSize: '18px', textAlign: 'center', fontWeight: '800' }}>{error}</Heading>
            : <>
              <HeadingBox>
                <Icon src={fileIcon} />
                <Heading>ПОРЪЧКА: <Span>{order.header.MONo}</Span></Heading>
                <Heading>ОПИСАНИЕ: <Span>{order.header.Description || 'NULL'}</Span></Heading>
                <Heading>КЛИЕНТ: <Span>{order.header.CustomerName || 'NULL'}</Span></Heading>
              </HeadingBox>
              <HeadingBox>
                <Heading>АРТИКУЛ</Heading>
                <Heading>№</Heading>
                <Span>{order.header.BOM}</Span>
                <Icon src={photoIcon} style={{ cursor: 'pointer' }} onClick={() => setShow(!show)} />
              </HeadingBox>
              {show && <Image src={schema} />}
              <InfoContainer>
                <Column>
                  <Heading>№</Heading>
                  {order.form.map((o, i) => <Paragraph key={i}>{o.Parameter}</Paragraph>)}
                </Column>
                <Column>
                  <Heading>ОПИСАНИЕ</Heading>
                  {order.form.map((o, i) => <Paragraph key={i}>{o.ParameterDescription || 'няма'}</Paragraph>)}
                </Column>
                <Column>
                  <Heading>ЗАБЕЛЕЖКА</Heading>
                  {order.form.map((o, i) => <Paragraph key={i}>{o.Notes || "няма"}</Paragraph>)}
                </Column>
                <Column>
                  <Heading>МЕ</Heading>
                  {order.form.map((o, i) => <Paragraph key={i}>{o.UoM}</Paragraph>)}
                </Column>
                <Column>
                  <Heading>РАЗМЕР</Heading>
                  {order.form.map((o, i) => <Paragraph key={i}>{o.ExpectedNumResult || '0'}</Paragraph>)}
                </Column>
                <Column>
                  <Heading>Д.ГРАНИЦА</Heading>
                  {order.form.map((o, i) => <Paragraph key={i}>{o.LowerBound || '0'}</Paragraph>)}
                </Column>
                <Column>
                  <Heading>Г.ГРАНИЦА</Heading>
                  {order.form.map((o, i) => <Paragraph key={i}>{o.UpperBound || '0'}</Paragraph>)}
                </Column>
                <Column>
                  <Heading>ИНСТРУМЕНТ</Heading>
                  {order.form.map((o, i) => <Paragraph key={i}>{o.AnalysMethodDescription || 'няма'}</Paragraph>)}
                </Column>
                <Form onSubmit={(e) => onSubmit(e)}>
                  <FormGroup>
                    <Heading>ГОДНО</Heading>
                    <Heading>ИЗМЕРЕНО</Heading>
                  </FormGroup>
                  {order.form.map((o, i) =>
                    <FormGroup key={i}>
                      <InputCheck type="checkbox" name={`Bool${i}`} onChange={(e) => check(e, i, setOrder)} />
                      <InputNum type="number" step='0.01' name={`Result${i}`} required onChange={(e) => addValue(e, i, setOrder)} />
                    </FormGroup>
                  )}
                  <Button type="submit">ЗАПАЗИ</Button>
                </Form>
              </InfoContainer>
            </>
          }
        </Section>
      }
    </>
  )

};

export default Article