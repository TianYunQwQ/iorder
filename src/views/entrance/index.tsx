
import './background.scss'
import { Button } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'

const Entrance = () => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/login')
      }
    const createAccount = () => {
        navigate('/account')
    }
    return (
        <div className="background-container">
            <Button 
              block 
              shape='rounded' 
              color='primary' 
              onClick={handleButtonClick} 
              size="small" 
              className="center-content"
              style={{ margin: '40px 0'}}
            >
            Login
            </Button>
            <Button
              block
              loading="auto"
              type="submit"
              color="primary"
              shape='rounded'
              onClick={createAccount}
              size="small"
              fill='none'
              style={{ margin: '8px 0', '--text-color':'#ffffff'}}
            >
                Create an account NOW
              </Button>
        </div>
    );
}

export default Entrance

