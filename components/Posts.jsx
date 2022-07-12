import Post from "./Post";


const DUMMY_DATA = [
    {
        id: '123',
        username: 'johndoe',
        userImg: 'https://bit.ly/3uFFiea',
        img: 'https://bit.ly/3uFFiea',
        caption: 'Subscribe and get notified when new posts are added',
    },
    {
        id: '123',
        username: 'johndoe',
        userImg: 'https://bit.ly/3uFFiea',
        img: 'https://bit.ly/3uFFiea',
        caption: 'Subscribe and get notified when new posts are added',
    },
];

const posts = DUMMY_DATA;

function Posts() {
    return (
        <div>
            {posts.map((post) => (
                <Post
                    key={post.id}
                    id={post.id}
                    username={post.username}
                    userImg={post.userImg}
                    img={post.img}
                    caption={post.caption}
                />
            ))}
            {/* <Post /> */}
            {/* <Post /> */}
        </div>
    )
}

export default Posts;