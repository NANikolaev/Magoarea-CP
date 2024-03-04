import { useParams } from "react-router-dom";
import { useState } from "react";

import fileIcon from '../../assets/Icons/icons8-article-48.png';
import photoIcon from  '../../assets/Icons/icons8-photo-48.png';
import schema from '../../assets/Images/mechanical-drawing-services.png';
import { Section,HeadingBox,Heading,Icon,Span,Image,InfoContainer,Article,Paragraph } from "./elements";

const Form = () => {
    let [show,setShow]=useState(false)
    let id = useParams().id

    return (
      <Section>
        <HeadingBox>
         <Icon src={fileIcon}/>
          <Heading>АРТИКУЛ</Heading>
          <Heading>№</Heading>
          <Span>274951048264967</Span>
          <Icon src={photoIcon} style={{cursor:'pointer'}} onClick={()=>setShow(!show)}/>
        </HeadingBox>
        {show && <Image src={schema}/>}
         <InfoContainer>
            <Article>
              <Heading>№</Heading>
               <Paragraph>024</Paragraph>
               <Paragraph>031</Paragraph>
               <Paragraph>051</Paragraph>
               <Paragraph>026</Paragraph>
               <Paragraph>027</Paragraph>
               <Paragraph>024</Paragraph>
               <Paragraph>028</Paragraph>
               <Paragraph>021</Paragraph>
               <Paragraph>022</Paragraph>
               <Paragraph>023</Paragraph>
            </Article>
            <Article>
              <Heading>ОПИСАНИЕ</Heading>
               <Paragraph>Конфигурация съгласно КД</Paragraph>
               <Paragraph>Проверка на заваръчен шев без шупли,пръски и заусенъци</Paragraph>
               <Paragraph>Перпендикулярност</Paragraph>
               <Paragraph>Занитване</Paragraph>
               <Paragraph>Поцинковане</Paragraph>
               <Paragraph>Проверка на покритие след боядисване мин 70μm макс 150μm</Paragraph>
               <Paragraph>Нит Рем FH M5x0,8-15</Paragraph>
               <Paragraph>Честота на измерване</Paragraph>
               <Paragraph>Боядисване 70-150μm</Paragraph>
               <Paragraph>Детайлите да са поцинковани без пасивация</Paragraph>    
            </Article>
            <Article>
              <Heading>ЗАБЕЛЕЖКА</Heading>
                  <Paragraph>10</Paragraph>
                  <Paragraph>10</Paragraph>
                  <Paragraph>10 Dea-t1a45b180</Paragraph>
                  <Paragraph>10</Paragraph>
                  <Paragraph>20 Fischer</Paragraph>
                  <Paragraph>2 бр Планирана проверка</Paragraph>
                  <Paragraph>2 бр/.20бр Планирана проверка</Paragraph>
                  <Paragraph>Няма.Последна</Paragraph>
                  <Paragraph>Актуализация на 14.09.2019</Paragraph>
                  <Paragraph>Обновена на 02.06.2021</Paragraph>
            </Article>
            <Article>
              <Heading>МЕ</Heading>
              <Paragraph>MM</Paragraph>
              <Paragraph>MM</Paragraph>
              <Paragraph>MM</Paragraph>
              <Paragraph>MM</Paragraph>
              <Paragraph>MMM</Paragraph>
              <Paragraph>MM</Paragraph>
              <Paragraph>MM</Paragraph>
              <Paragraph>MM</Paragraph>
              <Paragraph>MM</Paragraph>   
              <Paragraph>MM</Paragraph>        
            </Article>
            <Article>
              <Heading>РАЗМЕР</Heading>
              <Paragraph>0.004</Paragraph>
              <Paragraph>0.234</Paragraph>
              <Paragraph>1.543</Paragraph>
              <Paragraph>22.232</Paragraph>
              <Paragraph>12.32</Paragraph>
              <Paragraph>5.546</Paragraph>
              <Paragraph>11.110</Paragraph>
              <Paragraph>3.232</Paragraph>
              <Paragraph>0.323</Paragraph>   
              <Paragraph>2.323</Paragraph>        
            </Article>
            <Article>
              <Heading>Д.ГРАНИЦА</Heading>
              <Paragraph>0.004</Paragraph>
              <Paragraph>0.234</Paragraph>
              <Paragraph>1.543</Paragraph>
              <Paragraph>22.232</Paragraph>
              <Paragraph>12.32</Paragraph>
              <Paragraph>5.546</Paragraph>
              <Paragraph>11.110</Paragraph>
              <Paragraph>3.232</Paragraph>
              <Paragraph>0.323</Paragraph>   
              <Paragraph>2.323</Paragraph>        
            </Article>
            <Article>
              <Heading>Г.ГРАНИЦА</Heading>
              <Paragraph>0.004</Paragraph>
              <Paragraph>0.234</Paragraph>
              <Paragraph>1.543</Paragraph>
              <Paragraph>22.232</Paragraph>
              <Paragraph>12.32</Paragraph>
              <Paragraph>5.546</Paragraph>
              <Paragraph>11.110</Paragraph>
              <Paragraph>3.232</Paragraph>
              <Paragraph>0.323</Paragraph>   
              <Paragraph>2.323</Paragraph>        
            </Article>
            <Article>
              <Heading>ИНСТРУМЕНТ</Heading>
                  <Paragraph>Визуално</Paragraph>
                  <Paragraph>Визуално</Paragraph>
                  <Paragraph>Визуално</Paragraph>
                  <Paragraph>3D Координатна машина DEA </Paragraph>
                  <Paragraph>Визуално</Paragraph>
                  <Paragraph>Дебеломер за покритие COATI</Paragraph>
                  <Paragraph>Визуалноа</Paragraph>
                  <Paragraph>Визуалноа</Paragraph>
                  <Paragraph>Визуално</Paragraph>
                  <Paragraph>Визуално</Paragraph>
            </Article>
         </InfoContainer>
      </Section>
       
    )

};

export default Form