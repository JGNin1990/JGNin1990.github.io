import React from 'react';
import {FaOpencart} from 'react-icons/fa';


const Search = ({image,title,price,rate,count,searchFun,id}) => {
  return (
    <>
           <div className="col-4 p-2 " >
                  <div className="card w-100 box">
                    <div className="card-img-top w-75">
                     <img src={image} alt="p" className="w-100 p-5" />
                    </div>
                    <div className="card-body pb-0 text-center">
                      <div className="card-title d-flex justify-content-between ">
                        <h5 className="fw-bold py-3 lh-normal">{title}</h5>
                      </div>
                      {/* <p className="card-text p-5">{ele.description}</p> */}
                      <h3 className='text-black-50 pb-1'>${price}</h3>
                      <div className="d-flex justify-content-between align-items-center py-3">
                        <p className='my-auto'>Rating :<span className='text-warning fw-bold ps-2'>{rate}/5</span></p>
                        <p className='my-auto count'>Ordered Count : <span className='text-success'>{count}</span></p>
                      </div>
                    </div>
                    <button onClick={()=>searchFun(id)} className='btn btn-primary py-3 cart-btn text-light fs-5'>
                      Add to Cart
                      <FaOpencart className='text-primary bg-light ms-2 cart'/>
                    </button>
                  </div>
              </div>
    </>
  )
}

export default Search;