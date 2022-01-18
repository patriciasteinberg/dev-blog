import React from "react";

interface ILoader {
    show: boolean
}

const Loader = ({ show }: ILoader) => {
  return show ? <div className="loader"></div> : null;
};

export default Loader;
