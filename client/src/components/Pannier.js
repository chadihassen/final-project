import React from 'react'
import "./pannier.css"
import { useDispatch, useSelector } from 'react-redux'
import { deletecommande } from '../JS/userSlice/commandeSlice';
function Pannier({ping, setping}) {
    const commandes=useSelector((state)=>state.commande.commandelist)
    const user = useSelector((state) => state.user.user);
    const dispatch = useDispatch();
    console.log(commandes)
  return (
    <div className='pannier'>
          <div className="card">
        <div className="row">
          <div className="col-md-8 cart">
            <div className="title">
              <div className="row">
                <div className="col"><h4><b>Shopping Cart</b></h4></div>
                <div className="col align-self-center text-right text-muted">3 items</div>
              </div>
            </div>    
         {commandes?.filter((el)=>el.iduser==user?._id).map((el)=><div className="row border-top border-bottom">
              <div className="row main align-items-center">
                <div className="col-2"><img className="img-fluid" src={el?.imgpro} /></div>
                <div className="col">
                  <div className="row text-muted">{el?.namepro}</div>
                  <div className="row">{el?.namepro}</div>
                </div>
                <div className="col">
                  <a href="#">-</a><a href="#" className="border">{el?.qte}</a><a href="#">+</a>
                </div>
                <div className="col">{el?.price} DT<button className="close" onClick={()=>{dispatch(deletecommande(el?._id));setping(!ping)}}>✕</button></div>
              </div>
            </div>)  }
           
      
            <div className="back-to-shop"><a href="#">←</a><span className="text-muted">Back to shop</span></div>
          </div>
          <div className="col-md-4 summary">
            <div><h5><b>Summary</b></h5></div>
            <hr />
            <div className="row">
              <div className="col" style={{paddingLeft: 0}}>ITEMS 3</div>
              <div className="col text-right">€ 132.00</div>
            </div>
            <form>
              <p>SHIPPING</p>
              <select><option className="text-muted">Standard-Delivery- €5.00</option></select>
              <p>GIVE CODE</p>
              <input id="code" placeholder="Enter your code" />
            </form>
            <div className="row" style={{borderTop: '1px solid rgba(0,0,0,.1)', padding: '2vh 0'}}>
              <div className="col">TOTAL PRICE</div>
              <div className="col text-right">€ 137.00</div>
            </div>
            <button className="btn">CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pannier