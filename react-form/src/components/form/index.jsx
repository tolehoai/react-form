import CustomField from "components/CustomField";
import PictureField from "components/PictureField";
import SelectField from "components/SelectField";
import { Formik, Form, FastField } from "formik";
import React from "react";
import { Button, Col, FormGroup, Input, Label } from "reactstrap";

Form1.propTypes = {};

function Form1(props) {
  const options = [
    { value: "dev", label: "Developer" },
    { value: "designer", label: "Designer" },
    { value: "tester", label: "Tester" },
  ];

  return (
    <div>
      <Formik
        initialValues={{ firstname: "", job: null, picture: null }}
        onSubmit={(values, actions) => {
          alert(JSON.stringify(values, null, 2));
          console.log(values);
        }}
      >
        {(formikProps) => {
          //do here
          const { values, errors, touched } = formikProps;
          // console.log({ values, errors, touched });

          return (
            <Form>
              <FastField
                name="firstname"
                component={CustomField}
                label="Firstname"
                placeholder="Input firstname macos"
              />
              <FastField
                name="job"
                component={SelectField}
                label="Job"
                placeholder="Input firstname"
                options={options}
              />
              <FastField
                name="picture"
                component={PictureField}
                label="Picture here abc
              />
              <FormGroup check row>
                <Col sm={{ size: 10, offset: 2 }}>
                  <Button color="success" type="submit">
                    Sign up
                  </Button>{" "}
                </Col>
              </FormGroup>{" "}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default Form1;
