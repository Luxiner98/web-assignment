/**
 * @generated SignedSource<<e332e0c222e04b7cf80cecb578a8dbaa>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type FilmsQuery$variables = {
  filmId: string;
};
export type FilmsQuery$data = {
  readonly film: {
    readonly id: string;
    readonly releaseDate: string | null;
    readonly title: string | null;
  } | null;
};
export type FilmsQuery = {
  response: FilmsQuery$data;
  variables: FilmsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "filmId"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "filmId"
      }
    ],
    "concreteType": "Film",
    "kind": "LinkedField",
    "name": "film",
    "plural": false,
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
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "FilmsQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "FilmsQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "59b235cff092638e0f8ce639ad978896",
    "id": null,
    "metadata": {},
    "name": "FilmsQuery",
    "operationKind": "query",
    "text": "query FilmsQuery(\n  $filmId: ID!\n) {\n  film(id: $filmId) {\n    id\n    title\n    releaseDate\n  }\n}\n"
  }
};
})();

(node as any).hash = "25bc7a8fa2cb90c5d73e4e10cd3f540f";

export default node;
