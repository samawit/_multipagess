import Counter from '../../component/Counter/Counter';
import Timer from '../../component/Timer/Timer';
import Add from '../../component/Add/Add';
import Temperatures from '../../component/Temperatures/Temperatures';

import './Components.css';



function Components() {
  return (
    <div className='mine-container'>
      
      <h1 className='mine-title'>REACT COMPONENTS</h1>
      <div className='container'>
        <div className='box1-2'>
    <Counter  />
    <Timer />
    </div>
    <div className='box3'>
    <Add />
    </div>
    <div className='box4'>
    <Temperatures />
    </div>
    </div>
    <h2 className='mine-name'>นายสมาวิทย์ ธีรกุลชัยกิจ 66086480</h2>
    </div>
  );
}

export default Components;
