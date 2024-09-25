"use strict";
/// <reference path="./js/crud.d.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
var CRUD = require("./js/crud");
var row = {
    firstName: "Guillaume",
    lastName: "Salva"
};
var newRowID = CRUD.insertRow(row);
console.log("Inserted row ID: ".concat(newRowID));
var updatedRow = {
    firstName: "Guillaume",
    lastName: "Salva",
    age: 23
};
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
