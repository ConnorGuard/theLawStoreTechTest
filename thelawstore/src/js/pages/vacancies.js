import React, { useLayoutEffect, useEffect, useState } from 'react';
//pages
import '../../css/pages/vacancies.css';
//components
import Card from '../components/card'
import Select from '../components/select'
import GetJobs from '../requests/getJobs';
//bootstrap
import Button from 'react-bootstrap/Button';

function Vacancies() {
  const [jobs, setjobs] = useState([]);
  const [toggled, setToggled] = useState(true);
  const [mobile, setMobile] = useState(false);
  const toggleMobile = 750;
  //On page load
  useEffect(() => {
        GetJobs().then((data)=>{
          setjobs(data);
        })
        .catch((error) => {
          console.log(error)
          alert('Error:', error);
        });
  }, []);

  //On change size
  useLayoutEffect(() => {
    function updateSize() {
      if(window.innerWidth<toggleMobile){
          setToggled(false);
          setMobile(true);
      }else{
        setMobile(false);
      }
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <div className="vacancies">
      <h2 className="title">Open Vacancies</h2>

      <div className = "toolBar">
        {(mobile) ? null : <Toggle toggled = {toggled} setToggled = {setToggled}/>}
        <Select />
      </div>

      <Jobs jobs={jobs} toggled = {toggled}/>
    </div>);
}



//Displays the jobs
//Maps data from the API to card components
function Jobs(props) {
  return (<div className={(props.toggled)? "grid" : "list"}>
    {props.jobs.map((job, i)=>{return(<Card job = {job} i = {i} toggled = {props.toggled}/>)})}
  </div>);
}

//Toggles between List and Grid view
const Toggle = (props) => {
  const toggleImage = () => props.setToggled(!props.toggled);
  return (
    <div className = "toggle">
      <Button className = "btn" onClick={toggleImage}>{(props.toggled) ? <List /> : <Grid />}</Button>
    </div>
  );
}

//Gets Grid Icon
function Grid(){
  return(<div ><svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" fill="currentColor" className="bi bi-grid-fill" viewBox="0 0 16 16">
  <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z"/>
</svg></div>);
}

//Gets List icon
function List(){
  return(<div><svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg></div>);
}

export default Vacancies;


