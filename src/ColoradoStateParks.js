import React from "react";
import howManyParks from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde";
import * as RMFunctions from "./parks/RockyMountain"

console.log(RMFunctions.trees);

RMFunctions.wildlife();

function ColoradoStateParks() {
  return (
    <div>
      <MesaVerde />
    </div>
  );
}

export default ColoradoStateParks;