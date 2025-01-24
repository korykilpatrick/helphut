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
import type { TicketStatus } from './TicketStatus';
import {
    TicketStatusFromJSON,
    TicketStatusFromJSONTyped,
    TicketStatusToJSON,
    TicketStatusToJSONTyped,
} from './TicketStatus';
import type { TicketPriority } from './TicketPriority';
import {
    TicketPriorityFromJSON,
    TicketPriorityFromJSONTyped,
    TicketPriorityToJSON,
    TicketPriorityToJSONTyped,
} from './TicketPriority';

/**
 * 
 * @export
 * @interface Ticket
 */
export interface Ticket {
    /**
     * 
     * @type {string}
     * @memberof Ticket
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof Ticket
     */
    donationId?: string;
    /**
     * 
     * @type {TicketStatus}
     * @memberof Ticket
     */
    status?: TicketStatus;
    /**
     * 
     * @type {TicketPriority}
     * @memberof Ticket
     */
    priority?: TicketPriority;
    /**
     * 
     * @type {string}
     * @memberof Ticket
     */
    volunteerId?: string;
    /**
     * 
     * @type {string}
     * @memberof Ticket
     */
    partnerOrgId?: string;
    /**
     * 
     * @type {string}
     * @memberof Ticket
     */
    pickupLocationId?: string;
    /**
     * 
     * @type {string}
     * @memberof Ticket
     */
    dropoffLocationId?: string;
    /**
     * 
     * @type {Date}
     * @memberof Ticket
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof Ticket
     */
    updatedAt?: Date;
}



/**
 * Check if a given object implements the Ticket interface.
 */
export function instanceOfTicket(value: object): value is Ticket {
    return true;
}

export function TicketFromJSON(json: any): Ticket {
    return TicketFromJSONTyped(json, false);
}

export function TicketFromJSONTyped(json: any, ignoreDiscriminator: boolean): Ticket {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'donationId': json['donation_id'] == null ? undefined : json['donation_id'],
        'status': json['status'] == null ? undefined : TicketStatusFromJSON(json['status']),
        'priority': json['priority'] == null ? undefined : TicketPriorityFromJSON(json['priority']),
        'volunteerId': json['volunteer_id'] == null ? undefined : json['volunteer_id'],
        'partnerOrgId': json['partner_org_id'] == null ? undefined : json['partner_org_id'],
        'pickupLocationId': json['pickup_location_id'] == null ? undefined : json['pickup_location_id'],
        'dropoffLocationId': json['dropoff_location_id'] == null ? undefined : json['dropoff_location_id'],
        'createdAt': json['created_at'] == null ? undefined : (new Date(json['created_at'])),
        'updatedAt': json['updated_at'] == null ? undefined : (new Date(json['updated_at'])),
    };
}

export function TicketToJSON(json: any): Ticket {
    return TicketToJSONTyped(json, false);
}

export function TicketToJSONTyped(value?: Ticket | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'donation_id': value['donationId'],
        'status': TicketStatusToJSON(value['status']),
        'priority': TicketPriorityToJSON(value['priority']),
        'volunteer_id': value['volunteerId'],
        'partner_org_id': value['partnerOrgId'],
        'pickup_location_id': value['pickupLocationId'],
        'dropoff_location_id': value['dropoffLocationId'],
        'created_at': value['createdAt'] == null ? undefined : ((value['createdAt']).toISOString()),
        'updated_at': value['updatedAt'] == null ? undefined : ((value['updatedAt']).toISOString()),
    };
}

