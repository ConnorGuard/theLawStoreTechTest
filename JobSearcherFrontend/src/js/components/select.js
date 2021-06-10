import Select from 'react-select';
import '../../css/components/select.css';

//I understand this is cheating. In a real implemtation,
//I would Fill the options from the database.
const options = [
    { value: 'Frontend', label: 'Frontend' },
    { value: 'Backend', label: 'Backend' },
    { value: 'Fullstack', label: 'Fullstack' }
  ]
export default function SelectJobType(props) {
  const onchangeJobType = (item) => {
    if (item.length <4) {
      props.setJobType(item);
    }
  };
  return(
    <Select
    isMulti
    name="colors"
    options={options}
    onChange={onchangeJobType}
    className="basic-multi-select"
    classNamePrefix="select"
  />
  );
}
  