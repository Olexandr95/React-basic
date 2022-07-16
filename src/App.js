import './App.css';
import Title from './Titile/title';
import PostComponent from './Post/Post.jsx';
function App() {
const ANAKIN_IMAGE = "https://media.gq-magazine.co.uk/photos/620529e268071f7ecff06fac/1:1/w_1080,h_1080,c_limit/100222_Bobba_hp.jpg";
const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";
const postObj = [
  {
    name: "Anakin Skywalker",
    photo: ANAKIN_IMAGE,
    nickname: "@dart_vader",
    content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
    image: RAY_IMAGE,
    date: "26 Feb",
    comments: "482",
    reposts: "182",
    likes: "887",
  },
];
  return (
    <div className='app'>
      <Title></Title>
      <PostComponent postObj = {postObj[0]}></PostComponent>
    </div>
  );
}

export default App;
