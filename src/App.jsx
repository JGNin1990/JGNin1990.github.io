import data from './data.js';
// import {BsStarFill} from 'react-icons/bi';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import Search from './components/search/Search.jsx';
import AddedCart from './components/AddedCart/AddedCart.jsx';
// import { FaCaretDown } from 'react-icons/fa';
// import Total from './components/total/Total.jsx';
// import Button from 'react-bootstrap/Button';
// import Hero from './components/hero/Hero.jsx';
import './App.scss';
import Dialog from './components/Dialog/Dialog.jsx';





const App = () => {
  // console.log(data);
  // console.log(data.rating.rate)

  const[text, setText] = useState('');
  const[products,setProduct] = useState([]);
  const[cart, setCart] = useState([]);
  const [show, setShow] = useState([]);
  
  //submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(text)
    let filterProduct = data.filter(i => i.title.toLowerCase().includes(text));
    // console.log(filterProduct);
    
    setProduct(filterProduct);
    // setProduct(prevProduct=>prevProduct.filter(i=>i.title.includes(text)));
    // console.log(products);
  
    setText('');
  };


  //change
  const handleChange = (e) => {
    // console.log(e.target.value);
    setText(e.target.value.toLowerCase());
  };

  //add to cart
  const addToCart = (e) => {
    // console.log(e);
    const tem = cart.map(i => i.id);
    if (!(tem.includes(e))){
      products.map(i=> i.id === e &&  setCart(pre=>[...pre,i]));
    }
    console.log(cart)
    // products.map(i=> i.id === e &&  setCart(pre=>[...pre,i]));


  };
  // console.log("cart",cart);


  //added cart
  const handleCart = () => {
    // console.log("hello", cart[0].id); 
    setProduct([]);
    setShow(cart);

   
  }

  // console.log("product",products);
  // console.log("show", show);


  //rom0ve form cart
  const removeCart = (e) => {
    // console.log('he',show);
    setShow(pre=> pre.filter(i=> i.id !== e));
    // console.log('ar',show);
    setCart(pre=> pre.filter(i => i.id !== e));
  };
  // console.log('remove',show);

  // const handleTotal = () => {
  //   // console.log("hello");
  //   let total = 0;
  //   cart.map(i => total += i.price);
  //   // alert(total);
  // };

  // const clear = () => {
  //   setProduct([]);
  //   setCart([]);
  //   setShow([]);
  // };
  // console.log(show)
      // window.addEventListener('scroll', ()=>{
      //   // console.log(window.scrollY)//130
      //   if (window.scrollY > 180 ) {
      //     console.log('hello')
          
      //   }
      // })
     


  return (
    <div className='ro'>

      <div className="container" >
        <h3 className='header fs-1'>Shopping List</h3>
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} value={text} className='f-input' type="text" placeholder='Search Your Products' />
        </form>
        <div className="btnContainer my-5">
          
          <button onClick={handleCart}  className='btn btn-primary btnControl me-5 text-light position-relative'>
            Added Cart
            {
              cart.length !== 0 && <span className='bg-secondary  position-absolute cartCount'>{cart.length}</span>
            }
          </button>
          {/* <Total  cl={clear} key={uuidv4()}  ls={cart}/> */}
          {/* <button onClick={handleTotal} className='btn btn-secondary btnControl text-primary'>Total</button> */}
        </div>

        <div className="dialog">
          <Dialog/>
        </div>

        <div className='row my-5'>
          {
            products.map(ele=> {
              return(
                <Search 
                image={ele.image}
                title={ele.title}
                price={ele.price}
                rate={ele.rating.rate}
                count={ele.rating.count}
                searchFun={addToCart}
                id ={ele.id}
                key={ele.id}
                  />
              )
            })
          }

          {/* for add to cart */}

          {
            show.map(ele=> {
              return(
                <AddedCart 
                  key={uuidv4()}
                  elem={ele}
                  removeFun={removeCart}
                />
              )
            })
          }

        {
          // data.map(ele=> {
          //   return(
          //     <Hero 
          //       key={ele.id}
          //       elem={ele}
          //       searchFun={addToCart}
          //     />
          //   )
          // })
        }


        </div>

      </div>

    </div>
  );
};

export default App;

