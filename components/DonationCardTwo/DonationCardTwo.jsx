import React, { useState } from "react";
import { Button } from "../componentindex";

const DonationCardTwo = ({ titleData, createCampaign }) => {
  const [campaign, setCampaign] = useState({
    title: "",
    description: "",
    amount: "",
    deadline: "",
  });

  const createNewCampaign = async (e) => {
    e.preventDefault();
    try {
      const data = await createCampaign(campaign);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative bg-#1d1e1f text-white p-6 rounded-lg shadow-md">
      <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:py-20">
        <div className="flex flex-col items-center justify-between xl:flex-row">
          <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
            <h2 className="max-w-lg font-sans text-3xl font-bold tracking-tight text-white sm:text-5xl sm:leading-none">
              Tineev <br className="hidden md:block" />
              CrowdFunding
            </h2>
            <p className="max-w-xl mb-4 text-base md:text-lg">
              Create a campaign to raise funds for your business. Fill in the campaign for and submit to list for free
            </p>

            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"
            >
              Learn More
            </a>
          </div>
          <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
            <div className="bg-#364e7c rounded-2xl shadow-2xl border border-blue p-7 sm:p-10">
              <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                Campaign
              </h3>
              <form>
                <div className="mb-1 sm:mb-2">
                  <label htmlFor="FirstName" className="inline-block mb-1 font-medium text-white">
                    Title
                  </label>
                  <input
                    onChange={(e) =>
                      setCampaign({
                        ...campaign,
                        title: e.target.value,
                      })
                    }
                    placeholder="Title"
                    required
                    type="text"
                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-transparent border border-white rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline text-white"
                    id="title"
                    name="title"
                  />
                </div>
                <div className="mb-1 sm:mb-2">
                  <label htmlFor="Description" className="inline-block mb-1 font-medium text-white">
                    Description
                  </label>
                  <input
                    onChange={(e) =>
                      setCampaign({
                        ...campaign,
                        description: e.target.value,
                      })
                    }
                    placeholder="Description"
                    required
                    type="text"
                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-transparent border border-white rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline text-white"
                    id="description"
                    name="description"
                  />
                </div>
                <div className="mb-1 sm:mb-2">
                  <label htmlFor="amount" className="inline-block mb-1 font-medium text-white">
                    Target Amount
                  </label>
                  <input
                    onChange={(e) =>
                      setCampaign({
                        ...campaign,
                        amount: e.target.value,
                      })
                    }
                    placeholder="Amount"
                    required
                    type="text"
                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-transparent border border-white rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline text-white"
                    id="amount"
                    name="amount"
                  />
                </div>
                <div className="mb-1 sm:mb-2">
                  <label htmlFor="deadline" className="inline-block mb-1 font-medium text-white">
                    Deadline
                  </label>
                  <input
                    onChange={(e) =>
                      setCampaign({
                        ...campaign,
                        deadline: e.target.value,
                      })
                    }
                    placeholder="Date"
                    required
                    type="date"
                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-transparent border border-white rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline text-white"
                    id="deadline"
                    name="deadline"
                  />
                </div>
                <div className="mt-4 mb-2 sm:mb-4">
                  <button
                    onClick={(e) => createNewCampaign(e)}
                    type="submit"
                    className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-blue-500 rounded-2xl shadow-md hover:bg-blue-700 focus:shadow-outline focus:outline-none"
                  >
                    Create Campaign
                  </button>
                </div>
                <p className="text-xl sm:text-sm">
                  Create your campaign to raise funds
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationCardTwo;
