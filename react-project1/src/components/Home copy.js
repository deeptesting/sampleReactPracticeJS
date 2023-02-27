import React from 'react';

export function HomeCopy(props) {

    const [name, setName] = React.useState("Deep");
    const defaultAddress = {
        houseno: "15/1",
        streetname: "S.V.Road",
        city: "Kolkata",
        pincode: "700051"
    }
    const [address, setAddress] = React.useState(defaultAddress);

    // Example changeAddress({houseno: event.target.value});
    const changeAddress = (assignedAddressChange) =>{
        setAddress((prevState)=>{ return({...prevState, ...assignedAddressChange }) });
    }

    return (
        <div>
            <h1>Hello {props.name}!!!!, Welcome to Home Page ...</h1>
            <form>
                <div>
                    <label>Name</label>
                    <input type="text" value={name} onChange={(event) => { setName(event.target.value); }} />
                </div>
                <div>
                    <h3>Address</h3>
                    <div>
                        <label>HouseNo</label>
                        <input type="text" value={address.houseno} onChange={(event) => { 
                            changeAddress({houseno: event.target.value});
                             //setAddress((prevState)=>{ return({...prevState, houseno: event.target.value}) });
                        }} />
                    </div>
                    <div>
                        <label>Street</label>
                        <input type="text" value={address.streetname} onChange={(event) => { 
                             //setAddress((prevState)=>{ return({...prevState, streetname: event.target.value}) });
                             changeAddress({streetname: event.target.value});
                        }} />
                    </div>
                    <div>
                        <label>City</label>
                        <input type="text" value={address.city} onChange={(event) => { 
                             //setAddress((prevState)=>{ return({...prevState, city: event.target.value}) });
                             changeAddress({city: event.target.value});
                        }} />
                    </div>
                    <div>
                        <label>PinCode</label>
                        <input type="text" value={address.pincode} onChange={(event) => { 
                             //setAddress((prevState)=>{ return({...prevState, pincode: event.target.value}) });
                             changeAddress({pincode: event.target.value});
                        }} />
                    </div>
                </div>

            </form>

            <button>Submit</button>
            <div>
                <p>Your Name is {name}</p><br />
                <br/>
                {JSON.stringify(address)}
            </div>


        </div>
    );
}
export const HOME_COLOR = "Red";
//name ="Deep"   X
// name ="Madhabi"   X
// setName("Deep")