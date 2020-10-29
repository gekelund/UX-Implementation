import React from 'react';
import GoogleSignUp from '../../Components/GoogleSignUp';
import styled from "styled-components";
import tw from "tailwind.macro";




const SignInStyling = styled.div.attrs({
    className: "w-full h-screen flex flex-column justify-center pt-32 text-center",
  })`
    & {
        h1 {
            ${tw`border-b-2 pb-10`}
        }
        h5 {
            ${tw`mt-16 mb-6`}
        }
        h2 {
            ${tw`pt-4`}
        }
      
        
    }
  `;

const SignInPage = () => {

    return (
        <SignInStyling>
            <div>
                <h1>Logga in</h1>
                <h2>Logga in med google och få en soppa GRATIS <br />vid köp av 3 eller fler soppor</h2>
                <h5>Anslut med</h5>
                <GoogleSignUp />
            </div>
        </SignInStyling>
    )
}

export default SignInPage;