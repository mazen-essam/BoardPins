import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

export default function AddProject() {
   return (
      <div>
         <div className="grid grid-cols-4">
            <div className="col-span-3 me-4">
               <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                     <InputLabel
                        variant="standard"
                        htmlFor="uncontrolled-native"
                        className="mb-4 top-[-1rem]"
                        style={{ top: "-1.2rem" }}
                     >
                        Select Project
                     </InputLabel>
                     <NativeSelect
                        defaultValue={30}
                        inputProps={{
                           name: "age",
                           id: "uncontrolled-native",
                        }}
                     >
                        <option value={10}>Ten</option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option>
                     </NativeSelect>
                  </FormControl>
               </Box>
            </div>
            <div className="col-span-1"></div>
         </div>
      </div>
   );
}
