import React from 'react';
import './Dialog.css';

const Dialog = () => {
  return (
    <>
        <div className="dia-container">
            <h3 className='mb-3 fw-bold'>Shopping list</h3>
            <div className="row">
                <div className="col row">
                    <div className="col-lg-1">#</div>
                    <div className="col-lg-5">Produccts</div>
                    <div className="col-lg-2">Rate</div>
                    <div className="col-lg-2">
                      <div class="btn-group" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-primary">Left</button>
                        <p>1</p>
                        <button type="button" class="btn btn-primary">Right</button>
                      </div>
                    </div>
                    <div className="col-lg-2">Total</div>
                </div>
                <hr />
                <div className="col row"></div>
            </div>

        </div>
    </>
  )
}

export default Dialog;