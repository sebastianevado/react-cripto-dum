import React from 'react';

const CoinRow = ({ coin, index }) => {
    return (
        <tr>
            <td>{index}</td>
            <td>
                <img src={coin.image} alt={coin.name} style={{ width: '20px' }} className='img-fluid me-4' />
                <span>
                    {coin.name}
                </span>
                <span className='ms-3 text-mute text-upercase'>{coin.symbol.toUpperCase()}</span>
            </td>
            <td>{`USD ${coin.current_price.toLocaleString()}`}</td>
            <td className={coin.price_change_percentage_24h > 0 ? 
                'text-success' 
                : 'text-danger'}>
                    {coin.price_change_percentage_24h}</td>
            <td>{coin.total_volume}</td>
        </tr>
    );
};

export default CoinRow;