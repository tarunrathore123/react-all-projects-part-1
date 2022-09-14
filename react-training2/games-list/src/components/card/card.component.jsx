import React from "react";

import { Route, Link } from "react-router-dom";
import "./card.styles.scss";
import "../button/button.scss";
import { connect } from "react-redux";
import { addJob } from "../../redux/user/user.actions";

const Card = (props) => {
  const { addJob } = props;

  return (
    <Link
      to={`/detail/${props.game.id}`}
      style={{ textDecoration: "none" }}
      onClick={() => addJob(props.game)}
    >
      <div className="column">
        <img src={props.game.logo} />

        <div className="title">{props.game.title}</div>
        <div className="subtitle">{props.game.title}</div>

        <div className="card-button">
          <button className="apply">Apply now</button>
          <button className="message"> Message</button>
        </div>
      </div>
    </Link>
  );
};
const mapDispatchToProps = (dispatch) => ({
  addJob: (job) => dispatch(addJob(job)),
});

export default connect(null, mapDispatchToProps)(Card);
