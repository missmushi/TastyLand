import React from "react";  
import fire from "../fire";
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
import firebase from 'firebase/app'
import 'firebase/firestore'

const firestore = firebase.firestore()

const Staff = () => {
    const { register, handleSubmit } = useForm()
    const [showForm, setShowForm] = useState(false)
    const [records, setRecords] = useState([])
    const [total, setTotal] = useState(0)
    const [editMode, setEditMode] = useState(false)
    const [tempData, setTempData] = useState({
        id: null,
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        gender: '',
        position: '',
        hire_date: new Date(),
        birth_date: new Date()

    })

    // Firebase stuff
    const staffRef = firestore.collection('staff');
    const query = staffRef.orderBy('position', 'asc').limitToLast(100);
    const [data] = useCollectionData(query, { idField: 'id' });


    console.log("REACT_APP_PROJECT_ID", process.env.REACT_APP_PROJECT_ID)

    // Handle Add Form submit
    const onSubmit = async (data) => {
        console.log('data bata', data)
        let preparedData = {
            // ...data,
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            phone: data.phone,
            gender: data.gender,
            position: data.position,
            hire_date: new Date(data.hire_date),
            birth_date: new Date(data.birth_date)

        }
        console.log('onSubmit', preparedData)

        if (editMode) {
            // Update record
            console.log("UPDATING!!!!", data.id, data)
            await staffRef.doc(data.id)
                .set(preparedData)
                .then(() => console.log("staffRef has been set"))
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
            await staffRef
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
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
            gender: '',
            position: '',
            hire_date: new Date(),
            birth_date: new Date()

        })
        setShowForm(false)
        setEditMode(false)
    }



    const handleDeleteClick = (id) => {
        console.log('handleDeleteClick in Admin', id)
        if (window.confirm("Are you sure to delete this record?"))
            staffRef.doc(id).delete()
    }

    const handleEditClick = (data) => {
        console.log("data dikhana", data)
        let preparedData = {
            id: data.id,
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            phone: data.phone,
            gender: data.gender,
            position: data.position,
            hire_date: data.hire_date.toDate(),
            birth_date: data.birth_date.toDate()
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

    return (
        <Container>
        <Row>
            <Col>
                <h1>Staff Management</h1>
                <Button variant="dark" onClick={handleshowForm}>
                    <BsPlus /> Add
  </Button>
            </Col>

        </Row>

        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Gender</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Birth Date</th>
                    <th>Hire Date</th>
                    <th>Position</th>
                    <th>Delete Record</th>
                    <th>Edit Record</th>

                </tr>
            </thead>
            <tbody>
                {records}
            </tbody>
            <tfooter>
                <td colSpan={5}>
                    <h2>Total Staff: {total}</h2>
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
                            <label htmlFor="hire_date" class="text-dark">Hire Date</label>
                        </Col>
                        <Col>
                            <input
                                type="date"
                                placeholder="Hire Date"
                                ref={register({ required: true })}
                                name="hire_date"
                                id="hire_date"
                                defaultValue={format(tempData.hire_date, "yyyy-MM-dd")}
                            />

                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <label htmlFor="birth_date" class="text-dark">Birth Date</label>
                        </Col>
                        <Col>
                            <input
                                type="date"
                                placeholder="Birth Date"
                                ref={register({ required: true })}
                                name="birth_date"
                                id="birth_date"
                                defaultValue={format(tempData.birth_date, "yyyy-MM-dd")}
                            />

                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <label htmlFor="first_name" class="text-dark">First Name</label>
                        </Col>
                        <Col>
                            <input
                                type="text"
                                placeholder="First Name"
                                ref={register({ required: true })}
                                name="first_name"
                                id="first_name"
                                defaultValue={tempData.first_name}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <label htmlFor="last_name" class="text-dark">Last Name</label>
                        </Col>
                        <Col>
                            <input
                                type="text"
                                placeholder="Last Name"
                                ref={register({ required: true })}
                                name="last_name"
                                id="last_name"
                                defaultValue={tempData.last_name}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <label htmlFor="gender" class="text-dark">Gender</label>
                        </Col>
                        <Col>
                            <input
                                type="text"
                                placeholder="Gender"
                                ref={register({ required: true })}
                                name="gender"
                                id="gender"
                                defaultValue={tempData.gender}
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
                            <label htmlFor="position" class="text-dark">Position</label>
                        </Col>
                        <Col>
                            <input
                                type="text"
                                placeholder="Position"
                                ref={register({ required: true })}
                                name="position"
                                id="position"
                                defaultValue={tempData.position}
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
    )
}
function AdminRow(props) {
    let d = props.data
    let i = props.i
    // console.log("JournalRow", d)
    return (
        <tr>
            <td>{d.first_name}</td>
            <td>{d.last_name}</td>
            <td>{d.gender}</td>
            <td>{d.phone}</td>
            <td>{d.email}</td>
            <td>{format(d.birth_date.toDate(), "yyyy-MM-dd")}</td>
            <td>{format(d.hire_date.toDate(), "yyyy-MM-dd")}</td>
            <td>{d.position}</td>
            <td>
                <BsTrash onClick={() => props.onDeleteClick(d.id)} />
            </td>
            <td>
                <BsPencil onClick={() => props.onEditClick(d)} />
            </td>

        </tr>

    )
}
export default Staff;
