'use client'
import React, {useState, useEffect} from 'react'
import Image from 'next/image'

import p1 from '../../assets/images/p1.svg'
import p2 from '../../assets/images/p2.svg'
import p3 from '../../assets/images/p3.svg'
import p4 from '../../assets/images/p4.svg'
import p5 from '../../assets/images/p5.svg'
import p6 from '../../assets/images/p6.svg'

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
                    {errors.event_type && (
                        <div className="error-message">{errors.event_type.message}</div>
                    )}
                    </div>
                    <div className="col-lg-4 col-12">
                        <div className="cus-check">
                            <input type="radio" value="Intimate Gatherings " {...register('event_type', { required: 'Please select an event type' })}   id="p1" />
                            <label htmlFor="p1">
                                <div className="ic">
                                    <Image src={p1} alt="" />
                                </div>
                                <span>Intimate Gatherings </span>
                            </label>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12">
                        <div className="cus-check">
                            <input type="radio" value="Special Occasions" name="party type" {...register('event_type', { required: 'Please select an event type' })}  id="p2" />
                            <label htmlFor="p2">
                                <div className="ic">
                                    <Image src={p2} alt="" />
                                </div>
                                <span>Special Occasions</span>
                            </label>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12">
                        <div className="cus-check">
                            <input type="radio" value="Live Festivals" name="party type" {...register('event_type', { required: 'Please select an event type' })}  id="p3" />
                            <label htmlFor="p3">
                                <div className="ic">
                                    <Image src={p3} alt="" />
                                </div>
                                <span>Live Festivals </span>
                            </label>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12">
                        <div className="cus-check">
                            <input type="radio" value="Wellness Retreats" name="party type" {...register('event_type', { required: 'Please select an event type' })}  id="p4" />
                            <label htmlFor="p4">
                                <div className="ic">
                                    <Image src={p4} alt="" />
                                </div>
                                <span>Wellness Retreats</span>
                            </label>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12">
                        <div className="cus-check">
                            <input type="radio" value="Weekend Excursions" name="party type" {...register('event_type', { required: 'Please select an event type' })}  id="p5" />
                            <label htmlFor="p5">
                                <div className="ic">
                                    <Image src={p5} alt="" />
                                </div>
                                <span>Weekend Excursions </span>
                            </label>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12">
                        <div className="cus-check">
                            <input type="radio" value="Secret Suppers" name="party type" {...register('event_type', { required: 'Please select an event type' })}  id="p6" />
                            <label htmlFor="p6">
                                <div className="ic">
                                    <Image src={p6} alt="" />
                                </div>
                                <span>Secret Suppers</span>
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