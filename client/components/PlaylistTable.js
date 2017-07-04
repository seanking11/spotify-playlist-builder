import React from 'react'
import { Table } from 'react-bootstrap'

const PlaylistTable = ({ items }) => {
  return (
    <Table striped bordered condensed hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Artist</th>
          <th>Album</th>
          <th>Duration</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item =>
          <tr>
            <td>0</td>
            <td>{item.track.name}</td>
            <td>{item.track.artists[0].name}</td>
            <td>{item.track.album.name}</td>
            <td>{item.track.duration_ms}</td>
          </tr>
        )}
      </tbody>
    </Table>
  )
}

export default PlaylistTable
