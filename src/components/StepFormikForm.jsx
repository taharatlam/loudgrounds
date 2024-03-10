'use client'
// components/StepFormikForm.js
import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import Image from 'next/image';

import party from '../assets/images/partyhost.svg'
import eventProfessional from '../assets/images/eventprofessional.svg'
import PartyHost from './PartyHostFormSteps/PartyHost';

import { useFormState } from '@/contexts/FormContext';
import EventProfessional from './EventProfessionalSteps/EventProfessional';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  // Add more validation for other fields
});

const StepFormikForm = ({ onSubmit }) => {

    const [formType, setFormType] = useState(null);
    const {setFormData, formData} = useFormState()

    const handleChange= (e)=>{
        setFormData((prev)=> ({type: e}))
        setFormType(e)
    }
    console.log('type', formData);
  switch (formType) {
    case 'Party Host':
      return <PartyHost handleChange={handleChange} />;
    case 'Event Professional':
      return  <EventProfessional handleChange={handleChange} />;
    default:
      return (
        <>
            <div className="step-inner">
                <div className="row">
                    <div className="col-12">
                        <h4 className="sub-head text-center">Great to have you at <span>LoudGrounds</span>. Let’s get started!!</h4>
                        <h3 className="sec-head sm text-center">
                        How can we help you?
                        </h3>
                    </div>
                </div>
                <div className="row mt-4 row-gap-20">
                    <div className="col-lg-6 col-12">
                        
                        <div className="cus-check">
                            <input type="radio" name="partyhost" onClick={()=>handleChange('Party Host')} id="p1" />
                            <label htmlFor="p1">
                                <div className="ic">
                                    <Image src={party} alt="" />
                                </div>
                                <span>Party Host</span>
                                <p>
                                hosting an upcoming event or looking for new event ideas
                                </p>
                            </label>
                        </div>
                        
                    </div>
                    <div className="col-lg-6 col-12">
                        
                        <div className="cus-check">
                            <input type="radio" name="partyhost" onClick={()=>handleChange('Event Professional')} id="p2" />
                            <label htmlFor="p2">
                                <div className="ic">
                                    <Image src={eventProfessional} alt="" />
                                </div>
                                <span>Event Professional</span>
                                <p>I help in organizing events - Venue Provider or Freelancer / Agency that provides services for events.</p>
                            </label>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
      );
  }

};

export default StepFormikForm;
