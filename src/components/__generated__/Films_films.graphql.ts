/**
 * @generated SignedSource<<e80d64c7441e9c6948b38d1058ffc51f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Films_films$data = {
  readonly edges: ReadonlyArray<{
    readonly node: {
      readonly characterConnection: {
        readonly characters: ReadonlyArray<{
          readonly birthYear: string | null;
          readonly name: string | null;
        } | null> | null;
        readonly totalCount: number | null;
      } | null;
      readonly director: string | null;
      readonly episodeID: number | null;
      readonly id: string;
      readonly openingCrawl: string | null;
      readonly releaseDate: string | null;
      readonly title: string | null;
    } | null;
  } | null> | null;
  readonly " $fragmentType": "Films_films";
};
export type Films_films$key = {
  readonly " $data"?: Films_films$data;
  readonly " $fragmentSpreads": FragmentRefs<"Films_films">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Films_films",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "FilmsEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "Film",
          "kind": "LinkedField",
          "name": "node",
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
              "name": "episodeID",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "openingCrawl",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "director",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "releaseDate",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "FilmCharactersConnection",
              "kind": "LinkedField",
              "name": "characterConnection",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "totalCount",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "Person",
                  "kind": "LinkedField",
                  "name": "characters",
                  "plural": true,
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "name",
                      "storageKey": null
                    },
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "birthYear",
                      "storageKey": null
                    }
                  ],
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "FilmsConnection",
  "abstractKey": null
};

(node as any).hash = "20e9d6e369bf9df4c2ed34c6b8f03ac1";

export default node;
