import SignOutButton from "../Components/SignOutButton";
import styled from "styled-components";

const Home = props =>(
    <div >
      <Description>
          {props.currentUser
            ? `The current logged in user is: ${props.currentUser}.`
            : "No user is currently logged in."}
        </Description>
        <SignOutButton  />
    </div>
  )



const Description = styled.h2`
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 48px;
color: #000;
text-align: center;
`;

  
  export default Home;