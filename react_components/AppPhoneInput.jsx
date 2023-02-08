import { InputAdornment } from "@mui/material";
import { useFormikContext } from "formik";
import React, { useState } from "react";
import { IMaskInput } from "react-imask";
import AppInput, { IAppInputProps } from "./AppInput";

interface CustomProps {
  name: string;
}

const TextMaskCustom = React.forwardRef<HTMLElement, CustomProps>(
  (props, ref) => {
    const { setFieldValue, values } = useFormikContext<any>();
    const { name, ...other } = props;

    return (
      <IMaskInput
        {...other}
        mask={"+7 (000) 000-00-00"}
        // @ts-ignore
        inputRef={ref}
        onAccept={(value: any) => {
          setFieldValue(name, value);
        }}
        overwrite
        lazy={false}
        value={values[name]}
        placeholderChar="_"
        inputMode="tel"
        type="tel"
      />
    );
  }
);
export default (props: IAppInputProps) => {
  // @ts-ignore
  return <AppInput inputComponent={TextMaskCustom} {...props} />;
};
