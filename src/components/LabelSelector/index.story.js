// @flow

import React from "react"

import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"

import LabelSelector from "./"

storiesOf("LabelSelector", module).add("Basic", () => <LabelSelector />)
