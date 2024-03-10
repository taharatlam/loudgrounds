'use client'
import React, {useState, useEffect} from 'react'
import Image from 'next/image'

import e1 from '../../assets/images/e1.svg'
import e2 from '../../assets/images/e2.svg'
import e3 from '../../assets/images/e3.svg'
import e4 from '../../assets/images/e4.svg'
import e5 from '../../assets/images/e5.svg'
import e6 from '../../assets/images/e6.svg'

import { useForm } from 'react-hook-form'
import { useFormState } from '@/contexts/FormContext'

const FirstStep = ({handleChange}) => {

    const { onHandleNext, setFormData, step,formData } = useFormState();
    const { register, handleSubmit, formState: { errors } } = useForm({
        // defaultValues: formData,
    });

    const onHandleFormSubmit = (data) => {
        setFormData((prev) => ({ ...prev, ...data }));
        onHandleNext();
        console.log('step change', step);
    };

  return (
    <>
        <form action="" onSubmit={handleSubmit(onHandleFormSubmit)}>
            <div className="step-inner">
                <div className="row">
                    <div className="col-12">
                        <h3 className="sec-head sm text-center">
                        What type of event are you looking to host?
                        </h3>
                    </div>
                </div>
                <div className="row mt-4 row-gap-20">
                    <div className="col-12">
                    {errors.eventType && (
                        <div className="error-message">{errors.eventType.message}</div>
                    )}
                    </div>
                    <div className="col-lg-4 col-12">
                        <div className="cus-check">
                            <input type="radio" value="Venue" {...register('eventType', { required: 'Please select an event type' })}   id="e1" />
                            <label htmlFor="e1">
                                <div className="ic">
                                    <Image src={e1} alt="" />
                                </div>
                                <span>Venue</span>
                            </label>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12">
                        <div className="cus-check">
                            <input type="radio" value="Planner" name="party type" {...register('eventType', { required: 'Please select an event type' })}  id="e2" />
                            <label htmlFor="e2">
                                <div className="ic">
                                    <Image src={e2} alt="" />
                                </div>
                                <span>Planner</span>
                            </label>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12">
                        <div className="cus-check">
                            <input type="radio" value="Photographer / Videographer" name="party type" {...register('eventType', { required: 'Please select an event type' })}  id="e3" />
                            <label htmlFor="e3">
                                <div className="ic">
                                    <Image src={e3} alt="" />
                                </div>
                                <span>Photographer / Videographer</span>
                            </label>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12">
                        <div className="cus-check">
                            <input type="radio" value="Artist / Band / DJ" name="party type" {...register('eventType', { required: 'Please select an event type' })}  id="e4" />
                            <label htmlFor="e4">
                                <div className="ic">
                                    <Image src={e4} alt="" />
                                </div>
                                <span>Artist / Band / DJ</span>
                            </label>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12">
                        <div className="cus-check">
                            <input type="radio" value="Chef / Caterer" name="party type" {...register('eventType', { required: 'Please select an event type' })}  id="e5" />
                            <label htmlFor="e5">
                                <div className="ic">
                                    <Image src={e5} alt="" />
                                </div>
                                <span>Chef / Caterer</span>
                            </label>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12">
                        <div className="cus-check">
                            <input type="radio" value="Others" name="party type" {...register('eventType', { required: 'Please select an event type' })}  id="e6" />
                            <label htmlFor="e6">
                                <div className="ic">
                                    <Image src={e6} alt="" />
                                </div>
                                <span>Others</span>
                            </label>
                        </div>
                    </div>
                    
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="d-flex mt-5 justify-content-center gap-2">
                            <button type="button" className="main-btn prev" onClick={()=>handleChange(null)}>
                                <span>Previous</span>
                            </button>
                            <button className="main-btn">
                                <span>Continue</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </>
  )
}

export default FirstStep