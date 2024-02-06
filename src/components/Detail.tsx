import { useMenuStore } from '@/store';
import {Link, useLocation, useNavigate} from 'react-router-dom';

function Detail() {
    const navigate = useNavigate()
    const location = useLocation()
    const {menuList} = useMenuStore()
    const totalPrice = location.state?.totalPrice || 0
    const numbers = location.state?.quantities || []

    return (
        <div>
            <em>
                <strong>
                    <h1>Order</h1>
                </strong>
            </em>

            {menuList.map((image, index) => (
                // Conditionally render the images element if the quantity is greater than 0
                numbers[index] > 0 && (
                    <div key={index} className="menu-item" style={{display: 'flex', alignItems: 'center'}}>
                        <div>
                            <p>
                                <em>
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    }}>
                                        <strong>{image.name}</strong>
                                        <strong style={{marginRight: '0'}}>x{numbers[index]}</strong>
                                    </div>
                                </em>
                            </p>
                            <p style={{maxWidth: '500px'}}>
                                {image.ingredients}
                            </p>
                            <p>
                                {image.price.toFixed(2)}kr<br/>
                            </p>
                        </div>
                    </div>
                )
            ))}

            <div style={{marginTop: '20px', position: 'absolute', bottom: '60px', left: '20px'}}>
                <Link to="/todo">
                    <button
                        style={{borderRadius: '10px', backgroundColor: 'orange', padding: '10px'}}>
                        Back
                    </button>
                </Link>
            </div>
            <div style={{marginTop: '20px', position: 'absolute', bottom: '120px', right: '20px'}}>
                <strong>Total : {totalPrice.toFixed(2)} kr</strong>
            </div>

            <div style={{marginTop: '20px', position: 'absolute', bottom: '60px', right: '20px'}}>

                    <button
                        onClick={() => {
                            navigate('/todo')
                        }}
                        style={{borderRadius: '10px', backgroundColor: 'orange', padding: '10px'}}>
                        Place Order
                    </button>

            </div>
        </div>
    );
}

export default Detail;