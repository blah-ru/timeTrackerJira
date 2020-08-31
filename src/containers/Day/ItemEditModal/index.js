import React from "react";
import {Button, Form, Modal, Row, Col} from "react-bootstrap";
import {getDatePresentation} from "~/api/helpers/dateTime";

export default function ItemEditModal(props){
    const editTicket = (event)=>props.changeTrackEdit('ticket', event.target.value)
    const editEpic = (event)=>props.changeTrackEdit('epic', event.target.value)
    const editComment = (event)=>props.changeTrackEdit('comment', event.target.value)
    const editSavedJira = (event)=>props.changeTrackEdit('savedJira', event.target.checked)
    const editSavedUTZ = (event)=>props.changeTrackEdit('savedUTZ', event.target.checked)

    return (
        <Modal show={props.showPopup} onHide={props.closePopup}>
            <Modal.Header closeButton>
                <Modal.Title>
                    { getDatePresentation(props.trackEdit.date) }
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formTicket"  as={Row} >
                        <Form.Label column sm="2">
                            Ticket
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control
                                type="text"
                                value={props.trackEdit.ticket}
                                onChange={editTicket}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group controlId="formEpic"  as={Row} >
                        <Form.Label column sm="2">
                            Epic
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control
                                type="text"
                                value={props.trackEdit.epic}
                                onChange={editEpic}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group controlId="formComment"  as={Row} >
                        <Form.Label column sm="2">
                            Epic
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control
                                as="textarea" rows="3"
                                value={props.trackEdit.comment}
                                onChange={editComment}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group controlId="formSavedJira" >
                        <Form.Check
                            inline
                            label="Сохранено в Jira"
                            type="checkbox"
                            id="inline-checkbox-jira"
                            checked={props.trackEdit.savedJira}
                            onChange={editSavedJira}
                        />
                    </Form.Group>
                    <Form.Group controlId="formSavedUTZ" >
                        <Form.Check
                            inline
                            label="Сохранено в УТЗ"
                            type="checkbox"
                            id="inline-checkbox-UTZ"
                            checked={props.trackEdit.savedUTZ}
                            onChange={editSavedUTZ}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={props.saveTrackEdit}>
                    Save
                </Button>
                <Button variant="secondary" onClick={props.closePopup}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}