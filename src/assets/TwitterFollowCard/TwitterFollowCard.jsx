import React from 'react';
import './TwitterFollowCard.css';
import { useState } from 'react';
 /* children es lo que aparece cuando el componente envuelve a algo */
export const TwitterFollowCard = ({userName = 'unknown',children, avatar, initialIsFollowing = false}) => {

    //Estado interno, corresponde a cada componente
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

    //Cambiar texto del boton para dejar de seguir
    
    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    //Texto que se modifica según isFollowing
    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    //Se modifica la clase según el estado del isFollowing
    const buttonClassName = isFollowing ?
    'button-follow button-follow--is-following' :
    'button-follow';

  return (
    <article className="dp-follow-card">
            <header className='dp-header-user'>
                <img className='dp-avatar-tw' src={avatar} alt={userName} />
                <div>
                    <strong className='dp-name-tw'>{children}</strong>
                    <span className='dp-user-tw'>@{userName}</span>
                </div>
            </header>
            <aside>
                <button onClick={handleClick} className={buttonClassName}>
                    <span className='tw-following-text'>{text}</span>
                    <span className='tw-following-stopFollowing'>Dejar de seguir</span>
                    </button>
            </aside> 
        </article>
  )
}
