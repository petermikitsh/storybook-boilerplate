import * as React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "../components/Button";

export default {
  title: "Button",
  component: Button
};

export const Text = () => (
  <Button variant="contained" color="primary" onClick={action("clicked")}>
    Hello Button
  </Button>
);
