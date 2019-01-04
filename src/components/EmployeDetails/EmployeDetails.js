import React, { Component } from "react";

import PhotoWidget from "../Widgets/Camera/PhotoWidget";

import "./EmployeDetails.css";

const EmployeDetails = ({ IsLoading }) => {
  return (
    <div className="details_container">
      <span className="card_title">EMPLOYE DETAILS</span>
      <div className="employe_card_container">
        <div className="employe_card">
          <PhotoWidget />
          {IsLoading ? (
            <div class="demo" />
          ) : (
            <div className="employe_name_id">
              <form>
                <p>
                  <label for="a">Name:</label>
                  <input id="a" type="text" value="Sathish " disabled />
                </p>
                <p>
                  <label for="b">ID:</label>
                  <input id="b" type="text" value="123123123123123" disabled />
                </p>
              </form>
            </div>
          )}
          {/* <div className="employe_name_id">
            <form>
              <p>
                <label for="a">Name:</label>
                <input id="a" type="text" value="Sathish " disabled />
              </p>
              <p>
                <label for="b">ID:</label>
                <input id="b" type="text" value="123123123123123" disabled />
              </p>
            </form>
          </div> */}
        </div>
      </div>
      {/* <div class="demo"></div> */}
      <div className="employe_details_card_container">
        <div className="employe_details">
          {IsLoading ? (
            <div className="loader_circle" />
          ) : (
            <div class="f-modal-alert">
              <div class="f-modal-icon f-modal-success animate">
                <span class="f-modal-line f-modal-tip animateSuccessTip" />
                <span class="f-modal-line f-modal-long animateSuccessLong" />
                <div class="f-modal-placeholder" />
                <div class="f-modal-fix" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmployeDetails;
