import React from 'react';
import fire from "../fire";
import { Button, Modal } from 'react-bootstrap'
import { useForm } from "react-hook-form"
import { useState } from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore';
import 'firebase/firestore'
import firebase from 'firebase/app'

const firestore = firebase.firestore()

const Book = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const { register, handleSubmit } = useForm()
  const [tempData, setTempData] = useState({
    name: '',
    email: '',
    phone: '',
    time: '',
    people: '',
    date: new Date()

  })

  // Firebase stuff
  const bookingRef = firestore.collection('booking');
  const query = bookingRef.orderBy('date', 'asc').limitToLast(100);
  const [data] = useCollectionData(query, { idField: 'id' });

  // Handlers for Modal Add Form
  const handleClose = () => {
    setTempData({
      id: null,
      name: '',
      email: '',
      phone: '',
      time: '',
      people: '',
      date: new Date()

    })
    setShow(false);
  }

  // Handle Add Form submit
  const onSubmit = async (data) => {
    let preparedData = {
      // ...data,
      name: data.name,
      email: data.email,
      phone: data.phone,
      time: data.time,
      people: parseFloat(data.people),
      date: new Date(data.date)

    }
    console.log('onSubmit', preparedData)

    // Add to firebase
    // This is asynchronous operation, 
    // JS will continue process later, so we can set "callback" function
    // so the callback functions will be called when firebase finishes.
    // Usually, the function is called "then / error / catch".
    await bookingRef
      .add(preparedData)
      .then(() => console.log("New record has been added."))
      .catch((error) => {
        console.error("Errror:", error)
        alert(error)
      })
    handleShow();
  }


  return (

    <section id="book-a-table" class="book-a-table">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Reservation</h2>
          <p>Book a Table</p>
        </div>

        <form action="forms/book-a-table.php" method="post" role="form" class="php-email-form" data-aos="fade-up" data-aos-delay="100" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="hidden"
            placeholder="ID"
            ref={register({ required: false })}
            name="id"
            id="id"
            defaultValue={tempData.id}
          />
          <div class="row">
            <div class="col-lg-4 col-md-6 form-group">
              <input type="text" name="name" class="form-control" id="name" placeholder="Name & Surname" data-rule="minlen:4" data-msg="Please enter at least 4 chars" ref={register({ required: true })} defaultValue={tempData.name} />
              <div class="validate"></div>
            </div>
            <div class="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
              <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" ref={register({ required: true })} defaultValue={tempData.email} />
              <div class="validate"></div>
            </div>
            <div class="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
              <input type="text" class="form-control" name="phone" id="phone" placeholder="Your Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars" ref={register({ required: true })} defaultValue={tempData.phone} />
              <div class="validate"></div>
            </div>
            <div class="col-lg-4 col-md-6 form-group mt-3">
              <input type="text" name="date" class="form-control" id="date" placeholder="Date (yyyy-mm-dd)" data-rule="minlen:4" data-msg="Please enter at least 4 chars" ref={register({ required: true })} />
              <div class="validate"></div>
            </div>
            <div class="col-lg-4 col-md-6 form-group mt-3">
              <input type="text" class="form-control" name="time" id="time" placeholder="Time (24-hour clock)" data-rule="minlen:4" data-msg="Please enter at least 4 chars" ref={register({ required: true })} defaultValue={tempData.time} />
              <div class="validate"></div>
            </div>
            <div class="col-lg-4 col-md-6 form-group mt-3">
              <input type="number" class="form-control" name="people" id="people" placeholder="# of people" data-rule="minlen:1" data-msg="Please enter at least 1 chars" ref={register({ required: true })} defaultValue={tempData.people} />
              <div class="validate"></div>
            </div>
          </div>
          <br />
          <div class="text-center"><button type="submit">Book a Table</button></div>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title class="text-dark"><b>Your booking request was sent!</b></Modal.Title>
            </Modal.Header>
            <Modal.Body class="text-dark">
              <br />
              <div class="text-center"><p>We will call back or send an Email to confirm your reservation. Thank you!</p></div>
            </Modal.Body>
          </Modal>
        </form>
      </div>
    </section>

  )
}
export default Book;
