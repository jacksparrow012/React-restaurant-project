import React, { Component } from 'react';
// import { connect } from "react-redux"
// const mapStateToProps = state => {
//     return {
//         dishes: state.dishes,
//         sample: state.sample,
//         son: state.son,
//         daughter: state.daughter,
//     }
// }
class Home extends Component {
    // componentDidMount() {

    //     console.log("Home Props", this.props);
    //     this.props.dispatch({
    //         type: "TEST",
    //         str: "Bohubrihi Restaurant",
    //         son: "Zayan Mustehsan Wasis",
    //         daughter: "Harleen Mustehsan"
    //     })
    // }
    //  componentDidUpdate(){
    //      console.log("From home Update", this.props);
    //  }
    render() {
        document.title = "Bohubrihi Restaurant";
        return (
            <div>

            </div>
        );
    }
}
export default Home;