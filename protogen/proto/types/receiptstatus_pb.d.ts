import * as jspb from "google-protobuf"

export enum ReceiptStatus { 
  FAILURE = 0,
  SUCCESS = 1,
  ERRUNKNOWN = 100,
  ERROUTOFGAS = 101,
  ERRCODESTOREOUTOFGAS = 102,
  ERRDEPTH = 103,
  ERRCONTRACTADDRESSCOLLISION = 104,
  ERRNOCOMPATIBLEINTERPRETER = 105,
  ERREXECUTIONREVERTED = 106,
  ERRMAXCODESIZEEXCEEDED = 107,
  ERRWRITEPROTECTION = 108,
}