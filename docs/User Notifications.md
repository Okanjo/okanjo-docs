
# User Notifications

Event notification system. When anything happens, like an item is sold or auction is won, a notification is created.

Notifications store related objects in the state they were at the time of the event.

## Notification

Notification of an event.

`id`
:   `int`  The unique ID of the notification.
`created`
:   `date time`  When the notification was created.
`updated`
:   `date time`  When the notification was last updated (e.g. flags changed to mark as read)
`flags`
:   `bitwise flags`  Bitwise flags. Handles storing flagged events. See [`NotificationFlags`](Constants.html#NotificationFlags).
`type`
:   `string enum`  Type of event notification. See [`NotificationType`](Constants.html#NotificationType).
`recipient_id`
:   `int`  Nullable. The user ID who is the primary recipient of the notification.
`recipient_store_id`
:   `int`  Nullable. The store ID who received the message.
`data`
:   `mixed` Nullable. The embedded event data at the time of the event.


# Routes

## GET /users/{user_id}/notifications

Collection. Gets notifications for the given user. **Requires user level authentication.** Results ordered by unread first, then by id descending, to provide unread notifications to bubble to the top of the list, and fill the rest with recently read notifications.

### Query Parameters

*Filtering*
`id`
:   `int csv` Returns notifications with the specific id or ids.
`has_flag`
:   `int bit` Returns notifications that have been flagged with the given bitwise flag. See [`NotificationFlags`](Constants.html#NotificationFlags).
`!has_flag`
:   `int bit` Returns notifications that do not contain the given flag. For example, find notifications that have not been marked read. See [`NotificationFlags`](Constants.html#NotificationFlags).
`recipient_store_id`
:   `int` Returns notifications that were sent to the given store id.
*Fields & Includes*
`fields`
:   `csv` When given, only returns the given fields. Can also can specify fields on embedded objects.



### Response

Array of [`Notification`](User Notifications.html#Notification) objects.

### Errors

**401 Unauthorized**
:   `Insufficient privileges for this operation.` Occurs when the requesting user does not have sufficient privileges to fulfil the operation. Providing different credentials could solve the problem.
**500 Internal Server Error**
:   `Failed to retrieve notifications.` Occurs when the API could not complete the request.



## GET /users/{user_id}/notifications/{id}

Resource. Gets a specific notification for the given user. **Requires user level authentication**

### Query Parameters

*Fields & Includes*
`fields`
:   `csv` When given, only returns the given fields. Can also can specify fields on embedded objects.


### Response

[`Notification`](User Notifications.html#Notification) object.

### Errors

**401 Unauthorized**
:   `Insufficient privileges for this operation.` Occurs when the requesting user does not have sufficient privileges to fulfil the operation. Providing different credentials could solve the problem.
**404 Not Found**
:   `Notification not found.` Occurs when the given notification was not found.
**500 Internal Server Error**
:   `Failed to retrieve notifications.` Occurs when the API could not complete the request.


## PUT /users/{user_id}/notifications/{id}

Resource. Updates a specific notification for the given user. For example, to mark a notification as read. **Requires user level authentication.**

### Entity NVP Parameters

`flags`
:   `bitwise flags` The new bitwise flags attribute to assign. For example, changing adding bit 1 would mark a notification as read.  Note: some flags are for internal use only and are purely informational and cannot be changed. See [`NotificationFlags`](Constants.html#NotificationFlags).


### Response

Generic [`Success`](Globals.html#Default Response Object) response.

### Errors

**400 Bad Request**
:   `Invalid field: {field}` Occurs when the given field was not valid.
**401 Unauthorized**
:   `Insufficient privileges for this operation.` Occurs when the requesting user does not have sufficient privileges to fulfil the operation. Providing different credentials could solve the problem.
**403 Forbidden**
:   `Insufficient privileges for this operation.` Occurs when the given field is not able to be changed.
**404 Not Found**
:   `Notification not found.` Occurs when the given notification was not found.
**500 Internal Server Error**
:   `Failed to retrieve notifications.` Occurs when the API could not complete the request.



## POST /users/{user_id}/notifications/toggle-flag

Controller. Updates flags on one or more notifications. For example, to mark a batch of notifications as read. **Requires user level authentication.**

### Entity NVP Parameters

`ids`
:   `int csv` Required. ID or multiple ids of which notifications to update.
`flag`
:   `bitwise flag` Required. The new bitwise flag attribute to update. Note: some flags are for internal use only and are purely informational and cannot be changed. See [`NotificationFlags`](Constants.html#NotificationFlags).
`enabled`
:   `bit` Required. Whether to add or remove the flag from the set of notifications.



### Response

Generic [`Success`](Globals.html#Default Response Object) response.

### Errors

**400 Bad Request**
:   `Invalid field: {field}` Occurs when the given field was not valid.
**401 Unauthorized**
:   `Insufficient privileges for this operation.` Occurs when the requesting user does not have sufficient privileges to fulfil the operation. Providing different credentials could solve the problem.
**404 Not Found**
:   `Notification not found.` Occurs when the given notification was not found.
**500 Internal Server Error**
:   `Failed to retrieve notifications.` Occurs when the API could not complete the request.

