/* eslint-disable react/prop-types */
 function MenuItem({image,name,content, price}) {
    return ( 
        <div className="menuItem">
            <div style={{backgroundImage:`url(${image})`}}>
            
            </div>
                 <h1 style={{margin:"10px"}}>{name}</h1>
                <h6>{content}</h6>
                <p style={{margin:"50px"}}>
                    <i style={{color:"red"}}>{price} TL</i>
                </p>

        </div>
     );
}

export default MenuItem;