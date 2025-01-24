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
 * @interface TicketAttachmentUpdate
 */
export interface TicketAttachmentUpdate {
    /**
     * 
     * @type {string}
     * @memberof TicketAttachmentUpdate
     */
    ticketId?: string;
    /**
     * 
     * @type {string}
     * @memberof TicketAttachmentUpdate
     */
    attachment?: string;
}

/**
 * Check if a given object implements the TicketAttachmentUpdate interface.
 */
export function instanceOfTicketAttachmentUpdate(value: object): value is TicketAttachmentUpdate {
    return true;
}

export function TicketAttachmentUpdateFromJSON(json: any): TicketAttachmentUpdate {
    return TicketAttachmentUpdateFromJSONTyped(json, false);
}

export function TicketAttachmentUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): TicketAttachmentUpdate {
    if (json == null) {
        return json;
    }
    return {
        
        'ticketId': json['ticket_id'] == null ? undefined : json['ticket_id'],
        'attachment': json['attachment'] == null ? undefined : json['attachment'],
    };
}

export function TicketAttachmentUpdateToJSON(json: any): TicketAttachmentUpdate {
    return TicketAttachmentUpdateToJSONTyped(json, false);
}

export function TicketAttachmentUpdateToJSONTyped(value?: TicketAttachmentUpdate | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'ticket_id': value['ticketId'],
        'attachment': value['attachment'],
    };
}

