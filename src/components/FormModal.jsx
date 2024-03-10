'use client'
// components/FormModal.js
import React, {useState, useEffect} from 'react';
import { Modal, Button } from 'react-bootstrap';
import StepFormikForm from './StepFormikForm';

import Image from 'next/image';
import cross from '../assets/images/cross.svg'


import { useFormState } from '@/contexts/FormContext';

const FormModal = ({ show, onHide, onSubmit }) => {
    const [totalSlide, setTotalSlide] = useState(6)
    const {formData, step} = useFormState();
    
    useEffect(() => {
        if(formData && formData.type == 'Party Host'){
            setTotalSlide(6)
        }else{
            setTotalSlide(5)
        }
    }, [formData])
    
  return (
    <>
      
            <Modal className='cc-modal' show={show} onHide={onHide} centered>
                <Modal.Body>
                    <div className="st-modal-contain">
                        <div className="pro-bar" >
                            <span style={{'transform': `scaleX(${(step / totalSlide)*100/100})`}}></span>
                        </div>
                        {/* {
                            JSON.stringify(formData) 
                        } */}
                        {/* <p>STEP: {step}</p> */}
                        <button className='close-btn' onClick={onHide}>
                            <Image src={cross} alt="" />
                        </button>
                        <StepFormikForm onSubmit={onSubmit} />
                    </div>
                </Modal.Body>
            </Modal>
        
    </>
  );
};

export default FormModal;
