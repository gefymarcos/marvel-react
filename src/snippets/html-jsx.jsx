function Home(props) {
  if (props.isLoggedIn) {
    return <LoggedUser />;
  }
  return <Unauthorized />;
}

ReactDOM.render(
  <Home isLoggedIn={true} />,
  document.getElementById('root')
);
