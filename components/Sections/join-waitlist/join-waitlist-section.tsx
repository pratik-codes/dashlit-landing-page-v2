"use client";

import mixpanel from "mixpanel-browser";
import { useState } from "react";

import { SubmitButton } from "../../button";
import { Toast } from "../../toast";

const JoinWaitListSection = () => {
  const [toastData, setToastData] = useState({
    show: false,
    message: "",
    type: "",
  });
  const [email, setEmail] = useState<string>();

  function isValidEmail(email: any): boolean {
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return emailRegex.test(email);
  }

  const updateToastData = (data: any) => {
    setToastData({ ...toastData, ...data });
  };

  const resetToast = () => {
    setTimeout(() => {
      setToastData({
        show: false,
        message: "",
        type: "",
      });
    }, 6000);
  };

  const onClickSubmitHandler = () => {
    if (!email || !isValidEmail(email)) {
      updateToastData({
        show: true,
        message: "Please enter a valid email",
        type: "error",
      });
      resetToast();
      return;
    }
    mixpanel.track("subscribe", {
      email: email,
    });
    updateToastData({
      show: true,
      message: "Thanks for subscribing to Dashlit.",
      type: "success",
    });
    resetToast();
  };

  return (
    <section id="subscribe">
      {toastData.show && (
        <Toast
          type={toastData.type}
          message={toastData.message}
          setIsToastVisible={updateToastData}
        />
      )}
      <section className="mx-auto mt-[20rem] mb-[10rem] animate-fade-in text-center ">
        <div className="text-center text-3xl font-medium">
          Subscribe to get the exclusive chrome extension preview
        </div>
        <div className="text-center text-md  text-grey">
          By subscribing with your mail, you will receive the chrome extension
          and manual to install it in your browser
        </div>
        <div className="flex justify-center space-x-1">
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
            className=" bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-4 mr-2  block w-6/12  rounded-lg border-grey bg-grey-dark p-3 text-md focus:outline-none"
            placeholder="name@email.com"
            required
          />
          <div onClick={onClickSubmitHandler}>
            <SubmitButton
              type="submit"
              onClick={onClickSubmitHandler}
              variant={"primary"}
              size="large"
              className="dark:hover:bg-gray-900 tex-gradient mt-4 ml-1 inline-block items-center rounded-lg bg-transparent-white py-3  px-4 hover:bg-grey dark:hover:text-white"
              aria-current="page"
            >
              Subscribe!
            </SubmitButton>
          </div>
        </div>
      </section>
    </section>
  );
};

export default JoinWaitListSection;
