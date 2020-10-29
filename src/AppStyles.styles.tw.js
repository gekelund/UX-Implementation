import styled from "styled-components";
import tw from "tailwind.macro";

const AppStyles = styled.div.attrs({
  className: "w-full h-auto bg-gray-200"
})`
  & {
    h1 {
      ${tw`font-sans text-2xl font-normal text-gray-900`}
    }
    p {
      ${tw`text-gray-700 text-lg`}
    }
    h2 {
      ${tw`font-sans text-xl font-semibold text-2xl text-gray-900`}
    }
    ul {
      ${tw`inline-flex`}
    }
    li {
      ${tw`mr-5`}
    }
   
  }
`;
export default AppStyles;

