import './App.css';
import AddPostForm from './features/posts/AddPostForm';
import PostsList from './features/posts/PostsList';
import { Routes, Route} from 'react-router-dom';
import Layout from './components/Layout';
import SinglePostPage from '../src/features/posts/SinglePostPage';
import EditPostForm from './features/posts/EditPostForm';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<PostsList/>} />
        <Route path='post'>
          <Route index element={<AddPostForm />} />
          <Route path=':postId' element={<SinglePostPage />} />
          <Route path='edit/:postId' element={<EditPostForm />} />
        </Route>
      </Route>
    </Routes>
    </div>
  );
}

export default App;
