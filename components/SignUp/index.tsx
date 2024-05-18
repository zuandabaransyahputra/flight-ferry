import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
} from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import { MailIcon } from "./MainIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";
import { EyeFilledIcon } from "./EyeFilledIcon";

const SignUp = ({ isOpen, onClose, setType }: any) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [isVisibleConfirm, setIsVisibleConfirm] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  const toggleVisibilityConfirm = () => setIsVisibleConfirm(!isVisibleConfirm);

  return (
    <Modal
      size={"5xl"}
      isOpen={isOpen}
      onClose={() => {
        onClose();
        setType("");
      }}
      className="p-6 lg:px-[80px] lg:py-[100px]"
      scrollBehavior="outside"
      classNames={{
        closeButton:
          "bg-[#E71D36] bg-opacity-10 text-[#E71D36] text-opacity-80 mt-[30px] mr-[30px]",
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalBody className="py-0 px-0">
              <div className="flex flex-col-reverse lg:flex-row gap-[30px] w-full justify-between">
                <div className="flex flex-col gap-[20px]">
                  <div className="flex flex-col gap-[20px] lg:w-[475px]">
                    <h3 className="text-black font-bold text-xl lg:text-2xl">
                      Create an Account 🤝🏻
                    </h3>
                    <p className="text-sm lg:text-[16px] text-[#44424E]">
                      Join our community today and unlock a world of
                      possibilities!
                    </p>
                  </div>
                  <div className="flex flex-col gap-[16px] items-center">
                    <div className="w-[80px] h-[80px] rounded-full">
                      <Image
                        src="https://s3-alpha-sig.figma.com/img/f5f4/2a0b/c99515d5479c3694783485675f112652?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aUKXWTkPjjuvx7UdFI-GHPwap3o3oomcDmj3Q6ato0d95QFUakVIg0BOTADGOF5qChHydOaytI82kW8FMApWJeFF0KcoheKqGirocFPFW~zpvFVBncKmxb-ncHPJoXZpA~jmuheiouBSCpJAfaj8919VbLNP449b33gyrKwoXKoj1LBZex~PxF3HFjocAA9mEKRZqtcaPwB8auBeMhvd0o7RANM0QNdDk-lQFwrlEWJy~z68aHmjgUK3xXbcdzp1L0aXB1Jl4d-OTc6T7o93rRciX2PhF9OUFOMbvvXb-v0Fl81qv5aaGnnV3PExuD5qGu2GOOIsAo5bSATTOe6dYA__"
                        alt="profile"
                        width={80}
                        height={80}
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div className="flex gap-[16px] w-full">
                      <Input
                        type="text"
                        placeholder="First name"
                        className="px-0"
                        startContent={
                          <Image
                            src="/icons/profile.svg"
                            alt="Profile Icon"
                            width={20}
                            height={20}
                          />
                        }
                      />
                      <Input type="text" placeholder="Last name" />
                    </div>
                    <Input
                      type="email"
                      placeholder="Email"
                      startContent={
                        <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                      }
                    />
                    <Input
                      placeholder="Password"
                      startContent={
                        <Image
                          src="/icons/shield-security.svg"
                          alt="Security Icon"
                          width={20}
                          height={20}
                        />
                      }
                      endContent={
                        <button
                          className="focus:outline-none"
                          type="button"
                          onClick={toggleVisibility}
                        >
                          {isVisible ? (
                            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                          ) : (
                            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                          )}
                        </button>
                      }
                      type={isVisible ? "text" : "password"}
                    />
                    <Input
                      placeholder="Confirm Password"
                      startContent={
                        <Image
                          src="/icons/shield-security.svg"
                          alt="Security Icon"
                          width={20}
                          height={20}
                        />
                      }
                      endContent={
                        <button
                          className="focus:outline-none"
                          type="button"
                          onClick={toggleVisibilityConfirm}
                        >
                          {isVisibleConfirm ? (
                            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                          ) : (
                            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                          )}
                        </button>
                      }
                      type={isVisibleConfirm ? "text" : "password"}
                    />
                  </div>
                  <div className="mt-[10px] flex flex-col gap-[16px]">
                    <Button color="primary">Sign Up</Button>
                    <p className="text-sm text-[#474747] text-center">
                      Already Have an Account?{" "}
                      <span className="text-[#1D5CF4] cursor-pointer">
                        Log in
                      </span>
                    </p>
                  </div>
                </div>
                <div className="w-full lg:w-[490px] lg:h-[580px] bg-[#F4F4F4] rounded-[20px] flex items-center justify-center">
                  <Image
                    src="https://s3-alpha-sig.figma.com/img/e0e6/684e/c887b157bae3ecf9e427d858768bdfb4?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q4ivHl5GUQ2BK-~JmHvONx9TvpNJrcfOxkDmQ33gUOKf3P~fIEtfWTVRgl4zQ6pqzerZP0tn1MqnVmNn-o2dZCg0YMFzShOlAQF5cpXGaSCGBB9W4eQjpZs5uR~AAUd5fvBCtA-8ypheebS06pJy~EF829~AlpO-kxxDFfbZHmwcvKeASRbK08vrPbmHzMm61sz5J-2Nrq1JDX9t6Ee51Y8cWREY5B8CnolpTs7YO-mBxkTDmIqF0dqHA0TvQXuSckl0V89n7qTkUf374OY2wi44HmnXlgaVi32WPBgRPmZdNYu9cb~quHuxYipbgGabHEZLmAzg5hKgxcIIecXQ9A__"
                    alt="Sign up Icon"
                    width={384}
                    height={455}
                    className="object-cover"
                  />
                </div>
              </div>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default SignUp;
