/**
 * @generated SignedSource<<d2920d52aa5e20ac06794417306c5533>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Films_Film$data = {
  readonly id: string;
  readonly releaseDate: string | null;
  readonly title: string | null;
  readonly " $fragmentType": "Films_Film";
};
export type Films_Film$key = {
  readonly " $data"?: Films_Film$data;
  readonly " $fragmentSpreads": FragmentRefs<"Films_Film">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Films_Film",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "releaseDate",
      "storageKey": null
    }
  ],
  "type": "Film",
  "abstractKey": null
};

(node as any).hash = "19ef2eced4b294fe34bad1e75ca6a57a";

export default node;
