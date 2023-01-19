import {
  EditFilled,
  EditOutlined,
  EditTwoTone,
  SaveOutlined,
} from "@ant-design/icons";
import { Card, Col, Input, Row } from "antd";
import { getAuth } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { backgroundColor } from "../App";
import { users } from "../dbCollections";
import { getDocument, updateOrCreateDocument } from "../firebase/db";
import { somethingWentWrong } from "../toasterMessages";
import "./Dashboard.scss";
import { toaster } from "./toaster";
import congrats from "./../assets/congrats.svg";
import Loader from "./Loader";

function DashBoard(props) {
  const [formEditable, setformEditable] = useState(false);
  const [userEmail, ssetUserEmail] = useState(null);

  const [address, setAddress] = useState({});

  const [ addressSavedInDB, setAddressSavedInDB] = useState(null);

  const { org } = useParams();

  useEffect(() => {
    getAuth().onAuthStateChanged((data) => {
      ssetUserEmail(data.email);
    });
  }, []);

  const onInputChange = (e) => {
    setAddress({ ...address, [e.target.id]: e.target.value });
  };

  const updateAddressInDB = () => {
    updateOrCreateDocument(org, userEmail, {
      address: address,
      author: userEmail,
    })
      .then((res) => {
        toaster(1, "Address updated successfully");
        setformEditable(false);
        setAddressSavedInDB(true);
      })
      .catch((err) => {
        toaster(0, "somethingWentWrong");
      });
  };

  useEffect(() => {
    getAuth().onAuthStateChanged((data) => {
      if(!data){
        setAddressSavedInDB(false);
      } else {
        getDocument(org, data.email).then((res) => {
          console.log(res);
          if (
              res._document?.data.value.mapValue.fields?.address
          ) {
            setAddressSavedInDB(true);
          } else {
            setAddressSavedInDB(false);
          }
        }).catch(()=>{
          setAddressSavedInDB(false);
        });
      }
    });
  }, []);

  return (
  addressSavedInDB == null ? <Loader /> :
  addressSavedInDB == true ? (
    <Row>
      <Col
      xs={{ span: 0 }} md={{ span: 24 }}
        style={{
          marginTop: "10vw",
        }}
      > 
        
        <img style={{ width: "150px" }} src={congrats} />
        <br/>
        <br/>
        <span style={{color: backgroundColor}}>
        <h1 style={{fontWeight: '400'}}>
            Thank you!
        </h1>
        <h3 style={{fontWeight: '400', color: 'white'}}>

        We will reach out for the gift delivery to you closer to your birthday, cheers!

        </h3>
        </span>
      </Col>
      <Col
        xs={{ span: 24 }}
        md={{ span: 0 }}
        style={{
          marginTop: "30vw",
        }}
      >
        <img style={{ width: "120px" }} src={congrats} />
        <br/>
        <br/>
        <span style={{color: backgroundColor}}>
        <h2 style={{fontWeight: '400'}}>
            Thank you!
        </h2>
        <h4 style={{fontWeight: '400', color: 'white'}}>

        We will reach out for the gift delivery to you closer to your birthday, cheers!
        </h4>
        </span>
      </Col>
    </Row>
  ) : (
    <Row id="dboard">
      {/* if you make any change, do not forget to update it in the mobile section col below */}
      <Col xs={{ span: 0 }} md={{ span: 24 }}>
        <div className="form-group">
          <h1
            align="left"
            style={{ color: backgroundColor, fontWeight: "400" }}
          >
            Gift Delivery Address &nbsp;&nbsp;{" "}
            {formEditable ? (
              <>
                {" "}
                <span
                  onClick={() => {
                    if (address.contactNumber.length != 10) {
                      toaster(0, "Contact number invalid");
                    } else {
                      updateAddressInDB();
                    }
                  }}
                  style={{
                    padding: "5px 10px",
                    border: "1px solid " + backgroundColor,
                    borderRadius: "7px",
                    fontWeight: "300",
                    fontSize: "16px",
                    cursor: "pointer",
                  }}
                >
                  Save
                </span>
              </>
            ) : null}
            <br />
            <span
              style={{
                color: backgroundColor,
                fontSize: "15px",
                fontWeight: "300",
              }}
            >
              Your gift will be devlivered here
            </span>
          </h1>

          <input
            onChange={onInputChange}
            onClick={() => {
              setformEditable(true);
            }}
            className="form-control"
            id="street"
            placeholder="House Number and Street"
          />
          <input
            onChange={onInputChange}
            onClick={() => {
              setformEditable(true);
            }}
            className="form-control"
            id="city"
            placeholder="City"
          />
          <input
            onChange={onInputChange}
            onClick={() => {
              setformEditable(true);
            }}
            className="form-control"
            id="state"
            placeholder="State"
          />
          <input
            onChange={onInputChange}
            onClick={() => {
              setformEditable(true);
            }}
            className="form-control"
            id="zip"
            placeholder="Zip"
          />
          <input
            onChange={onInputChange}
            onClick={() => {
              setformEditable(true);
            }}
            className="form-control"
            id="country"
            placeholder="Country"
          />
          <input
            onChange={onInputChange}
            onClick={() => {
              setformEditable(true);
            }}
            className="form-control"
            id="contactNumber"
            placeholder="Contact number"
          />
        </div>
      </Col>

      <Col xs={{ span: 24 }} md={{ span: 0 }}>
        <div className="form-group-mobile">
          <h1
            align="left"
            style={{ color: backgroundColor, fontWeight: "400" }}
          >
            Gift Delivery Address &nbsp;&nbsp;{" "}
            {formEditable ? (
              <>
                {" "}
                <span
                  onClick={() => {
                    if (address.contactNumber.length != 10) {
                      toaster(0, "Contact number invalid");
                    } else {
                      updateAddressInDB();
                    }
                  }}
                  style={{
                    padding: "5px 10px",
                    border: "1px solid " + backgroundColor,
                    borderRadius: "7px",
                    fontWeight: "300",
                    fontSize: "16px",
                    cursor: "pointer",
                  }}
                >
                  Save
                </span>
              </>
            ) : null}
            <br />
            <span
              style={{
                color: backgroundColor,
                fontSize: "15px",
                fontWeight: "300",
              }}
            >
              Your gift will be devlivered here
            </span>
          </h1>

          <input
            onChange={onInputChange}
            onClick={() => {
              setformEditable(true);
            }}
            type="street"
            className="form-control"
            id="street"
            placeholder="House Number and Street"
          />
          <input
            onChange={onInputChange}
            onClick={() => {
              setformEditable(true);
            }}
            type="city"
            className="form-control"
            id="city"
            placeholder="City"
          />
          <input
            onChange={onInputChange}
            onClick={() => {
              setformEditable(true);
            }}
            type="state"
            className="form-control"
            id="state"
            placeholder="State"
          />
          <input
            onChange={onInputChange}
            onClick={() => {
              setformEditable(true);
            }}
            type="zip"
            className="form-control"
            id="zip"
            placeholder="Zip"
          />
          <input
            onChange={onInputChange}
            onClick={() => {
              setformEditable(true);
            }}
            type="country"
            className="form-control"
            id="country"
            placeholder="Country"
          />
          <>
            {" "}
            <input
              onChange={onInputChange}
              onClick={() => {
                setformEditable(true);
              }}
              type="contactNumber"
              className="form-control"
              id="contactNumber"
              placeholder="Contact number (10 digits)"
            />
          </>
        </div>
      </Col>
    </Row>
)  );
}

export default DashBoard;
