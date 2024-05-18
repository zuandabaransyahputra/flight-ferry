import Image from "next/image";
import React from "react";

const MyTrips = () => {
  return (
    <div className="mt-[30px] flex flex-col gap-[19px] items-center">
      <div className="flex flex-col items-center gap-[24px]">
        <div className="w-[113px] h-[110px] rounded-full">
          <Image
            src={
              "https://s3-alpha-sig.figma.com/img/f5f4/2a0b/c99515d5479c3694783485675f112652?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aUKXWTkPjjuvx7UdFI-GHPwap3o3oomcDmj3Q6ato0d95QFUakVIg0BOTADGOF5qChHydOaytI82kW8FMApWJeFF0KcoheKqGirocFPFW~zpvFVBncKmxb-ncHPJoXZpA~jmuheiouBSCpJAfaj8919VbLNP449b33gyrKwoXKoj1LBZex~PxF3HFjocAA9mEKRZqtcaPwB8auBeMhvd0o7RANM0QNdDk-lQFwrlEWJy~z68aHmjgUK3xXbcdzp1L0aXB1Jl4d-OTc6T7o93rRciX2PhF9OUFOMbvvXb-v0Fl81qv5aaGnnV3PExuD5qGu2GOOIsAo5bSATTOe6dYA__"
            }
            alt="Profile"
            width={113}
            height={110}
            className="object-cover rounded-full"
          />
        </div>
        <div className="flex flex-col gap-[8px] items-center">
          <h3 className="font-semibold text-2xl text-[#112211]">John Doe</h3>
          <p className="text-[#112211] text-[16px]">john.doe@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default MyTrips;
