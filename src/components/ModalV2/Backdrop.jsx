import { forwardRef } from "react";
import Proptypes from "prop-types";

const Backdrop = forwardRef(function Backdrop(
  { open, className, ...other },
  ref
) {
  return (
    <div
      className={`${className} ${open ? "base-backdrop-open" : ""}`}
      ref={ref}
      {...other}
    />
  );
});

Backdrop.propTypes = {
  open: Proptypes.bool,
  className: Proptypes.string,
};

export default Backdrop;
