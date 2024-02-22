/**
 * @generated SignedSource<<d6cdf40415a2c81dea67ad10fcca5997>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Films_query$data = {
  readonly " $fragmentSpreads": FragmentRefs<"FilmsList_query">;
  readonly " $fragmentType": "Films_query";
};
export type Films_query$key = {
  readonly " $data"?: Films_query$data;
  readonly " $fragmentSpreads": FragmentRefs<"Films_query">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Films_query",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "FilmsList_query"
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "9b8abb2551ef13fb4b123c815fc1f377";

export default node;
