import React from "react";
import PropTypes from "prop-types";
import { FormGroup, InputGroup, Label, Col, Row, Input } from "reactstrap";

CustomField.propTypes = {
  field: PropTypes.object,
  form: PropTypes.object,

  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

CustomField.defaultProps = {
  type: "text",
  label: "",
  placeholder: "",
};

function CustomField(props) {
  const { placeholder, type, field, form, label } = props;
  const { name } = field;
  console.log(field);
  return (
    <div>
      <FormGroup row>
        <Label sm={2}>{label}</Label>
        <Col sm={10}>
          <Input
            type={type}
            id={name}
            {...field}
            placeholder={placeholder}
            autoComplete="off"
          />
        </Col>
      </FormGroup>
    </div>
  );
}

export default CustomField;
