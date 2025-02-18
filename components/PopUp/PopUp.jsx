import React, { useState, useEffect } from "react";

const PopUp = ({ setOpenModel, getDonations, donate, donateFunction }) => {
  const [amount, setAmount] = useState("");
  const [allDonationData, setAllDonationData] = useState([]);

  const createDonation = async () => {
    try {
      const data = await donateFunction(donate.pId, amount);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchDonations = async () => {
      const donationsListData = await getDonations(donate.pId);
      setAllDonationData(donationsListData);
    };
    fetchDonations();
  }, [donate.pId, getDonations]);

  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-#1d1e1f bg-opacity-75">
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        {/* Content */}
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-800 outline-none focus:outline-none text-white">
          <div className="flex items-start justify-between p-5 border-b border-solid border-gray-700 rounded-t">
            <h3 className="text-3xl font-semibold">{donate.title}</h3>
            <button
              className="p-1 ml-auto bg-transparent border-0 text-white float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={() => setOpenModel(false)}
            >
              <span className="bg-transparent text-white h-6 w-6 text-2xl block outline-none focus:outline-none">
                x
              </span>
            </button>
          </div>
          <div className="relative p-6 flex-auto">
            <p className="my-4 text-gray-300 text-lg leading-relaxed">
              {donate.description}
            </p>
            <input
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Amount"
              required
              type="text"
              className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-transparent border border-black rounded shadow-sm appearance-none focus:border-blue-500 focus:outline-none focus:shadow-outline text-white"
              name="amount"
              id="amount"
            />
            {allDonationData?.map((donation, i) => (
              <p key={i} className="my-4 text-gray-300 text-lg leading-relaxed">
                {i + 1}: {donation.donation}{" "}
                {donation.donator.slice(0, 35)}
              </p>
            ))}
          </div>
          <div className="flex items-center justify-end p-6 border-t border-solid border-gray-700 rounded-b">
            <button
              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => setOpenModel(false)}
            >
              Close
            </button>
            <button
              className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded-2xl shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={createDonation}
            >
              Donate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
