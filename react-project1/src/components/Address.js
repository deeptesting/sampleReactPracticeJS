import React from 'react';

 
export function AddressRender(props) {

    const [address, setAddress] = React.useState(props.value);

    React.useEffect(()=>{
        props.onAddressChange(address);
    },[address])

    React.useEffect(()=>{
        setAddress(props.value);
    },[props.value])


    const changeAddress = (assignedAddressChange) =>{
        setAddress((prevState)=>{ return({...prevState, ...assignedAddressChange }) });
    }

    return(
    <div style={{backgroundColor:"pink"}}>
        <h3>Address</h3>
        <div>
            <label>HouseNo</label>
            <input type="text" value={address.houseno || ""} onChange={(event) => { 
                changeAddress({houseno: event.target.value});
            }} />
        </div>
        <div>
            <label>Street</label>
            <input type="text" value={address.streetname || ""} onChange={(event) => { 
                 changeAddress({streetname: event.target.value});
            }} />
        </div>
        <div>
            <label>City</label>
            <input type="text" value={address.city || ""} onChange={(event) => { 
                 changeAddress({city: event.target.value});
            }} />
        </div>
        <div>
            <label>PinCode</label>
            <input type="text" value={address.pincode || ""} onChange={(event) => { 
                 changeAddress({pincode: event.target.value});
            }} />
        </div>
        <div><br/> {JSON.stringify(address)}</div>
    </div>
    )
}