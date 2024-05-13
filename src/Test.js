/*import React from "react";

class Test extends React.Component{
    render() {
        return (
             <div>
                <center>
                    <h1>The Proped Variables are Name:{this.props.name} and Age:{this.props.age}</h1>
                </center>
             </div>
        );
    }

}
export default Test;
*/





import React from 'react'

const Test = (props) => {
  return (
    <div>
        <h2>Fuctional test and props are:{props.x} and {props.y}</h2>
    </div>
  )
}

export default Test