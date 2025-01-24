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
 * @interface DonorUpdate
 */
export interface DonorUpdate {
    /**
     * 
     * @type {string}
     * @memberof DonorUpdate
     */
    userId?: string;
    /**
     * 
     * @type {string}
     * @memberof DonorUpdate
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof DonorUpdate
     */
    contactEmail?: string;
    /**
     * 
     * @type {string}
     * @memberof DonorUpdate
     */
    contactPhone?: string;
    /**
     * 
     * @type {string}
     * @memberof DonorUpdate
     */
    businessHours?: string;
    /**
     * 
     * @type {string}
     * @memberof DonorUpdate
     */
    pickupPreferences?: string;
    /**
     * 
     * @type {string}
     * @memberof DonorUpdate
     */
    locationId?: string;
}

/**
 * Check if a given object implements the DonorUpdate interface.
 */
export function instanceOfDonorUpdate(value: object): value is DonorUpdate {
    return true;
}

export function DonorUpdateFromJSON(json: any): DonorUpdate {
    return DonorUpdateFromJSONTyped(json, false);
}

export function DonorUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): DonorUpdate {
    if (json == null) {
        return json;
    }
    return {
        
        'userId': json['user_id'] == null ? undefined : json['user_id'],
        'name': json['name'] == null ? undefined : json['name'],
        'contactEmail': json['contact_email'] == null ? undefined : json['contact_email'],
        'contactPhone': json['contact_phone'] == null ? undefined : json['contact_phone'],
        'businessHours': json['business_hours'] == null ? undefined : json['business_hours'],
        'pickupPreferences': json['pickup_preferences'] == null ? undefined : json['pickup_preferences'],
        'locationId': json['location_id'] == null ? undefined : json['location_id'],
    };
}

export function DonorUpdateToJSON(json: any): DonorUpdate {
    return DonorUpdateToJSONTyped(json, false);
}

export function DonorUpdateToJSONTyped(value?: DonorUpdate | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'user_id': value['userId'],
        'name': value['name'],
        'contact_email': value['contactEmail'],
        'contact_phone': value['contactPhone'],
        'business_hours': value['businessHours'],
        'pickup_preferences': value['pickupPreferences'],
        'location_id': value['locationId'],
    };
}

