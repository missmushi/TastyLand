import React from "react";
import fire from "../fire" ;
import { useState, useEffect } from 'react'
import { Button, Modal } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { format } from 'date-fns'
import { BsTrash, BsPencil } from "react-icons/bs";
import { useForm } from "react-hook-form"
import { useCollectionData } from 'react-firebase-hooks/firestore';
import 'firebase/firestore'
import firebase from 'firebase/app'
const firestore = firebase.firestore()

const Admin = ({handleLogout})  => {
    const { register, handleSubmit } = useForm()
    const [showForm, setShowForm] = useState(false)
    const [records, setRecords] = useState([])
    const [total, setTotal] = useState(0)
    const [editMode, setEditMode] = useState(false)
    const [tempData, setTempData] = useState({
        id: null,
        name: '',
        email: '',
        phone: '',
        time: '',
        people: 0,
        date: new Date()

    })

    // Firebase stuff
    const bookingRef = firestore.collection('booking');
    const query = bookingRef.orderBy('date', 'asc').limitToLast(100);
    const [data] = useCollectionData(query, { idField: 'id' });


    console.log("REACT_APP_PROJECT_ID", process.env.REACT_APP_PROJECT_ID)

    // Handle Add Form submit
    const onSubmit = async (data) => {
        console.log('data bata', data)
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

        if (editMode) {
            // Update record
            console.log("UPDATING!!!!", data.id, data)
            await bookingRef.doc(data.id)
                .set(preparedData)
                .then(() => console.log("bookingRef has been set"))
                .catch((error) => {
                    console.error("Error: ", error);
                    alert(error)
                });
        } else {
            // Add to firebase
            // This is asynchronous operation, 
            // JS will continue process later, so we can set "callback" function
            // so the callback functions will be called when firebase finishes.
            // Usually, the function is called "then / error / catch".
            await bookingRef
                .add(preparedData)
                .then(() => console.log("New record has been added."))
                .catch((error) => {
                    console.error("Error:", error)
                    alert(error)
                })
            // setShowForm(false)
        }
        handleCloseForm()
    }

    // This will be run when 'data' is changed.
    useEffect(() => {
        if (data) { // Guard condition
            let t = 0
            let r = data.map((d, i) => {
                // console.log('useEffect', format(d.createdAt.toDate(), "yyyy-MM-dd"))
                t += 1
                return (
                    <AdminRow
                        data={d}
                        i={i}
                        onDeleteClick={handleDeleteClick}
                        onEditClick={handleEditClick}
                    />
                )
            })

            setRecords(r)
            setTotal(t)
        }
    },
        [data])


    // Handlers for Modal Add Form
    const handleshowForm = () => setShowForm(true)

    // Handlers for Modal Add Form
    const handleCloseForm = () => {
        setTempData({
            id: null,
            name: '',
            email: '',
            phone: '',
            time: '',
            people: 0,
            date: new Date()

        })
        setShowForm(false)
        setEditMode(false)
    }



    const handleDeleteClick = (id) => {
        console.log('handleDeleteClick in Admin', id)
        if (window.confirm("Are you sure to delete this record?"))
            bookingRef.doc(id).delete()
    }

    const handleEditClick = (data) => {
        console.log("data dikhana", data)
        let preparedData = {
            id: data.id,
            name: data.name,
            email: data.email,
            phone: data.phone,
            time: data.time,
            people: parseFloat(data.people),
            date: data.date.toDate()
        }
        console.log("handleEditClick", preparedData)
        // expect original data type for data.createdAt is Firebase's timestamp
        // convert to JS Date object and put it to the same field
        // if ('toDate' in data.createdAt) // guard, check wther toDate() is available in createdAt object.
        //   data.createdAt = data.createdAt.toDate()

        setTempData(preparedData)
        setShowForm(true)
        setEditMode(true)
    }

    return(
        <section className="Admin">
            
            <Container>
            <Row>
                <Col>
                    <h1>Booking Management</h1>
                </Col>

            </Row>

            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Customer Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th># of people</th>
                        <th>Delete Record</th>
                        <th>Edit Record</th>

                    </tr>
                </thead>
                <tbody>
                    {records}
                </tbody>
                <tfooter>
                    <td colSpan={5}>
                        <h2>Total Booking: {total}</h2>
                    </td>
                </tfooter>
            </Table>


            <Modal
                show={showForm} onHide={handleCloseForm}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type="hidden"
                        placeholder="ID"
                        ref={register({ required: false })}
                        name="id"
                        id="id"
                        defaultValue={tempData.id}
                    />
                    <Modal.Header closeButton>
                        <Modal.Title class="text-dark">
                            {editMode ? "Edit Record" : "Add New Record"}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col>
                                <label htmlFor="date" class="text-dark">Date</label>
                            </Col>
                            <Col>
                                <input
                                    type="date"
                                    placeholder="Date"
                                    ref={register({ required: true })}
                                    name="date"
                                    id="date"
                                    defaultValue={format(tempData.date, "yyyy-MM-dd")}
                                />

                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <label htmlFor="time" class="text-dark">Time</label>
                            </Col>
                            <Col>
                                <input
                                    type="time"
                                    placeholder="time"
                                    ref={register({ required: true })}
                                    name="time"
                                    id="time"
                                    defaultValue={tempData.time}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <label htmlFor="name" class="text-dark">Name</label>
                            </Col>
                            <Col>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    ref={register({ required: true })}
                                    name="name"
                                    id="name"
                                    defaultValue={tempData.name}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <label htmlFor="email" class="text-dark">Email</label>
                            </Col>
                            <Col>
                                <input
                                    type="text"
                                    placeholder="Email"
                                    ref={register({ required: true })}
                                    name="email"
                                    id="email"
                                    defaultValue={tempData.email}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <label htmlFor="phone" class="text-dark">Phone</label>
                            </Col>
                            <Col>
                                <input
                                    type="text"
                                    placeholder="Phone"
                                    ref={register({ required: true })}
                                    name="phone"
                                    id="phone"
                                    defaultValue={tempData.phone}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <label htmlFor="people" class="text-dark"># of people</label>
                            </Col>
                            <Col>
                                <input
                                    type="number"
                                    step="any"
                                    min="0"
                                    placeholder="# of people"
                                    ref={register({ required: true })}
                                    name="people"
                                    id="people"
                                    defaultValue={tempData.people}
                                />
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseForm}>
                            Close
          </Button>
                        <Button variant={editMode ? "warning" : "info"} type="submit">
                            {editMode ? "Save Record" : "Add Record"}
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </Container>
        </section>
    )
}

function AdminRow(props) {
    let d = props.data
    let i = props.i
    // console.log("JournalRow", d)
    return (
        <tr>
            <td>{d.name}</td>
            <td>{d.email}</td>
            <td>{d.phone}</td>
            <td>{format(d.date.toDate(), "yyyy-MM-dd")}</td>
            <td>{d.time}</td>
            <td>{d.people}</td>
            <td>
                <BsTrash onClick={() => props.onDeleteClick(d.id)} />
            </td>
            <td>
                <BsPencil onClick={() => props.onEditClick(d)} />
            </td>

        </tr>

    )
}


export default Admin;