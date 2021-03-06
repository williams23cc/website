import React from "react"
import "./card_teacher.css"

export default function Card_Teacher(props) {
  return (
    <div className="card border-info rounded">
      <div className="card-body">
        <div className="row">
          <div className="col-sm-2" width="20%">
            <img
              src={props.rutafoto}
              className="rounded-circle"
              width="136"
              height="136"
            />
          </div>
          <div className="col-sm-9">
            <h2>
              <b>{props.name}</b>
            </h2>
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
