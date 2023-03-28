import React, { useState ,useRef} from 'react'
import { useDispatchCart, useCart } from './Contextreducer';
import { useEffect } from 'react';
function Card(props) {
    let foodItem=props.item;
    let dispatch = useDispatchCart();
    let data = useCart();
    const priceRef=useRef();
    let options = props.options;
    let priceoptions = Object.keys(options);
    const [qty, setQty] = useState(1);
    const [size, setSize] = useState("")

    const handleaddtocart = async () => {
        let food = []
        for (const item of data) {
          if (item.id === props.foodItem._id) {
            food = item;
    
            break;
          }
        }
        if (food !== []) {
            if (food.size === size) {
              await dispatch({ type: "UPDATE", id: props.foodItem._id, price: finalPrice, qty: qty })
              return
            }
            else if (food.size !== size) {
              await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size,img: props.ImgSrc })
              console.log("Size different so simply ADD one more to the list")
              return
            }
            return
          }
        await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size });  
        // console.log(data);
    }
    let finalPrice = qty * parseInt(options[size]);
    useEffect(()=>{
        setSize(priceRef.current.value)
    },[])
    return (
        <div>
            <div className="card mt-3 " style={{ "width": "17rem", "max-Height": "300px" }}>
                <img src={props.foodItem.img} className="card-img-top" alt="..." style={{ height: "150px", objectFit: "fill" }} />
                <div className="card-body">
                    <h5 className="card-title">{props.foodItem.name}</h5>

                    <div className="container w-100"></div>
                    <select className=" h-100  bg-success rounded"
                        onChange={(e) => setQty(e.target.value)}>
                        {Array.from(Array(6), (e, i) => {
                            return (
                                <option key={i + 1} value={i + 1}>{i + 1}</option>
                            )
                        })}
                    </select>
                    <select className="m-1 h-100  bg-success rounded" ref={priceRef} onChange={(e) => setSize(e.target.value)}>
                        {
                            priceoptions.map((data) => {
                                return <option key={data} value={data}>{data}</option>
                            })
                        }
                    </select>
                    <div className="d-inline h-100 fs-5">&#8377;{finalPrice}/-</div>
                </div>
                <hr />
                <button className='btn btn-success justify-center ms-2 m-2' onClick={handleaddtocart}>Add to cart</button>
            </div>
        </div>
    )
}

export default Card