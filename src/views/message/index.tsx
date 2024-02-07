
import { useNavigate } from 'react-router-dom';

function Message() {
  const navigate = useNavigate();

  // 点击按钮时跳转到默认路由
  const handleButtonClick = () => {
    navigate('/'); 
  };

  return (
    <div>
      <div>消息</div>
      <button onClick={handleButtonClick}>测试跳转到默认路由</button>
    </div>
  );
}

export default Message;