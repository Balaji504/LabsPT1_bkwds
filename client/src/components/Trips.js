import React, { Component } from "react"
import { connect } from "react-redux"

import Trip from "./Trip"
import { getTrips } from "../redux/actions/trips"

class Trips extends Component {
  componentDidMount() {
    this.props.getTrips()
  }

  render() {
    const { trips } = this.props
    return (
      <div>
        {!trips.length && "No unarchived trips!"}
        {trips.map(trip => (
          <Trip key={trip.id} trip={trip} archived={false} />
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  trips: Object.keys(state.trips.trips).map(key => state.trips.trips[key])
})

const mapDispatchToProps = { getTrips }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Trips)
