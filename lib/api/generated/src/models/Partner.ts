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
 * @interface Partner
 */
export interface Partner {
    /**
     * 
     * @type {string}
     * @memberof Partner
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof Partner
     */
    userId?: string;
    /**
     * 
     * @type {string}
     * @memberof Partner
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof Partner
     */
    maxCapacity?: number;
    /**
     * 
     * @type {number}
     * @memberof Partner
     */
    capacity?: number;
    /**
     * 
     * @type {string}
     * @memberof Partner
     */
    contactEmail?: string;
    /**
     * 
     * @type {string}
     * @memberof Partner
     */
    contactPhone?: string;
    /**
     * 
     * @type {string}
     * @memberof Partner
     */
    locationId?: string;
    /**
     * 
     * @type {Date}
     * @memberof Partner
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof Partner
     */
    updatedAt?: Date;
}

/**
 * Check if a given object implements the Partner interface.
 */
export function instanceOfPartner(value: object): value is Partner {
    return true;
}

export function PartnerFromJSON(json: any): Partner {
    return PartnerFromJSONTyped(json, false);
}

export function PartnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): Partner {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'userId': json['user_id'] == null ? undefined : json['user_id'],
        'name': json['name'] == null ? undefined : json['name'],
        'maxCapacity': json['max_capacity'] == null ? undefined : json['max_capacity'],
        'capacity': json['capacity'] == null ? undefined : json['capacity'],
        'contactEmail': json['contact_email'] == null ? undefined : json['contact_email'],
        'contactPhone': json['contact_phone'] == null ? undefined : json['contact_phone'],
        'locationId': json['location_id'] == null ? undefined : json['location_id'],
        'createdAt': json['created_at'] == null ? undefined : (new Date(json['created_at'])),
        'updatedAt': json['updated_at'] == null ? undefined : (new Date(json['updated_at'])),
    };
}

export function PartnerToJSON(json: any): Partner {
    return PartnerToJSONTyped(json, false);
}

export function PartnerToJSONTyped(value?: Partner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'user_id': value['userId'],
        'name': value['name'],
        'max_capacity': value['maxCapacity'],
        'capacity': value['capacity'],
        'contact_email': value['contactEmail'],
        'contact_phone': value['contactPhone'],
        'location_id': value['locationId'],
        'created_at': value['createdAt'] == null ? undefined : ((value['createdAt']).toISOString()),
        'updated_at': value['updatedAt'] == null ? undefined : ((value['updatedAt']).toISOString()),
    };
}

