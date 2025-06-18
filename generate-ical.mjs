// This is a placeholder file which shows how you can access functions and data defined in other files. You can delete the contents of the file once you have understood how it works.
// It can be run with `node`.

import { getGreeting } from "./utils/common.mjs";
import daysData from "./data/days.json" with { type: "json" };
import fs from "fs"

console.log(`${getGreeting()} - there are ${daysData.length} known days`);
