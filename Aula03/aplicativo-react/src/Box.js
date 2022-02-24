import "../src/style.css"

function Box(props){
    return(
      <li className="box">{props.item}</li>
    );
  }

// function Box1(props){
//     return(
//       <li>props.item</li>
//     );
//   }

export default Box; //um só componente

//   export {
//       Box,
//       Box1
//   };