import React from "react";
import { connect } from "react-redux";

const SurveyFormReview = ({ onCancel }) => {
  return (
    <div>
      <h5>Can you please confirm your entries</h5>
      <button className="yellow darken-3 btn-flat" onClick={onCancel}>
        Back
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  console.log(state);
  return {};
}

export default connect(mapStateToProps)(SurveyFormReview);
