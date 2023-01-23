import React, { useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

const Card = ({ data }) => {

    const {
        name,
        email,
        address,
        phone,
        website,
        company,
    } = data

    const [clicked, setClicked] = useState(false);

    const toggle = () => {
        setClicked(!clicked)
    }

    return (
        <div className={`accordion ${clicked ? "active" : ""}`}>
            {/* visible section */}
            <div className='sec-shown'>
                <span style={{ width: '10%'}}>
                    {company.name}
                </span>
                <div style={{ width: '16%'}}>
                    <h4>Contact</h4>
                    <span>
                        {name}
                    </span>
                </div>
                <div style={{ width: '16%'}}>
                    <h4>Street</h4>
                    <span>{address.street}</span>
                </div>
                <div style={{ width: '10%'}}>
                    <h4>City</h4>
                    <span>{address.city}</span>
                </div>
                <div
                    onClick={toggle}
                    className='toggle-btn'
                >
                    {!clicked ?
                        <AiOutlinePlus size={30} /> :
                        <AiOutlineMinus size={30} />
                    }
                </div>
            </div>
            {/* hidden section */}
            {clicked &&
                <div className='sec-hide'>
                    <div>
                        <h5>Company description :</h5>
                        <span>{company.bs}</span>
                        <h6 style={{marginTop: '4px'}}>
                            company slogan : <i>"{company.catchPhrase}"</i>
                        </h6>
                    </div>
                    <div
                        className='wrapper'
                    >
                        <div className='details'>
                            <div>
                                <h5>Contact Person</h5>
                                <span>{name}</span>
                            </div>
                            <div>
                                <h5>Email</h5>
                                <span>{email}</span>
                            </div>
                            <div>
                                <h5>Website</h5>
                                <a
                                    href={`https://${website}`}
                                    target="_blank"
                                    rel="noopener noreferrer"

                                >{website}
                                </a>
                            </div>
                            <div>
                                <h5>Phone</h5>
                                <span>{phone.split(" ")[0]}</span>
                            </div>
                        </div>
                        <div className='details'>
                            <div>
                                <h5>Address</h5>
                                <span>{address.suite}, {address.street}</span>
                            </div>
                            <div>
                                <h5>Street</h5>
                                <span>{address.street}</span>
                            </div>
                            <div>
                                <h5>Zip coded</h5>
                                <span>{address.zipcode}</span>
                            </div>
                            <div>
                                <h5>City</h5>
                                <span>{address.city}</span>
                            </div>
                        </div>
                    </div>
                </div>}
        </div>
    )
}

export default Card