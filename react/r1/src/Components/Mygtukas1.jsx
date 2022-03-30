import { Component } from "react";
import Mygtukai from "../Mygtukai";

class Mygtukas1 extends Component {

    constructor(props) {
        super();
        this.state = {color: 'green'}; // pradines steito reiksmes
    }

    valio = () => {
        if(this.state.color === 'red') {
            this.setState({
                color: 'green'
              });
        } else {
        this.setState({
            color: 'red'
          });
        }
        setTimeout(() => console.log(this.state.color), 1); //WTF
    }

    render() {
        return(
        <>
            <div style={{
                width: this.props.size,
                height: this.props.size,
                borderRadius: '0%',
                background: this.state.color
            }}>
            </div>
            <button onClick={this.valio}>Valio</button>
        </>
        )
    }
}

export default Mygtukas1;