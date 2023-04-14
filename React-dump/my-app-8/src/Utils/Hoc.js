import React from 'react'

const Hoc = (WrapperComponent) => {
    let Network = () => {
        let Jio = {
            plan: 200,
            sms: 100,
            call: "unlimited"
        }
        return(
            <div>
                <WrapperComponent data={Jio}/>
            </div>
        )
    }
    return Network;
}

export default Hoc;