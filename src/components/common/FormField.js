import { useEffect, useRef, useState } from "react";
import "./FormField.css";

function FormField({ className, label, autofocus, ...props }) {
  const [focus, setFocus] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (autofocus) {
      ref.current.focus(focus);
    }
  }, [autofocus, focus]);

  return (
    <div className="formField">
      <label className="formField-label">
        <span className="span">{label}</span>
        <input
          className="formField-input"
          autoComplete="off"
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          ref={ref}
          {...props}
        ></input>
      </label>
    </div>
  );
}

export default FormField;
