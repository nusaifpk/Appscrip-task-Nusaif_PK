import { DashboardOutlined } from '@mui/icons-material';
import '../styles/Mainbar.css';

const Mainbar = () => {
  return (
    <div className='mainbar-container'>
      <ul className='mainbar-list'>
        <li><span><DashboardOutlined style={{fontSize:"18px"}}/></span>Lorem ipsum dolor</li>
        <li><span><DashboardOutlined style={{fontSize:"18px"}}/></span>Lorem ipsum dolor</li>
        <li><span><DashboardOutlined style={{fontSize:"18px"}}/></span>Lorem ipsum dolor</li>
      </ul>
    </div>
  );
};

export default Mainbar;
