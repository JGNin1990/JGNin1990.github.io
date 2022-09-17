// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import Table from 'react-bootstrap/Table';
// import {v4 as uuidv4} from 'uuid';
// import './Total.css';

// function Total({ls,cl}) {
//     //  console.log(ls)
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);

//   const handlePrint = () => {
//     cl();
//     window.print();
//     setShow(false)
//   };
  
//   const handleShow = () => ls.length !== 0 ? setShow(true) : alert('No Select card');


//   let tt = 0;
//   ls.map(i=> tt += i.price);

//   return (
//     <>

//         <Button variant="secondary text-primary btnControl" onClick={handleShow}>
//             Total
//         </Button>
      
//             <Modal className='modal-con' show={show} onHide={handleClose}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>MMSIT mini mark</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <Table striped bordered hover>
//                         <thead>
//                             <tr>
//                             <th>#</th>
//                             <th> Name</th>
//                             <th>Quantity</th>
//                             <th>Rate</th>
//                             <th>Amount</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {
//                                 ls.map((i,index)=> {
//                                     return(
//                                         <>
//                                             <tr key={uuidv4()} >
//                                                 <td>{index + 1}</td>
//                                                 <td className=''>{i.title}</td>
//                                                 <td className=''>1</td>
//                                                 <td className=''>{i.price} $</td>
//                                                 <td className=''>{i.price} $</td>
//                                             </tr>
                                    
//                                         </>
//                                     )
//                                 })
//                             }

//                             {/* <tr>
//                             <td>{index + 1}</td>
//                             <td>{i.title}</td>
//                             <td>2</td>
//                             <td>{i.price} $</td>
//                             </tr>
//                             <tr className='text-center fw-bold'>
//                             <td colSpan={4} className='py-2 fs-5' >Total Amount</td>
//                             </tr> */}
//                             <tr className='text-center fw-bold'>
//                                 <td colSpan={4} className='py-2 fs-5' >Total Amount</td>
//                                 <td>{tt}$</td>
//                             </tr> 
//                         </tbody>
//                     </Table>

//                 </Modal.Body>
//                 <Modal.Footer>
//                         {/* <h3>Thanks for Shopping</h3> */}
//                     <Button variant="bg-light btn btn-outline-danger" onClick={handleClose}>
//                         Discard
//                     </Button>
//                     <Button variant="success" onClick={handlePrint}>
//                         print
//                     </Button>
//                 </Modal.Footer>
//                 </Modal>    
//     </>
//   );
// }

// export default Total;