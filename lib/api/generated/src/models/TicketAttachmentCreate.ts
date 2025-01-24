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
 * @interface TicketAttachmentCreate
 */
export interface TicketAttachmentCreate {
    /**
     * 
     * @type {string}
     * @memberof TicketAttachmentCreate
     */
    ticketId: string;
    /**
     * 
     * @type {string}
     * @memberof TicketAttachmentCreate
     */
    attachment: string;
}

/**
 * Check if a given object implements the TicketAttachmentCreate interface.
 */
export function instanceOfTicketAttachmentCreate(value: object): value is TicketAttachmentCreate {
    if (!('ticketId' in value) || value['ticketId'] === undefined) return false;
    if (!('attachment' in value) || value['attachment'] === undefined) return false;
    return true;
}

export function TicketAttachmentCreateFromJSON(json: any): TicketAttachmentCreate {
    return TicketAttachmentCreateFromJSONTyped(json, false);
}

export function TicketAttachmentCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): TicketAttachmentCreate {
    if (json == null) {
        return json;
    }
    return {
        
        'ticketId': json['ticket_id'],
        'attachment': json['attachment'],
    };
}

export function TicketAttachmentCreateToJSON(json: any): TicketAttachmentCreate {
    return TicketAttachmentCreateToJSONTyped(json, false);
}

export function TicketAttachmentCreateToJSONTyped(value?: TicketAttachmentCreate | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'ticket_id': value['ticketId'],
        'attachment': value['attachment'],
    };
}

