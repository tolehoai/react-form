import React from "react";
import PropTypes from "prop-types";
import { FormGroup, InputGroup, Label, Col, Row, Input } from "reactstrap";
import Select from "react-select";

SelectField.propTypes = {
  field: PropTypes.object,
  form: PropTypes.object,

  label: PropTypes.string,
  placeholder: PropTypes.string,
  option: PropTypes.array,
};

SelectField.defaultProps = {
  type: "text",
  label: "",
  placeholder: "",
  option: [],
};

function SelectField(props) {
  const { placeholder, type, field, form, label, options } = props;
  const { name, value } = field;
  //   console.log("Field:", field);
  //   console.log(options);
  //   console.log(value);
  const selected = options.find((option) => option.value === value);
  console.log(selected);
  const handleSelectedOptionChange = (selectedOption) => {
    // console.log("Selected option", selectedOption.value);
    // console.log(field);
    // const changeEvent = {
    //   target: {
    //     job: "abc",
    //     value: "abc",
    //   },
    // };
    // field.onChange(selectedOption);
    // console.log(options);
    // console.log("Field name: ", field.name);
    // console.log("Option value: ", selectedOption.value);
    form.setFieldValue(field.name, selectedOption.value);
  };
  return (
    <div>
      <FormGroup row>
        <Label sm={2}>{label}</Label>
        <Col sm={10}>
          <Select
            // type={type}
            id={name}
            options={options}
            {...field}
            value={selected}
            onChange={handleSelectedOptionChange}
            // onChange={(options: Option) =>
            //   form.setFieldValue(field.name, options.value)
            // }
            // placeholder={placeholder}
          />
        </Col>
      </FormGroup>
    </div>
  );
}

export default SelectField;
