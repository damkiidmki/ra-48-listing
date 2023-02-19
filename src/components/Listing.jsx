function Listing({items}) {
    return (
      <div className="item-list">
       {
            items.map(item => {
            return ( 
                <div className="item" key={item.listing_id}> 
                  <div className="item-image">
                    <a href={item.url}>
                     <img src={(item.MainImage && item.MainImage.url_570xN) ? item.MainImage.url_570xN : 'undefined'} alt={item.title}></img>
                   </a>
                  </div>
                  <div className="item-details">
                    <p className="item-title">
                        {(item.title && item.title.length > 50) ? `${item.title.slice(0, 50)}...` : item.title}
                    </p>
                    <p className="item-price">
                        {item.currency_code === "EUR" ? "€" : item.currency_code === "USD" ? "$" : item.currency_code + ' '}{item.price}
                    </p>
                    <p className=
                        {item.quantity <= 20 ? (item.quantity < 10 ? "item-quantity level-low" :
                         "item-quantity level-medium") : "item-quantity level-high"}>{item.quantity} left
                    </p>
                  </div>
                </div>
                )
            })}
      </div>
  )
}

export default Listing