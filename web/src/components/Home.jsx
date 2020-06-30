/*global SecureTrading*/

import React, { Component } from "react";
import './../libraries/st.css';
import logo from "../logo.svg";
import environment from './../environment/environment.js';


export class Home extends Component {
  componentDidMount() {
    var self = this;
    self.loadConfig().then(function(config) {
    console.error(config);
      self.loadST(config, SecureTrading);
    });
  }

  loadST(config, SecureTrading) {
    var instance = SecureTrading(config);

    instance.submitCallback = function someFancyfunction(data) {
      var stringified = JSON.stringify(data);
      var testVariable = 'This is what we have got after submit' + stringified;
      console.error(testVariable);
    };
    instance.successCallback = function() {
      alert('Success alert');
    };
    instance.errorCallback = function() {
      alert('This is error message');
    };
    instance.Components(config.components);
    instance.ApplePay(config.applePay);
    instance.VisaCheckout(config.visaCheckout);

    document.getElementById('example-form-amount').addEventListener('input', function() {
      instance.updateJWT(
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhbTAzMTAuYXV0b2FwaSIsImlhdCI6MTU5MDE1NDgwNy4wNzQ5ODg2LCJwYXlsb2FkIjp7Im1haW5hbW91bnQiOiIyMC4wMCIsImFjY291bnR0eXBlZGVzY3JpcHRpb24iOiJFQ09NIiwiY3VycmVuY3lpc28zYSI6IkdCUCIsInNpdGVyZWZlcmVuY2UiOiJ0ZXN0X2phbWVzMzg2NDEiLCJsb2NhbGUiOiJlbl9HQiJ9fQ.eXAxDB5yOaM-63k6tf0634ojvQo7zDuuXeAKmP3DtGw'
      );
    });
  }

  loadConfig() {
    return window
      .fetch('./../config.json')
      .then(function(response) {
        return response.json();
      })
      .catch(function(error) {
        console.error('Failed to load config: ' + error + '. Falling back to defaults.');
        return ''
      });
  }
render(){
return (
<div>
    <h1>Hello, I'm a SPA loaded inside WebView</h1>
    <img src={logo} className="App-logo" alt="logo" />
    <form id="st-form" className="example-form" autoComplete="off" noValidate>
              <h1 className="example-form__title">
                <img style={{ maxWidth: '200px' }} src="./images/st.png" />
                <span>
                  AMOUNT: <strong>10.00 GBP</strong>
                </span>
              </h1>
              <div className="example-form__section example-form__section--horizontal">
                <div className="example-form__group">
                  <label htmlFor="example-form-name" className="example-form__label">
                    AMOUNT
                  </label>
                  <input
                    id="example-form-amount"
                    className="example-form__input"
                    type="number"
                    placeholder=""
                    name="myBillAmount"
                    data-st-name="billingamount"
                  />
                </div>
              </div>

              <div className="example-form__section example-form__section--horizontal">
                <div className="example-form__group">
                  <label htmlFor="example-form-name" className="example-form__label">
                    NAME
                  </label>
                  <input
                    id="example-form-name"
                    className="example-form__input"
                    type="text"
                    placeholder="John Doe"
                    autoComplete="name"
                    name="myBillName"
                    data-st-name="billingfirstname"
                  />
                </div>
                <div className="example-form__group">
                  <label htmlFor="example-form-email" className="example-form__label">
                    E-MAIL
                  </label>
                  <input
                    id="example-form-email"
                    className="example-form__input"
                    type="email"
                    placeholder="test@mail.com"
                    autoComplete="email"
                    name="myBillEmail"
                    data-st-name="billingemail"
                  />
                </div>
                <div className="example-form__group">
                  <label htmlFor="example-form-phone" className="example-form__label">
                    PHONE
                  </label>
                  <input
                    id="example-form-phone"
                    className="example-form__input"
                    type="tel"
                    placeholder="+00 000 000 000"
                    autoComplete="tel"
                    name="myBillTel"
                  />
                </div>
              </div>

              <div className="example-form__spacer" />

              <div className="example-form__section">
                <div id="st-notification-frame" className="example-form__group" />
                <div id="st-card-number" className="example-form__group" />
                <div id="st-expiration-date" className="example-form__group" />
                <div id="st-security-code" className="example-form__group" />
                <div className="example-form__spacer" />
              </div>

              <div className="example-form__section">
                <div className="example-form__group example-form__group--submit">
                  <button type="submit" className="example-form__button" id="merchant-submit-button">
                    Zapłać
                  </button>
                </div>
              </div>

              <div className="example-form__section">
                <div id="st-control-frame" className="example-form__group" />
                <div id="st-visa-checkout" className="example-form__group" />
                <div id="st-apple-pay" className="example-form__group" />
              </div>
              <div id="st-animated-card" />
            </form>
  </div>
    )
}
}
