import React from "react";

export default function (props) {
  return (
    <table
      className="table table-hover text-centered table-striped table-dark"
      id="table"
    >
      <tbody>
        <tr>
          <th width="30%">IMAGE</th>
          <th width="10%">Login</th>
          <th width="10%">TYPE</th>
          <th width="25%">WEB PAGE</th>
          <th width="25">URL</th>
        </tr>
        <tr>
          <td>
            <img
              src={props.item.avatar_url}
              className="img-thumbnail"
              alt="lo"
            />
          </td>
          <td>{props.item.login}</td>
          <td>{props.item.type}</td>
          <td className="tda">
            <a href={props.item.html_url}>{props.item.html_url}</a>
          </td>
          <td>
            <a href={props.item.html_url}>
              <button className="btn btn-success">
                Click Here to got to Repo
              </button>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
