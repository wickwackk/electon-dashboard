import { Button, Form, Modal } from "react-bootstrap";

export default function AddCategory({ cateModalShow, setCateModalShow }) {
  return (
    <Modal show={cateModalShow} onHide={() => setCateModalShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Add category</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="d-flex justify-content-between gap-4">
            <div className="w-50">
              <Form.Label>Name</Form.Label>
              <Form.Control
                name="name"
                type="text"
                placeholder="Product name"
              />
            </div>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
