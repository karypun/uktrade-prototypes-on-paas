const sampleBarrierData = require('./barrier-information/dbt-barrier-sample-data');

// =======================
// Set some default values
// =======================

let myDefaults = {}

myDefaults.myNewVar = "My new var value"



// Default approvers list
defaultApprovers = [
  "Market Access Regional Coordinators",
  "BTR Regional Teams",
  "Department for Environment Food & Rural Affairs",
  "Department for Levelling Up, Housing and Communities"
]


module.exports = {

  sampleBarrierData, //populates barrier information and public tabs
  myDefaults,
  defaultApprovers

}

