import styled from "styled-components";
import tw from "tailwind.macro";

const SoupCardStyles = styled.div.attrs({
    className: "w-full h-screen flex flex-col flex-wrap items-center justify-center",
  })`
    & {
        main {
            ${tw`shadow-lg m-6 p-5 w-64 h-auto flex flex-col items-center justify-center rounded-md`}
        }
        div {
            ${tw`w-11/12 flex justify-between items-center border-solid border-b border-t-0 border-r-0 border-l-0 border-gray-600 `}
        }
        p {
            ${tw`text-gray-700 text-sm w-8/12`}
        }
        h2 {
            ${tw`text-xl font-semibold mt-5 text-gray-900`}
        }
        button {
            ${tw`w-8 h-8`}
        }
    }
  `;

  export default SoupCardStyles;