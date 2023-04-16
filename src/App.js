import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types'




function App(props) {
  return (
    <>
      <h1>Hey {props.name}</h1>
      <h1>Hey {props.age}</h1>
      <h1>Marriaed status {props.isMarried.toString()}</h1>
      <h1>Marriaed status {String(props.isMarried)}</h1>
      <h1>{props.arr}</h1>
      <h1>{props.arr[0]}</h1>
      <h1>{props.arr[1]}</h1>
      <h1>{props.arr[2]}</h1>
  
    </>
  );
}

//setting restriction for props data types
App.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  isMarried: PropTypes.bool,
  arr: PropTypes.array
}

App.defaultProps = {
  name: 'anonymous',
  age: 18
}
export default App;
