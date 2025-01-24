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
import type { UserRole } from './UserRole';
import {
    UserRoleFromJSON,
    UserRoleFromJSONTyped,
    UserRoleToJSON,
    UserRoleToJSONTyped,
} from './UserRole';

/**
 * 
 * @export
 * @interface UserUpdate
 */
export interface UserUpdate {
    /**
     * 
     * @type {string}
     * @memberof UserUpdate
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof UserUpdate
     */
    hashedPassword?: string;
    /**
     * 
     * @type {UserRole}
     * @memberof UserUpdate
     */
    role?: UserRole;
}



/**
 * Check if a given object implements the UserUpdate interface.
 */
export function instanceOfUserUpdate(value: object): value is UserUpdate {
    return true;
}

export function UserUpdateFromJSON(json: any): UserUpdate {
    return UserUpdateFromJSONTyped(json, false);
}

export function UserUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserUpdate {
    if (json == null) {
        return json;
    }
    return {
        
        'email': json['email'] == null ? undefined : json['email'],
        'hashedPassword': json['hashed_password'] == null ? undefined : json['hashed_password'],
        'role': json['role'] == null ? undefined : UserRoleFromJSON(json['role']),
    };
}

export function UserUpdateToJSON(json: any): UserUpdate {
    return UserUpdateToJSONTyped(json, false);
}

export function UserUpdateToJSONTyped(value?: UserUpdate | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'email': value['email'],
        'hashed_password': value['hashedPassword'],
        'role': UserRoleToJSON(value['role']),
    };
}

