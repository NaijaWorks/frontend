import React from "react";
import { storiesOf } from "@storybook/react";
import { PrimaryButton, SecondaryButton, TextButton } from "./Button";

const stories = storiesOf("Design System | Button", module);

stories.add("primary", () => <PrimaryButton>Primary Button</PrimaryButton>);
stories.add("secondary", () => (
  <SecondaryButton>Secondary Button</SecondaryButton>
));
stories.add("text", () => <TextButton>Text Button</TextButton>);
