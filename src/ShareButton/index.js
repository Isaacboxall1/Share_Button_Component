/* eslint-disable jsx-a11y/anchor-has-content */
import './sharebutton.css'

export default function ShareButton({share}) {

    return (
        <div className="share">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <span>share</span>
            <nav>
                <a href={share.facebook} target="_blank" rel="noopener noreferrer"><i className='fa fa-facebook' aria-hidden='true'></i></a>
                <a href={share.twitter} target="_blank" rel="noopener noreferrer"><i className='fa fa-twitter' aria-hidden='true'></i></a>
                <a href={share.linkedin} target="_blank" rel="noopener noreferrer"><i className='fa fa-linkedin' aria-hidden='true'></i></a>
                <a href={share.instagram} target="_blank" rel="noopener noreferrer"><i className='fa fa-instagram' aria-hidden='true'></i></a>
            </nav>
        </div>
    )
}