export default class Tweet extends React.Component {
  render() {
    return (
      <li className="collection-item avatar">
        <img className="circle" src={this.props.gravaltar}/>
        <i className="material-icons circle">{this.props.gravaltar}</i>
        <span className="title">{this.props.name}</span>
        <time>{this.props.formattedDate}</time>
        <p>{this.props.body}</p>
      </li>
    );
  }
}
