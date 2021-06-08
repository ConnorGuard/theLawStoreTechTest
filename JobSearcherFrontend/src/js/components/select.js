import Select from 'react-select';
import '../../css/components/select.css';

const options = [
    { value: 'Frontend', label: 'Frontend' },
    { value: 'Backend', label: 'Backend' },
    { value: 'Fullstack', label: 'Fullstack' }
  ]
export default () => (
  <Select
    defaultValue={options}
    isMulti
    name="colors"
    options={options}
    className="basic-multi-select"
    classNamePrefix="select"
  />
);