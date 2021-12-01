import './style.css'

import { produtos } from "../../providers/catalogue";
import Button from '../../components/button';

function Home () {

    const type = 'catalogue'

    return (
        <div className='displayContainer'>
            <h2 className='pageTitle'>Assistentes pessoais</h2>
            <div className='display'>
                {produtos.map((item, index) => {
                    return (
                        <div className='itemContainer' key={index}>
                            <img src={item.image} alt={item.name}/>
                            <div className='itemDescription'>
                                <h3>{item.name}</h3>
                                <h2>R$ {item.price},00</h2>
                            </div>
                            <Button type={type} item={item} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;