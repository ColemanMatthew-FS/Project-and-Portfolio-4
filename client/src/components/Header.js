import React from 'react'
import {AiFillHome} from 'react-icons/ai'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <header style={styles.myHeader}>
            <div style={styles.left}>
                <Link to="/" style={styles.logo}><AiFillHome/></Link>
            </div>
            <div style={styles.center}>
                <h1>Meal.io</h1>
            </div>
        </header>
    )
}

export default Header

const styles= {
    myHeader: {
        position: 'fixed',
        zIndex: '1',
        width: '100%',
        paddingLeft: '1%',
        paddingRight: '1%',
        backgroundColor: '#FFEFD1',
        color: 'white',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    left: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo: {
        fontSize: '1.5rem',
    },
    center: {
        display: 'flex',
        flexDirection: 'row',
        width: '90%',
        fontWeight: 'bold',
        color: '#141414',
        justifyContent: 'center'
    }
}