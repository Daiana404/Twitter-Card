import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard/TwitterFollowCard';

export function App () {

    const users = [
        {
            userName: 'daia_polo',
            nickName: 'Daiana Polo',
            isFollowing: true,
            avatar: 'https://cdn-icons-png.flaticon.com/512/4322/4322991.png'
        },
        {
            userName: 'elon_musk',
            nickName: 'Elon Musk',
            isFollowing: false,
            avatar: 'https://cdn-icons-png.flaticon.com/512/1810/1810945.png'
        },
        {
            userName: 'franquito08',
            nickName: 'Franco Guardiani',
            isFollowing: true,
            avatar: 'https://cdn-icons-png.flaticon.com/512/1326/1326388.png'
        },
        {
            userName: 'McConaughey',
            nickName: 'Matthew McConaughey',
            isFollowing: false,
            avatar: 'https://cdn-icons-png.flaticon.com/512/3093/3093444.png'
        }
    ]
    return (
        <section className='App'>
            {
                users.map(({ userName, nickName, isFollowing, avatar}) => {
                    //const { userName, nickName, isFollowing, avatar} = user
                    return (
                        <TwitterFollowCard key={userName}
                            avatar = {avatar}
                            initialIsFollowing = {isFollowing}
                            userName = {userName}>
                            {nickName}
                        </TwitterFollowCard>
                    )
                })
            }
        </section>
   )
}