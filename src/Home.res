module App = {
  @react.component
  let make = () => {
    <div> {React.string("Hello World")} </div>
  }
};

switch(ReactDOM.querySelector("#root")){
| Some(root) => ReactDOM.render(<App/>, root)
| None => () // do nothing
}
