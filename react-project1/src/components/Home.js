import React from 'react';
import { AddressRender } from "./Address";

export function Home(props) {

    const [name, setName] = React.useState("Deep");
    const defaultAddress = {
        houseno: "15/1",
        streetname: "S.V.Road",
        city: "Kolkata",
        pincode: "700051"
    }
    const [homeAddress, setHomeAddress] = React.useState(defaultAddress);
    const [currentAddress, setCurrentAddress] = React.useState({});

    const [IscheckedAddress, setIscheckedAddress] = React.useState(false);


    const _onAddressChange = (updatedAddress) => {
        console.log("updatedAddress ", updatedAddress);
        setHomeAddress(updatedAddress);
    }

    const _onCurrentAddressChange = (updatedAddress) => {
        setCurrentAddress(updatedAddress);
    }

    const _onChange = (event) => { setName(event.target.value); }

    const _onCheckAddressChange = (event) => { 
        setIscheckedAddress(!IscheckedAddress);
    }

    React.useEffect(()=>{
      if(IscheckedAddress){
        setCurrentAddress(homeAddress);
      }else{
        setCurrentAddress({});
      }
    },[IscheckedAddress])

    return (
        <div>
            <h1>Hello {props.name}!!!!, Welcome to Home Page ...</h1>
            <form>
                <div>
                    <label>Name</label>
                    <input type="text" value={name} onChange={_onChange} />
                </div>
                <div>
                    <label>Home Address </label>
                    <AddressRender value={homeAddress} onAddressChange={_onAddressChange}></AddressRender>
                </div>
                <div>
                <label>Current Address  {IscheckedAddress.toString()}</label><br/>
                <input type="checkbox" id="checkAddress" name="checkAddress" value={IscheckedAddress} onChange={_onCheckAddressChange} />
                  <label for="checkAddress"> Is Same as Home address ?</label>
                <AddressRender value={currentAddress} onAddressChange={_onCurrentAddressChange}></AddressRender>
                </div>



            </form>

            <button>Submit</button>
            <div>
                <p>Your Name is {name}</p><br />
                homeAddress : {JSON.stringify(homeAddress)} <br/>
                currentAddress: {JSON.stringify(currentAddress)} 
            </div>


        </div>
    );
}
export const HOME_COLOR = "Red";
//name ="Deep"   X
// name ="Madhabi"   X
// setName("Deep")