import * as React from "react";
import styles from "./Pcm.module.scss";
import { IPcmProps } from "./IPcmProps";
import { escape } from "@microsoft/sp-lodash-subset";
import { sp } from "@pnp/pnpjs";
import App from "./App";
import PlaybookDetails from "./PlaybookDetails";
import { useState } from "react";
export default class Pcm extends React.Component<IPcmProps, {}> {
  constructor(prop: IPcmProps, state: {}) {
    super(prop);
    sp.setup({
      spfxContext: this.props.context,
    });
  }
  public render(): React.ReactElement<IPcmProps> {
    return <App sp={sp} context={this.props.context} />;
  }
}
