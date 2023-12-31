import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import BasicExample from "./BasicExample.jsx"
import "../style/crearmesa.css"

function CrearMesa() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <Button className='button' onClick={handleShow}>
            Crear Mesa
        </Button>

        <Offcanvas className="bodyOffcanvas" show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title className='tituloOffcanvas'>Creando mesa</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className='p'>
                <BasicExample />
            </Offcanvas.Body>
        </Offcanvas>
        </>
    );
}

export default CrearMesa;