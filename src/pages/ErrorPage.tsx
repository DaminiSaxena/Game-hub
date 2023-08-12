import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { Navbar } from "../components/NavBar/Navbar";
import { Heading, Text } from "@chakra-ui/react";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <Navbar />
      <Heading> Oops...</Heading>
      <Text>
        {isRouteErrorResponse(error) ? "Invalid Page" : "Unexpected Error"}
      </Text>
    </>
  );
};

export default ErrorPage;
