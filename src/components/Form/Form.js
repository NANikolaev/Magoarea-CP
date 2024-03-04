import { useParams } from "react-router-dom";
import { useState } from "react";

import fileIcon from '../../assets/Icons/icons8-article-48.png';
import photoIcon from  '../../assets/Icons/icons8-photo-48.png';
import schema from '../../assets/Images/mechanical-drawing-services.png';
import { Section,HeadingBox,BigHeading,Icon,Span,Image } from "./elements";

const Form = () => {
    let [show,setShow]=useState(false)
    let id = useParams().id

    return (
      <Section>
        <HeadingBox>
         <Icon src={fileIcon}/>
          <BigHeading>АРТИКУЛ</BigHeading>
          <BigHeading>№</BigHeading>
          <Span>274951048264967</Span>
          <Icon src={photoIcon} style={{cursor:'pointer'}} onClick={()=>setShow(!show)}/>
        </HeadingBox>
        {show && <Image src={schema}/>}
      </Section>
       
    )

};

export default Form