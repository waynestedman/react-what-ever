// app.jsx

// import Card from './components/Card';
// import Badge from './components/Badge';
import Button from './components/button/Button.jsx';

function App() {

  return (
    <>
      {/* <Badge text = 'cool badge' />
      <Card /> */}
      <div 
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '500px',
          width: '500px',
          marginInline: 'auto',
          marginTop: '2rem',
          backgroundColor: '#5A769d',
        }}>
        <Button 
          label = 'Label'
          size = 'large'
          state = 'platter'
          style = 'capsule'
          onClick={() => alert('Button clicked!')}>
          Click Me
        </Button>
      </div>
    </>
  )
}

export default App;
