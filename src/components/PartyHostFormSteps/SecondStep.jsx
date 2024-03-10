'use client'
import React, {useState, useEffect} from 'react'
import Image from 'next/image'

import { Controller, useForm  } from 'react-hook-form'
import { useFormState } from '@/contexts/FormContext'
import DatePicker from 'react-datepicker';
import * as Yup from 'yup';
import "react-datepicker/dist/react-datepicker.css";

const SecondStep = () => {

    const { onHandleNext,onHandleBack, setFormData, formData } = useFormState();

    const validationSchema = Yup.object().shape({
        selectedDate: Yup.date().required('Please select a date'),
      });
    const { control, register, handleSubmit, formState: { errors } } = useForm({
        // defaultValues: formData,
        // resolver: yupResolver(validationSchema),
    });

    const onHandleFormSubmit = (data) => {
        setFormData((prev) => ({ ...prev, ...data }));
        onHandleNext();
    };

  return (
    <>
        <form action="" onSubmit={handleSubmit(onHandleFormSubmit)}>
            <div className="step-inner">
                <div className="row">
                    <div className="col-12">
                        <h3 className="sec-head sm text-center">
                            When are you planning
                            the Event?                  
                        </h3>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-12">
                        <div className="form-group">
                            <label htmlFor="" className="label-text">Preferred  Date</label>
                            <Controller
                                control={control}
                                name='date-input'
                                {...register('preferredDate', { required: 'Please select an event type' })}
                                render={({ field }) => (
                                <DatePicker
                                    placeholderText='Select date'
                                    onChange={(date) => field.onChange(date)}
                                    selected={field.value}
                                />
                            )}
                            />
                            {errors.preferredDate && (
                                <div className="error-message">{errors.preferredDate.message}</div>
                            )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="label-text">Venue for the Event</label>
                            <div className="inp-grp">
                                <input type="text" {...register('venue', { required: 'Please select an event type' })} placeholder='Enter Location /  Venue Name' />
                            </div>
                            {errors.venue && (
                                <div className="error-message">{errors.venue.message}</div>
                            )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="label-text">Is this a ticketed Event?</label>
                            <div className="d-flex gap-2">
                                <div className="cap-check">
                                    <input type="radio" {...register('ticketedEvent', { required: 'Please select an event type' })} name="ticketedEvent" value="yes" id="yes" />
                                    <label htmlFor="yes">
                                        <span>YES</span>
                                    </label>
                                </div>
                                <div className="cap-check">
                                    <input type="radio" {...register('ticketedEvent', { required: 'Please select an event type' })} name='ticketedEvent' value="no" id="no" />
                                    <label htmlFor="no">
                                        <span>NO</span>
                                    </label>
                                </div>
                            </div>
                            {errors.ticketedEvent && (
                                <div className="error-message">{errors.ticketedEvent.message}</div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="d-flex mt-5 justify-content-center gap-2">
                            <button type="button" className="main-btn prev" onClick={onHandleBack}>
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

export default SecondStep