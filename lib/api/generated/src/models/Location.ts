/* tslint:disable */
/* eslint-disable */
/**
 * HelpHut Food Rescue Management
 * Centralized platform for coordinating food donations, volunteers, and partner organizations. Aligns with the HelpHut mission to efficiently rescue food in Austin, reduce waste, and help those in need. This specification is maintained under a TDD approach, with auto-generated tests ensuring coverage of each endpoint. 
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Location
 */
export interface Location {
    /**
     * 
     * @type {string}
     * @memberof Location
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof Location
     */
    street?: string;
    /**
     * 
     * @type {string}
     * @memberof Location
     */
    city?: string;
    /**
     * 
     * @type {string}
     * @memberof Location
     */
    state?: string;
    /**
     * 
     * @type {string}
     * @memberof Location
     */
    zip?: string;
    /**
     * 
     * @type {number}
     * @memberof Location
     */
    latitude?: number;
    /**
     * 
     * @type {number}
     * @memberof Location
     */
    longitude?: number;
    /**
     * 
     * @type {Date}
     * @memberof Location
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof Location
     */
    updatedAt?: Date;
}

/**
 * Check if a given object implements the Location interface.
 */
export function instanceOfLocation(value: object): value is Location {
    return true;
}

export function LocationFromJSON(json: any): Location {
    return LocationFromJSONTyped(json, false);
}

export function LocationFromJSONTyped(json: any, ignoreDiscriminator: boolean): Location {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'street': json['street'] == null ? undefined : json['street'],
        'city': json['city'] == null ? undefined : json['city'],
        'state': json['state'] == null ? undefined : json['state'],
        'zip': json['zip'] == null ? undefined : json['zip'],
        'latitude': json['latitude'] == null ? undefined : json['latitude'],
        'longitude': json['longitude'] == null ? undefined : json['longitude'],
        'createdAt': json['created_at'] == null ? undefined : (new Date(json['created_at'])),
        'updatedAt': json['updated_at'] == null ? undefined : (new Date(json['updated_at'])),
    };
}

export function LocationToJSON(json: any): Location {
    return LocationToJSONTyped(json, false);
}

export function LocationToJSONTyped(value?: Location | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'street': value['street'],
        'city': value['city'],
        'state': value['state'],
        'zip': value['zip'],
        'latitude': value['latitude'],
        'longitude': value['longitude'],
        'created_at': value['createdAt'] == null ? undefined : ((value['createdAt']).toISOString()),
        'updated_at': value['updatedAt'] == null ? undefined : ((value['updatedAt']).toISOString()),
    };
}

