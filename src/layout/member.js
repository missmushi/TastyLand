import React from "react";
import fire from "../fire" ;
import { useState, useEffect } from 'react'
import { Button, Modal } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { format } from 'date-fns'
import { BsPlus, BsTrash, BsPencil } from "react-icons/bs";
import { useForm } from "react-hook-form"
import { useCollectionData } from 'react-firebase-hooks/firestore';
import 'firebase/firestore'
import firebase from 'firebase/app'
const firestore = firebase.firestore()

const Member = ({handleLogout})  => {
    const { register, handleSubmit } = useForm()
    const [showForm, setShowForm] = useState(false)
    const [records, setRecords] = useState([])
    const [total, setTotal] = useState(0)
    const [editMode, setEditMode] = useState(false)
    const [tempData, setTempData] = useState({
        id: null,
        name: '',
        address: '',
        email: '',
        phone: '',
        createdAt: new Date(),
        expiredAt: new Date()

    })

    // Firebase stuff
    const memberRef = firestore.collection('member');
    const query = memberRef.orderBy('createdAt', 'asc').limitToLast(100);
    const [data] = useCollectionData(query, { idField: 'id' });


    console.log("REACT_APP_PROJECT_ID", process.env.REACT_APP_PROJECT_ID)

    // Handle Add Form submit
    const onSubmit = async (data) => {
        console.log('data bata', data)
        let preparedData = {
            // ...data,
            name: data.name,
            address: data.address,
            email: data.email,
            phone: data.phone,
            createdAt: new Date(data.createdAt),
            expiredAt: new Date(data.expiredAt)

        }
        console.log('onSubmit', preparedData)

        if (editMode) {
            // Update record
            console.log("UPDATING!!!!", data.id, data)
            await memberRef.doc(data.id)
                .set(preparedData)
                .then(() => console.log("memberRef has been set"))
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
            await memberRef
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
            address: '',
            email: '',
            phone: '',
            createdAt: new Date(),
            expiredAt: new Date()


        })
        setShowForm(false)
        setEditMode(false)
    }



    const handleDeleteClick = (id) => {
        console.log('handleDeleteClick in Admin', id)
        if (window.confirm("Are you sure to delete this record?"))
            memberRef.doc(id).delete()
    }

    const handleEditClick = (data) => {
        console.log("data dikhana", data)
        let preparedData = {
            id: data.id,
            name: data.name,
            address: data.address,
            email: data.email,
            phone: data.phone,
            createdAt: data.createdAt.toDate(),
            expiredAt: data.expiredAt.toDate()
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
                    <h1>Customer Membership Management</h1>
                    <Button variant="dark" onClick={handleshowForm}>
                        <BsPlus /> Add
      </Button>
                </Col>

            </Row>

            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th >Created Date</th>
                        <th >Expire Date</th>
                        <th>Address</th>
                        <th>Delete Record</th>
                        <th>Edit Record</th>

                    </tr>
                </thead>
                <tbody>
                    {records}
                </tbody>
                <tfooter>
                    <td colSpan={5}>
                        <h2>Total Member: {total}</h2>
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
                                <label htmlFor="createdAt" class="text-dark">Created Date</label>
                            </Col>
                            <Col>
                                <input
                                    type="date"
                                    placeholder="Created Date"
                                    ref={register({ required: true })}
                                    name="createdAt"
                                    id="createdAt"
                                    defaultValue={format(tempData.createdAt, "yyyy-MM-dd")}
                                />

                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <label htmlFor="expiredAt" class="text-dark">Expire Date</label>
                            </Col>
                            <Col>
                                <input
                                    type="date"
                                    placeholder="Expire Date"
                                    ref={register({ required: true })}
                                    name="expiredAt"
                                    id="expiredAt"
                                    defaultValue={format(tempData.expiredAt, "yyyy-MM-dd")}
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
                                <label htmlFor="address" class="text-dark">Address</label>
                            </Col>
                            <Col>
                                <input
                                    type="text"
                                    placeholder="Address"
                                    ref={register({ required: true })}
                                    name="address"
                                    id="address"
                                    defaultValue={tempData.address}
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
                <nav>
        <br />
            <div class="text-center">  
                <button onClick={handleLogout}>Logout</button>
            </div> 
            </nav>
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
            <td>{d.phone}</td>
            <td>{d.email}</td>
            <td>{format(d.createdAt.toDate(), "yyyy-MM-dd")}</td>
            <td>{format(d.expiredAt.toDate(), "yyyy-MM-dd")}</td>
            <td>{d.address}</td>
            <td>
                <BsTrash onClick={() => props.onDeleteClick(d.id)} />
            </td>
            <td>
                <BsPencil onClick={() => props.onEditClick(d)} />
            </td>

        </tr>

    )
}

export default Member;