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
import style from "../PictureField/style.css";

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
            type="button"
            {...field}
            onClick={handleClickRandom}
          >
            Random Picture
          </Button>{" "}
        </Col>
        <Col>
          <img
            src={
              field.value
                ? field.value
                : "https://scontent-sin6-2.xx.fbcdn.net/v/t1.6435-9/118597573_1538628569635553_2248402875902150998_n.jpg?_nc_cat=102&_nc_rgb565=1&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=FW9UGfCDfY0AX8cL41L&_nc_ht=scontent-sin6-2.xx&oh=40b053b8cea0e7fe127db7d0d0b1c59e&oe=60E9E868"
            }
            className="img"
            alt="Opps... hình này không có, bấm lại đi"
          />
        </Col>
      </FormGroup>
    </div>
  );
}

export default PictureField;
