import * as React from "react";
import { Button as MuiButton, ButtonProps } from "@material-ui/core";

const Button: React.FC<ButtonProps> = props => <MuiButton {...props} />;

export default Button;
