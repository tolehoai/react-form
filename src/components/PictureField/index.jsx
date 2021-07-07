import React from "react";
import PropTypes from "prop-types";
import {
  FormGroup,
  InputGroup,
  Label,
  Col,
  Row,
  Input,
  Button,
} from "reactstrap";
import Select from "react-select";

PictureField.propTypes = {
  field: PropTypes.object,
  form: PropTypes.object,

  label: PropTypes.string,
  placeholder: PropTypes.string,
};

PictureField.defaultProps = {
  label: "",
  placeholder: "",
};

function PictureField(props) {
  const { placeholder, type, field, form, label, picture } = props;
  const { name, value } = field;

  const handleSelectedOptionChange = (selectedOption) => {
    form.setFieldValue(field.name, selectedOption.value);
  };

  const randomURL = () => {
    const randomID = Math.trunc(Math.random() * 2000);
    return `https://picsum.photos/id/${randomID}/300/300.jpg`;
  };

  const handleClickRandom = async () => {
    // console.log(randomURL());
    console.log(field.name);
    form.setFieldValue(field.name, randomURL());
    console.log(field.value);
  };

  return (
    <div>
      <FormGroup row>
        <Label sm={2}>{label}</Label>
        <Col sm={10}>
          <Button
            color="primary"
            type="submit"
            {...field}
            onClick={handleClickRandom}
          >
            Random Picture
          </Button>{" "}
        </Col>
        <Col>
          <img src={field.value} alt="abc" />
        </Col>
      </FormGroup>
    </div>
  );
}

export default PictureField;
