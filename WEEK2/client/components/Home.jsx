
const containerStyle1 = {
  display: "flex",
  alignItems: "center", // Aligns the image and text vertically centered
  padding: "20px",     // Optional: Adds some padding around the container
};

const imageStyle1 = {
  marginRight: "20px", // Adds space between the image and text
};

const containerStyle = {
  display: 'flex',
  alignItems: 'center', // Center items vertically
  padding: '20px',
  backgroundColor: '#020408',
  justifyContent: 'center',
};

const imageStyle = {
  flex: '0 0 auto', // Prevent image from stretching
  width: '150px', // Adjust as needed
  height: 'auto', // Maintain aspect ratio
  marginRight: '20px', // Space between image and text
};

const textContainerStyle = {
  width: '38%',
  
};
const h1Style = {
  margin: '0 0 10px 0', 
  fontSize: '24px', 
  color:'#d79245'
};

const pStyle = {
  margin: '0', // Remove margin for paragraph
  color:'#80ade4'
};

export default function Home() {
  return (
    <div style={containerStyle}>
      <img
        src="MyPic2.jpg" // Replace with your image URL
        alt="Description"
        style={imageStyle}
      />
      <div style={textContainerStyle}>
        <h1 style={h1Style}>
          "They called me a prodigy, talented, blessed.<br />But they don't know how hard I've worked."
        </h1>
        <p style={pStyle}>
          Versatile programmer with expertise in Unity, web development, and graphic design.<br />Currently honing game programming skills.
        </p>
      </div>
    </div>
  );
}