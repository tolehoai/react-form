import { Formik } from 'formik';
import React from 'react';
import { Button, CardImg, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';

InputForm.propTypes = {
    
};

function InputForm(props) {
    return (
        <div>
            <h2>Form</h2>
            <Container>
                <Row>
                    <Col xs="6">
                        <Formik
                        
                            initialValues={{
                                firstname: '',
                                lastname: '',
                                password: '',
                                repassword: '',
                            }}
                            onSubmit={(values)=>{
                                console.log(values);
                            }}
                        >
                            {(
                                {
                                    values,
                                    errors,
                                    touched,
                                    handleChange,
                                    handleBlur,
                                    handleSubmit,
                                    isSubmitting,
                                }
                            )=>(
                                <Form onSubmit={handleSubmit}>
                                <FormGroup row>
                                    <Label sm={2}>Firstname</Label>
                                    <Col sm={10}>
                                     <Input type="text"
                                      name="firstname"
                                      id="firstname" 
                                      placeholder="Input firstname" 
                                      autoComplete="off"
                                      onChange = {handleChange}
                                      value={values.firstname}
                                       />   
                                    </Col>
                                </FormGroup>
    
    
                                <FormGroup row>
                                    <Label sm={2}>Lastname</Label>
                                    <Col sm={10}>
                                     <Input 
                                     type="text" 
                                     name="lastname" 
                                     id="lastname" 
                                     placeholder="Input lastname" 
                                     autoComplete="off"
                                     onChange = {handleChange}
                                      value={values.lastname}
                                      />   
                                    </Col>
                                </FormGroup>
    
                                <FormGroup row>
                                    <Label sm={2}>Password</Label>
                                    <Col sm={10}>
                                     <Input type="password"
                                      name="password" 
                                      id="password" 
                                      placeholder="Input password" 
                                      onChange = {handleChange}
                                      value={values.password}
                                     />   
                                    </Col>
                                </FormGroup>
    
                                <FormGroup row>
                                    <Label sm={2}>Repassword</Label>
                                    <Col sm={10}>
                                     <Input type="password" 
                                     name="repassword" 
                                     id="repassword" 
                                     placeholder="Input repassword" 
                                     onChange = {handleChange}
                                     value={values.repassword}
                                     />   
                                    </Col>
                                </FormGroup>

                                <FormGroup check row>
                                    <Col sm={{ size: 10, offset: 2 }}>
                                    <Button color="success" type="submit">Sign up</Button>{' '}
                                    </Col>
                                </FormGroup>
                            </Form>
                            )}
                        </Formik>
                    </Col>
                    <Col xs="6">
                    <CardImg top width="100%" src="https://pathwayport.com/saasland/images/login@4x.png" alt="Card image cap" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default InputForm;