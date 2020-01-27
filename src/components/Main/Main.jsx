import React from "react";

import "./Main.scss";
import classNames from "classnames";
import { Field, FieldArray, Form, Formik} from "formik";

const initialFormState = {
  beneficiaries: [
    {
      id: Math.floor(Math.random() * 100),
      fullName: "",
      dateOfBirth: "",
      optional: "",
      relationship: "",
      percentage: null,
      isClicked: false
    }
  ]
};

const Main = props => (
  <Formik
    className="formik"
    props={props}
    initialValues={initialFormState}
    onSubmit={values => {
      console.log("onSubmit", JSON.stringify(values, null, 2));
    }}
  >
    {({
      values,
      handleChange,
      ...props
    }) => {
      const primaryTotalPercentage = values.beneficiaries.reduce(
        (acc, value) => acc + (parseInt(value.percentage) || 0),
        0
      );
      return (
      <div className="main">
        <header>
          <h1 className="main__label">Beneficiaries</h1>
        </header>

        <main className="main__content">
          <p className="main__content-label">Primary Beneficiaries</p>

          <div className="main__content__characters-table">
            <Form noValidate autoComplete="off">
              <FieldArray name="beneficiaries" props={props}>
                {({ push, remove }) => (
                  <>
                    {values.beneficiaries.map((beneficiary, index) => {
                      const fullName = `beneficiaries[${index}].fullName`;
                      const dateOfBirth = `beneficiaries[${index}].dateOfBirth`;
                      const relationship = `beneficiaries[${index}].relationship`;
                      const optional = `beneficiaries[${index}].optional`;
                      const percentage = `beneficiaries[${index}].percentage`;

                      const disabled = true;

                      const shouldRenderControls =
                        beneficiary.fullName &&
                        beneficiary.dateOfBirth &&
                        beneficiary.relationship &&
                        beneficiary.percentage;

                      const pushNewField = () => {
                        push({
                          id: Math.floor(Math.random() * 100),
                          fullName: "",
                          dateOfBirth: "",
                          optional: "",
                          relationship: "",
                          percentage: "",
                          isClicked: false
                        })
                      }

                      const pushRemoveItSelves = () => {
                        primaryTotalPercentage <= 99 && pushNewField();
                        const thereIsNoButton = () => {
                          beneficiary.isClicked = true;
                        };
                        thereIsNoButton();
                      };

                      const deleteAndPush = () => {
                        if(primaryTotalPercentage === 100) {
                            remove(index);
                            pushNewField();
                        } else {
                            remove(index + 1);
                            remove(index);
                            pushNewField();
                          }
                      }                       
                      
                      return (
                        <div className="groupInputsIconButton">
                          <form className="form">
                            <div className="form__block">
                              <label className="form__block__name">
                                Full name
                              </label>
                              <input
                                className="form__block__name-input"
                                type="text"
                                placeholder="John Doe"
                                name={fullName}
                                value={beneficiary.fullName}
                                onChange={handleChange}
                                required
                              />
                            </div>
                            <div className="form__block">
                              <label className="form__block__birth">
                                Date of Birth
                              </label>
                              <i className="uil uil-calendar-alt" />
                              <input
                                className="form__block__birth-input"
                                type="text"
                                placeholder="MM/DD/YYYY"
                                name={dateOfBirth}
                                value={beneficiary.dateOfBirth}
                                onChange={handleChange}
                                required
                              />
                            </div>
                            <div className="form__block">
                              <select className="form__block__ssn">
                                <option>SSN</option>
                              </select>
                            </div>
                            <div className="form__block">
                              <input
                                className="form__block__optional"
                                type="text"
                                placeholder="Optional"
                                name={optional}
                                value={beneficiary.optional}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="form__block">
                              <label className="form__block__relationship">
                                Relationship
                              </label>
                              <select
                                className="form__block__relationship-select"
                                name={relationship}
                                value={beneficiary.relationship}
                                onChange={handleChange}
                                required
                              >
                                <option>Select</option>
                                <option>Trust</option>
                              </select>
                            </div>
                            <div className="form__block">
                              <Field
                                className="form__block__percentage"
                                type="number"
                                name={percentage}
                                placeholder="0%"
                                value={beneficiary.percentage}
                                step={10}
                                min={0}
                                max={100 - primaryTotalPercentage + beneficiary.percentage}
                                maxlength={2}
                                required
                              />
                            </div>
                          </form>
                          {shouldRenderControls && (
                            <>
                              <button
                                className={classNames("removeButton", "button")}
                                disabled={
                                  values.beneficiaries.length > index + 2
                                    ? disabled
                                    : null
                                }
                                onClick={() => deleteAndPush()}
                              >
                                <i className="uil uil-times" />
                              </button>
                              {beneficiary.isClicked || (
                                <button
                                  className={classNames(
                                    "checkButton",
                                    "button"
                                  )}
                                  onClick={() => pushRemoveItSelves()}
                                >
                                  <i className="uil uil-check" />
                                </button>
                              )}
                            </>
                          )}
                        </div>
                      );
                    })}
                  </>
                )}
              </FieldArray>
            </Form>
          </div>
          <p className={primaryTotalPercentage >= 100 ? "main__content__summary-full" : "main__content__summary"}>
            {primaryTotalPercentage >= 100 && <i className="uil uil-check" />}Primary total:{" "}
            {primaryTotalPercentage}
            %
          </p>

          <div className="main__content__switch">
            <p className="main__content-label">Contingent Beneficiaries</p>
            <i className="fa fa-toggle-off" />
          </div>
          <button className="main__content__button" disabled={primaryTotalPercentage < 100}>
            Next
          </button>
        </main>
      </div>
    )}}
  </Formik>
  );

export default Main;
