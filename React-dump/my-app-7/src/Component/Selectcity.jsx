import React, { useState } from 'react'

let Selectcity = () => {
    let [cities, setCities] = useState();
    let data = [
        {
            state: "odisha",
            city: ["bhubaneswar", "berhampur", "rourkela", "baleswar"]
        },
        {
            state: "karnataka",
            city: ["bengaluru", "gokarna", "mysore", "gulbarga"]
        }
    ];

    let changeState = (event) => {
        data.filter((a) => {
            if (a.state === event.target.value);
            {
                return setCities(a.cities);
            }
        })
    }

    console.log(cities)

    return (
        <div>
            <form>
                <label>States</label>
                <select onChange={changeState}>
                    <option >Select state</option>
                    {
                        data.map((state) => {
                            return (
                                <option value={state.state}>{state.state}</option>
                            )
                        })
                    }
                </select><br />

                <label>Select City:</label>
                <select>
                    <option value="">Select CIty</option>
                    {

                    }
                </select>
            </form>
        </div>
    )
}

export default Selectcity;