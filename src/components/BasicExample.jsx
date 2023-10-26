import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import "../style/basicexample.css";

function BasicExample() {
    return (
        <Form className='form'>
                
            <FloatingLabel controlId="floatingInput" label="Nombre de la mesa" >
                <Form.Control className="formBorder" type="text" placeholder="Nombre de la mesa" />
            </FloatingLabel>

            <div>
                <Form.Select className="formBorder" aria-label="Default select example">
                    <option className='selectOption'>Método de votación</option>
                    <option value="1">Fibonacci ( 0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ?)</option>
                    <option value="2">Modified Fibonacci ( 0, ½, 1, 2, 3, 5, 8, 13, 20, 40, 100, ?)</option>
                    <option value="3">Powers of 2 ( 0, 1, 2, 4, 8, 16, 32, 64, ?)</option>
                    <option value="4">Dias ( 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ?)</option>
                    <option value="5">Horas ( 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, ?)</option>
                    <option value="6">Dificultad ( choritarea, izi, facil, medio, dificil, imposible, ?)</option>
                    <option value="7">Crear propio sistema de votación</option>
                </Form.Select>
            </div>

            <div>
                <Form.Select className="formBorder" aria-label="Default select example">
                    <option>Quien puede revelar los resultados??</option>
                    <option value="1">Yo, el good de la mesa</option>
                    <option value="2">Cualquiera ¬¬</option>
                </Form.Select>
            </div>

            <div>
                <Form.Select className="formBorder" aria-label="Default select example">
                    <option>Quien puede crear mas temas de votacion?</option>
                    <option value="1">Yo, el good de la mesa</option>
                    <option value="2">Cualquiera ¬¬</option>
                </Form.Select>
                <Form.Text className="text-muted">
                    Jugadores que tendran permitido crear, editar y borrar mas votacion en la barra lateral
                </Form.Text>
            </div>

            <div className='switchPart'>
                <Form.Group className="mb-3 formCheck" controlId="formGroupEmail">
                    <Form.Label>Auto revelación de las tarjetas</Form.Label>
                    <Form.Text className="text-muted">
                    Revelar los resultados despues de que todos hayan votado.
                    </Form.Text>
                </Form.Group>
                <Form.Check // prettier-ignore
                    type="switch"
                    id="custom-switch"
                />
            </div>

            <div className='switchPart'>
                <Form.Group className="mb-3 formCheck" controlId="formGroupEmail">
                    <Form.Label>Mostrar promedio en los resultados</Form.Label>
                    <Form.Text className="text-muted">
                    Incluir el promedio en los resultados de las votaciones.
                    </Form.Text>
                </Form.Group>
                <Form.Check // prettier-ignore
                    type="switch"
                    id="custom-switch"
                />
            </div>
            
            <Button className='button' type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default BasicExample;