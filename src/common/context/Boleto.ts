import React, { createContext, useState } from 'react';


// type BoletoType = {

//   numeroBoleto: string;
//   numeroDaParcela: string;
//   valorDoBoleto: string;
// }
// type PropsBoletoContext = {
//   state: BoletoType;
//   setState: React.Dispatch<React.SetStateAction<BoletoType>>
// }

// const DEFAULT_VALUE = {
//   state: {
//     numeroBoleto: "",
//     numeroDaParcela: "",
//     valorDoBoleto: ""
//   },
//   setState: () => { },
// };

// const BoletoContext = createContext<PropsBoletoContext>(DEFAULT_VALUE);

// const BoletoContextProvider: React.FC<BoletoType> = (children) => {
//   const [state, setState] = useState(DEFAULT_VALUE.state);

//   return (

//   )
// }

// export { BoletoContextProvider }
// export default BoletoContext