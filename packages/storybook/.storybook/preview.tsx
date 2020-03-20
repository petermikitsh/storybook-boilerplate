import { addDecorator } from "@storybook/react";
import { jsxDecorator } from "storybook-addon-jsx";
import { addParameters } from "@storybook/react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core";
import addons from "@storybook/addons";
import React, { useState, useEffect } from "react";
import { withPropsTable } from "storybook-addon-react-docgen";
import { withSmartKnobs } from "storybook-addon-smart-knobs";
import { withKnobs } from "@storybook/addon-knobs";

addDecorator(withSmartKnobs());
addDecorator(withKnobs);
addDecorator(withPropsTable);

const cleanJSXString = (jsxString: string) => {
  let editedJsxString = jsxString;

  // Fix display name: e.g., "WithStyles(ForwardRef(Button))" => "Button"
  const matcher = /WithStyles\(ForwardRef\(([a-zA-Z]+)\)\)/g;

  // @ts-ignore
  const regExpIterator = editedJsxString.matchAll(matcher);
  let curr = regExpIterator.next();

  while (!curr.done) {
    const [findVal, replaceVal] = curr.value;
    editedJsxString = editedJsxString.replace(findVal, replaceVal);
    curr = regExpIterator.next();
  }

  return editedJsxString;
};

addParameters({
  jsx: {
    // @ts-ignore
    showFunctions: false,
    onBeforeRender: cleanJSXString,
    filterProps: val => {
      return val !== undefined && typeof val !== "function";
    }
  }
});
addDecorator(jsxDecorator);

const baseTheme = {
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(",")
  }
};

const lightTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#00f"
    }
  },
  ...baseTheme
});

const darkTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#000"
    }
  },
  ...baseTheme
});

const channel = addons.getChannel();

// create a component that uses the dark mode hook
const ThemeWrapper = props => {
  const [isDark, setDark] = useState(false);

  useEffect(() => {
    channel.on("DARK_MODE", setDark);
    return () => channel.off("DARK_MODE", setDark);
  }, [channel, setDark]);

  const theme = isDark ? darkTheme : lightTheme;

  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

addDecorator(renderStory => <ThemeWrapper>{renderStory()}</ThemeWrapper>);
