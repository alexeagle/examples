/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A SecurityContext marks a location that has dangerous security implications, e.g. a DOM property
 * like `innerHTML` that could cause Cross Site Scripting (XSS) security bugs when improperly
 * handled.
 *
 * See DomSanitizer for more details on security in Angular applications.
 *
 *
 */
export var SecurityContext;
(function (SecurityContext) {
    SecurityContext[SecurityContext["NONE"] = 0] = "NONE";
    SecurityContext[SecurityContext["HTML"] = 1] = "HTML";
    SecurityContext[SecurityContext["STYLE"] = 2] = "STYLE";
    SecurityContext[SecurityContext["SCRIPT"] = 3] = "SCRIPT";
    SecurityContext[SecurityContext["URL"] = 4] = "URL";
    SecurityContext[SecurityContext["RESOURCE_URL"] = 5] = "RESOURCE_URL";
})(SecurityContext || (SecurityContext = {}));
/**
 * Sanitizer is used by the views to sanitize potentially dangerous values.
 *
 *
 */
var Sanitizer = /** @class */ (function () {
    function Sanitizer() {
    }
    return Sanitizer;
}());
export { Sanitizer };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdXJpdHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9zYW5pdGl6YXRpb24vc2VjdXJpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUg7Ozs7Ozs7O0dBUUc7QUFDSCxNQUFNLENBQU4sSUFBWSxlQU9YO0FBUEQsV0FBWSxlQUFlO0lBQ3pCLHFEQUFRLENBQUE7SUFDUixxREFBUSxDQUFBO0lBQ1IsdURBQVMsQ0FBQTtJQUNULHlEQUFVLENBQUE7SUFDVixtREFBTyxDQUFBO0lBQ1AscUVBQWdCLENBQUE7QUFDbEIsQ0FBQyxFQVBXLGVBQWUsS0FBZixlQUFlLFFBTzFCO0FBRUQ7Ozs7R0FJRztBQUNIO0lBQUE7SUFFQSxDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLyoqXG4gKiBBIFNlY3VyaXR5Q29udGV4dCBtYXJrcyBhIGxvY2F0aW9uIHRoYXQgaGFzIGRhbmdlcm91cyBzZWN1cml0eSBpbXBsaWNhdGlvbnMsIGUuZy4gYSBET00gcHJvcGVydHlcbiAqIGxpa2UgYGlubmVySFRNTGAgdGhhdCBjb3VsZCBjYXVzZSBDcm9zcyBTaXRlIFNjcmlwdGluZyAoWFNTKSBzZWN1cml0eSBidWdzIHdoZW4gaW1wcm9wZXJseVxuICogaGFuZGxlZC5cbiAqXG4gKiBTZWUgRG9tU2FuaXRpemVyIGZvciBtb3JlIGRldGFpbHMgb24gc2VjdXJpdHkgaW4gQW5ndWxhciBhcHBsaWNhdGlvbnMuXG4gKlxuICpcbiAqL1xuZXhwb3J0IGVudW0gU2VjdXJpdHlDb250ZXh0IHtcbiAgTk9ORSA9IDAsXG4gIEhUTUwgPSAxLFxuICBTVFlMRSA9IDIsXG4gIFNDUklQVCA9IDMsXG4gIFVSTCA9IDQsXG4gIFJFU09VUkNFX1VSTCA9IDUsXG59XG5cbi8qKlxuICogU2FuaXRpemVyIGlzIHVzZWQgYnkgdGhlIHZpZXdzIHRvIHNhbml0aXplIHBvdGVudGlhbGx5IGRhbmdlcm91cyB2YWx1ZXMuXG4gKlxuICpcbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNhbml0aXplciB7XG4gIGFic3RyYWN0IHNhbml0aXplKGNvbnRleHQ6IFNlY3VyaXR5Q29udGV4dCwgdmFsdWU6IHt9fHN0cmluZ3xudWxsKTogc3RyaW5nfG51bGw7XG59XG4iXX0=