import EmailIcon from "../_Icons/EmailIcon";
import MovieZWhiteIcon from "../_Icons/MovieZWhiteIcon";
import PhoneIcon from "../_Icons/PhoneIcon";

export const Footer = () => {
  return (
    <div className="pt-[52px]">
      <div className="w-screen h-[280px] bg-[#4338CA] flex justify-center">
        <div className="w-[1440px] h-[280px] py-[40px] flex justify-center items-center">
          <div className=" flex gap-[120px] justify-between w-[1280px] h-[200px]">
            <div className="flex flex-col gap-3">
              <div className="flex gap-2  items-center text-[#FAFAFA] text-sm italic font-bold leading-[20px] tracking-[0.32px]">
                <MovieZWhiteIcon />
                Movie Z
              </div>
              <div className="text-[#FAFAFA] text-sm font-normal leading-[20px]">
                © 2025 Movie Z. All Rights Reserved.
              </div>
            </div>
            <div className="flex gap-[96px]">
              <div className="flex flex-col gap-3">
                <p className="text-[#FAFAFA] text-sm font-normal leading-[20px]">
                  Contact Information
                </p>
                <div className="flex flex-col gap-6">
                  <div className="flex gap-3  items-center">
                    <EmailIcon />
                    <div>
                      <p className="text-[#FAFAFA] text-sm font-normal leading-[20px]">
                        Email:
                      </p>
                      <p className="text-[#FAFAFA] text-sm font-normal leading-[20px]">
                        support@movieZ.com
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-center">
                    <PhoneIcon />
                    <div>
                      <p className="text-[#FAFAFA] text-sm font-normal leading-[20px]">
                        Phone:
                      </p>
                      <p className="text-[#FAFAFA] text-sm font-normal leading-[20px]">
                        +976 (11) 123-4567
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-[#FAFAFA] text-sm font-normal leading-[20px] flex flex-col gap-3">
                <p>Follow us</p>
                <div className="flex gap-3">
                  <a>Facebook</a>
                  <a>Instagram</a>
                  <a>Twitter</a>
                  <a>Youtube</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
