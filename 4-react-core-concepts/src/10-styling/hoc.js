function withCard(Component) {
  return function (props) {
    return (
      <div className="card">
        <div className="card-header">{props.title}</div>
        <div className="card-body">
          <Component {...props} />
        </div>
      </div>
    );
  };
}

export { withCard };
