import React, { useContext } from 'react'
import PropType from 'prop-types'
import ContactContext from "../../context/contact/contactContext";
 const ContactItem = ({ contact }) => {
    const contactContext = useContext(ContactContext);
    const {deleteContact}= ContactContext;

    const  { id , name , email, phone , type } = contact;

    const onDelete = ()=>{
        deleteContact(id)

    }
    return (
        <div className = 'card bg-light'>
            <h3 className ="text-primary text-left">
                {name}{' '} <span style={{float:'right'}} className= {'badge '+ (type ==='personal' ? 'badge-success':'badge-primary')} >
                    {type.charAt(0).toUpperCase()+ type.slice(1)}
                </span>
            </h3>
            <ul className='list'>
     
            <li>
                <i className="far fa-envelope-open"/> {email}
            </li>
            <li>
                <i className="fas fa-mobile-alt"/> {phone}
            </li>

            </ul>
            <p>
            <button className="btn btn-dark btn-sm">Edit </button>
            <button className="btn btn-danger btn-sm"onClick={onDelete}>Delete </button>
            </p>
        </div>
    )
}
ContactItem.PropType = {
    contact:PropType.object.isRequired
}
export default ContactItem;