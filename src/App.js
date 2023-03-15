import PostsList from './features/posts/PostsList'
import './App.css';
import AddPostForm from './features/posts/AddPostForm';
import SectionAdjuster from './features/SectionAdjuster';

function App() {
  return (
    <div className="App">
   
      <PostsList />
      <AddPostForm />
      <SectionAdjuster />
    </div>
  );
}

export default App;
