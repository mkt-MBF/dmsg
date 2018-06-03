import React from 'react'

export default class ChangeFriend extends React.Component {
  render() {
    return (
        <nav>
          <div className="nav-wrapper teal">
          <form className="container">
            <div className="row">
              <div className="input-field col s10">
                <i className="prefix material-icons tiny">person</i>
                <input ref="friendAddress" type="text" placeholder="Friend address here..." />
              </div>
              <div className="input-field col s2">
                <button type="submit" className="btn-floating btn-large">
                  <i className="material-icons">refresh</i>
                </button>
              </div>
            </div>
          </form>
          </div>
        </nav>
    )
  }
}
