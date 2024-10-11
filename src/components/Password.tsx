import React, { useState } from "react";

interface Props{
  value:string;
}

const Password = () => {
  const correctPassword = "000";
  const [isUnlocked, setIsUnlocked] = useState(false);
  
  


  function login() {

    const passwordInputElement = (document.getElementById("passwordInput") as HTMLInputElement);
    const loginMessageElement = document.getElementById("loginMessage");
    
    const passwordInput = passwordInputElement?.value;

    if (passwordInput === correctPassword) {
      if (loginMessageElement) loginMessageElement.textContent = "Logged in!";
      setIsUnlocked(true);
    } else {
      if (loginMessageElement) loginMessageElement.textContent = "Invalid password.";
    }
    passwordInputElement.value = "";
   
  }

  function lock() {
  
    const passwordInputElement = (document.getElementById("passwordInput") as HTMLInputElement);
    const loginMessageElement = document.getElementById("loginMessage");
    const passwordInput = passwordInputElement?.value;


    if (passwordInput === correctPassword) {
      if (loginMessageElement) loginMessageElement.textContent = "Locked!";
      setIsUnlocked(false);
    } else {
      if (loginMessageElement) loginMessageElement.textContent = "Invalid password.";
    }
    passwordInputElement.value = "";
    
  }

  function apply() {
    const loginMessageElement = document.getElementById("loginMessage");

    if (isUnlocked === true) {
      if (loginMessageElement) loginMessageElement.textContent = "Applyed!";
    }
  

  }



  return (
    <div className="h-full w-full flex flex-row justify-center py-1.5">
      <div id="loginMessage" className="mt-2 ms-2  text-xs text-center min-w-20"></div>
      <div className="flex flex-row w-full justify-center mx-10 items-center gap-2">
        
        <div className="w-fit h-full flex flex-col justify-center">
          Safety Password
        </div>
        
        <div className="border-2 border-gray-400 w-48 h-7 my-2 flex flex-col justify-center">
          <input
            className="h-full w-full"
            type="password"
            id="passwordInput"
           
          />
        </div>
        <div className="w-24 h-full  flex flex-col justify-center items-center">
          <button onClick={login} className={`h-full w-full border-2 ${
            isUnlocked ?  "border-gray-300 text-gray-300": "border-black hover:border-blue-600"
          }`} disabled={isUnlocked}>
            Unlock
          </button>
        </div>
        <div className="w-24 h-full  flex flex-col justify-center items-center">
          <button className={`h-full w-full border-2 ${
            isUnlocked ? "border-black hover:border-blue-600" : "border-gray-300 text-gray-300"
          }`} onClick={lock} disabled={!isUnlocked}>
            Lock 
          </button>
        </div>
      </div>
      <div className="w-24 h-full mx-10 flex flex-col justify-center">
        <button className={`h-full w-full border-2 ${
            isUnlocked ? "border-black hover:border-blue-600" : "border-gray-300 text-gray-300"
          }`} onClick={apply} disabled={!isUnlocked}>
          
          Apply
        </button>
      </div>
      
    </div>
  );
};

export default Password;

