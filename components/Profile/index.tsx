import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import React, { useState } from "react";
import MyTrips from "./MyTrips";
import ProfileDetail from "./ProfileDetail";

const Profile = ({ isOpen, onClose, setType }: any) => {
  const [isActiveId, setIsActiveId] = useState<number>(1);

  return (
    <>
      <Modal
        size={"5xl"}
        isOpen={isOpen}
        onClose={() => {
          onClose();
          setType("");
        }}
        className="p-6 md:p-[80px]"
        scrollBehavior="outside"
        classNames={{
          closeButton:
            "bg-[#E71D36] bg-opacity-10 text-[#E71D36] text-opacity-80 mt-[30px] mr-[30px]",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 font-bold text-xl md:text-2xl">
                Profile Settings
              </ModalHeader>
              <ModalBody className="px-0 py-0">
                <div className="relative w-full h-[80px] rounded-[20px] bg-white shadow-lg flex items-center py-[28px] px-[24px] gap-[24px]">
                  <div
                    className={[
                      "font-semibold text-[16px] w-[120px] md:w-[151px] text-center -mb-[4px] cursor-pointer",
                      isActiveId === 1 ? "text-[#4744FF]" : "text-[#112211]",
                    ].join(" ")}
                    onClick={() => {
                      if (isActiveId !== 1) {
                        setIsActiveId(1);
                      }
                    }}
                  >
                    Profile Details
                    {isActiveId === 1 && (
                      <div className="w-[120px] md:w-[151px] h-[4px] bg-[#4744FF] -bottom-0 absolute" />
                    )}
                  </div>
                  <div className="h-[48px] w-[1px] bg-[#D7E2EE]" />
                  <div
                    className={[
                      "font-semibold text-[16px] w-[120px] md:w-[151px] text-center -mb-[4px] cursor-pointer",
                      isActiveId === 2 ? "text-[#4744FF]" : "text-[#112211]",
                    ].join(" ")}
                    onClick={() => {
                      if (isActiveId !== 2) {
                        setIsActiveId(2);
                      }
                    }}
                  >
                    My Trips
                    {isActiveId === 2 && (
                      <div className="w-[120px] md:w-[151px] h-[4px] bg-[#4744FF] -bottom-0 absolute" />
                    )}
                  </div>
                </div>
                {isActiveId === 1 && <ProfileDetail />}
                {isActiveId === 2 && <MyTrips />}
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  className="bg-[#201CEC1A] bg-opacity-10 text-[#4744FF] font-semibold text-[16px] py-[12px] w-[140px]"
                  onPress={onClose}
                >
                  Cancel
                </Button>
                <Button
                  color="primary"
                  className="font-semibold text-[16px] py-[12px] w-[140px]"
                  onPress={onClose}
                >
                  Save
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default Profile;
