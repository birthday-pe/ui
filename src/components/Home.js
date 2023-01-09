import React, { useEffect, useState } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { users } from "../dbCollections";
import { db, getDocument, updateDocument } from "../firebase/db";
import DashBoard from "./DashBoard";
import { DatePicker } from "antd";

import style from "./Auth.module.scss";
import {
  LoadingOutlined,
  RightOutlined,
  WarningFilled,
} from "@ant-design/icons";
import Loader from "./Loader";
import { toaster } from "./toaster";
import { somethingWentWrong, updatedSuccess } from "../toasterMessages";

const setDocument = async (db, coll, id) => {
  await setDoc(doc(db, coll, id), {
    name: "Los Angeles",
    state: "CA",
    country: "USA",
  });
};

//  checks if user exists in firestore, if not, asks user for it DOB and creates user in firestore

function GetDOB(props) {
  const [isUserDobSet, setIsUserDobSet] = useState(null);

  const [dob, setDob] = useState(null);
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    getAuth().onAuthStateChanged((data) => {
      setUserEmail(data.email);
      getDocument(users, data.email).then((res) => {
         
        if (
            res._document?.data.value.mapValue.fields?.dob
        ) {
          setIsUserDobSet(true);
        } else {
          setIsUserDobSet(false);
        }
      });
    });
  }, []);


  const proceed = () => {
    document.getElementById("proceed-btn-loader").style.display =
                  "inline-block";
                updateDocument(users, userEmail, { dob: dob })
                  .then((res) => {
                    toaster(1, updatedSuccess);

                    //one second delay for toaster
                    setTimeout(()=>{
                        window.location.reload();
                    }, 1000);
                  })
                  .catch(() => {
                    toaster(0, somethingWentWrong);
                  });
}

  return isUserDobSet === null ? null : (
    <div>
      {isUserDobSet === false ? (
        <div
          style={{
            marginTop: "25vh",
          }}
        >
          <h1>
            <WarningFilled
              id="set-dob-warning"
              style={{ color: "orange", display: "inline-block" }}
            />
            &nbsp; &nbsp; Update Date of Birth
          </h1>
          <br />

          <br />
          <DatePicker
            format={"DD/MM/YYYY"}
            size="large"
            style={{
              outline: "none",
              padding: "5px 10px",
              borderRadius: "0px",
              fontSize: "20px",
            }}
            onChange={(e) => {
              if (e != null) {
                const dataArr = e.toString().split(" ");
                setDob(dataArr[1] + " " + dataArr[2] + " " + dataArr[3]);
                document.getElementById("proceed_btn_div").style.display =
                  "block";
              }
            }}
            showToday={false}
          />
          <br />
          <br />
          <br />
          <div id="proceed_btn_div" style={{ display: "none" }}>
            <button
              style={{ color: "#1a73e8", backgroundColor: "white" }}
              onClick={proceed}
              id="proceed_btn"
              className={style.button}
            >
              Proceed
              <span id="proceed-btn-loader" style={{ display: "none" }}>
                &nbsp; &nbsp;
                <LoadingOutlined />
              </span>
            </button>
          </div>
        </div>
      ) : (
        <DashBoard />
      )}
    </div>
  );
}

export default GetDOB;
