import { connect } from 'react-redux';
import App from './App';
import { getPeople } from '../../state/people/actions';

const mapStateToProps = state => ({ people: state.people });

const mapDispatchToProps = dispatch => ({
  getPeople: () => dispatch(getPeople()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
