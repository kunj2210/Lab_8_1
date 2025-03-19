import ProfileCard from './PC';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <h1>Personal Profile Card</h1>
      <div className="cards-container">
        <ProfileCard 
          name="Donna Perlson" 
          photo="https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmVzc2lvbmFsJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" 
          bio="Senior associate at Hardman and Pearson." 
        />
        <ProfileCard 
          name="Sundar Pichai" 
          photo="https://images.cnbctv18.com/uploads/2019/12/Sundar-Pichai-2.jpg?im=FitAndFill,width=500,height=300" 
          bio="Chief Executive Officer at Google." 
        />
        <ProfileCard 
          name="Tony Stark" 
          photo="https://wellgroomedgentleman.com/wp-content/uploads/2023/10/Tony_Stark_Beard_with_Quiff_Hairstyle.width-800.jpg" 
          bio="Owner of Stark Industries." 
        />
      </div>
    </div>
  );
};

export default App;