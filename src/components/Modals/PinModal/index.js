import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Modal } from 'react-bootstrap'

export const PinModal = ({open, register}) => {
 
  
  return (
    <>
      <Modal show={open} >
        <Modal.Header closeButton>
          <Modal.Title>Ingrese Pin</Modal.Title>
        </Modal.Header>
        <Modal.Body> <div className="col-sm-10">
                                <input
                                  {...register("pincode")}
                                  name="pincode"
                                  id="pincode"
                                  type="text"
                                  className="form-control form-control-sm"
                                  placeholder="PIN"
                                  
                                />
                              </div>
                              </Modal.Body>
       
      </Modal>
    </>
  )
}

