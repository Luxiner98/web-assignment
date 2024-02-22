/**
 * @generated SignedSource<<db1b866cb0e5ea3d55558efd44bd24d3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FilmsPage_Films$data = {
  readonly " $fragmentSpreads": FragmentRefs<"FilmsPage_Films">;
  readonly " $fragmentType": "FilmsPage_Films";
};
export type FilmsPage_Films$key = {
  readonly " $data"?: FilmsPage_Films$data;
  readonly " $fragmentSpreads": FragmentRefs<"FilmsPage_Films">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FilmsPage_Films",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "FilmsPage_Films"
    }
  ],
  "type": "FilmsConnection",
  "abstractKey": null
};

(node as any).hash = "a3349f8c7a869a3d3abd86a0a6e88d60";

export default node;
