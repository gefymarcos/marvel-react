ReactDOM.render(
  <Welcome title="Senac" />,
  document.getElementById('root')
);


class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "não clicou" };
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1> // Senac
        <button
          onClick={() => this.setState({ text: "clicou"})}
        >
          {this.state.text} // não clicou
        </button>
      </div>
    );
  }
}
