/**
 * @generated SignedSource<<87be18a88915e26caf1bc58f4fa752a8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Films$data = {
  readonly " $fragmentSpreads": FragmentRefs<"FilmsList_Films">;
  readonly " $fragmentType": "Films";
};
export type Films$key = {
  readonly " $data"?: Films$data;
  readonly " $fragmentSpreads": FragmentRefs<"Films">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Films",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "FilmsList_Films"
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "805ffff513a79c8f17f0b2c77bce9185";

export default node;
