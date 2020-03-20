import * as React from "react";
import { Button as MatButton, ButtonProps } from "@material-ui/core";

export const Button: React.FC<ButtonProps> = props => <MatButton {...props} />;
