import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { addcommande } from '../JS/userSlice/commandeSlice';
function ProductCard({el, ping, setping}) {
    const user = useSelector((state) => state.user.user);
    const dispatch=useDispatch();
  const [newcommande, setnewcommande] = useState({
    iduser:user?._id,
    nameuser:user?.name+" "+user?.lastname,
    namepro:el?.namepro,
    imgpro:el?.imgpro,
    price:el?.price,
    qte:1,
    date:new Date(),
    status:"non payé"
  })
  return (
    <Card style={{ width: '18rem' , margin:"4px"}}>
    <Card.Img variant="top" src={el?.imgpro} />
    <Card.Body>
      <Card.Title>{el?.namepro}</Card.Title>
      <Card.Text>
        <p>{el?.taille}</p>
     <h3>{el?.price} DT</h3>


      </Card.Text>
<button onClick={()=>{dispatch(addcommande(newcommande)); setping(!ping)}}>Buy</button>
    </Card.Body>
  </Card>
  )
}

export default ProductCard