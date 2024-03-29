import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import TableSummarize from "./TableSummarize";
import TicketIcon from "@/components/Icon/TicketIcon";
import { Quicksand } from "next/font/google";
import ModalTicket1 from "./view/ModalTicket1";
type ModalHistoryTypes = {
  round: string;
  winNumber: string;
  time: string;
  match3: number;
  match4: number;
  match5: number;
  matchAll: number;
  prizePot: string;
  ticketAmount: string;
  totalPlayers: string;
  isOpen: boolean;
  onOpenChange: () => void;
  onClose: () => void;
};
const quicksand = Quicksand({ subsets: ["latin"] });
const ModalHistory = ({
  round,
  winNumber,
  time,
  match3,
  match4,
  match5,
  matchAll,
  ticketAmount,
  totalPlayers,
  prizePot,
  isOpen,
  onOpenChange,
  onClose,
}: ModalHistoryTypes) => {
  const {
    isOpen: isOpenView,
    onOpen,
    onOpenChange: onOpenChangeView,
    onClose: onCloseView,
  } = useDisclosure();
  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="5xl"
        hideCloseButton
        className={`${quicksand.className}`}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="pt-8">
                <div className="w-full">
                  <h2 className="text-xl font-semibold">
                    Round <span className="ml-3 text-gradient">#{round}</span>
                  </h2>
                  <div className="flex justify-between mt-1">
                    <h4 className="text-base font-medium py-2">
                      Draw prizes :
                      <span className="font-light text-primary-foreground ml-1">
                        {time}
                      </span>
                    </h4>
                    <div
                      className="my-auto flex text-primary cursor-pointer"
                      onClick={onOpen}
                    >
                      <TicketIcon />
                      <h4 className="text-sm font-light text-primary my-auto mt-0.5 ml-0.5">
                        View ticket
                      </h4>
                    </div>
                  </div>
                </div>
              </ModalHeader>
              <ModalBody>
                <div className="py-6 bg-primary bg-opacity-25 rounded-[20px] flex flex-col items-center justify-center ">
                  <div className="relative bg-[#1E1E1E]  rounded-full px-3.5 py-1   my-5">
                    <h6 className="text-white text-base">Winning Number</h6>
                    <Image
                      src="/Images/crown.png"
                      alt="img-crown"
                      width={25}
                      height={18}
                      className="absolute -top-3 left-[40%]"
                    />
                  </div>
                  <div className="flex gap-5 items-center">
                    {Array.from(winNumber).map((value: any, index: number) => (
                      <div key={index}>
                        <h6 className="absolute text-2xl font-semibold  w-11 h-11 text-white  text-center flex items-center justify-center ">
                          {value}
                        </h6>
                        <Image
                          src="/Images/ball.png"
                          alt="image-ball"
                          width={44}
                          height={44}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between pb-0 my-2">
                  <h6 className="text-sm ">
                    Prize pot :
                    <span className="text-base font-medium text-primary ml-1">
                      $ {prizePot}
                    </span>
                  </h6>
                  <h6 className="text-sm ">
                    Total players :
                    <span className="text-base font-medium text-primary ml-1">
                      {totalPlayers}
                    </span>
                  </h6>
                  <h6 className="text-base font-medium ">
                    Ticket Amount :{" "}
                    <span className="text-sm font-medium text-primary">
                      {ticketAmount}
                    </span>
                  </h6>
                </div>
                <TableSummarize
                  match3={match3}
                  match4={match4}
                  match5={match5}
                  matchAll={matchAll}
                  prizePot={prizePot}
                />
              </ModalBody>
              <ModalFooter className="pb-6 justify-center">
                <Button
                  onClick={onClose}
                  className="bg-[#1E1E1E] text-white w-[148px] font-normal"
                >
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <ModalTicket1
        round={round}
        isOpen={isOpenView}
        onOpenChange={onOpenChangeView}
        onClose={onCloseView}
      />
    </>
  );
};

export default ModalHistory;
