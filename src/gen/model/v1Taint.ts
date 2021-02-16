/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.20.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';

/**
* The node this Taint is attached to has the \"effect\" on any pod that does not tolerate the Taint.
*/
export class V1Taint {
    /**
    * Required. The effect of the taint on pods that do not tolerate the taint. Valid effects are NoSchedule, PreferNoSchedule and NoExecute.
    */
    'effect': string;
    /**
    * Required. The taint key to be applied to a node.
    */
    'key': string;
    /**
    * TimeAdded represents the time at which the taint was added. It is only written for NoExecute taints.
    */
    'timeAdded'?: Date;
    /**
    * The taint value corresponding to the taint key.
    */
    'value'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "effect",
            "baseName": "effect",
            "type": "string"
        },
        {
            "name": "key",
            "baseName": "key",
            "type": "string"
        },
        {
            "name": "timeAdded",
            "baseName": "timeAdded",
            "type": "Date"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return V1Taint.attributeTypeMap;
    }
}

