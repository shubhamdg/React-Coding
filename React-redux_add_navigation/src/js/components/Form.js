import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addArticle } from "../actions/index";
//import {compose} from  'redux'


class FetchPlayer extends React.Component {
  state = {
    title: "",
    };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
   e.preventDefault();
   this.setState({ title : ""});
   console.log("Updating data")
   this.props.history.push("./fetchPlayer")

  };
  render() {
    const { title } = this.state;
    this.props.addArticle({ title });
    return (
      <div className="login-div">
        <div className="logo-div">
          {/* <Logo /> */}
        </div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              type="title"
              placeholder="enter title..."
              name="title"
              required
              onChange={this.handleChange}
              value={title}
            />
            <button onSubmit={this.handleSubmit}>Save</button>
          </form>
        </div>
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    addArticle: (article) => dispatch(addArticle(article))
  };
}



//export default  connect (mapStateToProps, mapDispacthToProps)(FetchPlayer)

const Form = connect(null, mapDispatchToProps)(FetchPlayer);

export default withRouter (Form);




//export default withRouter (FetchPlayer) ; 








