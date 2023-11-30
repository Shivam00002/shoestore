import { Shoe } from "@/types/shoes";
import { useState } from "react";
import { Button } from "./ui/button";

type Props = {
  name:string,
  img:string,
  price:number,
  quantity:number
};

export const Checkout = ({ item }:{item:Shoe[]}) => {
  const [isLoading, setIsLoading] = useState(false);
  console.log(item)

  const handleClick = async () => {
    setIsLoading(true);


    try {
      const response = await fetch("/api/checkout_sessions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: item,
        }),
      });

      const { url } = await response.json();
      window.location = url;
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false)
  };
  return (
    <Button onClick={handleClick} variant="default" className="w-full">
    {isLoading?"Loading...":"Checkout"}
  </Button>
    
  )
};




