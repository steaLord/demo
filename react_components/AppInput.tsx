import { styled } from "@mui/material/styles";
import InputBase, { InputBaseProps } from "@mui/material/InputBase";
import { FormControl, InputLabel } from "@mui/material";

import { useFormikContext } from "formik";

const AppInputStyled = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: "20px",
    fontSize: 14,
    fontWeight: "300",
  },

  "& .MuiInputBase-input": {
    borderRadius: 10,
    position: "relative",
    border: "1.5px solid #B8BAEA",
    fontSize: "20px",
    padding: "23px 20px",

    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "::placeholder": {
      color: "#C9C9C9",
      opacity: 1,
      fontWeight: "400",
    },
    "&:hover": {
      borderColor: theme.palette.primary.dark,
    },
    "&:focus": {
      backgroundColor: "#ECF0FF",
      borderColor: theme.palette.primary.dark,
    },
  },
}));

export interface IAppInputProps extends InputBaseProps {
  label?: string;
  name: string;
  type?: string;
  placeholder?: string;
}

export default ({ label, type, name, ...props }: IAppInputProps) => {
  const { handleChange } = useFormikContext();
  return (
    <FormControl variant="standard" fullWidth>
      {!!label && (
        <InputLabel shrink htmlFor={name}>
          {label}
        </InputLabel>
      )}
      <AppInputStyled
        onChange={handleChange}
        name={name}
        type={type}
        id={name}
        {...props}
      />
    </FormControl>
  );
};
