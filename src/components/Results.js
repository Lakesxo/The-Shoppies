import React from 'react'
import Movie from './Movie'
import Button from './Button'

const Results = () => {
    return (
        <div className="purpleCont hfwdth overScroll">
            <label htmlFor="Results">Results :</label>
            <Movie img="https://res.cloudinary.com/dt9pwfpi5/image/upload/v1619434294/dark-main_tauqht.png" title="Lakes ojusticeo" year="1998" button={<Button text="Nominate" classs="enabled"/>} />
            <Movie img="https://res.cloudinary.com/dt9pwfpi5/image/upload/v1606898185/undraw_secure_login_pdn4_sbayea.png" title="Lakes bando" year="1969" button={<Button text="Nominate" classs="disabled"/>} />
            <Movie img="https://res.cloudinary.com/dt9pwfpi5/image/upload/v1607514019/undraw_welcome_3gvl_athq0w.png" title="From deep lakes" year="2020" button={<Button text="Nominate" classs="enabled"/>} />
        </div>
    )
}

export default Results