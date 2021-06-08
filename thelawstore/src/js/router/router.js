import { BrowserRouter as Router, Route } from 'react-router-dom';
import Vacancies from '../pages/vacancies';
import Admin from '../pages/admin';

function ReactRouter() {
    //Returns a react router to navigate the application.
    return (
      <Router>
          <Route path="/" exact component={Vacancies} />
          <Route path="/jobs" exact component={Vacancies} />
          <Route path="/admin" component={Admin} />

      </Router>
    );
  }
  
export default ReactRouter;
  