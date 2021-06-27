import React from "react";
import { useGlobalContext, IContext } from "../context/context";

const Buttons: React.FC = () => {
  const { currentPage, nbPages, handlePage }: IContext = useGlobalContext();

  const handleClick = (value: string): void => { handlePage && handlePage(value) }

  return (
    <div className="btn-container">
      <button onClick={() => handleClick("dec")}> Prev </button>
      <p>
        {currentPage} of {nbPages}
      </p>
      <button onClick={() => handleClick("inc")}> Next </button>
    </div>
  );
};

export default Buttons;
