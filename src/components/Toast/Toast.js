import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Toast extends Component {
  success = message => {
    toast.success(message);
  };

  info = message => {
    toast.info(message);
  };

  error = message => {
    toast.error(message);
  };

  render() {
    return (
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={true}
        pauseOnHover
      />
    );
  }
}

export default Toast;
