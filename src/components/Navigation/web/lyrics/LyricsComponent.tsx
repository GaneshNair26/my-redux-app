import React, { FunctionComponent } from "react";

interface Props {
  lyrics?: string;
  isLoading?: boolean;
  error?: Error | any;
}



export default (props: Props) => {
  const { lyrics, isLoading, error } = props;
  if (error) {
        console.log("error: ", error);
        return <div>{error}</div>;
      }
    
      if (isLoading) {
        return <div>{"Loading.."}</div>;
      }
    
      return <div>{lyrics}</div>;
    };
    

